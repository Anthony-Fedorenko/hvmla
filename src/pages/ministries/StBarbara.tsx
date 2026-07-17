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
          <div className="grid-2" style={{ alignItems: "start" }}>
            <img
              src="/st_barbara.jpg"
              alt="St. Barbara Little Sisterhood"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <div>
              <p style={{ fontSize: "1.05rem", marginBottom: "var(--space-lg)" }}>
                {t("ministries.barbaraDesc")}
              </p>
              <Link to="/support/donations" className="btn btn--primary">
                {t("ministries.donateButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
