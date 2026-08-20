import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { upcomingServices } from "../../data/services";
import styles from "./ServiceSchedule.module.css";

export default function ServiceSchedule() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";
  const todayISO = new Date().toLocaleDateString("en-CA");

  useEffect(() => {
    document.title = `${t("services.scheduleTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("services.scheduleTitle")}</h1>
          <p>{t("services.scheduleSubtitle")}</p>
          <div className="btn-group" style={{ marginTop: "var(--space-md)" }}>
            <a
              href="/calendar_august.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn btn--primary"
            >
              {t("services.downloadCalendar")}
            </a>
            <a
              href="https://calendar.google.com/calendar/u/0?cid=Y182NTcxZDdiZDg0N2I5MDRhYjM1MjgzOWJhNTFkZjcwYjE3MzIxYjZiMmMwNTZkN2NlZmYxZDdhNWFjNTJiYTRmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              {t("services.googleCalendar")}
            </a>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-lg)",
              maxWidth: "800px",
            }}
          >
            {upcomingServices.map((day) => {
              const isPast = day.dateISO < todayISO;
              return day.isNotice ? (
                <div
                  key={day.id}
                  style={{
                    padding: "var(--space-sm) var(--space-lg)",
                    borderLeft: "3px solid var(--color-accent)",
                    background: "var(--color-accent-light)",
                    borderRadius: "3px",
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    opacity: isPast ? 0.4 : 1,
                  }}
                >
                  <strong style={{ color: "var(--color-accent)" }}>
                    {day.date}
                  </strong>
                  {" — "}
                  {lang === "ru" ? day.slots[0].titleRu : day.slots[0].titleEn}
                </div>
              ) : (
                <div
                  key={day.id}
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--space-lg)",
                    opacity: isPast ? 0.4 : 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: "4px",
                    }}
                    aria-hidden="true"
                  >
                    {day.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        margin: "0 0 0.25rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--color-accent)",
                      }}
                    >
                      {lang === "ru" ? day.dayOfWeekRu : day.dayOfWeekEn},{" "}
                      {day.date}
                    </p>
                    {day.slots.map((slot) => (
                      <div key={slot.time} className={styles.slotRow}>
                        <span className={styles.slotTime}>{slot.time}</span>
                        <span className={styles.slotTitle}>
                          {lang === "ru" ? slot.titleRu : slot.titleEn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
