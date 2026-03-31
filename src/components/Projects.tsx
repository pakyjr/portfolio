"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/data";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-32 md:py-44">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12">
        (selected work)
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="border-t border-cream-dim/20"
      >
        {projects.map((project) => (
          <ProjectRow key={project.number} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
