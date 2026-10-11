"use client";

import { GlowCard, NeonButton, ProgressGlow } from "@/components/Primitives";
import { useEffect, useRef, useState } from "react";

export default function PomodoroPage() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!running) return;
    timerRef.current = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [running]);

  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  const percent = ((25 * 60 - seconds) / (25 * 60)) * 100;

  return (
    <GlowCard className="p-6 overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-[--color-muted]">Pomodoro Focus Timer</div>
          <div className="text-5xl font-extrabold tracking-tight mt-1">{minutes}:{secs}</div>
        </div>
        <div className="flex items-center gap-2">
          <NeonButton onClick={() => setRunning((r) => !r)}>{running ? "Pause" : "Start"}</NeonButton>
          <button
            className="px-4 py-2 rounded-xl text-[--color-muted] hover:text-white border border-white/10 hover:bg-white/5"
            onClick={() => { setRunning(false); setSeconds(25 * 60); }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="mt-6"><ProgressGlow value={percent} /></div>
      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        {["Deep Work", "Break", "Custom"].map((m) => (
          <button key={m} className="p-3 rounded-lg border border-white/10 hover:bg-white/5 text-sm text-left">
            <div className="font-medium">{m}</div>
            <div className="text-[--color-muted]">Preset</div>
          </button>
        ))}
      </div>
    </GlowCard>
  );
} 