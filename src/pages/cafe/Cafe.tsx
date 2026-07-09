import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Cafe() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("cafe.cafeTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
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
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
              <p style={{ fontSize: "1.05rem" }}>{t("cafe.cafeDesc1")}</p>
              <p style={{ fontSize: "1.05rem" }}>{t("cafe.cafeDesc2")}</p>
              <p style={{ fontSize: "1.05rem", fontStyle: "italic" }}>{t("cafe.cafeClosing")}</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: "var(--space-md)" }}>{t("cafe.cafeHours")}</h3>
              <p style={{ marginBottom: "0.4rem" }}>{t("cafe.cafeHours1")}</p>
              <p style={{ margin: 0 }}>{t("cafe.cafeHours2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
