import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Clergy.module.css";

interface StaffMember {
  nameEn: string;
  nameRu: string;
  roleKey: string;
  bioEn: string;
  bioRu: string;
  photo: string;
}

const STAFF: StaffMember[] = [
  {
    nameEn: "Archpriest Nazari Polataiko",
    nameRu: "Протоиерей Назарий Полатайко",
    roleKey: "about.rector",
    photo: "/nazari-web.jpg",
    bioEn:
      "Archpriest Nazari Polataiko was born on May 3, 1971, in Chernivtsi, Ukraine. He received his secondary education at School #9 in Chernivtsi, Ukraine and artistic education at the Chernivtsi School of Fine Art, graduating in 1986, and continued his studies at the Kosiv College of Applied and Decorative Arts, earning a Bachelor of Fine Arts degree in 1991. Following his immigration to Canada, he pursued theological studies at St. Andrew's College of the University of Manitoba in Winnipeg, Canada, earning a Bachelor of Theology degree. He subsequently continued his theological education at the Kyiv Theological Academy in Ukraine, where he received the degree of Candidate of Theological Sciences with a dissertation entitled “The Spiritual Tradition of Hesychasm and Its Influence on the Development of Iconography in Rus’” in 2006.\n\nFr. Nazari was ordained to the Holy Diaconate on August 26, 1995, by His Eminence Metropolitan Vasyly (Fedak), Primate of the Ukrainian Orthodox Church of Canada, Ecumenical Patriarchate. Following his ordination, he served as Protodeacon at Holy Trinity Ukrainian Orthodox Metropolitan Cathedral in Winnipeg, Manitoba, assisting Metropolitan Vasyly in his archpastoral ministry for many years.\n\nIn 2008, Fr. Nazari was received into the Orthodox Church in America and assigned to the Archdiocese of Canada. He served as Protodeacon at Holy Annunciation Orthodox Cathedral in Ottawa, Ontario, as Episcopal Secretary, and later as Secretary of the Archdiocese of Canada.\n\nOn August 19, 2014, Fr. Nazari was ordained to the Holy Priesthood by His Beatitude Metropolitan Onufriy of Kyiv and All Ukraine at Holy Dormition Cathedral in Kyiv, Ukraine. He continued his ministry at Holy Annunciation Orthodox Cathedral in Ottawa until October 2015, when he was transferred to Diocese of the West of the Orthodox Church in America and appointed Rector of Holy Virgin Mary Russian Orthodox Cathedral in Los Angeles, California.\n\nSince his arrival in Los Angeles, Fr. Nazari has devoted himself to Orthodox Christian education, pastoral care, liturgical life, and the proclamation of the Gospel. He has delivered lectures, taught classes, and provided spiritual guidance to countless faithful, emphasizing the importance of prayer, repentance, stewardship, and active participation in the life of the Church.\n\nFr. Nazari and his wife, Tatiana (Renata), have been married since 1989 and are the parents of two sons Mykola and Alexander.\n\nFr. Nazari is fluent in English, Ukrainian, and Russian and is able to serve in both English and Church Slavonic.",
    bioRu:
      "Протоиерей Назарий Полатайко родился 3 мая 1971 года в Черновцах (Украина). Среднее образование получил в школе №9 в Черновцах, художественное — в Черновицкой художественной школе, которую окончил в 1986 году, после чего продолжил обучение в Косовском колледже прикладного и декоративного искусства, получив степень бакалавра изобразительного искусства в 1991 году. После эмиграции в Канаду прошёл богословскую подготовку в колледже Святого Андрея при Университете Манитобы в Виннипеге, получив степень бакалавра богословия. Затем продолжил богословское образование в Киевской Духовной Академии, где в 2006 году защитил диссертацию на соискание учёной степени кандидата богословских наук на тему «Духовная традиция исихазма и её влияние на развитие иконографии на Руси».\n\n26 августа 1995 года отец Назарий был рукоположён во диакона Его Высокопреосвященством митрополитом Василием (Федаком), Предстоятелем Украинской Православной Церкви в Канаде Вселенского Патриархата. После рукоположения нёс служение протодиакона в Свято-Троицком Украинском православном митрополичьем соборе в Виннипеге (Манитоба), в течение многих лет сослужа митрополиту Василию в его архипастырском служении.\n\nВ 2008 году отец Назарий был принят в Православную Церковь в Америке и назначен в Архиепархию Канады. Нёс служение протодиакона в Свято-Благовещенском православном соборе в Оттаве (Онтарио), исполнял обязанности архиерейского секретаря и впоследствии — секретаря Архиепархии Канады.\n\n19 августа 2014 года отец Назарий был рукоположён во священника Его Блаженством митрополитом Онуфрием Киевским и всея Украины в Свято-Успенском соборе в Киеве. До октября 2015 года продолжал служение в Свято-Благовещенском соборе в Оттаве, после чего был переведён в Епархию Запада Православной Церкви в Америке и назначен настоятелем Свято-Богородицкого Русского православного собора в Лос-Анджелесе (Калифорния).\n\nС момента приезда в Лос-Анджелес отец Назарий посвятил себя православному христианскому просвещению, пастырскому попечению, литургической жизни и проповеди Евангелия. Он читает лекции, проводит занятия, оказывает духовное руководство многочисленным прихожанам, уделяя особое внимание молитве, покаянию, доброделанию и активному участию в жизни Церкви.\n\nОтец Назарий и его супруга Татиана (Рената) состоят в браке с 1989 года; у них двое сыновей — Микола и Александр.\n\nОтец Назарий свободно владеет английским, украинским и русским языками и совершает богослужения как на английском, так и на церковнославянском языке.",
  },
  {
    nameEn: "Archpriest Volodymyr Telizhenko",
    nameRu: "Протоиерей Владимир Тележенко",
    roleKey: "about.archpriest",
    photo: "/volodymyr-web.jpg",
    bioEn:
      "Born on November 12, 1976, in Cherkasy, Ukraine.\n\nGraduated with honors from the Moscow Theological Seminary in 1998 and from the School of Theology of Aristotle University of Thessaloniki, Greece, in 2003. He also received a degree in organizational management.\n\nFor many years he worked in the field of church media and educational outreach, participating in the creation and development of Orthodox informational and television projects. From 2010 to 2022, he served as Director of the Pilgrimage Center of the Department for External Church Relations of the Ukrainian Orthodox Church, organizing pilgrimages to holy sites throughout the world.\n\nSince April 2023, he has served at Holy Virgin Mary Cathedral in Los Angeles, California, USA.\n\nHe is fluent in Ukrainian, Russian, Greek, and English. He is married and has three children.",
    bioRu:
      "Родился 12 ноября 1976 года в городе Черкассы (Украина).\n\nС отличием в 1998 г. окончил Московскую духовную семинарию (РФ) и в 2003 г. - богословский факультет Фессалоникийского Университета имени Аристотеля (Греция). Также получил образование в области менеджмента организаций.\n\nНа протяжении многих лет трудился в сфере церковных медиа и просветительской деятельности, участвовал в создании и развитии православных информационных и телевизионных проектов. С 2010 по 2022 год возглавлял Паломнический центр при Отделе внешних церковных связей Украинской Православной Церкви, организуя паломничества к святыням по всему миру.\n\nС апреля 2023 года несет служение в Свято-Богородицком соборе г. Лос-Анджелес (Калифорния, США).\n\nВладеет украинским, русским, греческим и английским языками. Женат, имеет троих детей.",
  },
  {
    nameEn: "Protodeacon Kirill Dotsenko",
    nameRu: "Протодиакон Кирилл Доценко",
    roleKey: "about.protodeacon",
    photo: "/kirill-web.jpg",
    bioEn:
      "Protodeacon Kirill Dotsenko was born in Moscow in 1987.\n\nIn 2008, was ordained to the Holy Diaconate by Metropolitan Aristarch (Smirnov) of Kemerovo and Novokuznetsk.\n\nIn 2010, graduated from the St. Tikhon's Orthodox Humanitarian University (PSTBI) in Moscow, earning a Bachelor's Degree in Theology.\n\n2011–2019 Secretary of the St Catherine's Church the representation parish of the Orthodox Church in America in Moscow.\n\nIn 2019, graduated from I.M. Sechenov First Moscow State Medical University, earning a Bachelor's Degree in Healthcare Management.\n\nSince February 2019 has served at Holy Virgin Mary Orthodox Cathedral in Los Angeles.",
    bioRu:
      "Протодиакон Кирилл Доценко родился в Москве в 1987 году.\n\nВ 2008 году рукоположён во диакона митрополитом Кемеровским и Новокузнецким Аристархом (Смирновым).\n\nВ 2010 году окончил Православный Свято-Тихоновский гуманитарный университет (ПСТГУ) в Москве, получив степень бакалавра богословия.\n\n2011–2019 — секретарь подворья святой великомученицы Екатерины — представительского прихода Православной Церкви в Америке в Москве.\n\nВ 2019 году окончил Первый Московский государственный медицинский университет имени И.М. Сеченова по специальности «Управление в здравоохранении».\n\nС февраля 2019 года несёт служение в Свято-Богородицком православном соборе в Лос-Анджелесе.",
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
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
            {STAFF.map((member) => (
              <div key={member.nameEn} className={`card ${styles.clergyCard}`}>
                <img
                  src={member.photo}
                  alt={lang === "ru" ? member.nameRu : member.nameEn}
                  className={styles.clergyPhoto}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
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
                  <div style={{ fontSize: "0.9rem", margin: 0 }}>
                    {(lang === "ru" ? member.bioRu : member.bioEn)
                      .split("\n\n")
                      .map((para, i) => (
                        <p key={i} style={{ marginBottom: "0.75rem", maxWidth: "none" }}>
                          {para}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
