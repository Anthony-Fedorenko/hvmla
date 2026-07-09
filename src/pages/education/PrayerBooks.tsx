import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PRAYER_BOOKS = [
  "education.pb1",
  "education.pb2",
  "education.pb3",
  "education.pb4",
  "education.pb5",
];

export default function PrayerBooks() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("education.prayerTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("education.prayerTitle")}</h1>
          <p>{t("education.prayerDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-sm)",
              maxWidth: "600px",
            }}
          >
            {PRAYER_BOOKS.map((key) => (
              <div
                key={key}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--space-md)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-sm)",
                  }}
                >
                  <span
                    style={{ fontSize: "1.4rem", color: "var(--color-accent)" }}
                    aria-hidden="true"
                  >
                    🙏
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {t(key)}
                  </span>
                </div>
                <button
                  className="btn btn--outline"
                  style={{
                    fontSize: "0.82rem",
                    padding: "0.45rem 1rem",
                    flexShrink: 0,
                  }}
                >
                  {t("common.download")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
