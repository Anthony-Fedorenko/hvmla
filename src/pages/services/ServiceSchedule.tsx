import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { upcomingServices } from "../../data/services";

export default function ServiceSchedule() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("services.scheduleTitle")} | Holy Virgin Mary Cathedral`;
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
            {upcomingServices.map((day) => (
              <div
                key={day.id}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-lg)",
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
