import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

interface Album {
  id: string;
  titleEn: string;
  titleRu: string;
  dateEn: string;
  dateRu: string;
  photos: string[];
}

function toThumb(src: string): string {
  return src.replace(/(\.[a-z]+)$/i, "_thumb$1");
}

const ALBUMS: Album[] = [
  {
    id: "bishop-vasily-visit-2025",
    titleEn: "Visit of His Grace Bishop Vasily",
    titleRu: "Визит Преосвященнейшего Епископа Василия",
    dateEn: "October 2025",
    dateRu: "Октябрь 2025",
    photos: Array.from({ length: 16 }, (_, i) => `/gallery/bishop_vasily_visit_10_2025_${i + 1}.jpg`),
  },
  {
    id: "pan-orthodox-vespers-2024",
    titleEn: "Pan-Orthodox Vespers",
    titleRu: "Всеправославная Вечерня",
    dateEn: "March 2024",
    dateRu: "Март 2024",
    photos: Array.from({ length: 19 }, (_, i) => `/gallery/pan_orthodox_vespers_march_2024_${i + 1}.jpg`),
  },
];

export default function Gallery() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";
  const [lightbox, setLightbox] = useState<{ photos: string[]; idx: number } | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    document.title = `${lang === "ru" ? "Фотогалерея" : "Photo Gallery"} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [lang]);

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
          <h1>{lang === "ru" ? "Фотогалерея" : "Photo Gallery"}</h1>
          <p>{lang === "ru" ? "Фотохроника жизни прихода" : "A photographic chronicle of parish life"}</p>
        </div>
      </div>

      {ALBUMS.map((album) => (
        <div key={album.id} className="section">
          <div className="container">
            <h2 style={{ fontSize: "1.3rem", marginBottom: "0.25rem" }}>
              {lang === "ru" ? album.titleRu : album.titleEn}
            </h2>
            <p style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "var(--space-md)",
            }}>
              {lang === "ru" ? album.dateRu : album.dateEn}
            </p>

            {album.photos.length === 0 ? (
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                {lang === "ru" ? "Фотографии скоро появятся." : "Photos coming soon."}
              </p>
            ) : (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "var(--space-sm)",
              }}>
                {album.photos.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox({ photos: album.photos, idx })}
                    style={{
                      padding: 0,
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      borderRadius: "6px",
                      overflow: "hidden",
                      aspectRatio: "4/3",
                    }}
                    aria-label={`Photo ${idx + 1}`}
                  >
                    <img
                      src={toThumb(src)}
                      alt=""
                      loading="lazy"
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
          </div>
        </div>
      ))}

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

          <p style={{
            position: "absolute",
            bottom: "1rem",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.85rem",
          }}>
            {lightbox.idx + 1} / {lightbox.photos.length}
          </p>
        </div>
      )}
    </>
  );
}
