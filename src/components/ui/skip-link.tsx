"use client";

import { useTranslations } from "next-intl";
import React from "react";

const SkipLink = () => {
  const t = useTranslations("Accessibility");

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {t("skipToMain")}
    </a>
  );
};

export default SkipLink;
