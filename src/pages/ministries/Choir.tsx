import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Choir() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("ministries.choirTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("ministries.choirTitle")}</h1>
          <p>{t("ministries.choirDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="card">
              <h2
                style={{ marginBottom: "var(--space-md)", fontSize: "1.3rem" }}
              >
                {t("ministries.choirAboutTitle")}
              </h2>
              <p style={{ margin: 0 }}>{t("ministries.choirAboutText")}</p>
            </div>
            <div className="card">
              <h2
                style={{ marginBottom: "var(--space-md)", fontSize: "1.3rem" }}
              >
                {t("ministries.rehearsalTitle")}
              </h2>
              <p style={{ margin: 0 }}>{t("ministries.rehearsalSchedule")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--gray">
        <div className="container">
          <h2
            className="section__title"
            style={{ marginBottom: "var(--space-md)" }}
          >
            {t("ministries.joinChoir")}
          </h2>
          <p>{t("ministries.joinChoirText")}</p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-sm)",
              marginTop: "var(--space-lg)",
              flexWrap: "wrap",
            }}
          >
            <Link to="/support/donations" className="btn btn--primary">
              {t("ministries.donateButton")}
            </Link>
            <Link to="/contact/form" className="btn btn--outline">
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
