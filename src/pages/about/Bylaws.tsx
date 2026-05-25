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
          <div className="card" style={{ maxWidth: "600px" }}>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--color-text-secondary)",
              }}
            >
              {t("bylaws.bylawsWip")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
