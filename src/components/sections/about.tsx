"use client";

import { Code, Database, Lightbulb, Rocket, Server, Users } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations();

  return (
    <section
      id="about"
      className="flex-center w-full py-20 sm:py-28 lg:py-32"
      aria-labelledby="about-title"
    >
      <div className="w-full max-w-7xl">
        <div className="section-padding-x mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 id="about-title">{t("about")}</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <div className="mb-16 text-center sm:mb-20">
              <p className="mx-auto max-w-5xl px-4 text-base leading-relaxed text-neutral-700 dark:text-foreground-dark-secondary sm:px-6 sm:text-lg">
                {t("About.description")}
              </p>
            </div>

            <div className="space-y-12">
              <h4 className="text-center text-xl font-semibold text-neutral-900 dark:text-foreground-dark sm:text-2xl lg:text-3xl">
                {t("About.whatIDo")}
              </h4>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="hover-card group relative flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-secondary/80 dark:focus-visible:ring-offset-background-dark sm:p-8"
                  aria-labelledby="about-card-frontend"
                  tabIndex={0}
                >
                  <div
                    className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 shadow-lg shadow-primary-500/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Code className="icon-lg text-white" />
                  </div>
                  <div className="w-full space-y-3">
                    <h5
                      id="about-card-frontend"
                      className="text-lg font-bold text-neutral-900 dark:text-foreground-dark sm:text-xl"
                    >
                      {t("About.frontend.title")}
                    </h5>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-foreground-dark-secondary sm:text-base">
                      {t("About.frontend.description")}
                    </p>
                    <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50/50 px-3 py-2 dark:border-primary-900/30 dark:bg-primary-950/20">
                      <p className="text-xs font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-sm">
                        {t("About.frontend.tech")}
                      </p>
                    </div>
                  </div>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="hover-card group relative flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-secondary/80 dark:focus-visible:ring-offset-background-dark sm:p-8"
                  aria-labelledby="about-card-backend"
                  tabIndex={0}
                >
                  <div
                    className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 shadow-lg shadow-primary-500/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Server className="icon-lg text-white" />
                  </div>
                  <div className="w-full space-y-3">
                    <h5
                      id="about-card-backend"
                      className="text-lg font-bold text-neutral-900 dark:text-foreground-dark sm:text-xl"
                    >
                      {t("About.backend.title")}
                    </h5>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-foreground-dark-secondary sm:text-base">
                      {t("About.backend.description")}
                    </p>
                    <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50/50 px-3 py-2 dark:border-primary-900/30 dark:bg-primary-950/20">
                      <p className="text-xs font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-sm">
                        {t("About.backend.tech")}
                      </p>
                    </div>
                  </div>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="hover-card group relative flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-secondary/80 dark:focus-visible:ring-offset-background-dark sm:p-8"
                  aria-labelledby="about-card-fullstack"
                  tabIndex={0}
                >
                  <div
                    className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 shadow-lg shadow-primary-500/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Lightbulb className="icon-lg text-white" />
                  </div>
                  <div className="w-full space-y-3">
                    <h5
                      id="about-card-fullstack"
                      className="text-lg font-bold text-neutral-900 dark:text-foreground-dark sm:text-xl"
                    >
                      {t("About.fullstack.title")}
                    </h5>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-foreground-dark-secondary sm:text-base">
                      {t("About.fullstack.description")}
                    </p>
                    <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50/50 px-3 py-2 dark:border-primary-900/30 dark:bg-primary-950/20">
                      <p className="text-xs font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-sm">
                        {t("About.fullstack.approach")}
                      </p>
                    </div>
                  </div>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="hover-card group relative flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-secondary/80 dark:focus-visible:ring-offset-background-dark sm:p-8"
                  aria-labelledby="about-card-devops"
                  tabIndex={0}
                >
                  <div
                    className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 shadow-lg shadow-primary-500/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Rocket className="icon-lg text-white" />
                  </div>
                  <div className="w-full space-y-3">
                    <h5
                      id="about-card-devops"
                      className="text-lg font-bold text-neutral-900 dark:text-foreground-dark sm:text-xl"
                    >
                      {t("About.devops.title")}
                    </h5>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-foreground-dark-secondary sm:text-base">
                      {t("About.devops.description")}
                    </p>
                    <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50/50 px-3 py-2 dark:border-primary-900/30 dark:bg-primary-950/20">
                      <p className="text-xs font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-sm">
                        {t("About.devops.tech")}
                      </p>
                    </div>
                  </div>
                </motion.article>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="hover-card group relative flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-secondary/80 dark:focus-visible:ring-offset-background-dark sm:p-8"
                  aria-labelledby="about-card-database"
                  tabIndex={0}
                >
                  <div
                    className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 shadow-lg shadow-primary-500/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Database className="icon-lg text-white" />
                  </div>
                  <div className="w-full space-y-3">
                    <h5
                      id="about-card-database"
                      className="text-lg font-bold text-neutral-900 dark:text-foreground-dark sm:text-xl"
                    >
                      {t("About.database.title")}
                    </h5>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-foreground-dark-secondary sm:text-base">
                      {t("About.database.description")}
                    </p>
                    <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50/50 px-3 py-2 dark:border-primary-900/30 dark:bg-primary-950/20">
                      <p className="text-xs font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-sm">
                        {t("About.database.tech")}
                      </p>
                    </div>
                  </div>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="hover-card group relative flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-secondary/80 dark:focus-visible:ring-offset-background-dark sm:p-8"
                  aria-labelledby="about-card-ux"
                  tabIndex={0}
                >
                  <div
                    className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 shadow-lg shadow-primary-500/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Users className="icon-lg text-white" />
                  </div>
                  <div className="w-full space-y-3">
                    <h5
                      id="about-card-ux"
                      className="text-lg font-bold text-neutral-900 dark:text-foreground-dark sm:text-xl"
                    >
                      {t("About.ux.title")}
                    </h5>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-foreground-dark-secondary sm:text-base">
                      {t("About.ux.description")}
                    </p>
                    <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50/50 px-3 py-2 dark:border-primary-900/30 dark:bg-primary-950/20">
                      <p className="text-xs font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-sm">
                        {t("About.ux.focus")}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
