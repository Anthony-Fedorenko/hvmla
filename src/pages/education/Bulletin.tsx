import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const BULLETINS = [
  {
    dateEn: "June – July 2026",
    dateRu: "Июнь – Июль 2026",
    file: "/bulletin_june_july_2026.pdf",
  },
  {
    dateEn: "May 2026",
    dateRu: "Май 2026",
    file: "/bulletin_may_2026.pdf",
  },
  {
    dateEn: "April 2026",
    dateRu: "Апрель 2026",
    file: "/bulletin_april_2026.pdf",
  },
  {
    dateEn: "March 2026",
    dateRu: "Март 2026",
    file: "/bulletin_march_2026.pdf",
  },
  {
    dateEn: "February 2026",
    dateRu: "Февраль 2026",
    file: "/bulletin_february_2026.pdf",
  },
];

export default function Bulletin() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("education.bulletinTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("education.bulletinTitle")}</h1>
          <p>{t("education.bulletinDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-sm)",
              maxWidth: "700px",
            }}
          >
            {BULLETINS.map((b, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--space-md)",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-sm)",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }} aria-hidden="true">
                    📄
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {lang === "ru" ? b.dateRu : b.dateEn}
                  </span>
                </div>
                <a
                  href={b.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                  style={{
                    fontSize: "0.82rem",
                    padding: "0.45rem 1rem",
                    flexShrink: 0,
                  }}
                >
                  {t("common.download")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
