"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "../ui/button";

const Language = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Navigation");

  const switchLocale = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, "");

    router.push(`/${locale}/${newPathname}`);
  };

  return (
    <Button
      variant="ghost"
      onClick={() => switchLocale(currentLocale === "en" ? "de" : "en")}
      aria-label={
        currentLocale === "en" ? "Switch to German" : "Switch to English"
      }
    >
      {currentLocale === "en" ? <span>{t("de")}</span> : <span>{t("en")}</span>}
    </Button>
  );
};

export default Language;
