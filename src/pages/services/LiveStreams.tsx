import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import YouTubeEmbed from "../../components/YouTubeEmbed";

// Replace with the actual channel's live stream video ID when available
const LIVE_VIDEO_ID = "LdCkHIR6UyE";

export default function LiveStreams() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("services.liveTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("services.liveTitle")}</h1>
          <p>{t("services.liveDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <YouTubeEmbed videoId={LIVE_VIDEO_ID} title="Live Divine Liturgy" />
          <p
            style={{
              marginTop: "var(--space-md)",
              color: "var(--color-text-muted)",
              fontSize: "0.9rem",
            }}
          >
            {t("services.noStream")}
          </p>
          <a
            href="https://www.youtube.com/@hvmcathedral100/live"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: "var(--space-lg)" }}
          >
            {t("services.liveButton")}
          </a>
        </div>
      </div>
    </>
  );
}
