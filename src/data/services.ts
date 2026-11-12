export interface TimeSlot {
  time: string;
  titleEn: string;
  titleRu: string;
}

export interface ServiceDay {
  id: string;
  /** Short date label, e.g. "August 1" */
  date: string;
  /** ISO date string for filtering, e.g. "2026-08-01" */
  dateISO: string;
  dayOfWeekEn: string;
  dayOfWeekRu: string;
  icon: string;
  slots: TimeSlot[];
  /** If true, rendered as an informational notice, not a service */
  isNotice?: boolean;
}

/** November 2026 service calendar */
export const upcomingServices: ServiceDay[] = [
  {
    id: "nov1",
    date: "November 1",
    dateISO: "2026-11-01",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 22nd Sunday after Pentecost — Holy Unmercenaries Cosmas and Damian", titleRu: "Литургия — Неделя 22-я по Пятидесятнице — Бессребреников и чудотворцев Космы и Дамиана" },
      { time: "12:00 PM", titleEn: "Annual Slavic Festival", titleRu: "Ежегодный славянский фестиваль" },
    ],
  },
  {
    id: "nov3",
    date: "November 3",
    dateISO: "2026-11-03",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Akathist before the icon of Our Most Holy Lady Theotokos \"Rescuer of the Perishing\"", titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "nov5",
    date: "November 5",
    dateISO: "2026-11-05",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to the Great Martyr Demetrios, the Myrrh-Gusher of Thessaloniki", titleRu: "Молебен великомученику Димитрию Солунскому, мироточивому" },
    ],
  },
  {
    id: "nov7",
    date: "November 7",
    dateISO: "2026-11-07",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "12:00 PM", titleEn: "Panikhida — Demetrius Memorial Saturday", titleRu: "Панихида — Димитриевская родительская суббота" },
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "nov8",
    date: "November 8",
    dateISO: "2026-11-08",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 23rd Sunday after Pentecost — Great Martyr Demetrios, the Myrrh-Gusher of Thessaloniki", titleRu: "Литургия — Неделя 23-я по Пятидесятнице — Вмч. Димитрия Солунского, мироточивого" },
    ],
  },
  {
    id: "nov10",
    date: "November 10",
    dateISO: "2026-11-10",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Akathist before the icon of Our Most Holy Lady Theotokos \"Rescuer of the Perishing\"", titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "nov12",
    date: "November 12",
    dateISO: "2026-11-12",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to Holy Hierarch Nicholas the Wonderworker, Archbishop of Myra in Lycia", titleRu: "Молебен святителю Николаю Чудотворцу, архиепископу Мирликийскому" },
    ],
  },
  {
    id: "nov14",
    date: "November 14",
    dateISO: "2026-11-14",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "nov15",
    date: "November 15",
    dateISO: "2026-11-15",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 24th Sunday after Pentecost — Beginning of the Nativity Fast (N.C.)", titleRu: "Литургия — Неделя 24-я по Пятидесятнице — Начало Рождественского поста (н. ст.)" },
    ],
  },
  {
    id: "nov17",
    date: "November 17",
    dateISO: "2026-11-17",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Akathist before the icon of Our Most Holy Lady Theotokos \"Rescuer of the Perishing\"", titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "nov19",
    date: "November 19",
    dateISO: "2026-11-19",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to Holy Hierarch Spyridon the Wonderworker, Bishop of Tremithus", titleRu: "Молебен святителю Спиридону Чудотворцу, епископу Тримифунтскому" },
    ],
  },
  {
    id: "nov20",
    date: "November 20",
    dateISO: "2026-11-20",
    dayOfWeekEn: "Friday",
    dayOfWeekRu: "Пятница",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Vespers", titleRu: "Вечерня" },
    ],
  },
  {
    id: "nov21",
    date: "November 21",
    dateISO: "2026-11-21",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Entry of the Most Holy Mother of God into the Temple (N.C.) — at the Belltower Church of St. Herman", titleRu: "Литургия — Введение во храм Пресвятой Богородицы (н. ст.) — в храме Прп. Германа" },
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "nov22",
    date: "November 22",
    dateISO: "2026-11-22",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 25th Sunday after Pentecost — Icon of the Mother of God \"She Who Is Quick to Hear\"; Holy Hierarch Nektarios of Aegina", titleRu: "Литургия — Неделя 25-я по Пятидесятнице — Иконы Божией Матери «Скоропослушница»; Свт. Нектария Эгинского" },
    ],
  },
  {
    id: "nov24",
    date: "November 24",
    dateISO: "2026-11-24",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Akathist before the icon of Our Most Holy Lady Theotokos \"Rescuer of the Perishing\"", titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "nov26",
    date: "November 26",
    dateISO: "2026-11-26",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "☩",
    slots: [
      { time: "10:00 AM", titleEn: "Moleben of Thanksgiving — American Thanksgiving Day; Beginning of the Nativity Fast (O.C.)", titleRu: "Благодарственный молебен — Американский День Благодарения; Начало Рождественского поста (ст. ст.)" },
    ],
  },
  {
    id: "nov28",
    date: "November 28",
    dateISO: "2026-11-28",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "nov29",
    date: "November 29",
    dateISO: "2026-11-29",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 26th Sunday after Pentecost", titleRu: "Литургия — Неделя 26-я по Пятидесятнице" },
    ],
  },
];
