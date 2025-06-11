import { useTranslation } from "react-i18next";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  return (
    <section id="projects" className="py-20 bg-white px-6 md:px-12 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
        {t("projects.title")}
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 mb-16">
        {t("projects.description")}
      </p>

      <div className="space-y-24">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title[lang]}
              description={project.description[lang]}
              image={project.image}
              link={project.link}
              github={project.github}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
