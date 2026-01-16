"use client";

import { Menu as MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Navlinks from "./Navlinks";
import { Button } from "../ui/button";
import SocialIcons from "../ui/social-icons";

const Menu = () => {
  const t = useTranslations();

  return (
    <Sheet>
      <div className="contents lg:hidden">
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            aria-label="Open navigation menu"
            aria-expanded="false"
            className="group relative flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-neutral-700 shadow-lg shadow-primary-500/10 transition-all duration-300 hover:rotate-3 hover:shadow-xl hover:shadow-primary-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:text-foreground-dark-secondary dark:shadow-primary-500/10 dark:hover:shadow-primary-500/20 dark:focus-visible:ring-offset-background-dark"
          >
            <MenuIcon
              className="icon-lg text-neutral-700 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 dark:text-foreground-dark-secondary"
              aria-hidden="true"
            />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent
        side="right"
        className="border-none bg-neutral-50/95 backdrop-blur-2xl dark:bg-background-dark/95"
        aria-label={t("navigation")}
      >
        <SheetTitle className="sr-only">{t("navigation")}</SheetTitle>
        <SheetDescription className="sr-only">
          {t("navigation")} menu with navigation links and social media icons
        </SheetDescription>
        <div className="flex h-full items-center justify-center px-6">
          <SheetClose asChild>
            <section className="flex w-full max-w-md flex-col items-center gap-16">
              <Navlinks
                isMobileNav
                className="flex w-full flex-col items-center gap-8"
              />
              <div className="flex w-full items-center justify-center border-t border-neutral-200/50 pt-8 dark:border-border-dark/50">
                <SocialIcons className="flex justify-center gap-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
              </div>
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
