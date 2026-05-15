import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__grid}>
          {/* Brand & contact */}
          <div>
            <p className={styles["footer__brand-name"]}>
              Holy Virgin Mary Cathedral
            </p>
            <p className={styles.footer__tagline}>{t("footer.tagline")}</p>
            <p className={styles["footer__contact-item"]}>
              650 Micheltorena Street
            </p>
            <p className={styles["footer__contact-item"]}>
              Los Angeles, CA 90026
            </p>
            <p className={styles["footer__contact-item"]}>+1 (323) 661-2928</p>
            <p className={styles["footer__contact-item"]}>office@hvmla.org</p>
          </div>

          {/* Quick links */}
          <div>
            <p className={styles["footer__col-title"]}>
              {t("footer.quickLinks")}
            </p>
            <nav className={styles.footer__links}>
              <Link className={styles.footer__link} to="/">
                {t("nav.home")}
              </Link>
              <Link className={styles.footer__link} to="/about/history">
                {t("nav.history")}
              </Link>
              <Link className={styles.footer__link} to="/services/schedule">
                {t("nav.schedule")}
              </Link>
              <Link className={styles.footer__link} to="/services/live">
                {t("nav.liveStreams")}
              </Link>
              <Link className={styles.footer__link} to="/sunday-school/info">
                {t("nav.sundaySchool")}
              </Link>
              <Link className={styles.footer__link} to="/news">
                {t("nav.news")}
              </Link>
              <Link className={styles.footer__link} to="/support/donations">
                {t("nav.donations")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className={styles["footer__col-title"]}>
              {t("footer.contactUs")}
            </p>
            <nav className={styles.footer__links}>
              <Link className={styles.footer__link} to="/contact/info">
                {t("nav.contactInfo")}
              </Link>
              <Link className={styles.footer__link} to="/contact/map">
                {t("nav.addressMap")}
              </Link>
              <Link className={styles.footer__link} to="/contact/social">
                {t("nav.socialMedia")}
              </Link>
              <Link className={styles.footer__link} to="/contact/form">
                {t("nav.contactForm")}
              </Link>
            </nav>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            {t("footer.copyright", { year })}
          </p>
          <p className={styles.footer__made}>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
