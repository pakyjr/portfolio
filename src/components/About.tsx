"use client";

import Image from "next/image";
import { skills, spokenLanguages } from "@/lib/data";
import {
  SiTypescript,
  SiSwift,
  SiGo,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiNextdotjs,
  SiFastapi,
} from "react-icons/si";
import { FaJava, FaAws, FaDatabase } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import type { IconType } from "react-icons";
import { useRef } from "react";
import { useAnimateOnVisibility } from "./hooks/useAnimateOnVisibility";

const techIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  Swift: SiSwift,
  Go: SiGo,
  Python: SiPython,
  "C/C++": SiCplusplus,
  Java: FaJava,
  SQL: TbSql,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  "Next.js": SiNextdotjs,
  PostgreSQL: SiPostgresql,
  DynamoDB: FaDatabase,
  Redis: SiRedis,
  Docker: SiDocker,
  AWS: FaAws,
};

function SkillRow({
  label,
  items,
  opacity,
}: {
  label: string;
  items: string[];
  opacity: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-3">
        {label}
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline">
        {items.map((name, i) => {
          const Icon = techIcons[name];
          return (
            <span key={name} className="inline-flex items-center">
              <span className="inline-flex items-center gap-1.5">
                {Icon && (
                  <Icon
                    className={`inline-block text-lg md:text-2xl ${opacity} opacity-50`}
                  />
                )}
                <span
                  className={`font-serif tracking-tight text-2xl md:text-4xl ${opacity}`}
                >
                  {name}
                </span>
              </span>
              {i < items.length - 1 && (
                <span className="text-accent/40 font-serif text-xl md:text-3xl ml-3">
                  /
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function About() {
  const container = useRef<HTMLDivElement | null>(null);
  const { animationRequested } = useAnimateOnVisibility(container, 0.1);

  return (
    <section id="about" className="px-6 md:px-12 py-32 md:py-44">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-16">
        (about)
      </p>

      {/* Skills + Photo grid */}
      <div
        ref={container}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-stretch"
      >
        <div className="md:col-span-7 flex flex-col justify-between self-stretch">
          <div
            className={[
              "delay-100 ease-out duration-500",
              animationRequested
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7.5",
            ].join(" ")}
          >
            <SkillRow
              label="Languages"
              items={skills.languages}
              opacity="text-cream"
            />
          </div>
          <div
            className={[
              "delay-200 ease-out duration-500",
              animationRequested
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7.5",
            ].join(" ")}
          >
            <SkillRow
              label="Technologies"
              items={skills.technologies}
              opacity="text-cream/60"
            />
          </div>
          <div
            className={[
              "delay-300 ease-out duration-500",
              animationRequested
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7.5",
            ].join(" ")}
          >
            <SkillRow
              label="Architecture"
              items={skills.concepts}
              opacity="text-cream/35"
            />
          </div>
          <div
            className={[
              "delay-400 ease-out duration-500",
              animationRequested
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7.5",
            ].join(" ")}
          >
            <p className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">
              Spoken Languages
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {spokenLanguages.map((l) => (
                <div key={l.language} className="relative">
                  <div className="flex flex-col">
                    <span className="font-serif text-xl md:text-2xl text-cream relative z-10">
                      {l.language}
                    </span>
                    <span className="font-mono text-xs text-cream-dim/50">
                      {l.level}
                    </span>
                  </div>
                  <div className="absolute -right-5 top-0 w-10 h-7 md:w-12 md:h-8 opacity-40 z-0">
                    <Image
                      src={l.flag}
                      alt=""
                      fill
                      className="object-cover rounded-sm"
                      sizes="48px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={[
            "md:col-span-3 md:col-start-10 relative flex items-start delay-500 ease-out duration-800",
            animationRequested
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105",
          ].join(" ")}
        >
          <div className="aspect-[3/4] bg-bg-raised w-full max-h-[500px] relative overflow-hidden">
            <Image
              src="/images/me.jpeg"
              alt="Pasquale Junior Montò"
              fill
              className="object-cover object-top grayscale-[0.3]"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
