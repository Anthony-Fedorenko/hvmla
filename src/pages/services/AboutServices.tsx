import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AboutServices() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("services.aboutTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("services.aboutTitle")}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ maxWidth: "72ch" }}>
            <p style={{ fontSize: "1.05rem" }}>{t("services.aboutP1")}</p>
            <p style={{ fontSize: "1.05rem" }}>{t("services.aboutP2")}</p>
            <p style={{ fontSize: "1.05rem" }}>{t("services.aboutP3")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
