import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface TextItem {
  nameEn: string;
  nameRu: string;
  langNote: string;
}

const TEXTS: TextItem[] = [
  {
    nameEn: "Divine Liturgy of St. John Chrysostom",
    nameRu: "Божественная Литургия св. Иоанна Златоуста",
    langNote: "Church Slavonic / English",
  },
  {
    nameEn: "Divine Liturgy of St. Basil the Great",
    nameRu: "Божественная Литургия св. Василия Великого",
    langNote: "Church Slavonic / English",
  },
  {
    nameEn: "Great Vespers",
    nameRu: "Великая Вечерня",
    langNote: "Church Slavonic",
  },
  { nameEn: "Matins (Utrenya)", nameRu: "Утреня", langNote: "Church Slavonic" },
  {
    nameEn: "Hours (First, Third, Sixth, Ninth)",
    nameRu: "Часы (1-й, 3-й, 6-й, 9-й)",
    langNote: "Church Slavonic",
  },
  {
    nameEn: "Moleben to the Theotokos",
    nameRu: "Молебен Пресвятой Богородице",
    langNote: "Church Slavonic",
  },
];

export default function LiturgicalTexts() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("education.liturgicalTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("education.liturgicalTitle")}</h1>
          <p>{t("education.liturgicalDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-sm)",
              maxWidth: "700px",
            }}
          >
            {TEXTS.map((text) => (
              <div
                key={text.nameEn}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--space-md)",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: "0.2rem" }}>
                    {lang === "ru" ? text.nameRu : text.nameEn}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                      margin: 0,
                      maxWidth: "none",
                    }}
                  >
                    {text.langNote}
                  </p>
                </div>
                <button
                  className="btn btn--outline"
                  style={{ fontSize: "0.82rem", padding: "0.45rem 1rem" }}
                >
                  {t("common.download")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
