import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    // <div className="text-center mt-50">
    <div className="mx-auto max-w-2xl sm:py-48 lg:py-48 text-center mt-10">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        {t("hero.greeting")}
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        {t("hero.role")}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {t("hero.viewProjects")}
        </a>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          {t("hero.contactMe")}
        </a>
      </div>
    </div>
  );
}

export default Hero;
