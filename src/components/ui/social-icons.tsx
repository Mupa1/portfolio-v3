import { socialIcons } from "@/app/constants/social-icons";
import { cn } from "@/lib/utils";

import ExternalLink from "./external-link";

type SocialIconsTypes = { className?: string };

const SocialIcons: React.FC<SocialIconsTypes> = ({ className }) => {
  return (
    <div className="relative flex w-14 flex-col items-center">
      <ul
        className={cn(
          className,
          "fixed bottom-5 left-[-7] z-10 h-screen flex-col items-center justify-end gap-y-8 md:left-7 w-14 flex text-lg font-semibold leading-6 [&>li:not(:nth-child(2))>a>svg]:stroke-[1px] "
        )}
      >
        <div className="absolute bottom-32 left-7 mb-2 hidden h-32 w-0.5 bg-gray-400 sm:block" />
        {socialIcons.map((link) => (
          <li key={link.id}>
            <ExternalLink href={link.href}>{link.icon}</ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
