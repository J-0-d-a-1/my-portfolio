import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-2xl sm:py-30 lg:py-30 text-center mt-10">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
        {t("about.title")}
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        {t("about.subtitle")}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {t("about.buttonTitle")}
        </button>
      </div>
      <p className="mt-8 text-md font-small text-pretty text-gray-900 sm:text-xl/12">
        {t("about.description")}
      </p>
    </section>
  );
}

export default About;
