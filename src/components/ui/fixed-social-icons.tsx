"use client";

import { useSocialIconsVisibility } from "@/context/SocialIconsVisibility";
import { cn } from "@/lib/utils";

import SocialIcons from "./social-icons";

const FixedSocialIcons = () => {
  const { isFooterInView } = useSocialIconsVisibility();

  return (
    <div
      className={cn(
        "fixed bottom-5 left-[-7] z-10 hidden h-screen w-14 flex-col items-center justify-end transition-opacity duration-300 md:left-7 md:flex",
        isFooterInView ? "opacity-0" : "opacity-100"
      )}
    >
      <SocialIcons className="flex flex-col gap-6 text-lg font-semibold leading-6" />
    </div>
  );
};

export default FixedSocialIcons;
