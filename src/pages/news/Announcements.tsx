import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { announcements } from "../../data/announcements";

export default function Announcements() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("news.announcementsTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("news.announcementsTitle")}</h1>
          <p>{t("news.announcementsSubtitle")}</p>
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
            {announcements.length === 0 && (
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                {t("news.noAnnouncements")}
              </p>
            )}
            {announcements.map((a) => (
              <article
                key={a.id}
                className="card"
                style={{
                  borderLeft: "4px solid var(--color-accent)",
                  borderRadius: "0 6px 6px 0",
                  paddingLeft: "var(--space-lg)",
                }}
              >
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
                  {t("news.postedOn")} {a.date}
                </p>
                <h2
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {lang === "ru" ? a.titleRu : a.titleEn}
                </h2>
                <p style={{ margin: 0 }}>
                  {lang === "ru" ? a.bodyRu : a.bodyEn}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
