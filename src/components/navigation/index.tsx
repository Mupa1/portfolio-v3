"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import Language from "./Language";
import Menu from "./Menu";
import Navlinks from "./Navlinks";
import Theme from "./Theme";

const Navbar = () => {
  const t = useTranslations("Accessibility");

  return (
    <header role="banner">
      <nav
        className="body-padding-x fixed top-0 z-20 w-full border-b border-neutral-200/50 bg-neutral-50/95 shadow-sm backdrop-blur-xl dark:border-border-dark/30 dark:bg-background-dark/80 dark:shadow-background-dark-secondary/50"
        aria-label={t("mainNavigation")}
      >
        <div className="flex-between max-width h-20">
          <Link
            href="/"
            className="group relative flex flex-col gap-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background-dark"
            aria-label={t("homeLink")}
          >
            <h1 className="relative">
              <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-lg font-bold leading-tight tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 group-hover:from-primary-700 group-hover:via-primary-600 group-hover:to-secondary-700 dark:from-primary-400 dark:via-primary-500 dark:to-secondary-400 dark:group-hover:from-primary-300 dark:group-hover:via-primary-400 dark:group-hover:to-secondary-300 sm:text-xl">
                Mupa
              </div>
              <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-lg font-bold leading-tight tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 group-hover:from-primary-700 group-hover:via-primary-600 group-hover:to-secondary-700 dark:from-primary-400 dark:via-primary-500 dark:to-secondary-400 dark:group-hover:from-primary-300 dark:group-hover:via-primary-400 dark:group-hover:to-secondary-300 sm:text-xl">
                Nzaphila
              </div>
              <div className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-secondary-500/0 opacity-0 blur transition-all duration-300 group-hover:via-primary-500/10 group-hover:opacity-20 dark:group-hover:via-primary-400/10" />
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex">
            <Navlinks className="flex items-center gap-6" />
          </div>

          <div
            className="flex-between gap-4 md:gap-8"
            role="group"
            aria-label={t("navigationControls")}
          >
            <Language />
            <Theme />
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
