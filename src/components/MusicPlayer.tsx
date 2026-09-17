"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Track } from "@/lib/tracks";

export default function MusicPlayer({ tracks }: { tracks: Track[] }) {
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState("");
  const [queue] = useState(tracks);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const track = queue[index];

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setError("");
    audio.play().then(() => setIsPlaying(true)).catch(() => { setIsPlaying(false); setError("Preview unavailable. Try another track."); });
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
    setError("");
  }, [queue.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + queue.length) % queue.length);
    setProgress(0);
    setError("");
  }, [queue.length]);

  // Load and play new track when index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = queue[index].preview;
    audio.load();
    if (isPlaying) {
      audio.play().catch(() => { setIsPlaying(false); setError("Preview unavailable. Try another track."); });
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

  return (
    <div className="w-full bg-bg border-t border-cream-dim/10" style={{ position: "relative", zIndex: 40 }}>
      <audio ref={audioRef} preload="none" onPlaying={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onError={() => { setIsPlaying(false); setError("Preview unavailable. Try another track."); }} />
      {!expanded && (
        <div className="flex min-h-14 items-center justify-between gap-4 px-6 md:px-12">
          <p className="font-mono text-xs text-cream-dim">{isPlaying ? `Playing: ${track.title}` : "A little music while you browse?"}</p>
          <button onClick={() => setExpanded(true)} aria-expanded={false} aria-controls="player-controls" className="min-h-11 shrink-0 font-mono text-sm text-accent focus-visible:outline-2 focus-visible:outline-accent">{isPlaying ? "Open player" : "Listen ↗"}</button>
        </div>
      )}
      <div id="player-controls" hidden={!expanded}>

      <label className="block px-6 pt-2 md:px-12">
        <span className="sr-only">Track progress</span>
        <input type="range" min="0" max="100" step="0.1" value={progress * 100} onChange={(event) => {
          const audio = audioRef.current;
          if (!audio || !Number.isFinite(audio.duration)) return;
          audio.currentTime = Number(event.target.value) / 100 * audio.duration;
          setProgress(Number(event.target.value) / 100);
        }} className="block h-6 w-full cursor-pointer accent-accent" />
      </label>
      <div className="flex items-center gap-2 px-4 md:gap-4 md:px-12 py-3">
        {/* Artwork */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={track.artwork}
          alt=""
          className="hidden sm:block w-10 h-10 object-cover flex-shrink-0"
        />

        {/* Track info */}
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs text-cream truncate">{track.title}</p>
          <p className="font-mono text-xs text-cream-dim truncate">
            {track.artist} — {track.album}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 md:gap-3 flex-shrink-0">
          <button onClick={prev} className="flex h-11 w-11 items-center justify-center text-cream-dim hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-accent" aria-label="Previous track">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 2h2v12H3V2zm3.5 6 8.5 6V2l-8.5 6z" />
            </svg>
          </button>

          <button
            onClick={isPlaying ? pause : play}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-dim/30 text-cream transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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

          <button onClick={next} className="flex h-11 w-11 items-center justify-center text-cream-dim hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-accent" aria-label="Next track">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11 2h2v12h-2V2zM2 2l8.5 6L2 14V2z" />
            </svg>
          </button>
        </div>
        <button onClick={() => setExpanded(false)} aria-expanded={true} aria-controls="player-controls" aria-label="Minimize player" className="flex h-11 w-11 shrink-0 items-center justify-center text-cream-dim hover:text-cream focus-visible:outline-2 focus-visible:outline-accent">−</button>
      </div>
      </div>
      <p role="status" className={error ? "px-6 pb-3 font-mono text-xs text-accent" : "sr-only"}>{error}</p>
    </div>
  );
}
