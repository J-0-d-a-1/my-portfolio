import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="mx-auto max-w-2xl sm:py-30 lg:py-30 text-center mt-10"
    >
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
        {t("contact.title")}
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        {t("contact.description")}
      </p>
      <ul className="font-medium flex flex-col justify-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0">
          email
        </li>
        <li className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0">
          GitHub
        </li>
        <li className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0">
          LinkedIn
        </li>
      </ul>
    </section>
  );
}

export default Contact;
