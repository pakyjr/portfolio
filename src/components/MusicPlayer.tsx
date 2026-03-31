"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { tracks } from "@/lib/tracks";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MusicPlayer() {
  const [queue] = useState(() => shuffle(tracks));
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const track = queue[index];

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % queue.length);
    setProgress(0);
  }, [queue.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + queue.length) % queue.length);
    setProgress(0);
  }, [queue.length]);

  // Load and play new track when index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = queue[index].preview;
    audio.load();
    if (isPlaying) {
      audio.play().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Progress + ended
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => {
      if (audio.duration && audio.duration > 0) {
        setProgress(audio.currentTime / audio.duration);
      }
    };
    const onEnd = () => {
      setProgress(0);
      setIndex((i) => (i + 1) % queue.length);
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, [queue.length]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
    setProgress(pct);
  };

  return (
    <div className="w-full bg-bg border-t border-cream-dim/10" style={{ position: "relative", zIndex: 40 }}>
      <audio ref={audioRef} preload="auto" />

      {/* Progress bar */}
      <div
        className="h-[2px] bg-cream-dim/10 cursor-pointer group"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-accent"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="flex items-center gap-4 px-4 md:px-8 py-3">
        {/* Artwork */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={track.artwork}
          alt=""
          className="w-10 h-10 object-cover flex-shrink-0"
        />

        {/* Track info */}
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs text-cream truncate">{track.title}</p>
          <p className="font-mono text-[10px] text-cream-dim/50 truncate">
            {track.artist} — {track.album}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button onClick={prev} className="text-cream-dim hover:text-cream transition-colors" aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 2h2v12H3V2zm3.5 6 8.5 6V2l-8.5 6z" />
            </svg>
          </button>

          <button
            onClick={isPlaying ? pause : play}
            className="w-8 h-8 border border-cream-dim/30 rounded-full flex items-center justify-center hover:border-accent hover:text-accent text-cream transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3 2h4v12H3V2zm6 0h4v12H9V2z" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 2l10 6-10 6V2z" />
              </svg>
            )}
          </button>

          <button onClick={next} className="text-cream-dim hover:text-cream transition-colors" aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11 2h2v12h-2V2zM2 2l8.5 6L2 14V2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
