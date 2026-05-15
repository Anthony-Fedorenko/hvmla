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

export interface NewsItem {
  id: string;
  date: string;
  titleEn: string;
  titleRu: string;
  summaryEn: string;
  summaryRu: string;
  bodyEn: string;
  bodyRu: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    date: "March 15, 2026",
    titleEn: "Cathedral Ceiling Restoration Project Completed",
    titleRu: "Завершена реставрация купола собора",
    summaryEn:
      "After 18 months of careful work, the restoration of our historic cathedral ceiling has been completed. The newly restored frescoes reveal their original splendor.",
    summaryRu:
      "После 18 месяцев кропотливой работы завершена реставрация исторического потолка нашего собора. Заново отреставрированные фрески открывают своё первоначальное великолепие.",
    bodyEn:
      "The ambitious restoration project, funded through generous parish donations and a grant from the Diocese, has returned our cathedral ceiling to its original glory. Parishioners and visitors can now see the fully restored frescoes depicting scenes from the life of the Theotokos.",
    bodyRu:
      "Масштабный реставрационный проект, профинансированный благодаря щедрым пожертвованиям прихожан и гранту от Епархии, вернул потолку нашего собора первоначальный облик. Прихожане и гости теперь могут видеть полностью восстановленные фрески с изображением сцен из жизни Пресвятой Богородицы.",
  },
  {
    id: "n2",
    date: "February 28, 2026",
    titleEn: "New Sunday School Year Launches with Record Enrollment",
    titleRu: "Новый год воскресной школы начался с рекордным числом учеников",
    summaryEn:
      "We are pleased to announce that this year's Sunday School has welcomed 42 students — the largest enrollment in over 20 years.",
    summaryRu:
      "Мы рады сообщить, что в этом году в воскресную школу записались 42 ученика — это самое большое число за последние 20 лет.",
    bodyEn:
      "The growing enrollment reflects the vitality of our parish community. New teaching materials developed in partnership with the Diocese have been introduced this year. We extend our heartfelt thanks to all our volunteer teachers and staff.",
    bodyRu:
      "Растущее число учеников отражает жизнеспособность нашей приходской общины. В этом году введены новые учебные материалы, разработанные совместно с Епархией. Мы сердечно благодарим всех наших учителей-волонтёров и персонал.",
  },
  {
    id: "n3",
    date: "January 10, 2026",
    titleEn: "St. Xenia Ministry Distributes Winter Aid Packages",
    titleRu: "Служение св. Ксении раздало зимние пакеты помощи",
    summaryEn:
      "In January, volunteers from the St. Xenia Ministry distributed over 200 winter aid packages to homeless individuals and low-income families in the Echo Park area.",
    summaryRu:
      "В январе волонтёры служения св. Ксении раздали более 200 зимних пакетов помощи бездомным и малообеспеченным семьям в районе Echo Park.",
    bodyEn:
      "The packages contained warm clothing, hygiene supplies, food, and a small devotional booklet. This ministry effort was made possible by the generous contributions of our parishioners and several anonymous donors.",
    bodyRu:
      "В пакеты входили тёплая одежда, средства гигиены, продукты питания и небольшой молитвослов. Эта программа помощи стала возможной благодаря щедрым пожертвованиям наших прихожан и нескольких анонимных жертвователей.",
  },
];
