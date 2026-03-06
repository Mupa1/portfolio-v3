"use client";

import { useTranslations } from "next-intl";
import React from "react";

import { useSocialIconsVisibility } from "@/context/SocialIconsVisibility";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import SocialIcons from "../ui/social-icons";

const Footer = () => {
  const { setIsFooterInView } = useSocialIconsVisibility();
  const { ref, isIntersecting } = useIntersectionObserver();
  const t = useTranslations();

  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    setIsFooterInView(isIntersecting);
  }, [isIntersecting, setIsFooterInView]);
  return (
    <footer ref={ref} role="contentinfo" aria-label={t("Accessibility.siteFooter")}>
      <div className="w-full border-t border-neutral-200 py-6 dark:border-border-dark">
        <div className="body-padding-x flex flex-col items-center justify-between gap-4 sm:flex-row">
          <SocialIcons className="flex gap-4 sm:gap-6" />
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
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
