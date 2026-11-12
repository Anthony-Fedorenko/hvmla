import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { announcements } from "../data/announcements";
import { newsItems } from "../data/news";
import styles from "./NewsAndAnnouncements.module.css";

export default function NewsAndAnnouncements() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";
  const newsPreview = newsItems.slice(0, 3);
  const announcementsPreview = announcements.slice(0, 3);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className="section__header">
              <h2 className="section__title">{t("news.newsTitle")}</h2>
            </div>
            <div className={styles.list}>
              {newsPreview.map((n) => (
                <Link key={n.id} to={`/news#${n.id}`} className={styles.card}>
                  <p className={styles.date}>{n.date}</p>
                  <h3 className={styles.title}>
                    {lang === "ru" ? n.titleRu : n.titleEn}
                  </h3>
                  <p className={styles.body}>
                    {lang === "ru" ? n.summaryRu : n.summaryEn}
                  </p>
                </Link>
              ))}
            </div>
            <Link to="/news" className={`btn btn--outline ${styles.link}`}>
              {t("common.viewAll")}
            </Link>
          </div>

          <div className={styles.column}>
            <div className="section__header">
              <h2 className="section__title">{t("home.announcementsTitle")}</h2>
            </div>
            <div className={styles.list}>
              {announcementsPreview.map((a) => (
                <Link
                  key={a.id}
                  to={`/news/announcements#${a.id}`}
                  className={styles.card}
                >
                  <p className={styles.date}>{a.date}</p>
                  <h3 className={styles.title}>
                    {lang === "ru" ? a.titleRu : a.titleEn}
                  </h3>
                  <p className={styles.body}>
                    {lang === "ru" ? a.bodyRu : a.bodyEn}
                  </p>
                </Link>
              ))}
            </div>
            <Link
              to="/news/announcements"
              className={`btn btn--outline ${styles.link}`}
            >
              {t("common.viewAll")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
