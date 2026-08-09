import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { icons } from "../../data/icons";

export default function Icons() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("about.iconsTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("about.iconsTitle")}</h1>
          <p>{t("about.iconsSubtitle")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-xs)" }}>
            {t("about.iconsIntro")}
          </p>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginBottom: "var(--space-xl)" }}>
            {t("about.iconsLangNote")}
          </p>

          <div className="grid-3">
            {icons.map((icon) => (
              <Link
                key={icon.path}
                to={`/${icon.path}`}
                className="card"
                style={{ display: "block", textDecoration: "none", color: "inherit" }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--color-accent)",
                    textTransform: "uppercase",
                    marginBottom: "0.35rem",
                  }}
                >
                  No. {icon.number}
                </span>
                <h3 style={{ fontSize: "1rem", margin: 0 }}>{icon.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
