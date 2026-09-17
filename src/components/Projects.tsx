"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/data";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Product", "Backend", "Embedded", "Systems"];
  const matchesFilter = (category: string) => {
    if (filter === "All") return true;
    const value = category.toLowerCase();
    if (filter === "Product") return /clinical|music|golf/.test(value);
    if (filter === "Backend") return /clinical|music/.test(value);
    if (filter === "Embedded") return /embedded|iot|golf/.test(value);
    return /systems|data structures/.test(value);
  };
  const visibleProjects = projects.filter((project) => matchesFilter(project.category));
  const featuredProjects = visibleProjects.filter((project) => project.featured);
  const otherProjects = visibleProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="bg-bg-soft/45 px-6 py-6 md:px-12 md:py-9">
      <div className="mb-4 md:mb-6 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,30rem)] md:items-end">
        <div>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-3">
            (selected work)
          </p>
          <h2 className="font-mono text-2xl md:text-3xl leading-tight tracking-tight text-cream">
            Products, not just projects.
          </h2>
        </div>
        <p className="font-mono text-sm md:text-base leading-relaxed text-cream-dim">
          A selection of systems I’ve built, the constraints behind them,
          and the technical decisions that shaped them.
        </p>
      </div>
      <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-cream-dim/15 py-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`relative min-h-11 font-mono text-xs uppercase tracking-[0.2em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${filter === item ? "text-copper after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:bg-copper" : "text-cream-dim hover:text-cream"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-3 md:grid-cols-2"
      >
        {featuredProjects.map((project) => (
          <ProjectRow key={project.number} project={project} />
        ))}
      </motion.div>

      <div className="mt-6 md:mt-8">
        <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-4">
          (more experiments)
        </p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-3 md:grid-cols-3"
        >
          {otherProjects.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
