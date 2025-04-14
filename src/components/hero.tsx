import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations();
  
  return (
    <div
      id="home"
      className="flex-center h-screen w-full snap-start snap-always flex-col"
    >
      <h1 className="mb-10 w-full text-left">MUPA NZAPHILA</h1>
      <h2 className="xl:flex-between w-full flex-col xl:flex-row">
        <div>
          <div>{t("Hero.frontend")}</div>
          <div>{t("Hero.engineer")}</div>
        </div>
        <div className="mt-8 text-right xl:mt-0">
          <div>{t("Hero.ux")}</div>
          <div>{t("Hero.designer")}</div>
        </div>
      </h2>
    </div>
  );
};

export default Hero;
