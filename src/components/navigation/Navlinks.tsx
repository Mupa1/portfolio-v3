"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";

const Navlinks = ({
  isMobileNav = false,
  className,
}: {
  isMobileNav?: boolean;
  className?: string;
}) => {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    ["home", "about", "projects", "contact"].forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.observe(element);
        }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      // Focus the section for better accessibility
      element.setAttribute("tabIndex", "-1");
      element.focus({ preventScroll: true });
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const NavButton = ({ section }: { section: string }) => (
    <Button
      variant="link"
      onClick={() => scrollToSection(section)}
      aria-current={activeSection === section ? "page" : undefined}
      aria-label={`Navigate to ${t(section)} section`}
      className={cn(
        "group relative inline-flex h-auto min-h-[44px] touch-manipulation select-none rounded-lg px-3 py-2 font-semibold tracking-wide text-neutral-700 shadow-lg shadow-primary-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:text-foreground-dark-secondary dark:shadow-primary-500/10 dark:focus-visible:ring-offset-background-dark dark:hover:shadow-primary-500/20",
        // Mobile styles
        isMobileNav
          ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          : "text-base",
        // Active state - Using primary color
        activeSection === section
          ? "font-bold text-primary-600 dark:text-primary-400"
          : ""
      )}
    >
      {t(section)}
    </Button>
  );

  // Desktop and mobile sections - both include home
  const desktopSections = ["home", "projects", "about", "contact"] as const;
  const mobileSections = ["home", "projects", "about", "contact"] as const;
  const sectionsToShow = isMobileNav ? mobileSections : desktopSections;

  return (
    <div className={cn("flex gap-6", className)}>
      {sectionsToShow.map((section) =>
        isMobileNav ? (
          <SheetClose asChild key={section}>
            <NavButton section={section} />
          </SheetClose>
        ) : (
          <NavButton key={section} section={section} />
        )
      )}
    </div>
  );
};

export default Navlinks;
