import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CatechismSchool() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("ministries.catTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("ministries.catTitle")}</h1>
          <p>{t("ministries.catDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="card">
              <h2
                style={{ marginBottom: "var(--space-md)", fontSize: "1.3rem" }}
              >
                {t("ministries.catScheduleTitle")}
              </h2>
              <p style={{ margin: 0 }}>{t("ministries.catScheduleText")}</p>
            </div>
            <div className="card">
              <h2
                style={{ marginBottom: "var(--space-md)", fontSize: "1.3rem" }}
              >
                {t("ministries.catContactTitle")}
              </h2>
              <p style={{ marginBottom: "var(--space-md)" }}>
                {t("ministries.catContactText")}
              </p>
              <Link to="/contact/form" className="btn btn--outline">
                {t("common.contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
