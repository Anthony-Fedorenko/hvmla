import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { upcomingServices } from "../../data/services";

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
                  <div style={{ flex: 1 }}>
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
                      <div
                        key={slot.time}
                        style={{
                          display: "flex",
                          gap: "var(--space-md)",
                          alignItems: "baseline",
                          marginBottom: "0.3rem",
                        }}
                      >
                        <span
                          style={{
                            minWidth: "90px",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            flexShrink: 0,
                          }}
                        >
                          {slot.time}
                        </span>
                        <span style={{ fontSize: "0.95rem" }}>
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
