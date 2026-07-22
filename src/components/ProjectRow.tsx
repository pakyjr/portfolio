"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSwift,
  SiTypescript,
} from "react-icons/si";
import { FaApple, FaCode, FaMicrochip, FaTerminal, FaWifi } from "react-icons/fa";
import { fadeUp } from "@/lib/animations";
import type { Project } from "@/lib/data";

const projectTechIcons: Record<string, IconType> = {
  Python: SiPython,
  FastAPI: SiFastapi,
  "Next.js": SiNextdotjs,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Redis: SiRedis,
  React: SiReact,
  "C++": SiCplusplus,
  ESP32: FaMicrochip,
  MQTT: FaWifi,
  SwiftUI: SiSwift,
  Swift: SiSwift,
  CoreMotion: FaApple,
  C: SiC,
  POSIX: FaTerminal,
  Terminal: FaTerminal,
};

function TechTag({ name }: { name: string }) {
  const Icon = projectTechIcons[name] ?? FaCode;

  return (
    <span className="inline-flex items-center gap-2 border border-cream-dim/20 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-cream-dim">
      <Icon aria-hidden="true" className="shrink-0 text-sm text-accent/80" />
      {name}
    </span>
  );
}

export default function ProjectRow({ project }: { project: Project }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  };

  const link = project.link || project.github;

  if (project.featured) {
    return (
      <motion.article
        ref={rowRef}
        variants={fadeUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative border-y border-cream-dim/20 py-8 md:py-12"
      >
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(13rem,0.42fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <span className="font-serif text-sm text-cream-dim">
              {project.number}
            </span>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {project.category}
            </p>
            {project.role && (
              <p className="mt-3 max-w-xs font-mono text-xs leading-5 text-cream-dim">
                {project.role}
              </p>
            )}
          </div>

          <div>
            <h3 className="font-serif text-4xl sm:text-5xl xl:text-6xl tracking-tight text-cream transition-colors duration-300 group-hover:text-accent">
              {project.name}
            </h3>
            <p className="mt-7 max-w-2xl font-mono text-sm sm:text-base leading-7 text-cream/90">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="mt-7 grid gap-3" aria-label={`${project.name} highlights`}>
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 font-mono text-xs sm:text-sm leading-6 text-cream-dim">
                    <span aria-hidden="true" className="mt-[0.65rem] h-px w-4 shrink-0 bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex min-h-11 items-center gap-3 border-b border-accent pb-1 font-mono text-xs uppercase tracking-[0.18em] text-cream transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {project.link ? "Visit project" : "View source"}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        <div
          className="pointer-events-none absolute right-8 z-20 hidden h-[220px] w-[330px] overflow-hidden border border-cream-dim/20 bg-bg shadow-2xl transition-opacity duration-300 md:block"
          style={{
            top: mouseY - 110,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            className="object-cover grayscale-[0.55]"
            sizes="330px"
          />
        </div>
      </motion.article>
    );
  }

  return (
    <motion.div
      ref={rowRef}
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-cream-dim/20 py-6 md:py-8"
    >
      <div className="relative z-10 flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
          <span className="font-serif text-sm md:text-base text-cream-dim shrink-0">
            {project.number}
          </span>
          <div>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{project.category}</p>
            <h3 className="font-serif text-2xl md:text-5xl lg:text-6xl text-cream tracking-tight group-hover:text-accent transition-colors duration-300">
              {project.name}
            </h3>
          </div>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-mono text-xs md:text-sm text-cream-dim hover:text-cream transition-colors tracking-[0.15em] uppercase shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            VIEW
          </a>
        )}
      </div>

      <p className="relative z-10 mt-3 font-mono text-xs md:text-sm leading-6 text-cream-dim max-w-2xl pl-8 md:pl-16">
        {project.description}
      </p>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2 pl-8 md:pl-16">
        {project.tech.map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>

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
    </motion.div>
  );
}
