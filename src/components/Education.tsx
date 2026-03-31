"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { education } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="px-6 md:px-12 py-32 md:py-44">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12">
        (education)
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-10"
      >
        {education.map((edu) => (
          <motion.div
            key={edu.institution}
            variants={fadeUp}
            className="border-l border-cream-dim/20 pl-6"
          >
            <p className="font-mono text-xs text-cream-dim tracking-wide mb-1">
              {edu.period}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-cream">
              {edu.institution}
            </h3>
            <p className="font-mono text-sm text-cream-dim mt-1">
              {edu.degree}
            </p>
            {edu.detail && (
              <p className="font-mono text-xs text-cream/50 mt-2 leading-relaxed">
                {edu.detail}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
