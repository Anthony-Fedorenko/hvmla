import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const GOALS = [
  "sundaySchool.pg1",
  "sundaySchool.pg2",
  "sundaySchool.pg3",
  "sundaySchool.pg4",
];

export default function SSProgram() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("sundaySchool.programTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("sundaySchool.programTitle")}</h1>
          <p>{t("sundaySchool.programDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ maxWidth: "72ch", marginBottom: "var(--space-xl)" }}>
            <p>{t("sundaySchool.programDesc")}</p>
          </div>
          <div className="card" style={{ maxWidth: "600px" }}>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)" }}>
              {t("sundaySchool.programGoals")}
            </h2>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {GOALS.map((key, i) => (
                <li
                  key={key}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    fontSize: "0.95rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-accent)",
                      fontWeight: 700,
                      minWidth: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}.
                  </span>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
