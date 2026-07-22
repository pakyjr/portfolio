"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
          className="relative z-50 flex min-h-11 min-w-11 flex-col items-center justify-center gap-[6px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="site-menu"
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
            id="site-menu"
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
                  className="min-h-11 font-serif text-4xl md:text-6xl text-cream hover:text-accent transition-colors duration-300 tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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
