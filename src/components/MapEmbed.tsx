import { useTranslation } from "react-i18next";
import styles from "./MapEmbed.module.css";

interface Props {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function MapEmbed({ title, subtitle, className }: Props) {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.section} ${className ?? ""}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section__title">{title ?? t("home.mapTitle")}</h2>
          <p className={styles.subtitle}>{subtitle ?? t("home.mapSubtitle")}</p>
        </div>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.9!2d-118.2588!3d34.0811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c764a4b4f647%3A0x1a1b2c3d4e5f6789!2s650%20Micheltorena%20St%2C%20Los%20Angeles%2C%20CA%2090026!5e0!3m2!1sen!2sus!4v1700000000000"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Holy Virgin Mary Cathedral location"
          />
        </div>
      </div>
    </section>
  );
}
