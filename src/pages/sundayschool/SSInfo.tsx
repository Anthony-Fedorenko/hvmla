import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CURRICULUM_KEYS = [
  "sundaySchool.c1",
  "sundaySchool.c2",
  "sundaySchool.c3",
  "sundaySchool.c4",
  "sundaySchool.c5",
];

const GROUPS = [
  "sundaySchool.group1",
  "sundaySchool.group2",
  "sundaySchool.group3",
  "sundaySchool.group4",
];

const GOALS = [
  "sundaySchool.pg1",
  "sundaySchool.pg2",
  "sundaySchool.pg3",
  "sundaySchool.pg4",
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

      {/* Info & Curriculum */}
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

      {/* Schedule & Age Groups */}
      <div className="section" style={{ background: "var(--color-section)" }}>
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

      {/* Program & Goals */}
      <div className="section">
        <div className="container">
          <div style={{ maxWidth: "72ch", marginBottom: "var(--space-lg)" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "var(--space-md)" }}>
              {t("sundaySchool.programTitle")}
            </h2>
            <p>{t("sundaySchool.programDesc")}</p>
          </div>
          <div className="card" style={{ maxWidth: "600px" }}>
            <h3
              style={{ fontSize: "1.15rem", marginBottom: "var(--space-md)" }}
            >
              {t("sundaySchool.programGoals")}
            </h3>
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

      {/* Contacts */}
      <div className="section" style={{ background: "var(--color-section)" }}>
        <div className="container">
          <div className="card" style={{ maxWidth: "600px" }}>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)" }}>
              {t("sundaySchool.contactTitle")}
            </h2>
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
