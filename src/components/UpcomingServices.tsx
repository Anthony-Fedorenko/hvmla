import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { upcomingServices } from "../data/services";
import styles from "./UpcomingServices.module.css";

export default function UpcomingServices() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  // Flatten all slots into a single list and show the first 4
  const flatSlots = upcomingServices
    .flatMap((day) =>
      day.slots.map((slot) => ({
        id: `${day.id}-${slot.time}`,
        icon: day.icon,
        date: `${lang === "ru" ? day.dayOfWeekRu : day.dayOfWeekEn}, ${day.date}`,
        time: slot.time,
        title: lang === "ru" ? slot.titleRu : slot.titleEn,
      })),
    )
    .slice(0, 4);

  return (
    <section className={`section ${styles.services}`}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t("home.upcomingTitle")}</h2>
        </div>
        <div className={styles.grid}>
          {flatSlots.map((s) => (
            <div key={s.id} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                {s.icon}
              </span>
              <div>
                <p
                  className={styles.time}
                  style={{
                    marginBottom: "0.2rem",
                    opacity: 0.7,
                    fontSize: "0.85rem",
                  }}
                >
                  {s.date}
                </p>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.time}>{s.time}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/services/schedule"
          className={`btn btn--outline ${styles.link}`}
        >
          {t("common.viewAll")}
        </Link>
      </div>
    </section>
  );
}
