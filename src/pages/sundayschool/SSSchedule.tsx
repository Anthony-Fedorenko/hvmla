import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const GROUPS = [
  "sundaySchool.group1",
  "sundaySchool.group2",
  "sundaySchool.group3",
  "sundaySchool.group4",
];

export default function SSSchedule() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("sundaySchool.scheduleTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("sundaySchool.scheduleTitle")}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="card">
              <h2
                style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)" }}
              >
                {t("sundaySchool.scheduleTitle")}
              </h2>
              <p style={{ margin: 0 }}>{t("sundaySchool.scheduleText")}</p>
            </div>
            <div className="card">
              <h2
                style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)" }}
              >
                {t("sundaySchool.ageGroups")}
              </h2>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {GROUPS.map((key) => (
                  <li
                    key={key}
                    style={{
                      display: "flex",
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
          </div>
        </div>
      </div>
    </>
  );
}
