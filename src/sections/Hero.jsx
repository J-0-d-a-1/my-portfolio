import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white">
      {/* Greeting */}
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
        {t("hero.greeting")}
      </h1>

      {/* Role */}
      <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl">
        {t("hero.role")}
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
        >
          {t("hero.viewProjects")}
          <ChevronDown size={18} />
        </a>
        <a
          href="#contact"
          className="rounded-md border border-indigo-600 px-5 py-2.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition"
        >
          {t("hero.contactMe")}
        </a>
      </div>
    </section>
  );
}

export default Hero;
