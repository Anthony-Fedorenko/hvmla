import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { newsItems } from "../../data/announcements";

export default function NewsPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("news.newsTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("news.newsTitle")}</h1>
          <p>{t("news.newsSubtitle")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-lg)",
              maxWidth: "800px",
            }}
          >
            {newsItems.map((item) => (
              <article key={item.id} className="card">
                <p
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    marginBottom: "0.5rem",
                    maxWidth: "none",
                  }}
                >
                  {t("news.postedOn")} {item.date}
                </p>
                <h2
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {lang === "ru" ? item.titleRu : item.titleEn}
                </h2>
                <p style={{ marginBottom: "var(--space-md)" }}>
                  {lang === "ru" ? item.summaryRu : item.summaryEn}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    margin: 0,
                  }}
                >
                  {lang === "ru" ? item.bodyRu : item.bodyEn}
                </p>
              </article>
            ))}
          </div>

          <Link
            to="/news/announcements"
            className="btn btn--outline"
            style={{ marginTop: "var(--space-xl)" }}
          >
            {t("nav.announcements")}
          </Link>
        </div>
      </div>
    </>
  );
}
