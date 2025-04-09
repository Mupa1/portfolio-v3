import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="body-padding-x">
      <div id="home" className="h-screen">
        <h1>{t("welcome")}</h1>
        Hero
      </div>
      <div id="about" className="h-screen">
        About
      </div>
      <div id="skills" className="h-screen">
        Skills
      </div>
      <div id="projects" className="h-screen">
        Projects
      </div>
      <div id="experience" className="h-screen">
        Experience
      </div>
      <div id="contact" className="h-screen">
        Contact
      </div>
    </div>
  );
}
