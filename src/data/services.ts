export interface TimeSlot {
  time: string;
  titleEn: string;
  titleRu: string;
}

export interface ServiceDay {
  id: string;
  /** Short date label, e.g. "July 4" */
  date: string;
  /** ISO date string for filtering, e.g. "2026-07-04" */
  dateISO: string;
  dayOfWeekEn: string;
  dayOfWeekRu: string;
  icon: string;
  slots: TimeSlot[];
  /** If true, rendered as an informational notice, not a service */
  isNotice?: boolean;
}

/** July 2026 service calendar */
export const upcomingServices: ServiceDay[] = [
  {
    id: "jul4",
    date: "July 4",
    dateISO: "2026-07-04",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "jul5",
    date: "July 5",
    dateISO: "2026-07-05",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — 5th Sunday after Pentecost", titleRu: "Литургия — Неделя 5-я по Пятидесятнице" },
    ],
  },
  {
    id: "retreat",
    date: "July 6–8",
    dateISO: "2026-07-06",
    dayOfWeekEn: "Monday–Wednesday",
    dayOfWeekRu: "Понедельник–Среда",
    icon: "ℹ",
    isNotice: true,
    slots: [
      {
        time: "",
        titleEn: "Clergy Attending Deanery Retreat in Carlsbad",
        titleRu: "Съезд духовенства благочиния в Карлсбаде",
      },
    ],
  },
  {
    id: "jul11",
    date: "July 11",
    dateISO: "2026-07-11",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "jul12",
    date: "July 12",
    dateISO: "2026-07-12",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy — The Glorious and All-Praised Apostles Peter & Paul",
        titleRu: "Литургия — Славных и Всехвальных Первоверховных Апостолов Петра и Павла",
      },
    ],
  },
  {
    id: "jul14",
    date: "July 14",
    dateISO: "2026-07-14",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"',
        titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»",
      },
    ],
  },
  {
    id: "jul18",
    date: "July 18",
    dateISO: "2026-07-18",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "jul19",
    date: "July 19",
    dateISO: "2026-07-19",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy — Fathers of the First Six Ecumenical Councils",
        titleRu: "Литургия — Память Святых Отцев Шести Вселенских Соборов",
      },
    ],
  },
  {
    id: "jul21",
    date: "July 21",
    dateISO: "2026-07-21",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"',
        titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»",
      },
    ],
  },
  {
    id: "jul23",
    date: "July 23",
    dateISO: "2026-07-23",
    dayOfWeekEn: "Thursday",
    dayOfWeekRu: "Четверг",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn: "Vespers (Confession) — Equal-to-the-Apostles Great Princess Olga",
        titleRu: "Вечерня (исповедь) — Равноапостольной Великой Княгини Ольги",
      },
    ],
  },
  {
    id: "jul24",
    date: "July 24",
    dateISO: "2026-07-24",
    dayOfWeekEn: "Friday",
    dayOfWeekRu: "Пятница",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession — Belltower Church of St. Herman", titleRu: "Исповедь — храм Прп. Германа" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Belltower Church of St. Herman", titleRu: "Литургия — храм Прп. Германа" },
    ],
  },
  {
    id: "jul25",
    date: "July 25",
    dateISO: "2026-07-25",
    dayOfWeekEn: "Saturday",
    dayOfWeekRu: "Суббота",
    icon: "✦",
    slots: [
      { time: "5:00 PM", titleEn: "Vigil (Confession)", titleRu: "Всенощная (исповедь)" },
    ],
  },
  {
    id: "jul26",
    date: "July 26",
    dateISO: "2026-07-26",
    dayOfWeekEn: "Sunday",
    dayOfWeekRu: "Воскресенье",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession", titleRu: "Исповедь" },
      {
        time: "10:00 AM",
        titleEn: "Divine Liturgy — Righteous Jacob of Alaska",
        titleRu: "Литургия — Праведного Иакова Аляскинского",
      },
    ],
  },
  {
    id: "jul27",
    date: "July 27",
    dateISO: "2026-07-27",
    dayOfWeekEn: "Monday",
    dayOfWeekRu: "Понедельник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn: "Vespers (Confession) — Equal-to-the-Apostles Great Prince Vladimir — Belltower Church of St. Herman",
        titleRu: "Вечерня (исповедь) — Равноапостольного Великого Князя Владимира — храм Прп. Германа",
      },
    ],
  },
  {
    id: "jul28",
    date: "July 28",
    dateISO: "2026-07-28",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "☩",
    slots: [
      { time: "9:30 AM", titleEn: "Confession — Belltower Church of St. Herman", titleRu: "Исповедь — храм Прп. Германа" },
      { time: "10:00 AM", titleEn: "Divine Liturgy — Belltower Church of St. Herman", titleRu: "Литургия — храм Прп. Германа" },
    ],
  },
  {
    id: "jul28-eve",
    date: "July 28",
    dateISO: "2026-07-28",
    dayOfWeekEn: "Tuesday",
    dayOfWeekRu: "Вторник",
    icon: "✦",
    slots: [
      {
        time: "7:00 PM",
        titleEn: 'Akathist before the icon of Our Most Holy Lady Theotokos "Rescuer of the Perishing"',
        titleRu: "Акафист пред иконой Пресвятой Богородицы «Взыскание погибших»",
      },
    ],
  },
];
