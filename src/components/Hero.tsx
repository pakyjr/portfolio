"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import messages from "@/messages.json";

const NAME_LINES = messages.Hero.name;

const Silk = dynamic(() => import("./Silk"), { ssr: false });

function useNameAnimation() {
  const [displayed, setDisplayed] = useState(() =>
    NAME_LINES.map((l) => l.full),
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const phaseRef = useRef<"full" | "shrinking" | "short" | "growing">("full");
  const posRef = useRef(NAME_LINES.map((l) => l.full.length));

  useEffect(() => {
    function tick() {
      const phase = phaseRef.current;

      if (phase === "full") {
        setIsAnimating(false);
        timeoutRef.current = setTimeout(() => {
          phaseRef.current = "shrinking";
          setIsAnimating(true);
          tick();
        }, 3000 + Math.random() * 2000);
        return;
      }

      if (phase === "shrinking") {
        const allAtInitial = posRef.current.every((p, i) => p <= 1);
        if (allAtInitial) {
          phaseRef.current = "short";
          tick();
          return;
        }
        posRef.current = posRef.current.map((p) => Math.max(1, p - 1));
        setDisplayed(
          NAME_LINES.map((l, i) => l.full.slice(0, posRef.current[i])),
        );
        timeoutRef.current = setTimeout(tick, 35 + Math.random() * 20);
        return;
      }

      if (phase === "short") {
        timeoutRef.current = setTimeout(() => {
          phaseRef.current = "growing";
          tick();
        }, 2000 + Math.random() * 1500);
        return;
      }

      if (phase === "growing") {
        const allFull = posRef.current.every(
          (p, i) => p >= NAME_LINES[i].full.length,
        );
        if (allFull) {
          phaseRef.current = "full";
          tick();
          return;
        }
        posRef.current = posRef.current.map((p, i) =>
          Math.min(NAME_LINES[i].full.length, p + 1),
        );
        setDisplayed(
          NAME_LINES.map((l, i) => l.full.slice(0, posRef.current[i])),
        );
        timeoutRef.current = setTimeout(tick, 55 + Math.random() * 30);
        return;
      }
    }

    timeoutRef.current = setTimeout(() => {
      phaseRef.current = "full";
      tick();
    }, 2000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { displayed, isAnimating };
}

export default function Hero() {
  const { displayed, isAnimating } = useNameAnimation();

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 py-24 overflow-hidden hero-grain">
      {/* Silk WebGL background */}
      <div className="absolute inset-0 z-0">
        <Silk speed={3} scale={1} color="#1a1a1a" noiseIntensity={1.5} rotation={0} />
      </div>

      {/* Bottom vignette to blend into rest of page */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent pointer-events-none z-[2]" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 w-full">
        {/* Name — left side */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="md:col-span-7"
        >
          <h1 className="font-serif leading-[0.95] tracking-tight">
            {NAME_LINES.map((line, i) => (
              <span key={line.full} className="block overflow-hidden">
                <motion.span
                  variants={fadeUp}
                  className={`block text-[clamp(3.5rem,10vw,10rem)] text-cream ${
                    line.italic ? "italic" : ""
                  }`}
                >
                  {displayed[i]}
                  <span
                    className={`inline-block w-[3px] h-[0.75em] ml-1 align-baseline transition-colors duration-200 ${
                      isAnimating ? "bg-accent" : "bg-accent animate-pulse"
                    }`}
                  />
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 font-mono text-sm md:text-base text-cream-dim tracking-wide lowercase"
          >
            if it moves me, it becomes my mission
          </motion.p>
        </motion.div>

        {/* Bio — right side, subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="md:col-span-4 md:col-start-9 flex flex-col justify-end"
        >
          <div className="space-y-5">
            <p className="font-serif text-lg md:text-xl leading-relaxed text-cream-dim/40 whitespace-pre-line">
              {messages.Hero.description}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-12 font-mono text-xs text-cream-dim tracking-[0.3em] uppercase z-10"
      >
        scroll
      </motion.div>
    </section>
  );
}
