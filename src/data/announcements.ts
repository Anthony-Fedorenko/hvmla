export interface Announcement {
  id: string;
  date: string;
  titleEn: string;
  titleRu: string;
  bodyEn: string;
  bodyRu: string;
  image?: string;
}

export const announcements: Announcement[] = [
  {
    id: "a6",
    date: "September 3, 2026",
    titleEn: "Annual Slavic Festival — November 1, 2026",
    titleRu: "Ежегодный Славянский фестиваль — 1 ноября 2026",
    bodyEn: "Join us for our Annual Slavic Festival on Sunday, November 1, at 12:00 PM, following Divine Liturgy. Enjoy traditional Slavic food, tea and pirozhki, cathedral tours, children's entertainment, handmade crafts, and more. Free admission — see the flyer below for details.",
    bodyRu: "Приглашаем на ежегодный Славянский фестиваль в воскресенье, 1 ноября, в 12:00, после Божественной Литургии. Традиционная славянская кухня, чай с пирожками, экскурсии по собору, развлечения для детей, изделия ручной работы и многое другое. Вход свободный — подробности на плакате ниже.",
    image: "/slavic_festival_2026.jpg",
  },
  {
    id: "a5",
    date: "August 28, 2026",
    titleEn: "New Catechumen Group — Starting September 1, 2026",
    titleRu: "Новая группа оглашенных — начало 1 сентября 2026",
    bodyEn: "A new catechumen lecture series begins Tuesday, September 1. Classes meet every Tuesday at 7:00 PM in the Parish Museum, following the Akathist before the Icon of the Mother of God \"Rescue of the Perishing.\" See the flyer below for course materials and details.",
    bodyRu: "1 сентября начинается новая лекционная серия для оглашенных. Занятия проходят каждый вторник в 19:00 в Приходском музее, после акафиста перед иконой Божией Матери «Взыскание погибших». Материалы курса и подробности — на плакате ниже.",
    image: "/new_catechumen_group.jpg",
  },
  {
    id: "a3",
    date: "August 19, 2026",
    titleEn: "Sunday School Registration — 2026–2027 Academic Year",
    titleRu: "Регистрация в Воскресную школу — 2026–2027 учебный год",
    bodyEn: "Registration for the new Sunday School year begins September 13, with classes meeting Sundays from 12:00 PM to 3:40 PM for children ages 4–16. See the flyer below for the full program and registration details.",
    bodyRu: "Регистрация на новый учебный год в Воскресной школе начинается 13 сентября, занятия проходят по воскресеньям с 12:00 до 15:40 для детей от 4 до 16 лет. Полная программа и информация о регистрации — на плакате ниже.",
    image: "/announcements.jpg",
  },
  {
    id: "a1",
    date: "July 20, 2026",
    titleEn: "Iconography",
    titleRu: "Иконография",
    bodyEn: "Our beloved iconographer, Marina Smetanina, is enjoying a well-deserved vacation. We recently received a generous donation of $10,000 toward the next phase of the iconography project, and I hope that upon Marina's return from Russia she will begin work on the south wall of the nave.\n\nWe also received another generous donation of $10,000 designated for the icons of the Mother of God \"Mlekopitatelnitsa\" (The Nursing Mother of God) \"Protection of the Unborn,\" St. Valeria, and twenty-four small icons for the iconostasis of St. Herman's Church.\n\nDonations toward the iconography project are always welcome as we continue the frescoing of our Cathedral walls. At this time, we are seeking to raise $40,000 to complete the south wall frescoes, which will include the Nativity of Our Lord, St. John the Theologian, the Meeting of the Lord, and the Dormition of the Most Holy Theotokos.",
    bodyRu: "Наша любимая иконописец Марина Сметанина наслаждается заслуженным отпуском. Недавно мы получили щедрое пожертвование в размере $10 000 на следующий этап иконографического проекта, и я надеюсь, что по возвращении Марины из России она приступит к работе над южной стеной нефа.\n\nМы также получили ещё одно щедрое пожертвование в размере $10 000 на иконы Матери Божией «Млекопитательница», «Защитница нерождённых», святой Валерии и двадцати четырёх малых икон для иконостаса церкви святого Германа.\n\nПожертвования на иконографический проект всегда приветствуются, поскольку мы продолжаем роспись стен нашего Собора. В настоящее время мы стремимся собрать $40 000 для завершения фресок южной стены, которые будут включать Рождество Христово, св. Иоанна Богослова, Сретение Господне и Успение Пресвятой Богородицы.",
  },
  {
    id: "a2",
    date: "July 20, 2026",
    titleEn: "One on One with Everyone",
    titleRu: "«Один на один со всеми»",
    bodyEn: "The post-Paschal episode of \"One on One with Everyone,\" which we had planned to record at the end of June, was postponed because of my vacation and because Jonathan recently became a father. We congratulate Jonathan and his family and look forward to recording the next episode once his schedule allows.\n\nTo continue expanding this outreach more independently, we are still exploring the possibility of purchasing our own video and audio equipment, which would allow us to produce more educational and spiritual content for our online audience.\n\nTo remind everyone of the importance of this ministry, I would like to share that since the beginning of this outreach our YouTube channel has grown from just over 1,000 subscribers to nearly 3,000. Our Facebook page now has 2,012 followers, while our Instagram account has grown to 11,600 followers. Glory to God for allowing our Cathedral's witness to reach so many people.",
    bodyRu: "Пасхальный выпуск программы «Один на один со всеми», который мы планировали записать в конце июня, был перенесён из-за моего отпуска и в связи с тем, что Джонатан недавно стал отцом. Поздравляем Джонатана и его семью и с нетерпением ждём записи следующего выпуска, как только позволит его расписание.\n\nЧтобы продолжать развивать это служение более независимо, мы по-прежнему рассматриваем возможность приобретения собственного видео- и аудиооборудования, которое позволит нам создавать больше образовательного и духовного контента для нашей онлайн-аудитории.\n\nНапомним о важности этого служения: с момента его начала наш канал YouTube вырос с чуть более 1 000 подписчиков до почти 3 000. На нашей странице в Facebook теперь 2 012 подписчиков, а аккаунт в Instagram вырос до 11 600 подписчиков. Слава Богу за то, что свидетельство нашего Собора достигает столь многих людей.",
  },
];

