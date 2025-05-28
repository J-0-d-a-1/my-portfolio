import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer class="bg-white">
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">
          {t("footer.text")}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
