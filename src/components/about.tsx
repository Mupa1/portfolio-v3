import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations();
  const description = t.raw("About.description");

  return (
    <div id="about" className="min-h-screen snap-center snap-always">
      <div className="">
        <div className="mx-auto max-w-7xl py-32 sm:py-40">
          <div className="mx-auto lg:grid lg:max-w-none lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {t("about")}
              </h1>
              <div className="mt-8 space-y-6">
                {description.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="leading-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative m-auto mt-12 w-full max-w-md lg:col-span-2 lg:mt-0">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/mupas-photo.jpeg"
                  alt="Mupa Nzaphila portrait photo"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
