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
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NavButton = ({ section }: { section: string }) => (
    <Button
      variant="link"
      onClick={() => scrollToSection(section)}
      className={`
        group relative inline-flex h-auto tracking-wider text-neutral-900
        transition-colors
      `}
    >
      <span className="relative">
        {t(section)}
        <span
          className={`
            absolute bottom-[-5px] left-0 h-[2px] w-full
            origin-left scale-x-0 bg-current
            transition-transform duration-300 ease-in-out
            group-hover:scale-x-100
            ${activeSection === section ? "scale-x-100 text-neutral-600 dark:text-neutral-100" : ""}
          `}
        />
      </span>
    </Button>
  );

  return (
    <div className={cn("flex gap-8", className)}>
      {(["home", "about", "projects", "contact"] as const).map((section) =>
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
