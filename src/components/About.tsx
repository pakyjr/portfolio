"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
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
  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-32">
      <h2 className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-16">
        (about)
      </h2>

      {/* Skills + Photo grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-stretch"
      >
        <div className="md:col-span-7 flex flex-col justify-between self-stretch">
          <motion.div variants={fadeUp}>
            <SkillRow
              label="Languages"
              items={skills.languages}
              opacity="text-cream"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <SkillRow
              label="Technologies"
              items={skills.technologies}
              opacity="text-cream/75"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <SkillRow
              label="Architecture"
              items={skills.concepts}
              opacity="text-cream/60"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
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
                    <span className="font-mono text-xs text-cream-dim/80">
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
          </motion.div>
        </div>

        <motion.div
          variants={scaleIn}
          className="md:col-span-3 md:col-start-10 relative flex items-start"
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
        </motion.div>
      </motion.div>

    </section>
  );
}
