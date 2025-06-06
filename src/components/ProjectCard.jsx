import { useTranslation } from "react-i18next";

function ProjectCard({ index, title, description, image, link, github }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="w-full max-w-md h-[40rem] flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      <div className="md:w-1/2 w-full">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-200 text-sm px-2 py-1 rounded text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )} */}

        <div className="flex gap-6">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
