"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItem, staggerContainer } from "@/lib/animations";

const navLinks = [
  { label: "(PROJECTS)", href: "#projects" },
  { label: "(EXPERIENCE)", href: "#experience" },
  { label: "(ABOUT)", href: "#about" },
  { label: "(PHOTOGRAPHY)", href: "#photography" },
  { label: "(CONTACT)", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-gradient-to-b from-bg via-bg/80 to-transparent">
        <a
          href="#"
          className="font-mono text-sm tracking-[0.2em] text-cream uppercase"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          PAKYJR
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex flex-col gap-[6px] w-8 h-8 items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1px] w-6 bg-cream transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-6 bg-cream transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-raised/95 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  variants={navItem}
                  onClick={() => handleClick(link.href)}
                  className="font-serif text-4xl md:text-6xl text-cream hover:text-accent transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
