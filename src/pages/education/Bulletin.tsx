import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const BULLETINS = [
  {
    dateEn: "March 28, 2026 — Palm Sunday",
    dateRu: "28 марта 2026 — Вербное Воскресенье",
    file: "#",
  },
  {
    dateEn: "March 21, 2026 — 5th Sunday of Great Lent",
    dateRu: "21 марта 2026 — 5-е воскресенье Великого Поста",
    file: "#",
  },
  {
    dateEn: "March 14, 2026 — Forgiveness Sunday",
    dateRu: "14 марта 2026 — Прощёное Воскресенье",
    file: "#",
  },
  {
    dateEn: "March 7, 2026 — Meatfare Sunday",
    dateRu: "7 марта 2026 — Мясопустное Воскресенье",
    file: "#",
  },
];

export default function Bulletin() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("education.bulletinTitle")} | Holy Virgin Mary Cathedral`;
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
