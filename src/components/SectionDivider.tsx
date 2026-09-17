"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="px-6 md:px-12 py-2">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-px bg-gradient-to-r from-cream-dim/30 via-cream-dim/15 to-transparent origin-left"
      />
      {label && (
        <motion.p
          aria-hidden="true"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mt-3 pt-3 font-mono text-[clamp(1.75rem,4.5vw,3.75rem)] font-bold uppercase leading-none tracking-[-0.045em] text-cream select-none before:absolute before:top-0 before:left-0 before:h-0.5 before:w-10 before:bg-accent before:content-['']"
        >
          {label}
        </motion.p>
      )}
    </div>
  );
}
