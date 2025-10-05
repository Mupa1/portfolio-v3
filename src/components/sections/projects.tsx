"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import { projects } from "@/data/projects";
import { trackButtonClick, trackExternalLink } from "@/lib/analytics";

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
    trackButtonClick("load_more", "projects_section");
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 500);
  };

  const handleProjectLinkClick = (
    url: string | undefined,
    projectTitle: string
  ) => {
    if (url) {
      trackExternalLink(`${projectTitle} - ${url}`);
    }
  };

  const handleGitHubClick = (url: string | undefined, projectTitle: string) => {
    if (url) {
      trackExternalLink(`${projectTitle} - GitHub - ${url}`);
    }
  };

  return (
    <section
      id="projects"
      className="flex-center min-h-screen w-full snap-start snap-always py-12 sm:py-20"
    >
      <div className="w-full max-w-7xl">
        <div className="section-padding-x mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-center"
          >
            <h3>{t("projects")}</h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-neutral-900"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          handleProjectLinkClick(project.link, project.title)
                        }
                        className="flex size-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition-colors hover:bg-white"
                      >
                        <FiExternalLink className="size-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          handleGitHubClick(project.github, project.title)
                        }
                        className="flex size-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition-colors hover:bg-white"
                      >
                        <FiGithub className="size-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.description[locale]}
                  </p>

                  {project.techStack && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: 0.8 + displayedProjects.length * 0.1,
              }}
              className="mt-16 flex justify-center"
            >
              <button
                onClick={loadMore}
                disabled={isLoading}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl disabled:opacity-50 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700"
              >
                <span className="relative z-10">
                  {isLoading ? t("Projects.loading") : t("Projects.loadMore")}
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
