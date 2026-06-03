import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function StBarbara() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("ministries.barbaraTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("ministries.barbaraTitle")}</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <p style={{ fontSize: "1.05rem", maxWidth: "780px" }}>
            {t("ministries.barbaraDesc")}
          </p>
        </div>
      </div>
    </>
  );
}
