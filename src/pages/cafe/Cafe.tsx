import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Cafe() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("cafe.cafeTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("cafe.cafeTitle")}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "1.05rem" }}>{t("cafe.cafeDesc")}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
              }}
            >
              <div className="card">
                <h3 style={{ marginBottom: "var(--space-sm)" }}>
                  {t("cafe.cafeHours")}
                </h3>
                <p style={{ margin: 0 }}>{t("cafe.cafeHoursText")}</p>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "var(--space-sm)" }}>
                  {t("cafe.specialEvents")}
                </h3>
                <p style={{ margin: 0 }}>{t("cafe.specialEventsText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
