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

/** August 2026 service calendar */
export const upcomingServices: ServiceDay[] = [
  {
    id: "aug1",
    date: "August 1",
    dateISO: "2026-08-01",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "aug2",
    date: "August 2",
    dateISO: "2026-08-02",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Glorious Prophet Elijah", titleRu: "Литургия — Славного Пророка Илии" },
    ],
  },
  {
    id: "aug4",
    date: "August 4",
    dateISO: "2026-08-04",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Akathist before the icon of Our Most Holy Lady Theotokos of Pochaiv", titleRu: "Акафист пред иконой Пресвятой Богородицы «Почаевская»" },
    ],
  },
  {
    id: "aug5",
    date: "August 5",
    dateISO: "2026-08-05",
    dayOfWeekEn: "Wednesday",
    dayOfWeekRu: "Среда",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Vespers (Confession)", titleRu: "Вечерня (исповедь)" },
    ],
  },
  {
    id: "aug6",
    date: "August 6",
    dateISO: "2026-08-06",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Transfiguration of Our Lord (N.C.) — Belltower Church of St. Herman — Blessing of Fruits", titleRu: "Литургия — Преображение Господне (Н.СТ.) — храм Прп. Германа — Освящение плодов" },
    ],
  },
  {
    id: "aug8",
    date: "August 8",
    dateISO: "2026-08-08",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "aug9",
    date: "August 9",
    dateISO: "2026-08-09",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Glorification of Venerable Herman of Alaska, Wonderworker of All America", titleRu: "Литургия — Прославление Прп. Германа Аляскинского, Всея Америки Чудотворца" },
    ],
  },
  {
    id: "aug11",
    date: "August 11",
    dateISO: "2026-08-11",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"', titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "aug14",
    date: "August 14",
    dateISO: "2026-08-14",
    dayOfWeekEn: "Friday",
    dayOfWeekRu: "Пятница",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Vespers (Confession)", titleRu: "Вечерня (исповедь)" },
    ],
  },
  {
    id: "aug15",
    date: "August 15",
    dateISO: "2026-08-15",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Dormition of the Mother of God (N.C.) — Belltower Church of St. Herman — Blessing of Flowers & Herbs", titleRu: "Литургия — Успение Пресвятой Богородицы (Н.СТ.) — храм Прп. Германа — Освящение цветов и трав" },
    ],
  },
  {
    id: "aug15-eve",
    date: "August 15",
    dateISO: "2026-08-15",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "aug16",
    date: "August 16",
    dateISO: "2026-08-16",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: 'Divine Liturgy — The Image of Our Lord Jesus Christ "Not-Made-by-Hands"', titleRu: "Литургия — Нерукотворного Образа Господа нашего Иисуса Христа" },
    ],
  },
  {
    id: "aug18",
    date: "August 18",
    dateISO: "2026-08-18",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "aug19",
    date: "August 19",
    dateISO: "2026-08-19",
    dayOfWeekEn: "Wednesday",
    dayOfWeekRu: "Среда",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Transfiguration of Our Lord (O.C.) — Blessing of Fruits", titleRu: "Литургия — Преображение Господне (СТ.СТ.) — Освящение плодов" },
    ],
  },
  {
    id: "aug22",
    date: "August 22",
    dateISO: "2026-08-22",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "aug23",
    date: "August 23",
    dateISO: "2026-08-23",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 12th Sunday after Pentecost", titleRu: "Литургия — Неделя 12-я по Пятидесятнице" },
    ],
  },
  {
    id: "aug25",
    date: "August 25",
    dateISO: "2026-08-25",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"', titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "aug27",
    date: "August 27",
    dateISO: "2026-08-27",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "aug28",
    date: "August 28",
    dateISO: "2026-08-28",
    dayOfWeekEn: "Friday",
    dayOfWeekRu: "Пятница",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Dormition of the Mother of God (O.C.) — Blessing of Flowers & Herbs", titleRu: "Литургия — Успение Пресвятой Богородицы (СТ.СТ.) — Освящение цветов и трав" },
    ],
  },
  {
    id: "aug29",
    date: "August 29",
    dateISO: "2026-08-29",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "aug30",
    date: "August 30",
    dateISO: "2026-08-30",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Righteous Prince Alexander Nevsky", titleRu: "Литургия — Благоверного Князя Александра Невского" },
    ],
  },
];
