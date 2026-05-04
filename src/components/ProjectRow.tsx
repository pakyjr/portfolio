"use client";

import { CSSProperties, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectRow({
  project,
  className,
  style,
}: {
  project: Project;
  className?: string;
  style?: CSSProperties;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  };

  const link = project.link || project.github;

  return (
    <div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={[
        "group relative border-b border-cream-dim/20 py-6 md:py-8 cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <div className="relative z-10 flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
          <span className="font-serif text-sm md:text-base text-cream-dim shrink-0">
            {project.number}
          </span>
          <h3 className="font-serif text-2xl md:text-5xl lg:text-6xl text-cream tracking-tight group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs md:text-sm text-cream-dim hover:text-cream transition-colors tracking-[0.15em] uppercase shrink-0"
          >
            VIEW
          </a>
        )}
      </div>

      <p className="relative z-10 mt-2 font-mono text-xs md:text-sm text-cream-dim/70 max-w-2xl pl-8 md:pl-16">
        {project.description}
      </p>

      {/* Hover image — desktop only */}
      <div
        className="hidden md:block pointer-events-none absolute right-12 z-20 w-[300px] h-[200px] overflow-hidden transition-opacity duration-300"
        style={{
          top: mouseY - 100,
          opacity: isHovered ? 1 : 0,
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover grayscale-[0.6]"
            sizes="300px"
          />
        ) : (
          <div className="w-full h-full bg-bg-raised border border-cream-dim/10 flex items-center justify-center p-6">
            <pre className="font-mono text-[10px] text-accent/50 leading-tight whitespace-pre">
              {`template <typename T>\nclass Container {\n  Node<T>* head;\npublic:\n  void insert(const T&);\n  Iterator<T> begin();\n  Iterator<T> end();\n};`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
