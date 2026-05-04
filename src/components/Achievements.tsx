"use client";

import { achievements } from "@/lib/data";
import { useRef } from "react";
import { useAnimateOnVisibility } from "./hooks/useAnimateOnVisibility";

export default function Achievements() {
  const container = useRef<HTMLDivElement | null>(null);
  const { animationRequested } = useAnimateOnVisibility(container);

  return (
    <section id="achievements" className="px-6 md:px-12 py-32 md:py-44">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12">
        (achievements)
      </p>
      <div ref={container} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((a) => (
          <div
            key={a.title}
            className={[
              "border-t border-cream-dim/20 pt-6 ease-out duration-500 transition-delay-stagger",
              animationRequested
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7.5",
            ].join(" ")}
          >
            <h3 className="font-serif text-xl md:text-2xl text-cream mb-3">
              {a.title}
            </h3>
            <p className="font-mono text-sm text-cream-dim leading-relaxed">
              {a.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
