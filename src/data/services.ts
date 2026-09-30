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

/** October 2026 service calendar */
export const upcomingServices: ServiceDay[] = [
  {
    id: "oct1",
    date: "October 1",
    dateISO: "2026-10-01",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to Holy Hierarch Nicholas the Wonderworker, Archbishop of Myra in Lycia", titleRu: "Молебен святителю Николаю Чудотворцу, архиепископу Мирликийскому" },
    ],
  },
  {
    id: "oct3",
    date: "October 3",
    dateISO: "2026-10-03",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "oct4",
    date: "October 4",
    dateISO: "2026-10-04",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 18th Sunday after Pentecost", titleRu: "Литургия — Неделя 18-я по Пятидесятнице" },
    ],
  },
  {
    id: "oct6",
    date: "October 6",
    dateISO: "2026-10-06",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"', titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "oct7",
    date: "October 7",
    dateISO: "2026-10-07",
    dayOfWeekEn: "Wednesday",
    dayOfWeekRu: "Среда",
    icon: "✦",
    slots: [
      { time: "10:00 PM", titleEn: "Vigil (Confession) — Venerable Sergius of Radonezh", titleRu: "Всенощная (исповедь) — Прп. Сергия Радонежского" },
    ],
  },
  {
    id: "oct8",
    date: "October 8",
    dateISO: "2026-10-08",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "☩",
    slots: [
      { time: "12:00 AM", titleEn: "Night Divine Liturgy — Venerable Sergius of Radonezh", titleRu: "Ночная Литургия — Прп. Сергия Радонежского" },
    ],
  },
  {
    id: "oct8-eve",
    date: "October 8",
    dateISO: "2026-10-08",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to Holy Hierarch Nicholas the Wonderworker, Archbishop of Myra in Lycia", titleRu: "Молебен святителю Николаю Чудотворцу, архиепископу Мирликийскому" },
    ],
  },
  {
    id: "oct10",
    date: "October 10",
    dateISO: "2026-10-10",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "oct11",
    date: "October 11",
    dateISO: "2026-10-11",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 19th Sunday after Pentecost — Commemoration of the Holy Fathers of the Seventh Ecumenical Council", titleRu: "Литургия — Неделя 19-я по Пятидесятнице — Память святых отцов VII Вселенского Собора" },
    ],
  },
  {
    id: "oct13",
    date: "October 13",
    dateISO: "2026-10-13",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Vigil (Confession) — Protection of the Most Holy Theotokos", titleRu: "Всенощная (исповедь) — Покров Пресвятой Богородицы" },
    ],
  },
  {
    id: "oct14",
    date: "October 14",
    dateISO: "2026-10-14",
    dayOfWeekEn: "Wednesday",
    dayOfWeekRu: "Среда",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Protection of the Most Holy Theotokos", titleRu: "Литургия — Покров Пресвятой Богородицы" },
    ],
  },
  {
    id: "oct15",
    date: "October 15",
    dateISO: "2026-10-15",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to Holy Hierarch Nicholas the Wonderworker, Archbishop of Myra in Lycia", titleRu: "Молебен святителю Николаю Чудотворцу, архиепископу Мирликийскому" },
    ],
  },
  {
    id: "oct17",
    date: "October 17",
    dateISO: "2026-10-17",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "oct18",
    date: "October 18",
    dateISO: "2026-10-18",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 20th Sunday after Pentecost", titleRu: "Литургия — Неделя 20-я по Пятидесятнице" },
    ],
  },
  {
    id: "oct20-23",
    date: "October 20–23",
    dateISO: "2026-10-20",
    dayOfWeekEn: "",
    dayOfWeekRu: "",
    icon: "✦",
    isNotice: true,
    slots: [
      { time: "", titleEn: "Diocesan Assembly in Colorado Springs", titleRu: "Епархиальное собрание в Колорадо" },
    ],
  },
  {
    id: "oct24",
    date: "October 24",
    dateISO: "2026-10-24",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "oct25",
    date: "October 25",
    dateISO: "2026-10-25",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 21st Sunday after Pentecost", titleRu: "Литургия — Неделя 21-я по Пятидесятнице" },
    ],
  },
  {
    id: "oct26",
    date: "October 26",
    dateISO: "2026-10-26",
    dayOfWeekEn: "Monday",
    dayOfWeekRu: "Понедельник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Vigil (Confession) — Martyrs Nazarius, Gervasius, Protasius & Celsius", titleRu: "Всенощная (исповедь) — Мчч. Назария, Гервасия, Протасия, Келсия" },
    ],
  },
  {
    id: "oct27",
    date: "October 27",
    dateISO: "2026-10-27",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Martyrs Nazarius, Gervasius, Protasius & Celsius", titleRu: "Литургия — Мчч. Назария, Гервасия, Протасия, Келсия" },
    ],
  },
  {
    id: "oct27-eve",
    date: "October 27",
    dateISO: "2026-10-27",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"', titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "oct29",
    date: "October 29",
    dateISO: "2026-10-29",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to Holy Hierarch Nicholas the Wonderworker, Archbishop of Myra in Lycia", titleRu: "Молебен святителю Николаю Чудотворцу, архиепископу Мирликийскому" },
    ],
  },
  {
    id: "oct31",
    date: "October 31",
    dateISO: "2026-10-31",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
];
