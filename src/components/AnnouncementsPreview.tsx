import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { announcements } from "../data/announcements";
import styles from "./AnnouncementsPreview.module.css";

export default function AnnouncementsPreview() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";
  const preview = announcements.slice(0, 4);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t("home.announcementsTitle")}</h2>
        </div>
        <div className={styles.grid}>
          {preview.map((a) => (
            <article key={a.id} className={styles.card}>
              <p className={styles.date}>{a.date}</p>
              <h3 className={styles.title}>
                {lang === "ru" ? a.titleRu : a.titleEn}
              </h3>
              <p className={styles.body}>
                {lang === "ru" ? a.bodyRu : a.bodyEn}
              </p>
            </article>
          ))}
        </div>
        <Link
          to="/news/announcements"
          className={`btn btn--outline ${styles.link}`}
        >
          {t("common.viewAll")}
        </Link>
      </div>
    </section>
  );
}
