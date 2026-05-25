export interface TimeSlot {
  time: string;
  titleEn: string;
  titleRu: string;
}

export interface ServiceDay {
  id: string;
  /** Short date label, e.g. "May 16" */
  date: string;
  /** ISO date string for filtering, e.g. "2026-05-16" */
  dateISO: string;
  dayOfWeekEn: string;
  dayOfWeekRu: string;
  icon: string;
  slots: TimeSlot[];
}

/** May 2026 service calendar */
export const upcomingServices: ServiceDay[] = [
  {
    id: "may16",
    date: "May 16",
    dateISO: "2026-05-16",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      {
        time: "5:00 PM",
        titleEn: "Vigil (Confession)",
        titleRu: "Всенощное бдение (Исповедь)",
      },
    ],
  },
  {
    id: "may17",
    date: "May 17",
    dateISO: "2026-05-17",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy",
        titleRu: "Божественная Литургия",
      },
    ],
  },
  {
    id: "may19",
    date: "May 19",
    dateISO: "2026-05-19",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [{ time: "7:00 PM", titleEn: "Vespers", titleRu: "Вечерня" }],
  },
  {
    id: "may20",
    date: "May 20",
    dateISO: "2026-05-20",
    dayOfWeekEn: "Wednesday",
    dayOfWeekRu: "Среда",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy",
        titleRu: "Божественная Литургия",
      },
      {
        time: "7:00 PM",
        titleEn: "Vigil (Confession)",
        titleRu: "Всенощное бдение (Исповедь)",
      },
    ],
  },
  {
    id: "may21",
    date: "May 21",
    dateISO: "2026-05-21",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy",
        titleRu: "Божественная Литургия",
      },
    ],
  },
  {
    id: "may23",
    date: "May 23",
    dateISO: "2026-05-23",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      {
        time: "5:00 PM",
        titleEn: "Vigil (Confession)",
        titleRu: "Всенощное бдение (Исповедь)",
      },
    ],
  },
  {
    id: "may24",
    date: "May 24",
    dateISO: "2026-05-24",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy",
        titleRu: "Божественная Литургия",
      },
    ],
  },
  {
    id: "may26",
    date: "May 26",
    dateISO: "2026-05-26",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn:
          'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"',
        titleRu:
          "Акафист перед иконой Пресвятой Богородицы «Взыскание погибших»",
      },
    ],
  },
  {
    id: "may30",
    date: "May 30",
    dateISO: "2026-05-30",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "1:00 PM", titleEn: "Panikhida", titleRu: "Панихида" },
      {
        time: "5:00 PM",
        titleEn: "Vigil (Confession)",
        titleRu: "Всенощное бдение (Исповедь)",
      },
    ],
  },
  {
    id: "may31",
    date: "May 31",
    dateISO: "2026-05-31",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy",
        titleRu: "Божественная Литургия",
      },
      {
        time: "After Liturgy",
        titleEn: "Vespers with Kneeling Prayers",
        titleRu: "Вечерня с коленопреклонными молитвами",
      },
    ],
  },
];
