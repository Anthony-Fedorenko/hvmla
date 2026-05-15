import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("contact.infoTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  const INFO_ROWS = [
    {
      labelKey: "contact.address",
      valueKey: "contact.addressValue",
      icon: "📍",
    },
    { labelKey: "contact.phone", valueKey: "contact.phoneValue", icon: "📞" },
    { labelKey: "contact.email", valueKey: "contact.emailValue", icon: "✉" },
    {
      labelKey: "contact.officeHours",
      valueKey: "contact.officeHoursValue",
      icon: "🕐",
    },
  ] as const;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("contact.infoTitle")}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
              maxWidth: "700px",
            }}
          >
            {INFO_ROWS.map((row) => (
              <div
                key={row.labelKey}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-md)",
                }}
              >
                <span
                  style={{ fontSize: "1.4rem", flexShrink: 0 }}
                  aria-hidden="true"
                >
                  {row.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.25rem",
                      maxWidth: "none",
                    }}
                  >
                    {t(row.labelKey)}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      color: "var(--color-text)",
                    }}
                  >
                    {t(row.valueKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
