import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationJA from "./locales/ja/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  },
};

i18n
  .use(LanguageDetector) // detect user's language
  .use(initReactI18next) // connect to React
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        "navigator",
        "htmlTag",
        "localStorage",
        "cookie",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"], // save user's pref
    },
  });

export default i18n;
