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
      className="flex-center min-h-screen w-full snap-start snap-always py-12 sm:py-20"
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
            <h3>{t("about")}</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-12 text-center">
              <p className="mx-auto max-w-5xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t("About.description")}
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-center text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                {t("About.whatIDo")}
              </h4>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col items-center gap-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center dark:from-blue-900/20 dark:to-blue-800/20"
                >
                  <div className="rounded-lg bg-blue-500 p-3">
                    <Code className="size-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100">
                      {t("About.frontend.title")}
                    </h5>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      {t("About.frontend.description")}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col items-center gap-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 text-center dark:from-purple-900/20 dark:to-purple-800/20"
                >
                  <div className="rounded-lg bg-purple-500 p-3">
                    <Server className="size-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-900 dark:text-purple-100">
                      {t("About.backend.title")}
                    </h5>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      {t("About.backend.description")}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col items-center gap-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 text-center dark:from-green-900/20 dark:to-green-800/20"
                >
                  <div className="rounded-lg bg-green-500 p-3">
                    <Database className="size-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100">
                      {t("About.database.title")}
                    </h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {t("About.database.description")}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex flex-col items-center gap-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 text-center dark:from-orange-900/20 dark:to-orange-800/20"
                >
                  <div className="rounded-lg bg-orange-500 p-3">
                    <Rocket className="size-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-900 dark:text-orange-100">
                      {t("About.devops.title")}
                    </h5>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      {t("About.devops.description")}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex flex-col items-center gap-4 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 p-6 text-center dark:from-pink-900/20 dark:to-pink-800/20"
                >
                  <div className="rounded-lg bg-pink-500 p-3">
                    <Users className="size-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-pink-900 dark:text-pink-100">
                      {t("About.ux.title")}
                    </h5>
                    <p className="text-sm text-pink-700 dark:text-pink-300">
                      {t("About.ux.description")}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex flex-col items-center gap-4 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 text-center dark:from-indigo-900/20 dark:to-indigo-800/20"
                >
                  <div className="rounded-lg bg-indigo-500 p-3">
                    <Lightbulb className="size-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-indigo-900 dark:text-indigo-100">
                      Full-Stack Solutions
                    </h5>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">
                      End-to-end development
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
