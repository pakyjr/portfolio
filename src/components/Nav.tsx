"use client";

import { useEffect, useRef, useState } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer, #music-player, #desktop-nav, #brand-link"));
    background.forEach((element) => { element.inert = true; });
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "Tab") {
        const links = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
        const controls = [toggleRef.current, ...links].filter((element): element is HTMLButtonElement | HTMLAnchorElement => element !== null);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element) => { element.inert = false; });
      toggle?.focus();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-6 py-5 md:px-12 bg-gradient-to-b from-bg via-bg/80 to-transparent">
        <a
          id="brand-link"
          href="#"
          className="font-mono text-sm tracking-[0.2em] text-cream uppercase"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          PAKYJR
        </a>
        <div className="flex items-center gap-5 md:gap-8">
        <nav id="desktop-nav" aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {[{ label: "Work", href: "#projects" }, { label: "About", href: "#about" }, { label: "Contact", href: "#contact" }].map((link) => (
            <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center font-mono text-sm text-cream-dim transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{link.label}</a>
          ))}
        </nav>
        <button
          ref={toggleRef}
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
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg-raised/95 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  variants={navItem}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="min-h-11 font-serif text-4xl md:text-6xl text-cream hover:text-accent transition-colors duration-300 tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
