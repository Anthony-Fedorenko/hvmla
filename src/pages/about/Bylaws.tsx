import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Bylaws() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("bylaws.bylawsTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("bylaws.bylawsTitle")}</h1>
          <p>{t("bylaws.bylawsSubtitle")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: "680px" }}>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {t("bylaws.bylawsDesc")}
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--color-text-secondary)",
                marginBottom: "1.75rem",
                fontStyle: "italic",
              }}
            >
              {t("bylaws.bylawsAdopted")}
            </p>
            <a
              href="/bylaws_hvm_2022%20copy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn btn--primary"
            >
              {t("bylaws.bylawsDownload")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
