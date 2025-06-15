import { useTranslation } from "react-i18next";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100" aria-label="Footer">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:py-10 flex flex-col items-center justify-center gap-4">
        {/* social media */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/J-0-d-a-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/jumpei-oda-7753b122a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* footer text */}
        <span className="text-sm text-gray-500">
          © {new Date().getFullYear()} {t("footer.name")} {t("footer.text")}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
