import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const EXHIBIT_KEYS = ["cafe.e1", "cafe.e2", "cafe.e3"];

export default function Museum() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("cafe.museumTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("cafe.museumTitle")}</h1>
          <p>{t("cafe.museumDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="card">
              <h2
                style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)" }}
              >
                {t("cafe.exhibits")}
              </h2>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-sm)",
                }}
              >
                {EXHIBIT_KEYS.map((key) => (
                  <li
                    key={key}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                      borderBottom: "1px solid var(--color-border)",
                      paddingBottom: "var(--space-sm)",
                    }}
                  >
                    <span
                      style={{ color: "var(--color-accent)", flexShrink: 0 }}
                    >
                      ◈
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
                <h3 style={{ marginBottom: "var(--space-sm)" }}>
                  {t("cafe.museumHours")}
                </h3>
                <p style={{ margin: 0 }}>{t("cafe.museumHoursText")}</p>
              </div>
              <div className="card">
                <p style={{ margin: 0 }}>{t("cafe.museumContact")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
