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

    ["home", "about", "experience", "education", "projects", "contact"].forEach(
      (section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.observe(element);
        }
      }
    );

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  const NavButton = ({ section }: { section: string }) => (
    <Button
      variant="link"
      onClick={() => scrollToSection(section)}
      className={`
        group relative inline-flex h-auto touch-manipulation select-none
        text-xl font-semibold tracking-wider text-neutral-600 transition-colors hover:animate-wiggle hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-300 sm:text-2xl
        md:text-3xl lg:text-4xl
        ${activeSection === section ? "font-bold text-blue-600 dark:text-blue-400" : ""}
      `}
    >
      {t(section)}
    </Button>
  );

  return (
    <div className={cn("flex gap-8", className)}>
      {(["home", "about", "experience", "education", "projects", "contact"] as const).map(
        (section) =>
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
