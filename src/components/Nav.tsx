"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "(PROJECTS)", href: "#projects" },
  { label: "(EXPERIENCE)", href: "#experience" },
  { label: "(ABOUT)", href: "#about" },
  { label: "(PHOTOGRAPHY)", href: "#photography" },
  { label: "(CONTACT)", href: "#contact" },
];

const DEFAULT_RAF_VALUE = -1;
const DURATION = 300;
type NavState = "opened" | "closed" | "is-closing";

export default function Nav() {
  const [state, setState] = useState<NavState>("closed");
  const navContainer = useRef<HTMLDivElement | null>(null);
  const rAF = useRef<number>(DEFAULT_RAF_VALUE);

  const handleClick = (href: string) => {
    setState("is-closing");
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (state !== "is-closing") {
      return;
    }

    let initial = -1;
    const loop: FrameRequestCallback = (timestamp) => {
      if (initial === -1) {
        initial = timestamp;
      }
      const elapsed = (timestamp - initial) / DURATION;
      const progress = Math.min(elapsed, 1);
      navContainer.current?.style.setProperty(
        "opacity",
        `${(1 - progress) * 100}%`,
        "important",
      );
      if (progress >= 1) {
        rAF.current = requestAnimationFrame(() => setState("closed"));
      } else {
        rAF.current = requestAnimationFrame(loop);
      }
    };

    rAF.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rAF.current);
      setState("closed");
    };
  }, [state]);

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
          onClick={() => {
            if (state === "closed") {
              setState("opened");
            } else if (state === "opened") {
              setState("is-closing");
            }
          }}
          className="relative z-50 flex flex-col gap-[6px] w-8 h-8 items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1px] w-6 bg-cream transition-all duration-300 ${
              state === "opened" ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-6 bg-cream transition-all duration-300 ${
              state === "opened" ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </header>

      {state === "closed" ? null : (
        <div
          className="fixed inset-0 z-40 bg-bg-raised/95 backdrop-blur-sm flex items-center justify-center opacity-0 animate-opacity-0-to-100 duration-300 [animation-delay:0s]"
          ref={navContainer}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, idx) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-serif text-4xl md:text-6xl text-cream hover:text-accent transition-colors duration-300 tracking-wide translate-y-7.5 opacity-0 animate-fade-up animation-delay-stagger"
                style={{ "--stagger-order": idx + 1 } as CSSProperties}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
