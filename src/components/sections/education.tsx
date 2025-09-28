"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import React from "react";

interface EducationItem {
  id: string;
  institution: string;
  program: string;
  period: string;
  description: string;
  certificate?: string;
}

const Education: React.FC = () => {
  const t = useTranslations();

  const educationData: EducationItem[] = [
    {
      id: "google-ux",
      institution: t("Education.google.institution"),
      program: t("Education.google.program"),
      period: t("Education.google.period"),
      description: t("Education.google.description"),
      certificate:
        "https://www.coursera.org/account/accomplishments/professional-cert/073Y4KP0LLU5",
    },
    {
      id: "microverse",
      institution: t("Education.microverse.institution"),
      program: t("Education.microverse.program"),
      period: t("Education.microverse.period"),
      description: t("Education.microverse.description"),
      certificate:
        "https://www.credential.net/05ae7d55-20cc-44e6-ba2a-4e3021ac088b#acc.1oqR2DAf",
    },
  ];

  return (
    <section id="education" className="flex-center w-full py-16 sm:py-24">
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
              {t("Education.title")}
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              {t("Education.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {educationData.map((education: EducationItem, index: number) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-neutral-900"
              >
                <div className="mb-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600">
                      <svg
                        className="size-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        {education.program}
                      </h4>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {education.institution}
                      </p>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
                        {education.period}
                      </span>
                    </div>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {education.description}
                  </p>

                  {education.certificate && (
                    <a
                      href={education.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:text-white hover:shadow-xl dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700"
                    >
                      <svg
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {t("Education.viewCertificate")}
                      <svg
                        className="size-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute -right-4 -top-4 size-24 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50 transition-opacity duration-300 group-hover:opacity-70" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
