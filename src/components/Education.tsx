"use client";

import { education } from "@/lib/data";
import { CSSProperties, useRef } from "react";
import { useAnimateOnVisibility } from "./hooks/useAnimateOnVisibility";

export default function EducationSection() {
  const container = useRef<HTMLDivElement | null>(null);
  const { animationRequested } = useAnimateOnVisibility(container, 0.25);

  return (
    <section id="education" className="px-6 md:px-12 py-32 md:py-44">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12">
        (education)
      </p>
      <div className="space-y-10" ref={container}>
        {education.map((edu, idx) => (
          <div
            key={edu.institution}
            className={[
              "border-l border-cream-dim/20 pl-6 transition-delay-stagger ease-out duration-500",
              animationRequested
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7.5",
            ].join(" ")}
            style={{ "--stagger-order": idx + 1 } as CSSProperties}
          >
            <p className="font-mono text-xs text-cream-dim tracking-wide mb-1">
              {edu.period}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-cream">
              {edu.institution}
            </h3>
            <p className="font-mono text-sm text-cream-dim mt-1">
              {edu.degree}
            </p>
            {edu.detail && (
              <p className="font-mono text-xs text-cream/50 mt-2 leading-relaxed">
                {edu.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
