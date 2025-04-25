import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations();

  return (
    <section
      id="about"
      className="flex-center min-h-screen snap-center snap-always"
    >
      <div className="max-width pt-20">
        <h3>{t("about")}</h3>
        <div className="mx-auto flex h-full flex-col gap-2 lg:flex-row lg:gap-6">
          <p className="w-full flex-1 ">{t("About.description")}</p>
          <div className="relative -z-10 m-auto aspect-[1.5] size-full flex-1">
            <Image
              src="/images/photo.png"
              alt="Mupa Nzaphila's Portrait Photo"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
