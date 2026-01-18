"use client";

import { useTranslations } from "next-intl";

import { socialIcons } from "@/constants/social-icons";
import { trackSocialClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

import ExternalLink from "./external-link";

type SocialIconsTypes = { className?: string };

const SocialIcons: React.FC<SocialIconsTypes> = ({ className }) => {
  const t = useTranslations("Accessibility");

  const getSocialLabel = (id: string) => {
    const platformName = t(id === "github" ? "github" : id === "linkedin" ? "linkedIn" : "twitter");
    return `Visit my ${platformName} profile`;
  };

  return (
    <nav className="relative flex items-center" aria-label={t("socialMediaLinks")}>
      <ul
        className={cn(className, "text-lg font-semibold leading-6")}
        role="list"
      >
        {socialIcons.map((link) => (
          <li key={link.id}>
            <ExternalLink
              href={link.href}
              onClick={() => trackSocialClick(link.id)}
              aria-label={getSocialLabel(link.id)}
              className="group flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg shadow-lg shadow-primary-500/10 transition-all duration-300 hover:rotate-3 hover:shadow-xl hover:shadow-primary-500/20 dark:shadow-primary-500/10 dark:hover:shadow-primary-500/20"
            >
              <span
                aria-hidden="true"
                className="text-neutral-700 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 dark:text-foreground-dark-secondary"
            >
              {link.icon}
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialIcons;
