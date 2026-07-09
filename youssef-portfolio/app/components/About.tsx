"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const credentials = [
  "Ontario Association of Architects (OAA)",
  "Royal Architectural Institute of Canada (MRAIC)",
  "Residential High-Rise & Mixed-Use",
  "Code Compliance & Contract Documents",
  "Team Leadership & Mentoring",
];

export default function About({ portraitSrc }: { portraitSrc: string | null }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-start gap-14 lg:grid-cols-[2fr_3fr]">
        <Reveal>
          {/*
            Portrait template — drop the photo at public/images/portrait.jpg
            (or .png / .webp) and it will replace this placeholder automatically.
          */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm border border-line bg-surface">
            <div className="absolute -top-3 -left-3 h-full w-full border border-accent/40" />
            {portraitSrc ? (
              <Image
                src={portraitSrc}
                alt="Portrait of Youssef Salib"
                fill
                className="relative object-cover"
                sizes="(min-width: 1024px) 24rem, 90vw"
              />
            ) : (
              <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="font-display text-7xl text-accent/70">YS</span>
                <span className="h-px w-12 bg-accent/40" />
                <span className="text-xs uppercase tracking-[0.3em] text-muted">
                  Portrait Coming Soon
                </span>
              </div>
            )}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-accent">
              About
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Two decades of crafting exceptional spaces.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                With 20+ years of experience designing residential high-rise
                buildings, commercial spaces, medical centres, offices, and
                plazas, I bring a comprehensive approach to architectural
                design — providing documents with precision and ensuring strict
                compliance with all code requirements, with a strong focus on
                detail.
              </p>
              <p>
                My work thrives in a collaborative environment, integrating
                seamlessly with team members and clients to deliver innovative
                solutions that put the end user first. Beyond the design
                process, I mentor and manage teams of junior consultants,
                guiding them to maintain project timelines and deliver quality
                work that exceeds expectations.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-9 flex flex-wrap gap-3">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="border border-line bg-surface px-4 py-2 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
