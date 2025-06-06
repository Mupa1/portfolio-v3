import { socialIcons } from "@/constants/social-icons";
import { cn } from "@/lib/utils";

import ExternalLink from "./external-link";

type SocialIconsTypes = { className?: string };

const SocialIcons: React.FC<SocialIconsTypes> = ({ className }) => {
  return (
    <div className="relative flex flex-col items-center">
      <ul className={cn(className, "text-lg font-semibold leading-6")}>
        {socialIcons.map((link) => (
          <li key={link.id} className="hover:animate-wiggle">
            <ExternalLink href={link.href}>{link.icon}</ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
