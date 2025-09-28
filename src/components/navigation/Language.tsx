"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "../ui/button";

const Language = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations();

  const switchLocale = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, "");

    router.push(`/${locale}/${newPathname}`);
  };

  return (
    <Button
      variant="ghost"
      className="hover-color flex items-center gap-2 hover:animate-wiggle"
      onClick={() => switchLocale(currentLocale === "en" ? "de" : "en")}
      aria-label={t("switchLanguage")}
    >
      <span className="text-lg">{currentLocale === "en" ? "🇩🇪" : "🇺🇸"}</span>
      <span className="text-sm font-medium">
        {currentLocale === "en" ? "DE" : "EN"}
      </span>
    </Button>
  );
};

export default Language;
