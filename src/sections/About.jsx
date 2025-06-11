import { useTranslation } from "react-i18next";
import TechSkills from "../components/TechSkills";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="px-6 py-20 sm:px-10 lg:px-32 bg-white">
      {/* Section Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900">
        {t("about.title")}
      </h1>

      {/* Introduction */}
      <p className="mt-6 text-center text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {t("about.intro")}
      </p>

      {/* Content Container */}
      <div className="mt-16 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: Description & Buttons */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {t("about.descriptionTitle")}
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            {t("about.description")}
          </p>

          <div className="flex gap-4 pt-4">
            <button className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition">
              {t("about.resume")}
            </button>
            <a
              href="#contact"
              className="rounded-md border border-indigo-600 px-5 py-2.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition"
            >
              {t("about.contact")}
            </a>
          </div>
        </div>

        {/* Right: Tech Skills */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {t("about.techTitle")}
          </h2>
          <TechSkills />
        </div>
      </div>
    </section>
  );
}

export default About;
