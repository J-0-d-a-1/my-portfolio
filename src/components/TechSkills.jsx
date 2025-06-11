import { useTranslation } from "react-i18next";

function TechSkills() {
  const { t } = useTranslation();
  const techSkills = t("about.techSkills", { returnObjects: true });
  console.log(Object.entries(techSkills));

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Object.entries(techSkills).map(([category, skills]) => (
        <div key={category}>
          <h4 className="text-lg font-medium mb-2">{category}</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-full shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechSkills;
