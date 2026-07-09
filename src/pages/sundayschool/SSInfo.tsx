import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const CURRICULUM_KEYS = [
  "sundaySchool.c1",
  "sundaySchool.c2",
  "sundaySchool.c3",
  "sundaySchool.c4",
  "sundaySchool.c5",
  "sundaySchool.c6",
];

const GROUP_KEYS = [
  "sundaySchool.group1",
  "sundaySchool.group2",
  "sundaySchool.group3",
  "sundaySchool.group4",
];

const TUITION_KEYS = [
  "sundaySchool.t1",
  "sundaySchool.t2",
  "sundaySchool.t3",
  "sundaySchool.t4",
];

export default function SSInfo() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("sundaySchool.infoTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <img
            src="/sundayschool_logo-web.png"
            alt="Sunday School logo"
            style={{
              width: "110px",
              height: "110px",
              objectFit: "contain",
              display: "block",
              marginBottom: "var(--space-md)",
            }}
          />
          <h1>{t("sundaySchool.infoTitle")}</h1>
          <p>{t("sundaySchool.infoSubtitle")}</p>
        </div>
      </div>

      {/* Description */}
      <div className="section">
        <div className="container">
          <div style={{ maxWidth: "72ch", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <p style={{ fontSize: "1.05rem" }}>{t("sundaySchool.infoDesc")}</p>
            <p style={{ fontSize: "1.05rem" }}>{t("sundaySchool.infoGoal")}</p>
          </div>
        </div>
      </div>

      {/* Age Groups */}
      <div className="section" style={{ background: "var(--color-section)" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.4rem", marginBottom: "var(--space-md)" }}>
            {t("sundaySchool.groupsTitle")}
          </h2>
          <p style={{ maxWidth: "72ch", marginBottom: "var(--space-lg)" }}>
            {t("sundaySchool.groupsIntro")}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {GROUP_KEYS.map((key) => (
              <div key={key} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>✦</span>
                <span style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>
                  {t(key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum & Tuition */}
      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="card">
              <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)" }}>
                {t("sundaySchool.curriculumTitle")}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {CURRICULUM_KEYS.map((key) => (
                  <div key={key} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                    <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>
                      {t(key)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)" }}>
                {t("sundaySchool.tuitionTitle")}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {TUITION_KEYS.map((key) => (
                  <div
                    key={key}
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                      borderBottom: "1px solid var(--color-border)",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    {t(key)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
