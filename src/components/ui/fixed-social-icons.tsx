"use client";

import { useTranslations } from "next-intl";

import { useSocialIconsVisibility } from "@/context/SocialIconsVisibility";
import { cn } from "@/lib/utils";

import SocialIcons from "./social-icons";

const FixedSocialIcons = () => {
  const { isFooterInView } = useSocialIconsVisibility();
  const t = useTranslations("Accessibility");

  return (
    <aside
      className={cn(
        "fixed bottom-5 left-0 z-10 hidden h-screen w-14 flex-col items-center justify-end transition-opacity duration-300 md:left-7 md:flex",
        isFooterInView ? "opacity-0" : "opacity-100"
      )}
      aria-label={t("fixedSocialLinks")}
    >
      <SocialIcons className="flex flex-col gap-6 text-lg font-semibold leading-6" />
    </aside>
  );
};

export default FixedSocialIcons;
