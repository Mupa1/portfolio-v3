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
        group relative inline-flex h-auto text-2xl font-semibold
        tracking-wider text-neutral-900/70 transition-colors hover:animate-wiggle dark:text-neutral-100/70 sm:text-3xl md:text-4xl lg:text-5xl
        ${activeSection === section ? "font-bold" : ""}
      `}
    >
      {t(section)}
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
