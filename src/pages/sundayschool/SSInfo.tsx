import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const CURRICULUM_KEYS = [
  "sundaySchool.c1",
  "sundaySchool.c2",
  "sundaySchool.c3",
  "sundaySchool.c4",
  "sundaySchool.c5",
];

export default function SSInfo() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("sundaySchool.infoTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("sundaySchool.infoTitle")}</h1>
          <p>{t("sundaySchool.infoDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "1.05rem" }}>
                {t("sundaySchool.infoDesc")}
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: "var(--space-md)" }}>
                {t("sundaySchool.curriculum")}
              </h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {CURRICULUM_KEYS.map((key) => (
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
