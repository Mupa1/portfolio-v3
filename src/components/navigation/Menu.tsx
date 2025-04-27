import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Sheet,
  SheetClose,
  SheetContent,
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
            className="flex-between relative text-neutral-900 hover:animate-wiggle"
          >
            <MenuIcon className="size-7 text-neutral-600 transition-colors dark:text-neutral-100" />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side="right" className="flex-between border-none pt-20">
        <SheetTitle className="hidden">{t("navigation")}</SheetTitle>
        <div className="flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="size-full">
              <Navlinks isMobileNav className="flex flex-col" />
              <SocialIcons className="flex-center gap-8 pt-20 text-2xl text-neutral-900/70 dark:text-neutral-100/70 sm:text-3xl md:text-4xl lg:text-5xl" />
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
