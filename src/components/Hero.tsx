import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.hero__pattern} aria-hidden="true" />
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__cross} aria-hidden="true">
            ☩
          </div>
          <div className={styles.hero__divider} aria-hidden="true" />
          <h1 className={styles.hero__title}>{t("home.heroTitle")}</h1>
          <p className={styles.hero__subtitle}>{t("home.heroSubtitle")}</p>
          <div className={styles.hero__cta}>
            <Link to="/about/history" className="btn btn--primary">
              {t("home.heroButton")}
            </Link>
            <Link
              to="/services/schedule"
              className="btn btn--outline"
              style={{ borderColor: "#7a5c3f", color: "#c8a882" }}
            >
              {t("nav.schedule")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
