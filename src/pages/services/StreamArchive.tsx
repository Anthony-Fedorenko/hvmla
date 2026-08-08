import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import YouTubeEmbed from "../../components/YouTubeEmbed";

const ARCHIVE_VIDEOS = [
  {
    id: "LdCkHIR6UyE",
    titleEn: "Sunday Divine Liturgy 10 AM — August 9",
    titleRu: "Воскресная Литургия 10:00 — 9 августа",
  },
  {
    id: "pjiMT22zefw",
    titleEn: "Vigil 5 PM — August 8",
    titleRu: "Всенощное Бдение 17:00 — 8 августа",
  },
  {
    id: "NAlaFBbXeZQ",
    titleEn: "Divine Liturgy 10 AM — August 6",
    titleRu: "Литургия 10:00 — 6 августа",
  },
  {
    id: "spq6j_520k0",
    titleEn: "Vespers 7 PM — August 5",
    titleRu: "Вечерня 19:00 — 5 августа",
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
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
            {ARCHIVE_VIDEOS.map((v) => (
              <div key={v.id}>
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
