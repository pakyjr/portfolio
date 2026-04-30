"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import messages from "@/messages.json";
import ProjectRow from "./ProjectRow";

const PROJECTS = messages.Projects;

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-32 md:py-44">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12">
        {PROJECTS.label}
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className="border-t border-cream-dim/20 [counter-reset:project]"
      >
        {PROJECTS.items.map((project) => (
          <ProjectRow
            key={project.name}
            project={project}
            className="[counter-increment:project] [&_h3]:before:content-[counter(project,decimal-leading-zero)] [&_h3]:before:font-serif [&_h3]:before:tracking-normal [&_h3]:before:text-sm [&_h3]:before:md:text-base [&_h3]:before:text-cream-dim [&_h3]:before:mr-4 [&_h3]:before:md:mr-8"
          />
        ))}
      </motion.div>
    </section>
  );
}
