import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { icons } from "../../data/icons";
import styles from "./IconDetail.module.css";

export default function IconDetail() {
  const { t } = useTranslation();
  const { legacyId } = useParams<{ legacyId: string }>();
  const icon = icons.find((i) => i.path === legacyId);

  useEffect(() => {
    document.title = `${icon ? icon.title : t("about.iconsNotFoundTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t, icon]);

  if (!icon) {
    return (
      <div className="page-hero">
        <div className="container">
          <h1>{t("about.iconsNotFoundTitle")}</h1>
          <p>{t("about.iconsNotFoundText")}</p>
        </div>
        <div className="container" style={{ marginTop: "var(--space-lg)" }}>
          <Link to="/about/icons" className="btn btn--outline">
            {t("about.iconsBack")}
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = icon.description.split("\n\n").filter(Boolean);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className={styles.number}>No. {icon.number}</span>
          <h1>{icon.title}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className={styles.prose}>
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className={styles.source}>
              {t("about.iconsSource")}: hvmla.org/{icon.path}
            </div>
          </div>

          <Link to="/about/icons" className="btn btn--outline" style={{ marginTop: "var(--space-xl)" }}>
            ← {t("about.iconsBack")}
          </Link>
        </div>
      </div>
    </>
  );
}
