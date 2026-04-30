"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import messages from "@/messages.json";

const VINYL = messages.Vinyl;

interface Album {
  title: string;
  artist: string;
  slug: string;
}

const HALF = Math.ceil(VINYL.items.length / 2);
const FIRST_ROW = VINYL.items.slice(0, HALF);
const SECOND_ROW = VINYL.items.slice(HALF);

function AlbumCover({ album }: { album: Album }) {
  return (
    <div className="w-8 h-8 md:w-10 md:h-10 relative flex-shrink-0 overflow-hidden bg-bg-raised">
      <Image
        src={`/images/vinyl/${album.slug}.jpg`}
        alt=""
        fill
        className="object-cover"
        sizes="40px"
        onError={(e) => {
          // Hide broken image, show fallback
          const target = e.currentTarget;
          target.style.display = "none";
        }}
      />
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  speed,
}: {
  items: Album[];
  direction: "left" | "right";
  speed: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-3 md:gap-4 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {doubled.map((album, i) => (
          <div
            key={`${album.slug}-${i}`}
            className="flex-shrink-0 group cursor-default"
          >
            <div className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-2.5 border border-cream-dim/10 hover:border-cream-dim/30 transition-colors duration-300">
              <AlbumCover album={album} />
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-sm md:text-base text-cream whitespace-nowrap group-hover:text-accent transition-colors duration-300">
                  {album.title}
                </span>
                <span className="font-mono text-[10px] md:text-xs text-cream-dim/40 whitespace-nowrap">
                  {album.artist}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Vinyl() {
  return (
    <section id="vinyl" className="py-32 md:py-44">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12 px-6 md:px-12"
      >
        {VINYL.label}
      </motion.p>

      <div className="space-y-3 md:space-y-4">
        <MarqueeRow items={FIRST_ROW} direction="left" speed={80} />
        <MarqueeRow items={SECOND_ROW} direction="right" speed={90} />
      </div>
    </section>
  );
}
