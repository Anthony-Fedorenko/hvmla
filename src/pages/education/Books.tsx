import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PDF_BOOKS = [
  {
    vol: "I",
    titleEn: "Doctrine and Scripture",
    titleRu: "Вероучение и Писание",
    file: "/orthodox_faith_v1.pdf",
  },
  {
    vol: "II",
    titleEn: "Worship",
    titleRu: "Богослужение",
    file: "/orthodox_faith_v2.pdf",
  },
  {
    vol: "III",
    titleEn: "Church History",
    titleRu: "История Церкви",
    file: "/orthodox_faith_v3.pdf",
  },
  {
    vol: "IV",
    titleEn: "Spirituality",
    titleRu: "Духовность",
    file: "/orthodox_faith_v4.pdf",
  },
];

const PRAYER_TEXTS = [
  {
    titleEn: 'Moleben Before the Wonderworking Icon of the All-Holy Theotokos "Rescuer of the Perishing"',
    titleRu: "Молебен перед Чудотворной Иконой Пресвятой Богородицы «Спасительница погибающих»",
    file: "/moleben_rescuer.pdf",
  },
  {
    titleEn: "The Saturday of the Akathist",
    titleRu: "Суббота Акафиста",
    file: "/akathist_saturday.pdf",
  },
];

export default function Books() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("education.booksTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("education.booksTitle")}</h1>
          <p>{t("education.booksDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="section__title" style={{ marginBottom: "var(--space-xl)" }}>
            {lang === "ru" ? "Православная Вера" : "The Orthodox Faith"}
          </h2>
          <div className="grid-2">
            {PDF_BOOKS.map((b) => (
              <div key={b.vol} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    height: 140,
                    background: "var(--color-section)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginBottom: "var(--space-md)",
                    color: "var(--color-accent)",
                  }}
                  aria-hidden="true"
                >
                  <span style={{ fontSize: "2rem" }}>📖</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>
                    Vol. {b.vol}
                  </span>
                </div>
                <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.3rem", maxWidth: "none" }}>
                  {lang === "ru" ? `Том ${b.vol}` : `Volume ${b.vol}`}
                </p>
                <h3 style={{ fontSize: "1.05rem", marginBottom: "var(--space-md)", flex: 1 }}>
                  {lang === "ru" ? b.titleRu : b.titleEn}
                </h3>
                <a
                  href={b.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                  style={{ fontSize: "0.82rem", alignSelf: "flex-start" }}
                >
                  {t("common.download")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section" style={{ background: "var(--color-section)" }}>
        <div className="container">
          <h2 className="section__title" style={{ marginBottom: "var(--space-xl)" }}>
            {lang === "ru" ? "Молитвенные тексты" : "Prayer Texts"}
          </h2>
          <div className="grid-2">
            {PRAYER_TEXTS.map((p, idx) => (
              <div key={idx} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    height: 140,
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                    marginBottom: "var(--space-md)",
                    color: "var(--color-accent)",
                  }}
                  aria-hidden="true"
                >
                  🙏
                </div>
                <h3 style={{ fontSize: "1rem", marginBottom: "var(--space-md)", flex: 1 }}>
                  {lang === "ru" ? p.titleRu : p.titleEn}
                </h3>
                <a
                  href={p.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                  style={{ fontSize: "0.82rem", alignSelf: "flex-start" }}
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
