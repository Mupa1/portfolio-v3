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
      className="text-neutral-900 hover:animate-wiggle"
      onClick={() => switchLocale(currentLocale === "en" ? "de" : "en")}
      aria-label={t("switchLanguage")}
    >
      {t("language")}
    </Button>
  );
};

export default Language;
