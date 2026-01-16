"use client";

import { Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { useSocialIconsVisibility } from "@/context/SocialIconsVisibility";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { trackExternalLink } from "@/lib/analytics";

import SocialIcons from "../ui/social-icons";

const Footer = () => {
  const { setIsFooterInView } = useSocialIconsVisibility();
  const { ref, isIntersecting } = useIntersectionObserver();
  const t = useTranslations();
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  const cvFile = locale === "de" 
    ? "/images/Mupa-Mmbetsa-Nzaphila-Lebenslauf.pdf"
    : "/images/Mupa-Mmbetsa-Nzaphila-Resume.pdf";
  
  const cvFileName = locale === "de"
    ? "Mupa-Mmbetsa-Nzaphila-Lebenslauf.pdf"
    : "Mupa-Mmbetsa-Nzaphila-Resume.pdf";

  const handleCVDownload = () => {
    trackExternalLink(`CV Download - ${cvFileName}`);
  };

  React.useEffect(() => {
    setIsFooterInView(isIntersecting);
  }, [isIntersecting, setIsFooterInView]);
  return (
    <footer ref={ref} role="contentinfo" aria-label={t("Accessibility.siteFooter")}>
      <div className="w-full border-t border-neutral-200 py-6 dark:border-border-dark">
        <div className="body-padding-x flex flex-col items-center justify-between gap-4 sm:flex-row">
          <SocialIcons className="flex gap-4 sm:gap-6" />
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href={cvFile}
              download={cvFileName}
              onClick={handleCVDownload}
              aria-label={`${t("Footer.downloadCV")} - ${cvFileName}`}
              className="group flex items-center gap-2 text-xs font-medium text-neutral-600 transition-colors duration-300 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:text-foreground-dark-secondary dark:hover:text-primary-400 dark:focus-visible:ring-offset-background-dark"
            >
              <Download className="icon-sm transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <span>{t("Footer.downloadCV")}</span>
            </a>
            <p className="text-xs text-neutral-600 dark:text-foreground-dark-secondary">
              © {currentYear}{" "}
              <span className="hidden sm:inline">
                Mupa M&apos;mbetsa Nzaphila
              </span>
              <span className="sm:hidden">Mupa M. Nzaphila</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
