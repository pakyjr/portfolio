"use client";

import { projects } from "@/lib/data";
import ProjectRow from "./ProjectRow";
import { useAnimateOnVisibility } from "./hooks/useAnimateOnVisibility";
import { CSSProperties, useRef } from "react";

export default function Projects() {
  const container = useRef<HTMLDivElement | null>(null);
  const { animationRequested } = useAnimateOnVisibility(container, 0.1);

  return (
    <section id="projects" className="px-6 md:px-12 py-32 md:py-44">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12">
        (selected work)
      </p>
      <div ref={container} className="border-t border-cream-dim/20">
        {projects.map((project, idx) => (
          <ProjectRow
            key={project.number}
            project={project}
            style={{ "--stagger-order": idx + 1 } as CSSProperties}
            className={[
              "transition-delay-stagger ease-out duration-500",
              animationRequested
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7.5",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}
