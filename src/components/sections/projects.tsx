"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import { projects } from "@/data/projects";

interface ProjectsProps {
  itemsPerPage?: number;
}

type Language = "en" | "de";

const Projects = ({ itemsPerPage = 8 }: ProjectsProps) => {
  const t = useTranslations();
  const locale = useLocale() as Language;
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const displayedProjects = projects.slice(0, page * itemsPerPage);
  const hasMore = displayedProjects.length < projects.length;

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section
      id="projects"
      className="center-snap m-auto max-w-7xl py-12 sm:py-20"
    >
      <div className="section-padding-x mx-auto max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {t("projects")}
        </motion.h3>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="group relative aspect-square overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-neutral-900"
            >
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain object-top transition-transform duration-500 group-hover:scale-110 group-hover:grayscale"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-neutral-50 via-40% to-neutral-50 to-100% dark:via-neutral-900 dark:to-neutral-900" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
                <div className="flex min-h-48 flex-col justify-between">
                  <div>
                    <h4 className="text-lg sm:text-xl">{project.title}</h4>
                    <p className="mt-2 text-xs text-neutral-700 dark:text-neutral-200 sm:text-sm">
                      {project.description[locale]}
                    </p>
                    {project.techStack && (
                      <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-neutral-900/10 px-2 py-0.5 text-[10px] text-neutral-900 backdrop-blur-sm dark:bg-white/10 dark:text-white sm:text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 flex flex-wrap justify-end gap-3 sm:gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs sm:text-sm"
                      >
                        <FiExternalLink className="size-3.5 sm:size-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs sm:text-sm"
                      >
                        <FiGithub className="size-3.5 sm:size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="rounded-full bg-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-100 shadow-sm hover:bg-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 dark:bg-neutral-100 dark:text-neutral-700 dark:hover:bg-neutral-100"
            >
              {isLoading ? t("Projects.loading") : t("Projects.loadMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
