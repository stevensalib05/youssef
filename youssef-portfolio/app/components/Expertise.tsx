"use client";

import Reveal from "./Reveal";

const areas = [
  {
    title: "Residential",
    description:
      "High-rise towers, condominiums, and rental communities — from a 29-storey LEED-certified landmark to boutique lakeside suites.",
    count: "18 projects",
  },
  {
    title: "Commercial & Offices",
    description:
      "Retail plazas, office buildings, and heritage renovations designed for the businesses and people who use them daily.",
    count: "4 projects",
  },
  {
    title: "Institutional",
    description:
      "Schools, chapels, banquet halls, and community centres that bring people together under one roof.",
    count: "2 projects",
  },
  {
    title: "Healthcare",
    description:
      "Pharmacies, medical clinics, and labs planned around patient flow, accessibility, and regulatory compliance.",
    count: "2 projects",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="border-y border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-accent">
            Expertise
          </p>
          <h2 className="font-display max-w-2xl text-4xl leading-tight sm:text-5xl">
            Every step of the design process, concept to completion.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {areas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08}>
              <div className="group h-full bg-background p-9 transition-colors hover:bg-surface">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{area.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-accent">
                    {area.count}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-muted">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
