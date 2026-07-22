"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-12 md:py-32">
      <h2 className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12">
        (experience)
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        {experiences.map((exp) => (
          <motion.div key={exp.company} variants={fadeUp}>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-cream">
                  {exp.company}
                </h3>
                <p className="font-mono text-sm text-cream-dim mt-1">
                  {exp.role}
                </p>
              </div>
              <p className="font-mono text-xs text-cream-dim tracking-wide">
                {exp.location} &middot; {exp.period}
              </p>
            </div>
            <ul className="space-y-3 mt-6">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="font-mono text-sm text-cream/70 leading-relaxed pl-4 border-l border-cream-dim/20"
                >
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
