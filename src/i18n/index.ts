import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ru from "./locales/ru.json";

const englishOnly = import.meta.env.VITE_DISABLE_RUSSIAN === "true";

const instance = i18n.use(initReactI18next);
if (!englishOnly) instance.use(LanguageDetector);

instance.init({
  resources: {
    en: { translation: en },
    ...(englishOnly ? {} : { ru: { translation: ru } }),
  },
  lng: englishOnly ? "en" : undefined,
  fallbackLng: "en",
  supportedLngs: englishOnly ? ["en"] : ["en", "ru"],
  interpolation: { escapeValue: false },
  ...(englishOnly ? {} : {
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
  }),
});

export default i18n;
