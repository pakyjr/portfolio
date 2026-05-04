"use client";

import Image from "next/image";
import { useRef } from "react";
import { useAnimateOnVisibility } from "./hooks/useAnimateOnVisibility";

interface Album {
  title: string;
  artist: string;
  slug: string;
}

const albums: Album[] = [
  {
    title: "Clube da Esquina",
    artist: "Lô Borges & Milton Nascimento",
    slug: "clube-da-esquina",
  },
  { title: "Revolver", artist: "The Beatles", slug: "revolver" },
  { title: "Animals", artist: "Pink Floyd", slug: "animals" },
  { title: "A Love Supreme", artist: "John Coltrane", slug: "a-love-supreme" },
  { title: "Kind of Blue", artist: "Miles Davis", slug: "kind-of-blue" },
  {
    title: "Forever Howlong",
    artist: "Black Country, New Road",
    slug: "forever-howlong",
  },
  {
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    slug: "to-pimp-a-butterfly",
  },
  { title: "Transa", artist: "Caetano Veloso", slug: "transa" },
  {
    title: "Awaken, My Love!",
    artist: "Childish Gambino",
    slug: "awaken-my-love",
  },
  { title: "Never Enough", artist: "Daniel Caesar", slug: "never-enough" },
  {
    title: "What Kind of Music",
    artist: "Tom Misch",
    slug: "what-kind-of-music",
  },
  { title: "When the Pawn…", artist: "Fiona Apple", slug: "when-the-pawn" },
  { title: "98.12.28", artist: "Fishmans", slug: "98-12-28" },
  { title: "The New Sound", artist: "Geordie Greep", slug: "the-new-sound" },
  {
    title: "Lift Your Skinny Fists Like Antennas to Heaven",
    artist: "GY!BE",
    slug: "lift-your-skinny-fists",
  },
  { title: "Jazzmatazz Vol. II", artist: "Guru", slug: "jazzmatazz-vol-ii" },
  { title: "Blues Blood", artist: "Immanuel Wilkins", slug: "blues-blood" },
  {
    title: "Turn On the Bright Lights",
    artist: "Interpol",
    slug: "turn-on-the-bright-lights",
  },
  { title: "Grace", artist: "Jeff Buckley", slug: "grace" },
  { title: "Cloak", artist: "Jordan Rakei", slug: "cloak" },
  { title: "The Epic", artist: "Kamasi Washington", slug: "the-epic" },
  {
    title: "untitled unmastered.",
    artist: "Kendrick Lamar",
    slug: "untitled-unmastered",
  },
  {
    title: "In the Court of the Crimson King",
    artist: "King Crimson",
    slug: "in-the-court",
  },
  { title: "Red", artist: "King Crimson", slug: "red" },
  { title: "The OOZ", artist: "King Krule", slug: "the-ooz" },
  {
    title: "The Miseducation of Lauryn Hill",
    artist: "Lauryn Hill",
    slug: "miseducation",
  },
  {
    title: "Yesterday's Gone",
    artist: "Loyle Carner",
    slug: "yesterdays-gone",
  },
  { title: "Imaginal Disk", artist: "Magdalena Bay", slug: "imaginal-disk" },
  { title: "What's Going On", artist: "Marvin Gaye", slug: "whats-going-on" },
  {
    title: "Brasilian Skies",
    artist: "Masayoshi Takanaka",
    slug: "brasilian-skies",
  },
  { title: "Jar of Flies", artist: "Alice in Chains", slug: "jar-of-flies" },
  { title: "Mezzanine", artist: "Massive Attack", slug: "mezzanine" },
  {
    title: "The Glow, Pt. 2",
    artist: "The Microphones",
    slug: "the-glow-pt-2",
  },
  {
    title: "冀西南林路行",
    artist: "Omnipotent Youth Society",
    slug: "omnipotent-youth",
  },
  {
    title: "Songs for the Deaf",
    artist: "Queens of the Stone Age",
    slug: "songs-for-the-deaf",
  },
  { title: "OK Computer", artist: "Radiohead", slug: "ok-computer" },
  { title: "In Rainbows", artist: "Radiohead", slug: "in-rainbows" },
  { title: "Amnesiac", artist: "Radiohead", slug: "amnesiac" },
  { title: "The Bends", artist: "Radiohead", slug: "the-bends" },
  { title: "In My Element", artist: "Robert Glasper", slug: "in-my-element" },
  {
    title: "The Queen Is Dead",
    artist: "The Smiths",
    slug: "the-queen-is-dead",
  },
  {
    title: "Siamese Dream",
    artist: "The Smashing Pumpkins",
    slug: "siamese-dream",
  },
  {
    title: "Getz/Gilberto",
    artist: "Stan Getz & João Gilberto",
    slug: "getz-gilberto",
  },
  { title: "The Royal Scam", artist: "Steely Dan", slug: "the-royal-scam" },
  {
    title: "Songs in the Key of Life",
    artist: "Stevie Wonder",
    slug: "songs-in-the-key-of-life",
  },
  { title: "Is This It", artist: "The Strokes", slug: "is-this-it" },
  { title: "InnerSpeaker", artist: "Tame Impala", slug: "innerspeaker" },
  {
    title: "Vinicius & Toquinho",
    artist: "Vinicius de Moraes & Toquinho",
    slug: "vinicius-toquinho",
  },
];

const half = Math.ceil(albums.length / 2);
const row1 = albums.slice(0, half);
const row2 = albums.slice(half);

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
}: {
  items: Album[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div
        className={[
          "flex gap-3 md:gap-4 w-max animate-test",
          direction === "left" ? "animate-slider-left" : "animate-slider-right",
        ].join(" ")}
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
      </div>
    </div>
  );
}

export default function Vinyl() {
  const label = useRef<HTMLDivElement | null>(null);
  const { animationRequested } = useAnimateOnVisibility(label);

  return (
    <section id="vinyl" className="py-32 md:py-44">
      <p
        className={[
          "font-mono text-xs text-accent tracking-[0.3em] uppercase mb-12 px-6 md:px-12 ease-out duration-500",
          animationRequested
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-7.5",
        ].join(" ")}
        ref={label}
      >
        (on rotation)
      </p>

      <div className="space-y-3 md:space-y-4">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
}
