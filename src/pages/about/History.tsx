import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const TIMELINE = [
  { year: "1923", key: "about.t1923" },
  { year: "1928", key: "about.t1928" },
  { year: "1965", key: "about.t1965" },
  { year: "1980", key: "about.t1980" },
  { year: "2001", key: "about.t2001" },
  { year: "2015", key: "about.t2015" },
];

export default function History() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("about.historyTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("about.historyTitle")}</h1>
          <p>{t("about.historySubtitle")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ maxWidth: "72ch" }}>
            <p>{t("about.historyP1")}</p>
            <p>{t("about.historyP2")}</p>
            <p>{t("about.historyP3")}</p>
            <p>{t("about.historyP4")}</p>
          </div>
        </div>
      </div>

      <div className="section section--gray">
        <div className="container">
          <h2
            className="section__title"
            style={{ marginBottom: "var(--space-xl)" }}
          >
            {t("about.timeline")}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-lg)",
                  borderLeft: "3px solid var(--color-accent)",
                  paddingLeft: "var(--space-lg)",
                  paddingBottom: "var(--space-sm)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.3rem",
                    color: "var(--color-accent)",
                    minWidth: "60px",
                    fontWeight: "400",
                  }}
                >
                  {item.year}
                </span>
                <p style={{ margin: 0 }}>{t(item.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
