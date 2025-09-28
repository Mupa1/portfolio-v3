"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import React from "react";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const t = useTranslations();

  const experienceData: ExperienceItem[] = [
    {
      id: "independent",
      company: t("Experience.independent.company"),
      position: t("Experience.independent.position"),
      period: t("Experience.independent.period"),
      achievements: t.raw("Experience.independent.achievements"),
    },
    {
      id: "accure",
      company: t("Experience.accure.company"),
      position: t("Experience.accure.position"),
      period: t("Experience.accure.period"),
      achievements: t.raw("Experience.accure.achievements"),
    },
    {
      id: "heycar",
      company: t("Experience.heycar.company"),
      position: t("Experience.heycar.position"),
      period: t("Experience.heycar.period"),
      achievements: t.raw("Experience.heycar.achievements"),
    },
  ];

  return (
    <section id="experience" className="flex-center w-full py-16 sm:py-24">
      <div className="w-full max-w-7xl">
        <div className="section-padding-x mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h3 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("Experience.title")}
            </h3>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 md:left-1/2 md:-translate-x-0.5" />

            {experienceData.map((experience: ExperienceItem, index: number) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`relative mb-12 flex items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 z-10 flex size-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg md:left-1/2 md:-translate-x-1/2">
                  <div className="size-2 rounded-full bg-white" />
                </div>

                <div
                  className={`ml-16 w-full rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-neutral-900 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-16"
                      : "md:ml-auto md:pl-16"
                  }`}
                >
                  <div className="mb-6">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        {experience.position}
                      </h4>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {experience.company}
                      </p>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {experience.achievements.map(
                      (achievement: string, achievementIndex: number) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{
                            duration: 0.6,
                            delay: 0.6 + index * 0.2 + achievementIndex * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 flex size-1.5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                            {achievement}
                          </p>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
