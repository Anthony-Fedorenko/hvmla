import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./CatechismSchool.module.css";

export default function CatechismSchool() {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    document.title = `${t("ministries.catTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("ministries.catTitle")}</h1>
          <p>{t("ministries.catDesc")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ maxWidth: "780px" }}>
            <button
              onClick={() => setLightboxOpen(true)}
              className={styles.posterBtn}
              aria-label="View New Catechumen Group flyer"
            >
              <img
                src="/new_catechumen_group.jpg"
                alt="New Catechumen Group — Starting September 1, 2026"
                loading="lazy"
                style={{
                  width: "100%",
                  display: "block",
                  border: "1px solid var(--color-border)",
                  borderRadius: "4px",
                  boxShadow: "var(--shadow-md)",
                }}
              />
            </button>
            <p>
              Our class is for anyone who would like to learn more about
              Orthodoxy whether they are already Orthodox, a catechumen or just
              inquiring.
            </p>

            <p style={{ marginTop: "var(--space-lg)" }}>
              The Orthodox Christian Church is the church of 33 A.D., perhaps
              even 1 A.D. It is, as its Creed states, "One, Holy, Catholic, and
              Apostolic" which establishes its nature and its continued existence
              by faithfully maintaining an unbroken tradition from Jesus Christ
              and the Apostles through two millennia up to today. It is the
              Church that one may see being born in the pages of the New
              Testament, in the words of the Lord, Himself. In the culture in
              which we find ourselves, many Americans have no idea what it is,
              much less, its theology, its form of worship, or its authenticity.
              Far likelier is the association of the Church with ethnic
              identities like "Russian Orthodox" or "Greek Orthodox" or
              "Antiochian" or several other cultures. Though misleading, it is
              understandable because America became the final destination for
              immigrants who brought their Orthodoxy with them and planted it in
              the new world. But they are all just Orthodox.
            </p>

            <p style={{ marginTop: "var(--space-lg)" }}>
              So how does a person in today's America understand this claim of
              origin and continuity? The answer lies in history, a history that
              has a definite start and an unbroken existence to the present day.
              This is the heart of the apostolic succession. It was handed down
              from the beginning, is preserved faithfully and jealously in the
              face of heresies, schisms, war, and other catastrophes.
            </p>

            <p style={{ marginTop: "var(--space-lg)" }}>
              Thus, it is <strong>One</strong>. Not fragmented, denominational,
              plagued by ever mutating doctrines and dogmas.
            </p>

            <p style={{ marginTop: "var(--space-lg)" }}>
              Thus, it is <strong>Holy</strong>. Its Founder and Lord is Jesus
              Christ, and its sure Guide is the Holy Spirit. Holiness is in its
              veins.
            </p>

            <p style={{ marginTop: "var(--space-lg)" }}>
              Thus, it is <strong>Catholic</strong>, a Greek word that implies
              possessing unity, inclusivity, and continuity across time and
              space. It implies that it is whole, complete, lacking nothing.
            </p>

            <p style={{ marginTop: "var(--space-lg)" }}>
              Thus, it is <strong>Apostolic</strong>, for the Lord's apostles
              and disciples transmitted faithfully the Master's words and
              teaching. They avoided all personal interpretations and settled any
              questions in a conciliar fashion, a tradition that is still at the
              foundation of the Orthodox Church today. It gave us the canon of
              Scripture, the canons of the Seven Ecumenical Councils, and the
              writings of the early Church Fathers, many of whom suffered
              persecution and martyrdom.
            </p>

            <p style={{ marginTop: "var(--space-lg)" }}>
              Orthodoxy literally means "true worship" or "true belief" or "true
              glorification". This true worship is the heart of an Orthodox
              Christian's life. It is more than a meeting or collective bible
              study, more than emotional outpourings surrounding personalities,
              or memorials of a past event. This is what we call the Divine
              Liturgy. To enter into it is to enter into the Kingdom of Heaven,
              to become partakers of the Divine. To not only hear the Word, but
              to pray it, to pray for all creation, to pray for mercy in the
              face of our many failings. We proclaim our statement of faith
              aloud as a body in the Nicene Creed. The summit of the Divine
              Liturgy is to partake of the Lord's supper, not as memorial, but
              as reality, it is His Body and Blood. So it has been for two
              thousand years and so it will continue, in the face of enemies,
              whether external and internal, despite our own failings.
            </p>

            <p style={{ marginTop: "var(--space-lg)" }}>
              Finally, the Orthodox Church is the church of the martyrs. No
              church has suffered bloody persecutions as she has. The twentieth
              century surpassed the worst done by the Roman Empire. She still
              stands unbowed, faithful unto the end.
            </p>

            <p style={{ marginTop: "var(--space-lg)" }}>
              Come and see why so many are now coming to the Orthodox Church,
              growing daily in the Americas. If you have experienced frustration
              with doctrinal, liturgical, and ethical innovations in your
              churches, take a moment and visit the Church of 33 A.D. It may be
              the moment you sense the eternal spiritual reality of Orthodoxy
              and experience what many have said, "I felt like I had come
              home".
            </p>
          </div>
        </div>
      </div>

      <div className="section" style={{ background: "var(--color-section)" }}>
        <div className="container">
          <h2 className="section__title" style={{ marginBottom: "var(--space-xl)" }}>
            Catechism Classes
          </h2>
          <div className="grid-2">
            <div className="card" style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginBottom: "var(--space-md)", fontSize: "1.1rem" }}>
                "The Orthodox Faith"
              </h3>
              <p style={{ marginBottom: "var(--space-md)", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                30 lectures covering:
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: 1.8 }}>
                <li>Faith</li>
                <li>Doctrine</li>
                <li>Scripture</li>
                <li>Spirituality</li>
              </ul>
              <p style={{ marginTop: "var(--space-lg)", marginBottom: 0, fontStyle: "italic", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                First Tuesday of September — enrollment for the new course begins. Open registration.
              </p>
            </div>

            <div className="card" style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginBottom: "var(--space-md)", fontSize: "1.1rem" }}>
                Newcomers & Catechumen Information Form
              </h3>
              <p style={{ marginBottom: "var(--space-lg)" }}>
                Fill out this short form to let us know you're interested, and
                we'll follow up with details about the next class.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfalvUebw0NJga6mVoJRh3_kLVNPGs_i5bOUJvJVIqTohmRdg/viewform?usp=sharing&ouid=101672565824148340578"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                style={{ alignSelf: "flex-start", marginTop: "auto" }}
              >
                Fill Out the Form
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="section__title" style={{ marginBottom: "var(--space-xl)" }}>
            Resources
          </h2>
          <div className="grid-2">
            <div className="card" style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginBottom: "var(--space-md)", fontSize: "1.1rem" }}>
                "The Orthodox Faith" by Fr. Thomas Hopko
              </h3>
              <p style={{ marginBottom: "var(--space-lg)" }}>
                Four volumes covering Doctrine & Scripture, Worship, Church
                History, and Spirituality. Available for free download on our
                Books page.
              </p>
              <Link to="/education/books" className="btn btn--outline" style={{ alignSelf: "flex-start", marginTop: "auto" }}>
                View Books
              </Link>
            </div>

            <div className="card" style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginBottom: "var(--space-md)", fontSize: "1.1rem" }}>
                Essential Orthodox Christian Beliefs
              </h3>
              <p style={{ marginBottom: "var(--space-lg)" }}>
                An introduction to the essential beliefs of Orthodox Christianity
                from the Orthodox Church in America.
              </p>
              <a
                href="https://www.oca.org/news/headline-news/departments-release-essential-orthodox-christian-beliefs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                style={{ alignSelf: "flex-start", marginTop: "auto" }}
              >
                Read on OCA.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1.25rem",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2rem",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
          <img
            src="/new_catechumen_group.jpg"
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(90vw, 700px)",
              maxHeight: "88vh",
              objectFit: "contain",
              borderRadius: "4px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      )}
    </>
  );
}
