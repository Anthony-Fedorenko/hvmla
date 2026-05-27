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

/** May–June 2026 service calendar */
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
  {
    id: "jun1",
    date: "June 1",
    dateISO: "2026-06-01",
    dayOfWeekEn: "Monday",
    dayOfWeekRu: "Понедельник",
    icon: "☩",
    slots: [
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy & Sisterhood Moleben — Day of the Holy Spirit",
        titleRu:
          "Божественная Литургия и Молебен сестричества — День Святого Духа",
      },
    ],
  },
  {
    id: "jun2",
    date: "June 2",
    dateISO: "2026-06-02",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn: "Vespers — Vladimir Icon of the Mother of God",
        titleRu: "Вечерня — Владимирской иконы Божией Матери",
      },
    ],
  },
  {
    id: "jun3",
    date: "June 3",
    dateISO: "2026-06-03",
    dayOfWeekEn: "Wednesday",
    dayOfWeekRu: "Среда",
    icon: "☩",
    slots: [
      {
        time: "9:30 AM",
        titleEn: "Confession (Belltower Church)",
        titleRu: "Исповедь (храм Прп. Германа)",
      },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy",
        titleRu: "Божественная Литургия",
      },
    ],
  },
  {
    id: "jun6",
    date: "June 6",
    dateISO: "2026-06-06",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      {
        time: "5:00 PM",
        titleEn: "Vigil (Confession)",
        titleRu: "Всенощная (Исповедь)",
      },
    ],
  },
  {
    id: "jun7",
    date: "June 7",
    dateISO: "2026-06-07",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy — All Saints",
        titleRu: "Литургия — Всех Святых",
      },
    ],
  },
  {
    id: "jun9",
    date: "June 9",
    dateISO: "2026-06-09",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn:
          'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"',
        titleRu:
          "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»",
      },
    ],
  },
  {
    id: "jun10",
    date: "June 10",
    dateISO: "2026-06-10",
    dayOfWeekEn: "Wednesday",
    dayOfWeekRu: "Среда",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn: "Vespers — Holy Hierarch Luke of Simferopol",
        titleRu:
          "Вечерня — Свт. Луки исповедника, Архиепископа Симферопольского",
      },
    ],
  },
  {
    id: "jun11",
    date: "June 11",
    dateISO: "2026-06-11",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "☩",
    slots: [
      {
        time: "9:30 AM",
        titleEn: "Confession (Belltower Church)",
        titleRu: "Исповедь (храм Прп. Германа)",
      },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy",
        titleRu: "Божественная Литургия",
      },
    ],
  },
  {
    id: "jun13",
    date: "June 13",
    dateISO: "2026-06-13",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      {
        time: "5:00 PM",
        titleEn: "Vigil (Confession)",
        titleRu: "Всенощная (Исповедь)",
      },
    ],
  },
  {
    id: "jun14",
    date: "June 14",
    dateISO: "2026-06-14",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy — All Saints of North America",
        titleRu: "Литургия — Всех Святых в Земле Американской Просиявших",
      },
    ],
  },
  {
    id: "jun16",
    date: "June 16",
    dateISO: "2026-06-16",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn:
          'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"',
        titleRu:
          "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»",
      },
    ],
  },
  {
    id: "jun20",
    date: "June 20",
    dateISO: "2026-06-20",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      {
        time: "5:00 PM",
        titleEn: "Vigil (Confession)",
        titleRu: "Всенощная (Исповедь)",
      },
    ],
  },
  {
    id: "jun21",
    date: "June 21",
    dateISO: "2026-06-21",
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
    id: "jun23",
    date: "June 23",
    dateISO: "2026-06-23",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn:
          'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"',
        titleRu:
          "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»",
      },
    ],
  },
  {
    id: "jun27",
    date: "June 27",
    dateISO: "2026-06-27",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      {
        time: "5:00 PM",
        titleEn: "Vigil (Confession)",
        titleRu: "Всенощная (Исповедь)",
      },
    ],
  },
  {
    id: "jun28",
    date: "June 28",
    dateISO: "2026-06-28",
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
    id: "jun30",
    date: "June 30",
    dateISO: "2026-06-30",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn:
          'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"',
        titleRu:
          "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»",
      },
    ],
  },
];
