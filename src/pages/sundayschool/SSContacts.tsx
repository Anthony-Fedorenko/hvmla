import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SSContacts() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("sundaySchool.contactTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("sundaySchool.contactTitle")}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: "600px" }}>
            <p style={{ marginBottom: "var(--space-lg)" }}>
              {t("sundaySchool.contactText")}
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-sm)",
                flexWrap: "wrap",
              }}
            >
              <Link to="/contact/form" className="btn btn--primary">
                {t("common.contact")}
              </Link>
              <Link to="/contact/info" className="btn btn--outline">
                {t("nav.contactInfo")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
