import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-2xl sm:py-30 lg:py-30 text-center mt-10">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
        {t("projects.title")}
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        {t("projects.description")}
      </p>
    </section>
  );
}

export default Projects;
