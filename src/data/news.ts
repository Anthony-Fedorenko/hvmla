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
  {
    id: "n2",
    date: "May 31, 2026",
    titleEn: "Sunday Parish School — End of Year 2025–2026",
    titleRu: "Приходская Воскресная Школа — Конец Учебного Года 2025–2026",
    summaryEn:
      "May was the last month of the school year at our Holy Virgin Russian Orthodox Parish School.",
    summaryRu:
      "Май стал последним месяцем учебного года в нашей Приходской Воскресной Школе Святой Девы Марии.",
    bodyEn:
      "On May 24, the last day of classes for the school's core subjects took place. On the same day, the youngest group, “Apprentices,” held an open lesson-game titled “What? Where? When?” dedicated to the travels of Ivashka the badger through various countries. The students' parents were invited to attend the lesson.\n\nAlso on May 24, the feast day of Saints Cyril and Methodius, Equal-to-the-Apostles, the Teachers of the Slavs, following the Divine Liturgy, our clergy presented the children with certificates of completion for the 2025–2026 academic year. Students who completed the course “Fundamentals of the Orthodox Faith” were presented with certificates of completion.\n\nOn May 31, Holy Trinity Day, the long-awaited musical performance Puss in Boots took place, becoming a true celebration for children, parents, and parishioners. Before the performance began, a festive lunch was organized for the children, and after the show, the cathedral’s rector, Father Nazariy, addressed the students, teachers, and guests with congratulations, words of gratitude, and pastoral guidance.\n\nWe wholeheartedly thank the teachers for their many months of hard work, our young performers for their dedication, talent, and wonderful performance, as well as all the parishioners who came to support our children.\n\nNow the children’s summer vacation begins. We wish everyone a restful break, new experiences, and God’s blessing. Classes at our school will resume in September.",
    bodyRu:
      "24 мая состоялось последнее занятие по основным предметам. В тот же день младшая группа «Ученики» провела открытый урок-игру «Что? Где? Когда?», посвящённый путешествиям ёжика Ивашки по разным странам. На урок были приглашены родители учеников.\n\nТакже 24 мая, в день памяти святых равноапостольных Кирилла и Мефодия, Учителей Словенских, после Божественной Литургии духовенство нашего прихода вручило детям свидетельства об окончании 2025–2026 учебного года. Учащиеся, завершившие курс «Основы Православной Веры», получили свидетельства об его прохождении.\n\n31 мая, в день Святой Троицы, состоялся долгожданный музыкальный спектакль «Кот в сапогах», ставший настоящим праздником для детей, родителей и прихожан. Перед началом представления для детей был организован праздничный обед, а после спектакля настоятель собора, отец Назарий, обратился к ученикам, учителям и гостям с поздравлениями, словами благодарности и пастырским напутствием.\n\nОт всего сердца благодарим учителей за многомесячный самоотверженный труд, наших юных артистов за преданность, талант и замечательное выступление, а также всех прихожан, пришедших поддержать наших детей.\n\nТеперь начинаются летние каникулы. Желаем всем хорошего отдыха, новых впечатлений и Божьего благословения. Занятия в нашей школе возобновятся в сентябре.",
  },
];
