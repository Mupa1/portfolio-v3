"use client";

import { Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/components/ui/button";
import { trackButtonClick, trackExternalLink } from "@/lib/analytics";

const Hero = () => {
  const t = useTranslations();
  const locale = useLocale();

  const cvFile =
    locale === "de"
      ? "/images/Mupa-Mmbetsa-Nzaphila-Lebenslauf.pdf"
      : "/images/Mupa-Mmbetsa-Nzaphila-Resume.pdf";

  const cvFileName =
    locale === "de"
      ? "Mupa-Mmbetsa-Nzaphila-Lebenslauf.pdf"
      : "Mupa-Mmbetsa-Nzaphila-Resume.pdf";

  const handleCVDownload = () => {
    trackExternalLink(`CV Download - ${cvFileName}`);
    trackButtonClick("download_cv", "hero_section");
  };

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

      trackButtonClick(sectionId, "hero_section");
    }
  };

  return (
    <section
      id="home"
      className="flex-center relative min-h-screen w-full flex-col gap-8 overflow-hidden py-20 text-center"
      aria-labelledby="hero-title"
    >
      {/* Animated background gradient - Using primary/secondary colors */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/50 dark:from-primary-950/20 dark:via-transparent dark:to-secondary-950/20" />

      <h2
        id="hero-title"
        className="mt-6 duration-1000 animate-in fade-in slide-in-from-bottom-4"
      >
        <span className="block">{t("Hero.frontend")}</span>
        <span className="block">{t("Hero.engineer")}</span>
      </h2>
      <p className="mx-auto mt-8 max-w-3xl px-4 text-lg font-medium text-neutral-700 delay-200 duration-1000 animate-in fade-in slide-in-from-bottom-6 dark:text-foreground-dark-secondary sm:px-6">
        {t("Hero.description")}
      </p>
      <div className="mt-10 flex flex-col gap-4 px-4 delay-300 duration-1000 animate-in fade-in slide-in-from-bottom-8 sm:flex-row sm:justify-center sm:px-6">
        <Button
          onClick={() => scrollToSection("projects")}
          size="lg"
          aria-label={`${t("Hero.viewProjects")} - ${t("Accessibility.navigateToProjects")}`}
          className="gradient-primary group relative min-h-[48px] w-full min-w-[160px] touch-manipulation overflow-hidden rounded-xl text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:shadow-primary-500/20 dark:hover:shadow-primary-500/30 dark:focus-visible:ring-offset-background-dark sm:w-auto"
        >
          <span className="relative z-10 font-semibold">
            {t("Hero.viewProjects")}
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </Button>
        <a
          href={cvFile}
          download={cvFileName}
          onClick={handleCVDownload}
          aria-label={`${t("Hero.downloadCV")} - ${cvFileName}`}
          className="group relative flex min-h-[48px] w-full min-w-[160px] touch-manipulation items-center justify-center gap-2 overflow-hidden rounded-xl border border-neutral-300 bg-neutral-50 px-6 text-sm font-semibold text-neutral-900 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary-600 hover:bg-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark dark:bg-background-dark-secondary/50 dark:text-foreground-dark dark:hover:border-primary-400 dark:hover:bg-background-dark-muted dark:focus-visible:ring-offset-background-dark sm:w-auto"
        >
          <Download
            className="icon-sm transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          <span className="relative z-10">{t("Hero.downloadCV")}</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
