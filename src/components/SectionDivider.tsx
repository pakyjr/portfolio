"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="px-6 md:px-12 py-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-px bg-gradient-to-r from-cream-dim/30 via-cream-dim/15 to-transparent origin-left"
      />
      {label && (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl text-cream/10 mt-6 tracking-tight select-none"
        >
          {label}
        </motion.h2>
      )}
    </div>
  );
}
