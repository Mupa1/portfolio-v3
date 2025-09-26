"use client";

import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const t = useTranslations();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="flex-center h-screen w-full snap-start snap-always flex-col gap-6 text-center"
    >
      <h2>
        <div>{t("Hero.frontend")}</div>
        <div>{t("Hero.engineer")}</div>
      </h2>
      <p className="mx-auto max-w-3xl">{t("Hero.description")}</p>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={() => scrollToSection("projects")}
          size="lg"
          className="w-full bg-gradient-to-r from-neutral-600 to-neutral-700 text-white shadow-lg transition-all duration-200 hover:from-neutral-700 hover:to-neutral-800 hover:shadow-xl dark:from-neutral-400 dark:to-neutral-500 dark:hover:from-neutral-300 dark:hover:to-neutral-400 sm:w-auto"
        >
          {t("Hero.viewProjects")}
        </Button>
        <Button
          onClick={() => scrollToSection("contact")}
          variant="outline"
          size="lg"
          className="w-full border-2 border-neutral-300 bg-transparent text-neutral-700 shadow-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-neutral-50 hover:to-neutral-100 hover:shadow-xl dark:border-neutral-600 dark:text-neutral-300 dark:hover:from-neutral-900 dark:hover:to-neutral-950 sm:w-auto"
        >
          {t("Hero.contactMe")}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
