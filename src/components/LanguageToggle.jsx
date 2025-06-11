import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ja" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 transition"
    >
      {i18n.language === "en" ? "🇯🇵 日本語" : "🇺🇸 English"}
    </button>
  );
}

export default LanguageToggle;
