import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import YouTubeEmbed from "../../components/YouTubeEmbed";

const ARCHIVE_VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    titleEn: "Palm Sunday Divine Liturgy – March 28, 2026",
    titleRu: "Вербное Воскресенье — Литургия 28 марта 2026",
  },
  {
    id: "dQw4w9WgXcQ",
    titleEn: "Sunday Divine Liturgy – March 21, 2026",
    titleRu: "Воскресная Литургия 21 марта 2026",
  },
  {
    id: "dQw4w9WgXcQ",
    titleEn: "Forgiveness Sunday – March 14, 2026",
    titleRu: "Прощёное Воскресенье — 14 марта 2026",
  },
];

export default function StreamArchive() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("services.archiveTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("services.archiveTitle")}</h1>
          <p>{t("services.archiveDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-xl)",
            }}
          >
            {ARCHIVE_VIDEOS.map((v, idx) => (
              <div key={idx}>
                <h3 style={{ marginBottom: "var(--space-md)" }}>
                  {lang === "ru" ? v.titleRu : v.titleEn}
                </h3>
                <YouTubeEmbed
                  videoId={v.id}
                  title={lang === "ru" ? v.titleRu : v.titleEn}
                />
              </div>
            ))}
          </div>

          <a
            href="https://www.youtube.com/@hvmcathedral100/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            style={{ marginTop: "var(--space-xl)" }}
          >
            {t("common.viewAll")} — YouTube
          </a>
        </div>
      </div>
    </>
  );
}
