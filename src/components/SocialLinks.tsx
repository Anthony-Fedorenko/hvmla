import { useTranslation } from "react-i18next";
import styles from "./SocialLinks.module.css";

const SOCIAL = [
  {
    key: "youtube",
    label: "YouTube",
    icon: "▶",
    url: "https://youtube.com/@hvmla",
    color: "#ff0000",
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: "f",
    url: "https://facebook.com/hvmla",
    color: "#1877f2",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: "◎",
    url: "https://instagram.com/hvmla",
    color: "#c13584",
  },
];

export default function SocialLinks() {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section__title">{t("home.followUs")}</h2>
          <p className={styles.text}>{t("home.socialText")}</p>
        </div>
        <div className={styles.grid}>
          {SOCIAL.map((s) => (
            <a
              key={s.key}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span
                className={styles.icon}
                style={{ color: s.color }}
                aria-hidden="true"
              >
                {s.icon}
              </span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
