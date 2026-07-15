export interface Announcement {
  id: string;
  date: string;
  titleEn: string;
  titleRu: string;
  bodyEn: string;
  bodyRu: string;
}

export const announcements: Announcement[] = [
  {
    id: "a1",
    date: "March 28, 2026",
    titleEn: "Palm Sunday Divine Liturgy",
    titleRu: "Вербное Воскресенье — Божественная Литургия",
    bodyEn:
      "Join us this Sunday for the Feast of the Entry of the Lord into Jerusalem. Liturgy begins at 10:00 AM. Distribution of blessed palms (pussy willows) will follow the service.",
    bodyRu:
      "Приглашаем вас в это воскресенье на праздник Входа Господня в Иерусалим. Начало Литургии в 10:00. После богослужения состоится раздача освящённых ветвей вербы.",
  },
  {
    id: "a2",
    date: "April 1, 2026",
    titleEn: "Holy Week Services Begin",
    titleRu: "Начало служб Страстной Седмицы",
    bodyEn:
      "Holy Week services begin Monday, April 1st. A full schedule is available in the parish bulletin and on our website. All are welcome.",
    bodyRu:
      "Богослужения Страстной Седмицы начинаются в понедельник, 1 апреля. Полное расписание доступно в приходском бюллетене и на нашем сайте. Все приветствуются.",
  },
  {
    id: "a3",
    date: "April 5, 2026",
    titleEn: "Pascha — Easter Vigil & Liturgy",
    titleRu: "Пасха — Пасхальная заутреня и Литургия",
    bodyEn:
      "Pascha (Easter) services begin Saturday evening at 11:30 PM with the Midnight Office and Paschal Matins, followed by the Divine Liturgy at midnight.",
    bodyRu:
      "Пасхальное богослужение начинается в субботу вечером в 23:30 с Полунощницы и Пасхальной Заутрени, после которой служится Божественная Литургия.",
  },
  {
    id: "a4",
    date: "March 22, 2026",
    titleEn: "Sisterhood Spring Fundraiser",
    titleRu: "Весенний благотворительный вечер Сестричества",
    bodyEn:
      "The Sisterhood will host a spring fundraising dinner on April 19th in the parish hall after Liturgy. Delicious food, fellowship, and a raffle. All proceeds benefit the parish outreach fund.",
    bodyRu:
      "Сестричество организует весенний благотворительный ужин 19 апреля в приходском зале после Литургии. Вкусная еда, общение и розыгрыш призов. Все средства поступят в фонд помощи прихода.",
  },
];

