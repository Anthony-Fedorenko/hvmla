import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface StaffMember {
  nameEn: string;
  nameRu: string;
  roleKey: string;
  bioEn: string;
  bioRu: string;
}

const STAFF: StaffMember[] = [
  {
    nameEn: "V. Rev. Nazari Polataiko",
    nameRu: "Прот. Назарий Полатайко",
    roleKey: "about.rector",
    bioEn:
      "V. Rev. Nazari Polataiko serves as Rector of Holy Virgin Mary Cathedral. For urgent matters, please call him directly. Home: 818-213-7176 | Work: 323-661-7000 | rector@hvmla.org",
    bioRu:
      "Прот. Назарий Полатайко является настоятелем собора Иверской иконы Пресвятой Богородицы. По срочным вопросам обращайтесь напрямую. Дом: 818-213-7176 | Работа: 323-661-7000 | rector@hvmla.org",
  },
  {
    nameEn: "Protodeacon Arkady Voloshchuk",
    nameRu: "Протодиакон Аркадий Волощук",
    roleKey: "about.deacon",
    bioEn:
      "Protodeacon Arkady Voloshchuk serves at the altar during the Divine Liturgy and other services at Holy Virgin Mary Cathedral.",
    bioRu:
      "Протодиакон Аркадий Волощук совершает диаконское служение за Божественной Литургией и другими богослужениями в соборе.",
  },
  {
    nameEn: "Protodeacon Kirill Dotsenko",
    nameRu: "Протодиакон Кирилл Доценко",
    roleKey: "about.deacon",
    bioEn:
      "Protodeacon Kirill Dotsenko serves at Holy Virgin Mary Cathedral. Home: 323-539-6139 | Work: 323-661-7000 | office@hvmla.org",
    bioRu:
      "Протодиакон Кирилл Доценко несёт диаконское служение в соборе. Дом: 323-539-6139 | Работа: 323-661-7000 | office@hvmla.org",
  },
];

export default function Clergy() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";

  useEffect(() => {
    document.title = `${t("about.clergyTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("about.clergyTitle")}</h1>
          <p>{t("about.clergySubtitle")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-2">
            {STAFF.map((member) => (
              <div key={member.nameEn} className="card">
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "var(--color-section)",
                    border: "2px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.6rem",
                    marginBottom: "var(--space-md)",
                    color: "var(--color-accent)",
                  }}
                  aria-hidden="true"
                >
                  ✦
                </div>
                <h3 style={{ marginBottom: "0.25rem" }}>
                  {lang === "ru" ? member.nameRu : member.nameEn}
                </h3>
                <p
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    marginBottom: "var(--space-sm)",
                    maxWidth: "none",
                  }}
                >
                  {t(member.roleKey)}
                </p>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                  {lang === "ru" ? member.bioRu : member.bioEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
