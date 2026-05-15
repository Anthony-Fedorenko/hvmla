import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SOCIAL_LINKS = [
  {
    key: "youtube",
    label: "YouTube",
    handle: "@hvmla",
    url: "https://youtube.com/@hvmla",
    icon: "▶",
    color: "#ff0000",
    desc: "Watch our live services and archival recordings",
    descRu: "Смотрите наши прямые трансляции и архивные записи",
  },
  {
    key: "facebook",
    label: "Facebook",
    handle: "/hvmla",
    url: "https://facebook.com/hvmla",
    icon: "f",
    color: "#1877f2",
    desc: "Parish news, events, and community updates",
    descRu: "Приходские новости, мероприятия и обновления",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@hvmla",
    url: "https://instagram.com/hvmla",
    icon: "◎",
    color: "#c13584",
    desc: "Photos from parish life and celebrations",
    descRu: "Фотографии из приходской жизни и торжеств",
  },
];

export default function SocialMedia() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("contact.socialTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("contact.socialTitle")}</h1>
          <p>{t("contact.socialSubtitle")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: s.color + "18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    color: s.color,
                    marginBottom: "var(--space-md)",
                  }}
                  aria-hidden="true"
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    marginBottom: "0.25rem",
                    color: "var(--color-text)",
                  }}
                >
                  {s.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "var(--space-sm)",
                    maxWidth: "none",
                  }}
                >
                  {s.handle}
                </p>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                  {lang === "ru" ? s.descRu : s.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
