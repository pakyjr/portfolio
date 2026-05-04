"use client";

import { experiences } from "@/lib/data";
import { useAnimateOnVisibility } from "./hooks/useAnimateOnVisibility";
import { CSSProperties, useRef } from "react";

export default function Experience() {
  const container = useRef<HTMLDivElement | null>(null);
  const { animationRequested } = useAnimateOnVisibility(container, 0.25);

  return (
    <section id="experience" className="px-6 md:px-12 py-32 md:py-44">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12">
        (experience)
      </p>
      <div ref={container} className={"space-y-16"}>
        {experiences.map((exp, idx) => (
          <div
            key={exp.company}
            style={{ "--stagger-order": idx + 1 } as CSSProperties}
            className={[
              "transition-delay-stagger ease-out duration-500",
              animationRequested
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7.5",
            ].join(" ")}
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-cream">
                  {exp.company}
                </h3>
                <p className="font-mono text-sm text-cream-dim mt-1">
                  {exp.role}
                </p>
              </div>
              <p className="font-mono text-xs text-cream-dim tracking-wide">
                {exp.location} &middot; {exp.period}
              </p>
            </div>
            <ul className="space-y-3 mt-6">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="font-mono text-sm text-cream/70 leading-relaxed pl-4 border-l border-cream-dim/20"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
