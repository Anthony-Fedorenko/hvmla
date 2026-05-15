import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Book {
  titleKey: string;
  authorKey: string;
  descKey: string;
}

const BOOKS: Book[] = [
  {
    titleKey: "education.b1Title",
    authorKey: "education.b1Author",
    descKey: "education.b1Desc",
  },
  {
    titleKey: "education.b2Title",
    authorKey: "education.b2Author",
    descKey: "education.b2Desc",
  },
  {
    titleKey: "education.b3Title",
    authorKey: "education.b3Author",
    descKey: "education.b3Desc",
  },
];

export default function Books() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("education.booksTitle")} | Holy Virgin Mary Cathedral`;
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
          <h2
            className="section__title"
            style={{ marginBottom: "var(--space-xl)" }}
          >
            {t("education.featured")}
          </h2>
          <div className="grid-3">
            {BOOKS.map((book) => (
              <div key={book.titleKey} className="card">
                <div
                  style={{
                    width: "100%",
                    height: 160,
                    background: "var(--color-section)",
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
                  📖
                </div>
                <h3 style={{ marginBottom: "0.25rem", fontSize: "1.05rem" }}>
                  {t(book.titleKey)}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    fontStyle: "italic",
                    marginBottom: "var(--space-sm)",
                    maxWidth: "none",
                  }}
                >
                  {t(book.authorKey)}
                </p>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                  {t(book.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
