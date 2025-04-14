import Image from "next/image";
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

const MobileNavigation = () => {
  const t = useTranslations();

  return (
    <Sheet>
      <div className="block sm:hidden">
        <SheetTrigger asChild>
          <Button variant="ghost" className="flex-between relative">
            <Image
              src="/icons/hamburger-dark.svg"
              width={20}
              height={20}
              alt="Menu"
              className="block dark:hidden"
            />
            <Image
              src="/icons/hamburger-light.svg"
              width={20}
              height={20}
              alt="Menu"
              className="hidden dark:block"
            />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side="right" className="flex-between border-none pt-20">
        <SheetTitle className="hidden">{t("navigation")}</SheetTitle>
        <div className="flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="h-full gap-6">
              <Navlinks isMobileNav className="flex flex-col" />
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
