export interface NewsItem {
  id: string;
  date: string;
  titleEn: string;
  titleRu: string;
  summaryEn: string;
  summaryRu: string;
  bodyEn: string;
  bodyRu: string;
  photos?: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    date: "July 6, 2026",
    titleEn: "Clergy Retreat of the Pacific Southwest Deanery",
    titleRu: "Духовенский Съезд Тихоокеанско-Юго-Западного Благочиния",
    summaryEn:
      "With the blessing and under the presidency of His Grace Bishop Vasiliy of San Francisco and the West, the clergy of the Pacific Southwest Deanery of the Diocese of the West are participating in their annual three-day clergy retreat, taking place July 6–8 at the historic Mission San Luis Rey in Oceanside, California.",
    summaryRu:
      "С благословения и под председательством Преосвященнейшего Епископа Василия Сан-Францисского и Западного, духовенство Тихоокеанско-Юго-Западного Благочиния Западной Епархии принимает участие в ежегодном трёхдневном духовенском съезде, проходящем 6–8 июля на территории исторической Миссии Сан-Луис-Рей в Окнсайде, Калифорния.",
    bodyEn:
      "The retreat brings together clergy from throughout the deanery for prayer, fellowship, pastoral discussion, and spiritual renewal. The program includes presentations, discussions on pastoral ministry, and opportunities to strengthen the bonds of brotherhood among the clergy.\n\nThe retreat will conclude with the celebration of the Divine Liturgy on Wednesday, July 8, at St. Katherine Orthodox Church in Carlsbad, California, presided over by His Grace Bishop Vasiliy.\n\nPlease keep our clergy and bishop in your prayers as they continue their work of serving Christ and His Holy Church.",
    bodyRu:
      "Съезд собирает духовенство со всего благочиния для молитвы, братского общения, пастырских дискуссий и духовного обновления. Программа включает доклады, обсуждения пастырского служения и возможности укрепить узы братства между духовенством.\n\nСъезд завершится совершением Божественной Литургии в среду, 8 июля, в Свято-Екатерининском православном храме в Карлсбаде, Калифорния, под председательством Преосвященнейшего Епископа Василия.\n\nПросим вас молиться о нашем духовенстве и архипастыре, пока они продолжают своё служение Христу и Его Святой Церкви.",
    photos: [
      "/news_1.jpg",
      "/news_2.jpg",
      "/news_3.jpg",
      "/news_4.jpg",
      "/news_5.jpg",
      "/news_6.jpg",
      "/news_7.jpg",
      "/news_8.jpg",
      "/news_9.jpg",
    ],
  },
];
