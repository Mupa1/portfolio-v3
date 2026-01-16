"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Language = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations();

  const switchLocale = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, "");

    router.push(`/${locale}/${newPathname}`);
  };

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
    <Button
      variant="ghost"
          className="group relative flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-neutral-700 shadow-lg shadow-primary-500/10 transition-all duration-300 hover:rotate-3 hover:shadow-xl hover:shadow-primary-500/20 focus-visible:outline-none dark:text-foreground-dark-secondary dark:shadow-primary-500/10 dark:hover:shadow-primary-500/20"
      aria-label={t("switchLanguage")}
          aria-haspopup="true"
    >
          <Globe
            className="icon-lg text-neutral-700 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 dark:text-foreground-dark-secondary"
            aria-hidden="true"
          />
          <span className="sr-only">{t("switchLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[140px]"
        aria-label="Language options"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
            aria-label={`Switch to ${lang.label}`}
            className={`flex items-center gap-2 ${
              currentLocale === lang.code
                ? "bg-primary-50 dark:bg-primary-950/20"
                : ""
            }`}
          >
            <span aria-hidden="true">{lang.flag}</span>
            <span className="flex-1 font-medium">{lang.label}</span>
            {currentLocale === lang.code && (
              <span
                className="text-primary-600 dark:text-primary-400"
                aria-hidden="true"
              >
                ✓
      </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Language;
