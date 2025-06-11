// import { useTranslation } from "react-i18next";
// import TechSkills from "../components/TechSkills";

// function About() {
//   const { t } = useTranslation();

//   return (
//     <section className="py-20 bg-white px-6 md:px-12 mx-32 text-center">
//       {/* title */}
//       <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
//         {t("about.title")}
//       </h1>
//       {/* short description */}
//       <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//         {t("about.intro")}
//       </p>

//       <div className="flex flex-col md:flex-row items-center gap-8 mt-20">
//         {/* Get to know me */}
//         <div className="md:w-1/2 w-full justify-center">
//           <h2 className="text-3xl font-semibold mb-4">
//             {t("about.descriptionTitle")}
//           </h2>
//           <p className="mt-8 text-md font-small text-pretty text-gray-900 sm:text-xl/12">
//             {t("about.description")}
//           </p>
//           <div className="mt-10 flex items-center justify-center gap-x-6">
//             <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//               {t("about.resume")}
//             </button>
//             <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//               {t("about.contact")}
//             </button>
//           </div>
//         </div>

//         {/* Tech */}
//         <div className="md:w-1/2 w-full justify-center">
//           <h2 className="text-3xl font-semibold mb-4">
//             {t("about.techTitle")}
//           </h2>

//           <TechSkills />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import { useTranslation } from "react-i18next";
import TechSkills from "../components/TechSkills";

function About() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-20 sm:px-10 lg:px-32 bg-white">
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
            <button className="rounded-md border border-indigo-600 px-5 py-2.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition">
              {t("about.contact")}
            </button>
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
