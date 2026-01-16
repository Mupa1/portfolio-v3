"use client";

import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

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
      aria-labelledby="projects-title"
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
            <h3 id="projects-title">{t("projects")}</h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-neutral-50 group relative overflow-hidden rounded-2xl border border-neutral-200 shadow-lg hover-card focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-secondary/80 dark:focus-within:ring-offset-background-dark"
                aria-labelledby={`project-title-${project.id}`}
              >
                <div className="relative h-48 overflow-hidden sm:h-64">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute right-2 top-2 flex gap-2 opacity-100 transition-all duration-300 sm:right-4 sm:top-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          handleProjectLinkClick(project.link, project.title)
                        }
                        aria-label={`${t("Accessibility.viewLiveDemo")} ${project.title}`}
                        className="group relative flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/95 text-neutral-900 backdrop-blur-sm shadow-lg shadow-primary-500/10 transition-all duration-300 hover:rotate-3 hover:bg-white hover:shadow-xl hover:shadow-primary-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:bg-background-dark-secondary/95 dark:text-foreground-dark dark:shadow-primary-500/10 dark:hover:shadow-primary-500/20 dark:focus-visible:ring-offset-background-dark"
                      >
                        <ExternalLink className="icon-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110" aria-hidden="true" />
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
                        aria-label={`${t("Accessibility.viewSourceCode")} ${project.title}`}
                        className="group relative flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/95 text-neutral-900 backdrop-blur-sm shadow-lg shadow-primary-500/10 transition-all duration-300 hover:rotate-3 hover:bg-white hover:shadow-xl hover:shadow-primary-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:bg-background-dark-secondary/95 dark:text-foreground-dark dark:shadow-primary-500/10 dark:hover:shadow-primary-500/20 dark:focus-visible:ring-offset-background-dark"
                      >
                        <Github className="icon-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h4 id={`project-title-${project.id}`} className="text-lg font-bold text-neutral-900 dark:text-foreground-dark sm:text-xl">
                    {project.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-foreground-dark-secondary">
                    {project.description[locale]}
                  </p>

                  {project.techStack && (
                    <div className="mt-4 flex flex-wrap gap-2" role="list" aria-label={t("Accessibility.technologiesUsed")}>
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          role="listitem"
                          className="rounded-lg border border-primary-100 bg-gradient-to-r from-primary-50 to-accent-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:border-primary-900/50 dark:from-primary-950/30 dark:to-accent-950/30 dark:text-primary-300"
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
                aria-label={isLoading ? t("Projects.loading") : t("Projects.loadMore")}
                aria-busy={isLoading}
                className="gradient-primary group relative overflow-hidden rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-primary-500/20 dark:hover:shadow-primary-500/30 dark:focus-visible:ring-offset-background-dark sm:px-8 sm:py-4"
              >
                <span className="relative z-10">
                  {isLoading ? (
                    <>
                      <span className="sr-only">{t("Projects.loading")}</span>
                      <span aria-hidden="true">{t("Projects.loading")}</span>
                    </>
                  ) : (
                    t("Projects.loadMore")
                  )}
                </span>
                {!isLoading && (
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                )}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
