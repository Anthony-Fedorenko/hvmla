import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactForm.module.css";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const SUBJECTS_EN = [
  "General Inquiry",
  "Service Information",
  "Sunday School",
  "Baptism / Chrismation",
  "Wedding",
  "Confession",
  "Other",
];
const SUBJECTS_RU = [
  "Общий вопрос",
  "Информация о богослужениях",
  "Воскресная школа",
  "Крещение / Миропомазание",
  "Венчание",
  "Исповедь",
  "Другое",
];

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    document.title = `${t("contact.formTitle")} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: integrate with a backend API or email service (e.g. FormSubmit, EmailJS)
    // For demo, we simulate a successful submission
    setStatus("success");
    setForm(INITIAL);
  };

  const subjects = lang === "ru" ? SUBJECTS_RU : SUBJECTS_EN;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{t("contact.formTitle")}</h1>
          <p>{t("contact.formSubtitle")}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          {status === "success" && (
            <div className={styles.success} role="alert">
              {t("contact.successMsg")}
            </div>
          )}

          {status === "error" && (
            <div className={styles.error} role="alert">
              {t("contact.errorMsg")}
            </div>
          )}

          {status !== "success" && (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName" className={styles.label}>
                    {t("contact.firstName")}{" "}
                    <span className={styles.required} aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className={styles.input}
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName" className={styles.label}>
                    {t("contact.lastName")}{" "}
                    <span className={styles.required} aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={styles.input}
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  {t("contact.emailField")}{" "}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="subject" className={styles.label}>
                  {t("contact.subject")}{" "}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  className={styles.select}
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    — {t("contact.subject")} —
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  {t("contact.message")}{" "}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn--primary ${styles.submit}`}
              >
                {t("contact.send")}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
