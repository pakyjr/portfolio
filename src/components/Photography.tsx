"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const photos = [
  { src: "CROATIA-266.jpg", orientation: "portrait" as const },
  { src: "EDO-06.jpg", orientation: "portrait" as const },
  { src: "grotta-057.jpg", orientation: "portrait" as const },
  { src: "grvn-48.jpg", orientation: "portrait" as const },
  { src: "gv_l.jpg", orientation: "portrait" as const },
  { src: "ML-151.jpg", orientation: "portrait" as const },
  { src: "ML-206.jpg", orientation: "portrait" as const },
  { src: "post-025.jpg", orientation: "portrait" as const },
  { src: "R0004931.jpg", orientation: "landscape" as const },
  { src: "uoma-100.jpg", orientation: "portrait" as const },
  { src: "00.jpg", orientation: "portrait" as const },
];

export default function Photography() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.4;
    scrollRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }, []);

  // Auto-scroll
  useEffect(() => {
    function startAuto() {
      autoScrollRef.current = setInterval(() => {
        if (isPaused || !scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }, 4000);
    }

    startAuto();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isPaused, scroll]);

  return (
    <section id="photography" className="py-32 md:py-44">
      <div className="flex items-center justify-between px-6 md:px-12 mb-12">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-xs text-accent tracking-[0.3em] uppercase"
        >
          (photography)
        </motion.p>

        {/* Arrows — desktop */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 border border-cream-dim/30 flex items-center justify-center hover:border-cream hover:text-cream text-cream-dim transition-colors"
            aria-label="Previous"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M10 3L5 8L10 13" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 border border-cream-dim/30 flex items-center justify-center hover:border-cream hover:text-cream text-cream-dim transition-colors"
            aria-label="Next"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 3L11 8L6 13" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop: carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="hidden md:flex gap-4 px-6 md:px-12 overflow-x-auto items-start"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="flex-shrink-0 relative overflow-hidden"
            style={{
              height: "70vh",
              width:
                photo.orientation === "portrait"
                  ? "calc(70vh * 2 / 3)"
                  : "calc(70vh * 3 / 2)",
            }}
          >
            <Image
              src={`/images/photography/${photo.src}`}
              alt=""
              fill
              className="object-cover"
              sizes={photo.orientation === "portrait" ? "33vw" : "70vw"}
            />
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col gap-4 px-6">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className={`w-full relative overflow-hidden ${
              photo.orientation === "portrait"
                ? "aspect-[2/3]"
                : "aspect-[3/2]"
            }`}
          >
            <Image
              src={`/images/photography/${photo.src}`}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
