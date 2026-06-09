import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

const PAYPAL_DONATE_URL =
  "https://www.paypal.com/donate/?hosted_button_id=UTTJXGRC5TRQY";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.hero__pattern} aria-hidden="true" />
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__logoWrap}>
            <img
              src="/hvmla_logo.png"
              alt="Holy Virgin Mary Cathedral"
              className={styles.hero__logo}
            />
          </div>
          <div className={styles.hero__divider} aria-hidden="true" />
          <h1 className={styles.hero__title}>{t("home.heroTitle")}</h1>
          <p className={styles.hero__subtitle}>{t("home.heroSubtitle")}</p>
          <p className={styles.hero__oca}>{t("home.heroOCA")}</p>
          <div className={styles.hero__cta}>
            <Link to="/about/history" className="btn btn--primary">
              {t("home.heroButton")}
            </Link>
            <Link to="/services/schedule" className="btn btn--outline">
              {t("nav.schedule")}
            </Link>
            <a
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              {t("home.heroDonate")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
