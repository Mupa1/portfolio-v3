import { MenuIcon } from "lucide-react";
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
      <div>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="flex-between relative text-neutral-600 hover:animate-wiggle hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-300"
          >
            <MenuIcon className="size-7 text-neutral-600 transition-colors hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-300" />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side="right" className="border-none">
        <SheetTitle className="hidden">{t("navigation")}</SheetTitle>
        <SheetDescription className="hidden">
          {t("navigation")} menu with navigation links and social media icons
        </SheetDescription>
        <div className="flex h-full items-center justify-center">
          <SheetClose asChild>
            <section className="flex flex-col items-center gap-16">
              <Navlinks
                isMobileNav
                className="flex flex-col items-center gap-8"
              />
              <SocialIcons className="flex gap-8 text-2xl text-neutral-900/70 dark:text-neutral-100/70 sm:text-3xl md:text-4xl lg:text-5xl" />
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
