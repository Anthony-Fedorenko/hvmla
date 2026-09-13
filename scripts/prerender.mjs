// Post-build prerender step for Google Ad Grants / crawler compliance.
//
// The production build is a client-rendered SPA: the shipped index.html is
// just `<div id="root"></div>` with a script tag. Crawlers that don't run
// JS (incl. the automated Ad Grants website-policy check) see an empty
// page with no content, mission description, or navigation.
//
// This script boots a static server over `dist/`, drives a real headless
// Chromium (Puppeteer) to every route, and writes the fully-rendered DOM
// back to disk as `dist/<route>/index.html`. `src/main.tsx` then hydrates
// that markup on the client instead of re-rendering from scratch.
//
// Routes are discovered from the same source files the app itself uses
// (`src/router/index.tsx`, `src/data/icons.ts`), so there is one source of
// truth — no route list to keep in sync by hand.

import fs from "node:fs/promises";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const siteOrigin = "https://hvmla.org";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

async function extractPaths(filePath, { skipDynamic = true } = {}) {
  const src = await fs.readFile(filePath, "utf8");
  const matches = [...src.matchAll(/path:\s*"([^"]*)"/g)].map((m) => m[1]);
  return matches.filter((p) => {
    if (p === "*") return false;
    if (skipDynamic && p.includes(":")) return false;
    return true;
  });
}

async function getRoutes() {
  const routerPaths = (
    await extractPaths(path.join(root, "src/router/index.tsx"))
  ).filter((p) => p !== "" && p !== "/");
  const iconPaths = await extractPaths(path.join(root, "src/data/icons.ts"));

  const routes = new Set(["/", ...routerPaths.map((p) => `/${p}`), ...iconPaths.map((p) => `/${p}`)]);
  return [...routes];
}

function outputFileForRoute(routePath) {
  if (routePath === "/") return path.join(distDir, "index.html");
  const clean = routePath.replace(/^\//, "").replace(/\/$/, "");
  return path.join(distDir, clean, "index.html");
}

async function startStaticServer(fallbackHtml) {
  const server = http.createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split("?")[0]);
      const filePath = path.join(distDir, urlPath);
      const ext = path.extname(filePath);

      if (ext && filePath.startsWith(distDir)) {
        try {
          const data = await fs.readFile(filePath);
          res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
          res.end(data);
          return;
        } catch {
          // fall through to SPA fallback below
        }
      }

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(fallbackHtml);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  return { server, port };
}

async function main() {
  // Vercel's build container is missing the shared libraries Puppeteer's
  // bundled Chromium needs to launch (libnspr4.so and friends), and it
  // isn't worth chasing — Vercel here is only a dev/staging preview
  // (see CMS_HOSTING_PLAN.md), not the site Google Ad Grants reviews.
  // The real prerendered build is the one produced locally / by the
  // SiteGround deploy pipeline. Skip cleanly so the Vercel build still
  // succeeds and serves the (un-prerendered) SPA shell as before.
  if (process.env.VERCEL) {
    console.log("[prerender] skipping on Vercel (staging preview, not the Ad Grants target site)");
    return;
  }

  const fallbackHtml = await fs.readFile(path.join(distDir, "index.html"), "utf8");
  const routes = await getRoutes();

  console.log(`[prerender] discovered ${routes.length} routes`);

  const { server, port } = await startStaticServer(fallbackHtml);
  const baseUrl = `http://127.0.0.1:${port}`;

  const browser = await puppeteer.launch({ headless: true });

  try {
    for (const routePath of routes) {
      const page = await browser.newPage();
      try {
        await page.goto(`${baseUrl}${routePath}`, { waitUntil: "networkidle0", timeout: 30000 });
        // Let React Router settle and any useEffect-driven document.title
        // updates fire before we snapshot the DOM.
        await new Promise((r) => setTimeout(r, 150));

        const html = await page.evaluate(() => "<!doctype html>\n" + document.documentElement.outerHTML);

        const outFile = outputFileForRoute(routePath);
        await fs.mkdir(path.dirname(outFile), { recursive: true });
        await fs.writeFile(outFile, html);
        console.log(`[prerender] ✓ ${routePath}`);
      } catch (err) {
        console.error(`[prerender] ✗ ${routePath}:`, err.message);
      } finally {
        await page.close();
      }
    }

    // A real 404 document, prerendered from the app's own NotFound page,
    // for the host (.htaccess) to serve on genuinely unknown paths.
    const notFoundPage = await browser.newPage();
    // Two path segments so it falls through the single-segment `:legacyId`
    // (legacy QR icon) route and actually hits the generic `*` NotFound route.
    await notFoundPage.goto(`${baseUrl}/__prerender/404-check__`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });
    await new Promise((r) => setTimeout(r, 150));
    const notFoundHtml = await notFoundPage.evaluate(
      () => "<!doctype html>\n" + document.documentElement.outerHTML,
    );
    await fs.writeFile(path.join(distDir, "404.html"), notFoundHtml);
    await notFoundPage.close();
  } finally {
    await browser.close();
    server.close();
  }

  await writeSitemap(routes);
  console.log("[prerender] done");
}

async function writeSitemap(routes) {
  const urls = routes
    .map((routePath) => {
      const loc = routePath === "/" ? `${siteOrigin}/` : `${siteOrigin}${routePath}`;
      return `  <url><loc>${loc}</loc></url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await fs.writeFile(path.join(distDir, "sitemap.xml"), xml);
  console.log(`[prerender] wrote sitemap.xml (${routes.length} urls)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
