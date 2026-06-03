import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ACTIVITIES_KEYS = [
  "ministries.lovesA1",
  "ministries.lovesA2",
  "ministries.lovesA3",
  "ministries.lovesA4",
  "ministries.lovesA5",
];

export default function LOVES() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("ministries.lovesTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("ministries.lovesTitle")}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "1.05rem" }}>{t("ministries.lovesDesc")}</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: "var(--space-md)" }}>
                {t("ministries.lovesActivities")}
              </h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {ACTIVITIES_KEYS.map((key) => (
                  <li
                    key={key}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    <span
                      style={{ color: "var(--color-accent)", flexShrink: 0 }}
                    >
                      ✦
                    </span>
                    {t(key)}
                  </li>
                ))}
              </ul>
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
            {t("ministries.donateTitle")}
          </h2>
          <p>{t("ministries.donateText")}</p>
          <Link
            to="/support/donations"
            className="btn btn--primary"
            style={{ marginTop: "var(--space-md)" }}
          >
            {t("ministries.donateButton")}
          </Link>
        </div>
      </div>
    </>
  );
}
