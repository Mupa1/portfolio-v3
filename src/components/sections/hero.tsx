import { useTranslations } from "next-intl";
import React from "react";

import Overlay from "../ui/overlay";

const Hero = () => {
  const t = useTranslations();

  return (
    <>
      <Overlay />
      <section
        id="home"
        className="flex-center h-screen w-full snap-start snap-always flex-col gap-3 text-center"
      >
        <h2>
          <div>{t("Hero.frontend")}</div>
          <div>{t("Hero.engineer")}</div>
        </h2>
        <p className="">{t("Hero.description")}</p>
      </section>
    </>
  );
};

export default Hero;
