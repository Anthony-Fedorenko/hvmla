import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./History.module.css";

interface PhotoProps {
  src: string;
  caption: string;
  side?: "left" | "right" | "center";
}

function Photo({ src, caption, side = "right" }: PhotoProps) {
  const cls =
    side === "left"
      ? styles.figLeft
      : side === "center"
        ? styles.figCenter
        : styles.figRight;
  return (
    <figure className={cls}>
      <img src={src} alt={caption} loading="lazy" />
      <figcaption className={styles.figcaption}>{caption}</figcaption>
    </figure>
  );
}

export default function History() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("about.historyTitle")} | Holy Virgin Mary Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("about.historyTitle")}</h1>
        </div>
      </div>

      {/* ── History: Origins through Lototsky ────────────────── */}
      <div className="section">
        <div className="container">
          <div className={styles.prose}>
            <Photo
              src="/photo-1.jpg"
              caption="Los Angeles, 1920s (source: commons.m.wikimedia.org)"
              side="right"
            />

            <p>
              The October Revolution of 1917, the Civil War of 1917–1922, and
              Bolshevik persecutions for political convictions and religious
              faith forced many subjects of the crumbling Russian Empire to seek
              refuge in various parts of the world, many landing here in the
              United States of America.
            </p>
            <p>
              Numerous such immigrants arrived in the rapidly developing
              industrial city of Los Angeles, California. They took on various
              jobs to make a living. A former tsarist officer became a doorman,
              a university professor worked as a taxi driver or a factory
              laborer, a music teacher found employment as a seamstress or a
              caregiver. Not everyone could work in their trained profession,
              yet hospitable Los Angeles provided them with shelter and
              sustenance and opportunity.
            </p>
            <p>
              No believer is unfamiliar with the words of Christ the Savior:
              "Man shall not live by bread alone, but by every word that
              proceeds from the mouth of God" (Matt. 4:4). No matter the
              difficulties an Orthodox Christian faces, he always seeks the
              church, where the Word of God is proclaimed, where the Divine
              Liturgy is celebrated, and where the central Mystery—the Holy
              Eucharist—is offered.
            </p>
            <p>
              At the beginning of the 20th century, Russian Orthodox churches on
              the West Coast of the United States existed only in two
              cities—Seattle and San Francisco—along with a small wooden church
              located 80 km from San Francisco in the historic fortified
              settlement of Fort Ross. Initially, the new immigrants attended
              Orthodox churches of other ethnic communities, though few in
              number then. Even so, they longed to hear the Gospel, the hymns,
              and the prayers in the familiar manner of their childhood.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-2.jpg"
              caption="Archpriest Paul Razoumov (the leader of the new congregation in 1923–1925, he is on the right) the first time he came to the United States"
              side="right"
            />

            <p>
              In Los Angeles, Russian immigrants initially participated in
              services at the Serbian church. Occasionally, at the initiative of
              E. A. Beglyarova, secretary of the Russian department of the
              International Institute, they gathered at the Christian Youth
              Club. It was there, in the autumn of 1922, that the idea of
              establishing their own parish arose among the Russian-speaking
              immigrants. To make this idea a reality, an organizing committee
              was formed in November. Professor V. L. Maleev was elected as its
              chairman. This committee became the foundation of the future
              parish, focusing first on finding a priest and a potential place
              for worship.
            </p>
            <p>
              The first spiritual leader of the new Orthodox community in 1923
              was the priest, Father Pavel Razumov, who had recently arrived
              from China.
            </p>
            <p>
              With the gracious permission of the head of the Episcopal Church
              of Los Angeles, Bishop William Stevens, the first Divine Liturgy
              was celebrated in February 1923 in the vacant building of an
              Episcopal church on Wilson Street. The basement of the church was
              actually a spacious hall, which the newly formed parish used for
              gatherings and fellowship.
            </p>
            <p>
              Through the dedicated efforts of Fr. Pavel's wife, Anna Razumova,
              the Ladies' Committee was formed—the precursor of what would
              become the Sisterhood of the Holy Trinity. To this day, the
              sisterhood continues the original mission of the Ladies'
              Committee: maintaining order and cleanliness in the church,
              acquiring icons and vestments, and ensuring the beauty of the
              services and the adornment of the temple, and preparing fellowship
              meals for parishioners and visitors. Thus, around the Episcopal
              church and its adjoining hall—granted in perpetual free use to the
              Russian community—the parish's spiritual and cultural life began
              to take shape.
            </p>

            <div className={styles.clearfix} />

            <Photo src="/photo-3.jpg" caption="A. Tolubeyev" side="left" />

            <p>
              The impetus for building a church of their own came from a
              generous financial collection after the Paschal service on April
              27, 1924. The funds raised were sufficient for the first payment
              toward the purchase of two plots of land on credit in a then-new
              district near Ramona Boulevard in east Los Angeles. Some thought
              it was too far for most parishioners, yet they agreed that
              purchasing the land could serve as a form of savings for the
              future. And so it proved to be.
            </p>
            <p>
              By 1927, the debt for both plots had been paid off. The proceeds
              from their sale were used at the end of 1927 to acquire land on
              Micheltorena Street—a location that three years earlier had seemed
              beyond the parish's reach. That same year, Alexander Tolubeyev, an
              art director working at several Hollywood studios, was elected
              chairman of the church construction committee.
            </p>
            <p>
              Using his own sketch of a church set design for the Hollywood
              silent-film <em>Cossacks</em>, he proposed a plan for the future
              church in the style of 13th–14th century Pskov architecture in
              Russia.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-4.jpg"
              caption="Beginning the construction of the church, March 1928"
              side="right"
            />
            <Photo
              src="/photo-5.jpg"
              caption="The church in the early months of its existence"
              side="left"
            />

            <p>
              On July 22, 1928, the church was solemnly consecrated in honor of
              the Icon of the Mother of God "Rescuer of the Perishing." The
              consecration service was performed by Metropolitan Platon
              (Rozhdestvensky) of New York, with Bishop Alexis (Panteleyev) of
              San Francisco concelebrating.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-6.jpg"
              caption="After the Consecration of the church, July 22, 1928"
              side="center"
            />

            <Photo
              src="/photo-7.jpg"
              caption="Archpriest Mikhail Lototsky (rector in 1925–1931, the priest on the far right)"
              side="right"
            />

            <p>
              The first rector of the parish was Archpriest Mikhail Lototsky. At
              that time also, the sisterhood, then still known as the "Women's
              Aid Society," received its official designation and status.
            </p>

            <div className={styles.clearfix} />
          </div>
        </div>
      </div>

      {/* ── About the Icon ───────────────────────────────────── */}
      <div className="section section--gray">
        <div className="container">
          <div className={styles.prose}>
            <h2 className={styles.sectionTitle}>
              About the Icon of the Mother of God, "Rescuer of the Perishing"
            </h2>

            <Photo
              src="/photo-8.jpg"
              caption="View of the Holy Virgin Mary church from Micheltorena Street in the first years after construction"
              side="right"
            />

            <p>
              One may ask, why name a church after an icon named 'Rescuer of the
              Perishing'? There are no reliable historical records regarding the
              origin of the icon known as "Rescuer of the Perishing." However,
              several wonderworking icons bearing this title are known, through
              which the Mother of God has manifested Her mercy to those standing
              on the threshold of spiritual or physical ruin.
            </p>
            <p>
              The name of this icon, "Rescuer of the Perishing," is rooted in an
              ancient account,{" "}
              <em>
                The Repentance of Theophilus, the Steward of the Church in the
                City of Adana.
              </em>{" "}
              The narrative, dating back to the fourth century, tells of a
              monastic steward named Theophilus, who, having been slandered and
              unjustly dismissed from his position, murmured against the Lord
              and, in his despair, entered into a pact with the devil, signing a
              covenant with him. However, overcome with remorse for his
              apostasy, Theophilus unceasingly entreated the Mother of God for
              forgiveness, calling upon Her as "Rescuer of the Perishing." His
              fervent supplications were heard: the Most Holy Theotokos,
              declaring his sins forgiven, restored the signed covenant to him.
            </p>
            <p>
              This account became known in Russia in the 17th century, and in
              the following century, several wonderworking icons of the
              Theotokos bearing the title "Rescuer of the Perishing" were
              glorified.
            </p>
            <p>
              The icon of the Mother of God, "Rescuer of the Perishing," painted
              by the first parishioners of Holy Virgin Cathedral in Los Angeles,
              follows the model of the wonderworking image from the Church of
              the Nativity of Christ in Palashi, Moscow. This icon, executed in
              oil in the traditions of Western European painting, dates to 1802.
              A distinctive feature of the Moscow image is that the hair of the
              Mother of God is uncovered and falls freely over Her shoulders.
              The Divine Infant presses His cheek to that of the Mother of God,
              while Her hands form a protective embrace around Him, Her fingers
              tightly interlocked.
            </p>

            <Photo
              src="/photo-12.jpg"
              caption="View of the Holy Virgin Mary church from Micheltorena Street 10 years after construction"
              side="left"
            />

            <p>
              This icon originally belonged to a noble Moscow family. Its last
              owner was widowed, left alone with three daughters, and soon found
              himself on the verge of destitution. In his despair, he offered
              fervent prayers before this sacred image, and the Theotokos
              granted him deliverance from poverty and despair. His daughters,
              too, found their lives providentially arranged. In gratitude,
              following a vision in his sleep, the man donated the icon to his
              parish church, the Church of the Nativity of Christ in Palashi.
              From that time, those who had lost hope and fallen into despair
              began to come before this wonderworking icon in prayer.
            </p>
            <p>
              A similar occurrence took place after the Revolution when a woman,
              left alone with three small children after her priest-husband was
              arrested, found miraculous help from this icon. Overcome with
              thoughts of ending her life, she cried out in despair before the
              image of "Rescuer of the Perishing," begging the Theotokos for
              deliverance. At that moment, she was stopped by the gaze of the
              Mother of God from the icon. The next day, she found a bundle of
              gold coins in her bag, providing the means for her and her
              children to survive.
            </p>
            <p>
              In 1812, during the ravages of Moscow by the French, the Palashi
              Church was looted, and the sacred icon was found desecrated and
              broken into three pieces among the profaned church treasures. Yet,
              when it was recovered, many miraculous signs and healings took
              place, and the icon was later restored. Brides sought the
              intercessions of the Theotokos before this icon, praying for a
              blessed and salvific marriage. Those struggling with drunkenness,
              perishing in poverty, or suffering from illness turned to Her for
              aid. Mothers pleaded before Her for their wayward and lost
              children.
            </p>
            <p>
              Following the Communist Revolution, the parishioners miraculously
              managed to save the icon's rich riza (an ornamental metal crown
              added to an icon): they gathered their own valuables and, offering
              them as a ransom, prevented its confiscation. However, in 1935,
              the Church of the Nativity in Palashi was closed, and an attempt
              was made to transfer the icon to the Church of St. Pimen. Yet,
              despite all efforts, the horse harnessed to the cart carrying the
              icon refused to move. It was then decided to take the icon to the
              Church of the Resurrection on Malaya Bronnaya, and this time, the
              transport proceeded without hindrance. However, this church, too,
              was soon condemned to destruction. Ultimately, the icon found its
              resting place in the Church of the Resurrection of the Word on
              Uspensky Vrazhek in Moscow.
            </p>
            <p>
              In 1981, a new miracle was revealed: a fire broke out due to a
              candle left unintentionally burning, damaging the icon's case, yet
              the icon itself remained unharmed.
            </p>
            <p>
              As is evident from the preserved accounts concerning the icon of
              "Rescuer of the Perishing," prayers before it are particularly
              offered for healing from ailments, deliverance in hopeless
              situations, protection in times of calamity, and rescue from the
              power of sin. A fitting icon for a people caught up in the tragedy
              of the 1917 Revolution.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-13.jpg"
              caption='The original icon "Rescuer of the Perishing" (17th century), now preserved in the Church of the Resurrection Slovuscheye "on the Dormition Creek" in Moscow'
              side="center"
            />
          </div>
        </div>
      </div>

      {/* ── Back to Los Angeles through end ──────────────────── */}
      <div className="section">
        <div className="container">
          <div className={styles.prose}>
            <h2 className={styles.sectionTitle}>Back to Los Angeles</h2>

            <Photo
              src="/photo-9.jpg"
              caption="Photo of the Resurrection icon from the High Place"
              side="right"
            />

            <p>
              Lacking the means and opportunity to commission the making of
              church furnishings and liturgical items, the parishioners relied
              on their own efforts. Candle stands, lecterns, icon frames, and
              the first iconostasis (which, many years later, was gifted to a
              missionary parish elsewhere) were all crafted by hand. Eight icons
              for the iconostasis, as well as several icons for the adornment of
              the church, were painted free of charge by General A. L. Schultz,
              who was not only an energetic fundraiser for the construction of
              the church but also served as its warden for many years. Another
              iconographer was V. F. Ulyanov, who had lived in Los Angeles since
              the early 1920s. He worked in Hollywood designing costumes for
              films and painted murals in hotels and theaters, including the
              renowned Grauman's Chinese Theatre. Ulyanov painted the two
              principal icons of the Savior and the Mother of God, as well as
              the well-known icon of the Resurrection of Christ, which for many
              years hung in the High Place of the altar and is now preserved in
              the church museum.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-10.jpg"
              caption="Archpriest Paul Limarov (rector in 1931–1935) with Matushka"
              side="left"
            />

            <p>
              In 1931, during the height of the Great Depression, the parish
              community was placed under the pastoral care of the priest, Father
              Paul Limarov.
            </p>
            <p>
              The Great Depression ended a period of relative financial
              stability for the parish. Of the 134 registered parishioners, only
              34 were able to make regular contributions. At the same time,
              monthly payments were required to pay off the debt incurred for
              the construction of the church. In the early 1930s, Princess L. V.
              Golitsyna provided invaluable assistance to the parish. It was she
              who proposed organizing charitable evenings and concerts to raise
              funds. Artists of the Hollywood community—musicians, singers,
              painters, and actors of Russian descent, whose roots traced back
              to the fallen Russian Empire—generously offered their talents in
              support of the church.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-11.jpg"
              caption="The first parishioners of the church, in the center — Princess Lyubov Golitsyna, early 1930s"
              side="right"
            />

            <p>
              In the autumn of 1935, Protopriest Father Paul Limarov was
              transferred to another parish. He was succeeded by Father Peter
              Popov, who tragically perished in an automobile accident in
              November of that same year. At the end of November, a new rector,
              Father Gregory Prozorov, arrived from San Francisco.
            </p>
            <p>
              With the end of the Great Depression, the financial situation of
              the parish improved, as reflected in a brief report by Fr. Gregory
              Prozorov at the general parish meeting in June 1944: "The time of
              intense labor is behind us; everything has been paid off, and we
              have no debts." However, he cautioned that the financial stability
              achieved should not be taken for granted. Foreseeing the
              difficulties of the postwar years, he proposed establishing a
              mutual aid fund for parishioners and outlined steps for its
              creation.
            </p>
            <p>
              During Fr. Gregory Prozorov's tenure, the parish acquired two
              adjoining lots, and in 1939, construction of the parish house,
              designed by A. A. Tolubeyev and L. G. Vazian, was completed.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-14.jpg"
              caption="Blessing of the parish house. Archpriest Gregory Prozorov (rector in 1935–1946) is a priest at the right hand of the Metropolitan"
              side="left"
            />

            <p>
              The number of regular parishioners grew. Among them was the
              renowned composer Sergei Rachmaninoff, who had lived in Los
              Angeles since 1942. Shortly before his repose, Fr. Gregory
              administered the Holy Mysteries to him, and on March 30, 1943, he
              presided at the funeral service in the church.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-15.jpg"
              caption="Sergei Rachmaninoff on the forecourt of his Beverly Hills home. The last photograph taken in August 1942"
              side="right"
            />
            <Photo
              src="/photo-16.jpg"
              caption="The family icon of the Great Martyr Panteleimon, which belonged to S. Rachmaninoff and after his death was given to Holy Virgin Mary church"
              side="left"
            />

            <p>
              By that time, under Fr. Gregory's initiative and according to the
              plans of L. G. Vazian, the church building had been expanded. An
              area was provided for the choir just to the right of the
              iconostasis, and the storage rooms near the temporary narthex were
              converted into a small adjoining area for memorial services. In
              this space, a large Crucifix was placed, with a memorial table at
              its base and a lectern upon which lay a book inscribed with the
              names of departed members of the parish community—a tradition that
              continues to this day.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-17.jpg"
              caption="The parish's Memorial book"
              side="right"
            />

            <p>
              From 1946 to 1947, the parish was shepherded by the renowned
              preacher, writer, and poet, Archimandrite John (Shakhovskoy).
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-18.jpg"
              caption="Archimandrite John (Shakhovskoy), rector in 1946–1947, performs the Funeral of Fr. Gregory Prozorov, May 11, 1946"
              side="left"
            />

            <p>
              At the urging and with the direct involvement of Archimandrite
              John, throughout his time in Los Angeles, a collection of goods
              and foodstuffs was organized at the parish house and in the homes
              of parishioners to be sent to displaced persons in Europe,
              including refugees from the Soviet Union. In 1947, Archimandrite
              John was consecrated Bishop of Brooklyn, and in 1950, he returned
              to the Western American Diocese as its ruling hierarch.
            </p>
            <p>
              From 1947 to 1957, the parish was under the pastoral care of one
              of the most distinguished clergymen of the American Metropolia,
              Protopresbyter Alexander Kukulevsky. (The Metropolia was the
              Russian Church in exile in America in the early years).
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-19.jpg"
              caption="Bishop John (Shakhovskoy), Protopresbyter Alexander Kukulevsky (rector in 1947–1957, the priest on the left), and parishioners, September 1953"
              side="right"
            />

            <p>
              Under his leadership, great attention was given to assisting new
              postwar émigrés arriving from Europe. Two houses were purchased to
              provide temporary housing for newly arrived families. Fr.
              Alexander sought to engage Russian youth, many of whom had
              forgotten their native language and were unfamiliar with Church
              Slavonic. He was the first to begin delivering his homilies in
              English in addition to Russian.
            </p>
            <p>In 1957, Father Dimitri Gizetti was appointed rector.</p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-20.jpg"
              caption="Archpriest Dimitri Gizetti (rector in 1957–1979) with parishioners in the church before its completion, late 1950s"
              side="left"
            />

            <p>
              By this time, numerous Russian-speaking émigrés from Europe and
              China filled the church during Great Lent. However, following
              Pascha, the demands of daily life, the struggle for livelihood,
              and the challenges of adapting to a new environment left the
              parish sparsely attended on other than major holidays. The
              noticeable absence of children was of particular concern. In an
              effort to revitalize parish life and foster a sense of community,
              special attention was given to developing the parish school,
              caring for the sick and those in difficult circumstances, and
              launching the publication of the "Parish Bulletin" to keep
              parishioners informed.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-21.jpg"
              caption="Expansion of the church, 1959"
              side="right"
            />

            <p>
              With hard work, the parish began to rebound. During Fr. Dimitri
              Gizetti's fruitful ministry, the parish school flourished, and as
              the church community grew, the time had come to undertake a major
              renovation of the church. According to the plans of engineer B. A.
              Filippov, the church was significantly enlarged while preserving
              its original Pskov-style architecture. On February 21, 1960, the
              newly renovated church was solemnly consecrated by Bishop John
              (Shakhovskoy) of San Francisco, the former rector of the parish.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-22.jpg"
              caption="Consecration of the renovated church, February 21, 1960"
              side="left"
            />

            <p>
              With the expansion of the church space, a new opportunity arose
              for its further beautification: a large number of old heirloom
              icons were donated, along with an impressive Tikhvin Icon of the
              Mother of God, painted in 1914 by iconographers of the St. Elias
              Skete on Mount Athos and originally intended for the Russian
              Imperial family. Additionally, a magnificent folding icon of the
              Entry of the Theotokos into the Temple, of exquisite Moscow
              workmanship, was brought from China. Alongside the icons adorning
              the wall above the arch of the Royal Doors (Christ with Attendant
              Saints, painted by the specially commissioned E. Lyzlova), these
              gifts imparted a unique and comforting character to the newly
              renovated Church of the Holy Virgin. This interior became a
              cherished memory for many over the years, captured in their
              personal photographs across several generations of parishioners.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-23.jpg"
              caption="Natalie Wood's wedding"
              side="right"
            />

            <p>
              The growth of the church community necessitated the expansion of
              facilities for parish life. In 1962, new construction began,
              lasting two years. The result was a spacious building housing
              church hall, parish office, and kitchen, while still incorporating
              elements of Pskov church architecture. The area on the southern
              side of the new building was designated a parking lot—an
              invaluable addition in a vast metropolis famous for its car
              culture.
            </p>
            <p>
              The 1960s witnessed a significant influx of English-speaking
              parishioners, leading to the introduction of regular services in
              English. The first priest assigned to minister to English-speaking
              faithful was Hieromonk Hilary (Madison) in 1962.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-24.jpg"
              caption="Hieromonk Hilary (Madison) with parishioners"
              side="left"
            />

            <p>
              In 1965, Vera Alexeyevna Jones, a devoted parishioner, reposed in
              the Lord, bequeathing her estate to the church. These funds formed
              the foundation of a charitable endowment named in her honor, which
              continues to this day. In accordance with her wishes, the Vera
              Alexeyevna Jones SOS Fund supports parish educational, cultural,
              and charitable initiatives.
            </p>
            <p>
              During the rectorship of Archpriest Dimitry Gizzetti in 1971, a
              spacious two-story parish school building and a bell tower were
              constructed, designed by architect S. N. Kozhin. At ground level
              of the bell tower, a chapel was dedicated to St. Herman of
              Alaska—perhaps the first chapel in his honor after his
              canonization. For the festive consecration and opening, Archbishop
              John (Shahovskoy), in his new clerical status, presided. At the
              beginning of 1974, newly cast, beautiful bells, made in Europe,
              were blessed and installed in the belfry of the bell tower.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-25.jpg"
              caption="Construction of the bell tower and Sunday School building"
              side="right"
            />

            <p>
              During the first decade of Fr. Dimitry Gizzetti's pastoral
              service, the church and its surrounding courtyard took on a form
              that remained largely unchanged for the next sixty years, even up
              to its current centennial celebration.
            </p>
            <p>
              By Holy Pascha of 1971, at the request of Archbishop John
              (Shahovskoy), the Holy Synod of the Orthodox Church in America
              decreed the renaming of the Church of the Icon of the Mother of
              God "Rescuer of the Perishing" to be that of a cathedral.
            </p>
            <p>
              In 1980, Father Stephen Fitzgerald became the cathedral's next
              rector. Parish activities included the establishment of the
              "Spiritual Books for Russia" ministry, which sent much religious
              literature to the Soviet Union. In 1981, the "L.O.V.E.S" Society
              (Los Angeles Orthodox Visiting Elderly and Sick) was founded to
              care for elderly parishioners, especially those residing far from
              the church.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-26.jpg"
              caption="Priest Stephen (Fitzgerald)"
              side="left"
            />

            <p>
              In 1983, the parish celebrated the 60th anniversary of its first
              Divine Liturgy, which had been served in 1923 at the Episcopal
              church on Wilson Street. The celebrations were led by the Primate
              of the Orthodox Church in America, Metropolitan Theodosius
              (Lazor), who was assisted at the Divine Liturgy by Bishop Basil
              (Rodzianko) of San Francisco.
            </p>
            <p>
              In 1987, Fr. Stephen Fitzgerald was tonsured a monk with the name
              Tikhon and was consecrated Bishop of San Francisco and the Diocese
              of the West.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-27.jpg"
              caption="Bishop Tikhon (Fitzgerald), rector in 1980–2005"
              side="right"
            />

            <p>
              Even after his episcopal consecration, Bishop Tikhon retained
              pastoral oversight of the Holy Virgin Cathedral, residing at its
              rectory. He placed great emphasis on the equal use of Church
              Slavonic and English in worship, striving to ensure that both
              Russian- and English-speaking parishioners felt united as one
              community.
            </p>
            <p>
              In 1997, through the efforts of Bishop Tikhon and the faithful, a
              Pskov-style iconostasis was installed inside the cathedral,
              significantly transforming its interior.
            </p>

            <div className={styles.clearfix} />

            <Photo
              src="/photo-28.jpg"
              caption="The interior of the church with the first iconostasis, 1980s"
              side="left"
            />

            <p>
              Upon his retirement in 2005, Bishop Tikhon continued to provide
              spiritual guidance to clergy and laity alike until his repose in
              January 2023.
            </p>
            <p>
              Subsequent rectors included Fr. Michael Senyo (2005–2010), Fr.
              John Strickland (2010–2012), and Fr. Nicholas Boldyrev
              (2012–2015), who continued the tradition of bilingual worship and
              the unity of Russian- and English-speaking parishioners.
            </p>
            <p>
              On October 1, 2015, Archpriest Nazari Polatayko celebrated his
              first service as the new rector of the cathedral.
            </p>
            <p>
              In 2018, the St. Herman of Alaska Chapel was converted into a
              baptistery and was rededicated in the name of the same saint by
              Archbishop Benjamin (Peterson) of San Francisco and the West.
            </p>
            <p>
              Under the spiritual and administrative leadership of Archpriest
              Nazari, the Holy Virgin Cathedral continues to preserve its
              century-old heritage. In a spirit of missionary Christian service,
              the community strives to respond to the challenges of the modern
              age within its humble means. On feast days and Sundays, services
              are conducted in both Church Slavonic and English, with equal
              attention given to each language. On weekdays, the primary
              liturgical language is determined by the majority of those
              present. Following a longstanding tradition dating back to the
              mid-20th century, sermons are delivered in both English and
              Russian. The community remains united despite cultural and
              linguistic diversity of its members.
            </p>
            <p>
              The number of parishioners has grown significantly. Each year,
              many people from all walks of life, seeking the ancient faith,
              become catechumens (student candidates) engaged in instructional
              meetings, carefully preparing for Holy Baptism.
            </p>
            <p>
              Within the last few years, the parish established the St. Ksenia
              of Petersburg Society, dedicated to assisting and ministering to
              the homeless.
            </p>
            <p>
              As we approach the 100th anniversary, the Sisterhood of the
              cathedral faithfully continues its varied duties, the Vera Jones
              SOS Fund continues to support parish educational and outreach
              initiatives, the parish Sunday school, theater studio, and
              children's choir remain vibrantly active, and a professional
              quality choir has been established to meet the needs of bilingual
              services. The publication of the parish bulletin has been revived
              in both languages. Liturgical texts with parallel Church Slavonic
              and English have been prepared for bilingual use. The tradition of
              charitable concerts has been restored, including our annual Slavic
              festival, celebrating Russian culture, and a music festival
              dedicated to the memory of composer Sergei Rachmaninoff.
            </p>
            <p>
              Over the decade of Fr. Nazari's rectorship, the cathedral's
              interior has been transformed. The walls have gradually been
              adorned with many new lectern icons and frescoes in the
              traditional style, painted by parishioner Marina Smetanina. In
              2024, a long-planned project for a gateway tower at the church
              entrance was realized, completing the exterior of the cathedral.
              Originally part of the 1960s expansion plan, it took sixty years
              for the Holy Virgin Cathedral to attain the vision imagined by
              generations of parishioners.
            </p>
            <p>
              The construction of the gateway tower, coinciding with the 100th
              anniversary of the Russian Orthodox Cathedral of the Icon of the
              Mother of God "Rescuer of the Perishing," serves as a symbol of
              the culmination of an eventful chapter—not just of a building, but
              of the people. People of different decades and eras, journeying
              toward God as one great parish community. Another cross now stands
              over the city, a reminder of the Cross of the Lord, which, in the
              words of Archbishop John (Shahovskoy), is "the ladder set from
              earth to Paradise."
            </p>

            <div className={styles.clearfix} />
          </div>
        </div>
      </div>
    </>
  );
}
