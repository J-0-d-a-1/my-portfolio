import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

function Header() {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" aria-label="Homepage">
          <span className="text-2xl font-bold text-gray-800">Jumpei.dev</span>
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              {t("nav.projects")}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              {t("nav.contact")}
            </a>
          </li>
          <li>
            <LanguageToggle />
          </li>
        </ul>

        {/* Language toggle for mobile */}
        <div className="md:hidden">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}

export default Header;
