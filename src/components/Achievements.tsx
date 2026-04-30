"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import messages from "@/messages.json";

const ACHIEVEMENTS = messages.Achievements;

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 md:px-12 py-32 md:py-44">
      <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12">
        {ACHIEVEMENTS.label}
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {ACHIEVEMENTS.items.map((a) => (
          <motion.div
            key={a.title}
            variants={fadeUp}
            className="border-t border-cream-dim/20 pt-6"
          >
            <h3 className="font-serif text-xl md:text-2xl text-cream mb-3">
              {a.title}
            </h3>
            <p className="font-mono text-sm text-cream-dim leading-relaxed">
              {a.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
