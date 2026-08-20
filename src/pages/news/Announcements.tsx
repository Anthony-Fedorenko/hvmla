import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { announcements } from "../../data/announcements";

export default function Announcements() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

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
                <p style={{ margin: a.image ? "0 0 var(--space-md)" : 0 }}>
                  {lang === "ru" ? a.bodyRu : a.bodyEn}
                </p>
                {a.image && (
                  <button
                    onClick={() => setLightboxSrc(a.image!)}
                    style={{
                      padding: 0,
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      borderRadius: "4px",
                      overflow: "hidden",
                      display: "block",
                      maxWidth: "320px",
                    }}
                    aria-label="View flyer"
                  >
                    <img
                      src={a.image}
                      alt=""
                      loading="lazy"
                      style={{
                        width: "100%",
                        display: "block",
                        border: "1px solid var(--color-border)",
                        boxShadow: "var(--shadow-sm)",
                      }}
                    />
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      {lightboxSrc && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxSrc(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1.25rem",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2rem",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
          <img
            src={lightboxSrc}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(90vw, 700px)",
              maxHeight: "88vh",
              objectFit: "contain",
              borderRadius: "4px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      )}
    </>
  );
}
