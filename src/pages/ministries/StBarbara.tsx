import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function StBarbara() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("ministries.barbaraTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("ministries.barbaraTitle")}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <p style={{ fontSize: "1.05rem", maxWidth: "780px", marginBottom: "var(--space-lg)" }}>
            {t("ministries.barbaraDesc")}
          </p>
          <Link to="/support/donations" className="btn btn--primary">
            {t("ministries.donateButton")}
          </Link>
        </div>
      </div>
    </>
  );
}
