import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const BOOKS = [
  {
    titleEn: "The Orthodox Faith, Vol. 1 — Doctrine and Scripture",
    titleRu: "Православная Вера, Т. 1 — Вероучение и Священное Писание",
    file: "/orthodox_faith_v1.pdf",
  },
  {
    titleEn: "The Orthodox Faith, Vol. 2 — Worship",
    titleRu: "Православная Вера, Т. 2 — Богослужение",
    file: "/orthodox_faith_v2.pdf",
  },
  {
    titleEn: "The Orthodox Faith, Vol. 3 — Church History",
    titleRu: "Православная Вера, Т. 3 — История Церкви",
    file: "/orthodox_faith_v3.pdf",
  },
  {
    titleEn: "The Orthodox Faith, Vol. 4 — Spirituality",
    titleRu: "Православная Вера, Т. 4 — Духовность",
    file: "/orthodox_faith_v4.pdf",
  },
];

const PRAYER_TEXTS = [
  {
    titleEn: 'Moleben Before the Wonderworking Icon of the All-Holy Theotokos “Rescuer of the Perishing”',
    titleRu: "Молебен перед Чудотворной Иконой Пресвятой Богородицы «Спасительница погибающих»",
    file: "/moleben_rescuer.pdf",
  },
  {
    titleEn: "The Saturday of the Akathist",
    titleRu: "Суббота Акафиста",
    file: "/akathist_saturday.pdf",
  },
];

export default function Library() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("cafe.libraryTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  const rowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-md)",
  };

  const btnStyle: React.CSSProperties = {
    fontSize: "0.82rem",
    padding: "0.45rem 1rem",
    flexShrink: 0,
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("cafe.libraryTitle")}</h1>
          <p>{t("cafe.libraryDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <div className="card">
              <p style={{ margin: 0 }}>{t("cafe.libraryBorrow")}</p>
            </div>
            <div className="card">
              <p style={{ margin: 0 }}>{t("cafe.libraryContact")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Books */}
      <div className="section" style={{ background: "var(--color-section)" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)" }}>
            {lang === "ru" ? "Книги" : "Books"}
          </h2>
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            {BOOKS.map((b, idx) => (
              <div key={idx} className="card" style={rowStyle}>
                <span style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", flex: 1 }}>
                  {lang === "ru" ? b.titleRu : b.titleEn}
                </span>
                <a
                  href={b.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                  style={btnStyle}
                >
                  {t("common.download")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prayer Texts */}
      <div className="section">
        <div className="container">
          <h2 style={{ fontSize: "1.3rem", marginBottom: "var(--space-md)" }}>
            {lang === "ru" ? "Молитвенные тексты" : "Prayer Texts"}
          </h2>
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            {PRAYER_TEXTS.map((p, idx) => (
              <div key={idx} className="card" style={rowStyle}>
                <span style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", flex: 1 }}>
                  {lang === "ru" ? p.titleRu : p.titleEn}
                </span>
                <a
                  href={p.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                  style={btnStyle}
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
