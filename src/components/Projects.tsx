"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/data";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="px-6 py-6 md:px-12 md:py-9">
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
          A closer look at the systems I shaped, the constraints behind them,
          and the engineering decisions that made them work.
        </p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-0"
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
          className="border-t border-cream-dim/20"
        >
          {otherProjects.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
