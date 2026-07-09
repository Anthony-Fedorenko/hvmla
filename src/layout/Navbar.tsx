import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  {
    key: "about",
    label: "nav.about",
    children: [
      { key: "history", label: "nav.history", to: "/about/history" },
      { key: "clergy", label: "nav.clergy", to: "/about/clergy" },
      { key: "bylaws", label: "nav.bylaws", to: "/about/bylaws" },
    ],
  },
  {
    key: "ministries",
    label: "nav.ministries",
    children: [
      { key: "stXenia", label: "nav.stXenia", to: "/ministries/st-xenia" },
      {
        key: "sisterhood",
        label: "nav.sisterhood",
        to: "/ministries/sisterhood",
      },
      {
        key: "stBarbara",
        label: "nav.stBarbara",
        to: "/ministries/st-barbara",
      },
      {
        key: "loves",
        label: "nav.loves",
        to: "/ministries/loves",
      },
      { key: "choir", label: "nav.choir", to: "/ministries/choir" },
      { key: "catechism", label: "nav.catechism", to: "/ministries/catechism" },
      {
        key: "sundaySchool",
        label: "nav.sundaySchool",
        to: "/sunday-school",
      },
    ],
  },
  {
    key: "services",
    label: "nav.services",
    children: [
      { key: "schedule", label: "nav.schedule", to: "/services/schedule" },
      { key: "liveStreams", label: "nav.liveStreams", to: "/services/live" },
      {
        key: "streamArchive",
        label: "nav.streamArchive",
        to: "/services/archive",
      },
    ],
  },
  {
    key: "education",
    label: "nav.education",
    children: [
      { key: "books", label: "nav.books", to: "/education/books" },
      { key: "bulletin", label: "nav.bulletin", to: "/education/bulletin" },
    ],
  },
  {
    key: "news",
    label: "nav.news",
    children: [
      {
        key: "announcements",
        label: "nav.announcements",
        to: "/news/announcements",
      },
      { key: "newsPage", label: "nav.news", to: "/news" },
    ],
  },
  {
    key: "support",
    label: "nav.support",
    children: [
      { key: "donations", label: "nav.donations", to: "/support/donations" },
      {
        key: "volunteering",
        label: "nav.volunteering",
        to: "/support/volunteering",
      },
    ],
  },
  {
    key: "cafe",
    label: "nav.cafe",
    children: [
      { key: "cafeMenu", label: "nav.cafeMenu", to: "/cafe" },
      { key: "museum", label: "nav.museum", to: "/museum" },
      { key: "library", label: "nav.library", to: "/library" },
    ],
  },
  {
    key: "contact",
    label: "nav.contact",
    children: [
      { key: "contactInfo", label: "nav.contactInfo", to: "/contact/info" },
      { key: "addressMap", label: "nav.addressMap", to: "/contact/map" },
      { key: "socialMedia", label: "nav.socialMedia", to: "/contact/social" },
      { key: "contactForm", label: "nav.contactForm", to: "/contact/form" },
    ],
  },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setMobileOpen(false);
  };

  const handleDropdownLinkClick = (to: string) => {
    setOpenDropdown(null);
    navigate(to);
  };

  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`container ${styles.navbar__inner}`}>
        {/* Desktop menu */}
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navbar__link}${isActive ? " " + styles["navbar__link--active"] : ""}`
              }
              end
            >
              {t("nav.home")}
            </NavLink>
          </li>

          {NAV_ITEMS.map((item) => (
            <li key={item.key} className={styles.navbar__item}>
              <button
                className={styles.navbar__link}
                aria-haspopup="true"
                aria-expanded={openDropdown === item.key}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown((prev) =>
                    prev === item.key ? null : item.key,
                  );
                }}
              >
                {t(item.label)} ▾
              </button>
              {openDropdown === item.key && (
                <ul
                  className={`${styles.navbar__dropdown} ${styles["navbar__dropdown--open"]}`}
                  role="menu"
                >
                  {item.children.map((child) => (
                    <li key={child.key} role="none">
                      <NavLink
                        to={child.to}
                        className={({ isActive }) =>
                          `${styles["navbar__dropdown-link"]}${isActive ? " " + styles["navbar__link--active"] : ""}`
                        }
                        role="menuitem"
                        onClick={() => handleDropdownLinkClick(child.to)}
                      >
                        {t(child.label)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.navbar__right}>
          {/* Language switcher (desktop) */}
          <div className={styles.navbar__lang}>
            <button
              className={`${styles["navbar__lang-btn"]}${i18n.language === "en" ? " " + styles["navbar__lang-btn--active"] : ""}`}
              onClick={() => changeLanguage("en")}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className={styles["navbar__lang-sep"]}>|</span>
            <button
              className={`${styles["navbar__lang-btn"]}${i18n.language === "ru" ? " " + styles["navbar__lang-btn--active"] : ""}`}
              onClick={() => changeLanguage("ru")}
              aria-label="Переключить на русский"
            >
              RU
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={styles.navbar__hamburger}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={styles["navbar__hamburger-line"]} />
            <span className={styles["navbar__hamburger-line"]} />
            <span className={styles["navbar__hamburger-line"]} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${styles.navbar__mobile}${mobileOpen ? " " + styles["navbar__mobile--open"] : ""}`}
      >
        <div className={styles["navbar__mobile-section"]}>
          <Link
            to="/"
            className={styles["navbar__mobile-link"]}
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.home")}
          </Link>
        </div>

        {NAV_ITEMS.map((item) => (
          <div key={item.key} className={styles["navbar__mobile-section"]}>
            <span className={styles["navbar__mobile-parent"]}>
              {t(item.label)}
            </span>
            {item.children.map((child) => (
              <Link
                key={child.key}
                to={child.to}
                className={styles["navbar__mobile-link"]}
                onClick={() => setMobileOpen(false)}
              >
                {t(child.label)}
              </Link>
            ))}
          </div>
        ))}

        <div className={styles["navbar__mobile-lang"]}>
          <button
            className={`${styles["navbar__lang-btn"]}${i18n.language === "en" ? " " + styles["navbar__lang-btn--active"] : ""}`}
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
          <button
            className={`${styles["navbar__lang-btn"]}${i18n.language === "ru" ? " " + styles["navbar__lang-btn--active"] : ""}`}
            onClick={() => changeLanguage("ru")}
          >
            Русский
          </button>
        </div>
      </div>
    </nav>
  );
}
