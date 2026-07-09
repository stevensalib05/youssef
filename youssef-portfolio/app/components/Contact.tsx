"use client";

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-28 text-center">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-accent">
            Contact
          </p>
          <h2 className="font-display mx-auto max-w-3xl text-4xl leading-tight sm:text-6xl">
            Let&apos;s cooperate on your future project.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Tailored architectural design solutions that balance aesthetic
            appeal with functionality; sustainable, efficient, and built
            around your vision.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <a
            href="tel:+15195669195"
            className="mt-10 inline-block bg-accent px-9 py-4 text-lg font-medium tracking-wide text-background transition-opacity hover:opacity-85"
          >
            (519) 566-9195
          </a>
        </Reveal>
      </div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} Youssef Salib — Architect, OAA, MRAIC
          </p>
          <p>Ontario, Canada</p>
        </div>
      </footer>
    </section>
  );
}
