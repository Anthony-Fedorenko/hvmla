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

/** Late August – September 2026 service calendar */
export const upcomingServices: ServiceDay[] = [
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
  {
    id: "sep1",
    date: "September 1",
    dateISO: "2026-09-01",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"', titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "sep3",
    date: "September 3",
    dateISO: "2026-09-03",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to Holy Hierarch Nicholas the Wonderworker, Archbishop of Myra in Lycia", titleRu: "Молебен святителю Николаю Чудотворцу, архиепископу Мирликийскому" },
    ],
  },
  {
    id: "sep5",
    date: "September 5",
    dateISO: "2026-09-05",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "sep6",
    date: "September 6",
    dateISO: "2026-09-06",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 14th Sunday after Pentecost", titleRu: "Литургия — Неделя 14-я по Пятидесятнице" },
    ],
  },
  {
    id: "sep7",
    date: "September 7",
    dateISO: "2026-09-07",
    dayOfWeekEn: "Monday",
    dayOfWeekRu: "Понедельник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Vespers (Confession) — Nativity of the Theotokos (N.C.) — Belltower Church of St. Herman", titleRu: "Вечерня (исповедь) — Рождество Пресвятой Богородицы (Н.СТ.) — храм Прп. Германа" },
    ],
  },
  {
    id: "sep8",
    date: "September 8",
    dateISO: "2026-09-08",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Nativity of the Theotokos (N.C.) — Belltower Church of St. Herman", titleRu: "Литургия — Рождество Пресвятой Богородицы (Н.СТ.) — храм Прп. Германа" },
    ],
  },
  {
    id: "sep8-eve",
    date: "September 8",
    dateISO: "2026-09-08",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"', titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "sep10",
    date: "September 10",
    dateISO: "2026-09-10",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "12:00 PM", titleEn: "Moleben — Venerable Job of Pochaiv", titleRu: "Молебен — Прп. Иова Почаевского" },
    ],
  },
  {
    id: "sep10-eve",
    date: "September 10",
    dateISO: "2026-09-10",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Vespers (Confession) — The Beheading of the Holy Glorious Prophet, Forerunner, and Baptist John — Belltower Church of St. Herman", titleRu: "Вечерня (исповедь) — Усекновение главы Пророка, Предтечи и Крестителя Господня Иоанна — храм Прп. Германа" },
    ],
  },
  {
    id: "sep11",
    date: "September 11",
    dateISO: "2026-09-11",
    dayOfWeekEn: "Friday",
    dayOfWeekRu: "Пятница",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — The Beheading of the Holy Glorious Prophet, Forerunner, and Baptist John — Belltower Church of St. Herman", titleRu: "Литургия — Усекновение главы Пророка, Предтечи и Крестителя Господня Иоанна — храм Прп. Германа" },
    ],
  },
  {
    id: "sep12",
    date: "September 12",
    dateISO: "2026-09-12",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "sep13",
    date: "September 13",
    dateISO: "2026-09-13",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 15th Sunday after Pentecost", titleRu: "Литургия — Неделя 15-я по Пятидесятнице" },
    ],
  },
  {
    id: "sep13-eve",
    date: "September 13",
    dateISO: "2026-09-13",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "✦",
    slots: [
      { time: "3:00 PM", titleEn: "Vespers (Confession) — Exaltation of the Precious Cross (N.C.) — Belltower Church of St. Herman", titleRu: "Вечерня (исповедь) — Воздвижение Честного и Животворящего Креста Господня (Н.СТ.) — храм Прп. Германа" },
    ],
  },
  {
    id: "sep14",
    date: "September 14",
    dateISO: "2026-09-14",
    dayOfWeekEn: "Monday",
    dayOfWeekRu: "Понедельник",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Exaltation of the Precious Cross (N.C.) — Belltower Church of St. Herman", titleRu: "Литургия — Воздвижение Честного и Животворящего Креста Господня (Н.СТ.) — храм Прп. Германа" },
    ],
  },
  {
    id: "sep15",
    date: "September 15",
    dateISO: "2026-09-15",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"', titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "sep17",
    date: "September 17",
    dateISO: "2026-09-17",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to Holy Hierarch Nicholas the Wonderworker, Archbishop of Myra in Lycia", titleRu: "Молебен святителю Николаю Чудотворцу, архиепископу Мирликийскому" },
    ],
  },
  {
    id: "sep19",
    date: "September 19",
    dateISO: "2026-09-19",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "sep20",
    date: "September 20",
    dateISO: "2026-09-20",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 16th Sunday after Pentecost", titleRu: "Литургия — Неделя 16-я по Пятидесятнице" },
    ],
  },
  {
    id: "sep20-eve",
    date: "September 20",
    dateISO: "2026-09-20",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "✦",
    slots: [
      { time: "3:00 PM", titleEn: "Vigil (Confession) — Nativity of the Theotokos (O.C.)", titleRu: "Всенощная (исповедь) — Рождество Пресвятой Богородицы (СТ.СТ.)" },
    ],
  },
  {
    id: "sep21",
    date: "September 21",
    dateISO: "2026-09-21",
    dayOfWeekEn: "Monday",
    dayOfWeekRu: "Понедельник",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Nativity of the Theotokos (O.C.)", titleRu: "Литургия — Рождество Пресвятой Богородицы (СТ.СТ.)" },
    ],
  },
  {
    id: "sep22",
    date: "September 22",
    dateISO: "2026-09-22",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"', titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
  {
    id: "sep24",
    date: "September 24",
    dateISO: "2026-09-24",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: "Moleben to Holy Hierarch Nicholas the Wonderworker, Archbishop of Myra in Lycia", titleRu: "Молебен святителю Николаю Чудотворцу, архиепископу Мирликийскому" },
    ],
  },
  {
    id: "sep26",
    date: "September 26",
    dateISO: "2026-09-26",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "sep27",
    date: "September 27",
    dateISO: "2026-09-27",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 17th Sunday after Pentecost — Exaltation of the Precious Cross (O.C.)", titleRu: "Литургия — Неделя 17-я по Пятидесятнице — Воздвижение Честного и Животворящего Креста Господня (СТ.СТ.)" },
    ],
  },
  {
    id: "sep29",
    date: "September 29",
    dateISO: "2026-09-29",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      { time: "7:00 PM", titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"', titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»" },
    ],
  },
];
