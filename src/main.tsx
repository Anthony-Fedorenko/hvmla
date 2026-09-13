import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./styles/global.css";
import App from "./App";

const rootEl = document.getElementById("root")!;

// The production build is prerendered per-route (see scripts/prerender.mjs)
// so crawlers (incl. the Google Ad Grants review) get real HTML instead of
// an empty shell. When that prerendered markup is present, hydrate it
// instead of wiping it out with a fresh client render.
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootEl,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
