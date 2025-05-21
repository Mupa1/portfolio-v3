import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations();

  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="mt-12 border-t  border-neutral-200 pt-8 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
        © {currentYear} {t("Footer.copyright")}
      </p>
    </footer>
  );
};

export default Footer;
