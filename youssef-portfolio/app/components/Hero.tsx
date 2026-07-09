"use client";

import Image from "next/image";
import { motion } from "motion/react";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "24", label: "Projects Delivered" },
  { value: "$300M+", label: "Construction Value" },
  { value: "10+", label: "Cities Across Ontario" },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col">
      <div className="absolute inset-0">
        <Image
          src="/projects/hero.jpg"
          alt="Rendering of the Old Victoria two-tower residential development on the Thames River, London, Ontario"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-32 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mb-5 text-sm uppercase tracking-[0.35em] text-accent"
        >
          Architect — OAA, MRAIC
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="font-display max-w-4xl text-5xl leading-[1.05] sm:text-7xl"
        >
          Designing the skylines communities live in.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          Two decades of architectural design across Ontario — from LEED-certified
          residential towers to medical centres, offices, and community landmarks.
          Concept to completion, with precision in every document.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-background transition-opacity hover:opacity-85"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-foreground/30 px-7 py-3.5 text-sm font-medium tracking-wide transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <div className="relative border-t border-line/60 bg-background/60 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 + i * 0.1, ease }}
              className="px-6 py-8"
            >
              <p className="font-display text-3xl text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
