"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { categories, projects, type Category, type Project } from "../data/projects";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

const filters = ["All", ...categories] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === (filter as Category));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-accent">
          Selected Work
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display max-w-xl text-4xl leading-tight sm:text-5xl">
            Projects that shape their cities.
          </h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`border px-4 py-2 text-sm transition-colors ${
                  filter === f
                    ? "border-accent bg-accent text-background"
                    : "border-line text-muted hover:border-accent/60 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <motion.div layout className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group"
            >
              <button
                type="button"
                onClick={() => setSelected(project)}
                aria-label={`View details for ${project.name}`}
                className="block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-line bg-surface">
                  <Image
                    src={`/projects/${project.slug}.jpg`}
                    alt={`${project.name}, ${project.location}`}
                    fill
                    sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="absolute bottom-4 left-4 right-4 translate-y-3 text-sm text-foreground/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.facts}
                  </p>
                  <span className="absolute right-3 top-3 border border-line bg-background/70 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/90 opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                    View
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                  <span className="shrink-0 text-sm text-accent">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {project.location} · {project.category}
                </p>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
