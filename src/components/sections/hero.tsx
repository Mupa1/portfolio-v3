"use client";

import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const t = useTranslations();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="flex-center min-h-screen w-full flex-col gap-6 py-20 text-center"
    >
      <header>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="block">{t("Hero.frontend")}</span>
          <span className="block">{t("Hero.engineer")}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          {t("Hero.description")}
        </p>
      </header>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button
          onClick={() => scrollToSection("projects")}
          size="lg"
          className="w-full min-w-[160px] touch-manipulation rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl dark:from-blue-500 dark:to-blue-600 dark:text-blue-100 dark:hover:from-blue-600 dark:hover:to-blue-700 sm:w-auto"
        >
          {t("Hero.viewProjects")}
        </Button>
        <Button
          onClick={() => scrollToSection("contact")}
          variant="outline"
          size="lg"
          className="w-full min-w-[160px] touch-manipulation rounded-lg border-2 bg-transparent text-blue-700 shadow-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-xl dark:border-blue-600 dark:text-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 sm:w-auto"
        >
          {t("Hero.contactMe")}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
