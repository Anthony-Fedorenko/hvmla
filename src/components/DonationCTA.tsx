import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./DonationCTA.module.css";

export default function DonationCTA() {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2 className={styles.title}>{t("home.donationTitle")}</h2>
            <p className={styles.text}>{t("home.donationText")}</p>
          </div>
          <Link to="/support/donations" className={styles.btn}>
            {t("home.donationButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
