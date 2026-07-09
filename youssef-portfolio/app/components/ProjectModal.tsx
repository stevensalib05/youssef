"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "../data/projects";
import { galleries } from "../data/galleries";

const slideVariants = {
  enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // The gallery comes from the portfolio deck; fall back to the grid thumbnail.
  const images =
    (project && galleries[project.slug]) ??
    (project ? [`/projects/${project.slug}.jpg`] : []);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((i) => (i + dir + images.length) % images.length);
    },
    [images.length]
  );

  // Reset to the first photo whenever a different project is opened.
  useEffect(() => {
    setIndex(0);
    setDirection(0);
  }, [project?.slug]);

  // Lock body scroll and wire up keyboard controls while open.
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") paginate(1);
      else if (e.key === "ArrowLeft") paginate(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose, paginate]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          <motion.div
            className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden border border-line bg-surface shadow-2xl md:grid-cols-[3fr_2fr]"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Carousel */}
            <div className="relative aspect-[4/3] bg-background md:aspect-auto md:h-[90vh] md:max-h-[640px]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <Image
                    src={images[index]}
                    alt={`${project.name} — photo ${index + 1} of ${images.length}`}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => paginate(-1)}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center border border-line bg-background/70 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
                  >
                    <span aria-hidden className="text-lg leading-none">
                      ‹
                    </span>
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center border border-line bg-background/70 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
                  >
                    <span aria-hidden className="text-lg leading-none">
                      ›
                    </span>
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 border border-line bg-background/70 px-3 py-1 text-xs text-foreground backdrop-blur">
                    {index + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Details */}
            <div className="flex max-h-[90vh] flex-col overflow-y-auto p-6 sm:p-8">
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-line bg-background/70 text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent md:relative md:right-0 md:top-0 md:ml-auto md:bg-transparent"
              >
                <span aria-hidden className="text-lg leading-none">
                  ×
                </span>
              </button>

              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-accent">
                {project.category}
              </p>
              <h3 className="font-display mt-3 text-3xl leading-tight">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {project.location} · {project.year}
              </p>

              <p className="mt-4 border-l-2 border-accent/40 pl-4 text-sm text-foreground/90">
                {project.facts}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {images.length > 1 && (
                <div className="mt-6 grid grid-cols-5 gap-2">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      aria-label={`View photo ${i + 1}`}
                      className={`relative aspect-square overflow-hidden border transition-colors ${
                        i === index
                          ? "border-accent"
                          : "border-line opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
