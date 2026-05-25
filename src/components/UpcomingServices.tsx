import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { upcomingServices } from "../data/services";
import styles from "./UpcomingServices.module.css";

export default function UpcomingServices() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  // Today's ISO date string (YYYY-MM-DD in local time)
  const todayISO = new Date().toLocaleDateString("en-CA"); // "2026-05-25"

  // Flatten all slots from upcoming (today or future) days, show first 4
  const flatSlots = upcomingServices
    .filter((day) => day.dateISO >= todayISO)
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
          {flatSlots.length > 0 ? (
            flatSlots.map((s) => (
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
            ))
          ) : (
            <p
              style={{
                color: "var(--color-text-secondary)",
                gridColumn: "1 / -1",
              }}
            >
              {t("common.viewAll")}
            </p>
          )}
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
