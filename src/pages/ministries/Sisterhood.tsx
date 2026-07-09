import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MINISTRIES_KEYS = [
  "ministries.sisterM1",
  "ministries.sisterM2",
  "ministries.sisterM3",
  "ministries.sisterM4",
  "ministries.sisterM5",
];

export default function Sisterhood() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("ministries.sisterTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("ministries.sisterTitle")}</h1>
          <p>{t("ministries.sisterDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="card">
              <h2
                style={{ marginBottom: "var(--space-md)", fontSize: "1.3rem" }}
              >
                {t("ministries.sisterMinistriesTitle")}
              </h2>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {MINISTRIES_KEYS.map((key) => (
                  <li
                    key={key}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
              }}
            >
              <div className="card">
                <h2
                  style={{
                    marginBottom: "var(--space-md)",
                    fontSize: "1.3rem",
                  }}
                >
                  {t("ministries.sisterJoinTitle")}
                </h2>
                <p style={{ margin: 0 }}>{t("ministries.sisterJoinText")}</p>
              </div>
              <div
                className="card"
                style={{ background: "var(--color-accent-light)" }}
              >
                <h3 style={{ marginBottom: "var(--space-sm)" }}>
                  {t("ministries.donateTitle")}
                </h3>
                <p style={{ marginBottom: "var(--space-md)" }}>
                  {t("ministries.donateText")}
                </p>
                <Link to="/support/donations" className="btn btn--primary">
                  {t("ministries.donateButton")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
