import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { newsItems } from "../../data/news";

export default function NewsPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";
  const [lightbox, setLightbox] = useState<{ photos: string[]; idx: number } | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    document.title = `${t("news.newsTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft")
        setLightbox((lb) => lb && lb.idx > 0 ? { ...lb, idx: lb.idx - 1 } : lb);
      if (e.key === "ArrowRight")
        setLightbox((lb) => lb && lb.idx < lb.photos.length - 1 ? { ...lb, idx: lb.idx + 1 } : lb);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox]);

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
            {newsItems.map((item) => {
              const title = lang === "ru" ? item.titleRu : item.titleEn;
              const summary = lang === "ru" ? item.summaryRu : item.summaryEn;
              const bodyParagraphs = (lang === "ru" ? item.bodyRu : item.bodyEn).split("\n\n");

              return (
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
                  <h2 style={{ fontSize: "1.25rem", marginBottom: "var(--space-sm)" }}>
                    {title}
                  </h2>
                  <p style={{ marginBottom: "var(--space-sm)" }}>{summary}</p>
                  {bodyParagraphs.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--color-text-secondary)",
                        marginBottom: i < bodyParagraphs.length - 1 ? "var(--space-sm)" : 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  {item.photos && item.photos.length > 0 && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "var(--space-sm)",
                        marginTop: "var(--space-md)",
                      }}
                    >
                      {item.photos.map((src, idx) => (
                        <button
                          key={idx}
                          onClick={() => setLightbox({ photos: item.photos!, idx })}
                          style={{
                            padding: 0,
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            borderRadius: "6px",
                            overflow: "hidden",
                            aspectRatio: "1",
                          }}
                          aria-label={`Photo ${idx + 1}`}
                        >
                          <img
                            src={src}
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                              transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
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

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
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
            onClick={closeLightbox}
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

          {lightbox.idx > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lb) => lb ? { ...lb, idx: lb.idx - 1 } : lb); }}
              aria-label="Previous"
              style={{
                position: "absolute",
                left: "1rem",
                background: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#fff",
                fontSize: "2rem",
                cursor: "pointer",
                borderRadius: "50%",
                width: "2.75rem",
                height: "2.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ‹
            </button>
          )}

          <img
            src={lightbox.photos[lightbox.idx]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(90vw, 1100px)",
              maxHeight: "88vh",
              objectFit: "contain",
              borderRadius: "4px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            }}
          />

          {lightbox.idx < lightbox.photos.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lb) => lb ? { ...lb, idx: lb.idx + 1 } : lb); }}
              aria-label="Next"
              style={{
                position: "absolute",
                right: "1rem",
                background: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#fff",
                fontSize: "2rem",
                cursor: "pointer",
                borderRadius: "50%",
                width: "2.75rem",
                height: "2.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ›
            </button>
          )}

          <p
            style={{
              position: "absolute",
              bottom: "1rem",
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.85rem",
            }}
          >
            {lightbox.idx + 1} / {lightbox.photos.length}
          </p>
        </div>
      )}
    </>
  );
}
