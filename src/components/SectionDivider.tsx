"use client";

import { useRef } from "react";
import { useAnimateOnVisibility } from "./hooks/useAnimateOnVisibility";

export default function SectionDivider({ label }: { label?: string }) {
  const divider = useRef<HTMLDivElement | null>(null);
  const { animationRequested } = useAnimateOnVisibility(divider);

  return (
    <div className="px-6 md:px-12 py-8">
      <div
        className={[
          "h-px bg-linear-to-r from-cream-dim/30 via-cream-dim/15 to-transparent origin-left duration-800 ease-out",
          animationRequested ? "scale-105 opacity-100" : "scale-100 opacity-0",
        ].join(" ")}
        ref={divider}
      />
      {label && (
        <h2
          className={[
            "font-serif text-4xl md:text-6xl text-cream/10 mt-6 tracking-tight select-none duration-500 delay-300 ease-out",
            animationRequested
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2.5",
          ].join(" ")}
        >
          {label}
        </h2>
      )}
    </div>
  );
}
