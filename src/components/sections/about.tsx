"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations();

  return (
    <section
      id="about"
      className="flex-center min-h-screen w-full snap-center snap-always"
    >
      <div className="max-width md:pt-20">
        <div className="mx-auto grid h-full max-w-6xl grid-cols-2 gap-2 md:gap-2">
          <motion.h3
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {t("about")}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
            className="relative row-span-1 aspect-[1.5] md:row-span-2"
          >
            <Image
              src="/images/photo.png"
              alt="Mupa Nzaphila's Portrait Photo"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain object-right"
              priority
            />
          </motion.div>
          <p className="col-span-2 w-full md:col-span-1">
            {t("About.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
