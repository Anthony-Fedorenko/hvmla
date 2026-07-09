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
              Holy Virgin Mary Russian Orthodox Cathedral
            </p>
            <p className={styles["footer__brand-diocese"]} style={{ marginBottom: "0.15rem" }}>
              Diocese of the West
            </p>
            <p className={styles["footer__brand-diocese"]}>
              Orthodox Church in America
            </p>
            <p className={styles.footer__tagline}>{t("footer.tagline")}</p>
            <p className={styles["footer__contact-item"]}>
              650 Micheltorena Street
            </p>
            <p className={styles["footer__contact-item"]}>
              Los Angeles, CA 90026
            </p>
            <p className={styles["footer__contact-item"]}>+1 (323) 661-7000</p>
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
              <Link className={styles.footer__link} to="/sunday-school">
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

          {/* Contact + Affiliates */}
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

            <p
              className={styles["footer__col-title"]}
              style={{ marginTop: "1.5rem" }}
            >
              {t("footer.affiliates")}
            </p>
            <nav className={styles.footer__links}>
              <a
                className={styles.footer__link}
                href="https://dowoca.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diocese of the West (OCA)
              </a>
              <a
                className={styles.footer__link}
                href="https://www.oca.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Orthodox Church in America
              </a>
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
