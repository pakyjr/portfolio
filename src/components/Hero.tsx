"use client";

import { useEffect, useState, useRef, CSSProperties } from "react";
import dynamic from "next/dynamic";

const Silk = dynamic(() => import("./Silk"), { ssr: false });

const nameLines = [
  { full: "Pasquale", short: "P", italic: false },
  { full: "Junior", short: "J", italic: false },
  { full: "Montò", short: "M", italic: true },
];

function useNameAnimation() {
  const [displayed, setDisplayed] = useState(() =>
    nameLines.map((l) => l.full),
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const phaseRef = useRef<"full" | "shrinking" | "short" | "growing">("full");
  const posRef = useRef(nameLines.map((l) => l.full.length));

  useEffect(() => {
    function tick() {
      const phase = phaseRef.current;

      if (phase === "full") {
        setIsAnimating(false);
        timeoutRef.current = setTimeout(
          () => {
            phaseRef.current = "shrinking";
            setIsAnimating(true);
            tick();
          },
          3000 + Math.random() * 2000,
        );
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
          nameLines.map((l, i) => l.full.slice(0, posRef.current[i])),
        );
        timeoutRef.current = setTimeout(tick, 35 + Math.random() * 20);
        return;
      }

      if (phase === "short") {
        timeoutRef.current = setTimeout(
          () => {
            phaseRef.current = "growing";
            tick();
          },
          2000 + Math.random() * 1500,
        );
        return;
      }

      if (phase === "growing") {
        const allFull = posRef.current.every(
          (p, i) => p >= nameLines[i].full.length,
        );
        if (allFull) {
          phaseRef.current = "full";
          tick();
          return;
        }
        posRef.current = posRef.current.map((p, i) =>
          Math.min(nameLines[i].full.length, p + 1),
        );
        setDisplayed(
          nameLines.map((l, i) => l.full.slice(0, posRef.current[i])),
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
        <Silk
          speed={3}
          scale={1}
          color="#1a1a1a"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Bottom vignette to blend into rest of page */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent pointer-events-none z-[2]" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 w-full">
        {/* Name — left side */}
        <div className="md:col-span-7">
          <h1 className="font-serif leading-[0.95] tracking-tight">
            {nameLines.map((line, i) => (
              <span key={line.full} className="block overflow-hidden">
                <span
                  // variants={fadeUp}
                  className={`block text-[clamp(3.5rem,10vw,10rem)] text-cream opacity-0 translate-y-7.5 animate-fade-up animation-delay-stagger ${
                    line.italic ? "italic" : ""
                  }`}
                  style={{ "--stagger-order": i + 1 } as CSSProperties}
                >
                  {displayed[i]}
                  <span
                    className={`inline-block w-[3px] h-[0.75em] ml-1 align-baseline transition-colors duration-200 ${
                      isAnimating ? "bg-accent" : "bg-accent animate-pulse"
                    }`}
                  />
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-8 font-mono text-sm md:text-base text-cream-dim tracking-wide lowercase opacity-0 translate-y-7.5 animate-fade-up animation-delay-stagger"
            style={{ "--stagger-order": nameLines.length + 1 } as CSSProperties}
          >
            if it moves me, it becomes my mission
          </p>
        </div>

        {/* Bio — right side, subtle */}
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end opacity-0 animate-opacity-0-to-100">
          <div className="space-y-5">
            <p className="font-serif text-lg md:text-xl leading-relaxed text-cream-dim/40">
              Finishing my CS degree at Federico II, after a year of backend
              work at IdeaSolutions and the Apple Developer Academy. Right now
              I&apos;m the sole engineer and co-founder at Clinequal — a startup
              where I translate domain theory from my PhD co-founders into
              software that flags bias in clinical trials.
            </p>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-cream-dim/40">
              Building alone has forced me to make every architectural decision
              myself: what to build, what to cut, how to keep things simple
              enough to actually ship. I like that pressure, but I also want to
              work alongside people who are better than me.
            </p>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-cream-dim/40">
              Outside of code, I&apos;m a photographer, a Tango dancer, and a
              Jazz/Prog-Rock lover. Based in Naples, Italy.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 font-mono text-xs text-cream-dim tracking-[0.3em] uppercase z-10 opacity-0 translate-y-7.5 animate-fade-up [animation-delay:1200ms]">
        scroll
      </div>
    </section>
  );
}
