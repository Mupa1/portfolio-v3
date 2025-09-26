"use client";

import React from "react";

import { useSocialIconsVisibility } from "@/context/SocialIconsVisibility";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import SocialIcons from "../ui/social-icons";

const Footer = () => {
  const { setIsFooterInView } = useSocialIconsVisibility();
  const { ref, isIntersecting } = useIntersectionObserver();

  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    setIsFooterInView(isIntersecting);
  }, [isIntersecting, setIsFooterInView]);
  return (
    <footer ref={ref} className="snap-start snap-always">
      <div className="w-full border-t border-neutral-200 py-6 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <SocialIcons className="flex gap-6" />
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            © {currentYear} Mupa M&apos;mbetsa Nzaphila
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
