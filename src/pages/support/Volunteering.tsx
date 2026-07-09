import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VOLUNTEER_KEYS = [
  "support.v1",
  "support.v2",
  "support.v3",
  "support.v4",
  "support.v5",
  "support.v6",
  "support.v7",
  "support.v8",
];

export default function Volunteering() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("support.volunteeringTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("support.volunteeringTitle")}</h1>
          <p>{t("support.volunteeringSubtitle")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "1.05rem" }}>
                {t("support.volunteeringDesc")}
              </p>
            </div>

            <div className="card">
              <h3 style={{ marginBottom: "var(--space-md)" }}>
                {t("support.opportunities")}
              </h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {VOLUNTEER_KEYS.map((key) => (
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

      <div className="section section--gray">
        <div className="container">
          <h2
            className="section__title"
            style={{ marginBottom: "var(--space-md)" }}
          >
            {t("support.volunteerSignup")}
          </h2>
          <p>{t("support.volunteerSignupText")}</p>
          <Link
            to="/contact/form"
            className="btn btn--primary"
            style={{ marginTop: "var(--space-md)" }}
          >
            {t("common.contact")}
          </Link>
        </div>
      </div>
    </>
  );
}
