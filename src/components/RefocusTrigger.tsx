"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";

export function RefocusTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(id);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 card-surface glow-strong p-4 w-[320px]">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-[--color-neon-green] mt-2 animate-pulse" />
        <div className="flex-1">
          <div className="font-semibold">Re-Focus Trigger</div>
          <div className="text-sm text-[--color-muted]">3 new distractions detected. Start a 5-min sprint?</div>
          <div className="mt-3 flex gap-2">
            <button className="relative inline-flex items-center px-3 py-1.5 rounded-md text-black bg-white">
              <span className="absolute inset-0 -z-10 neon-gradient opacity-80" />
              Start Sprint
            </button>
            <button
              className="px-3 py-1.5 rounded-md text-[--color-muted] hover:text-white border border-white/10 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              Dismiss
            </button>
          </div>
        </div>
        <button onClick={() => setOpen(false)} aria-label="Close">
          <X className="w-4 h-4 text-[--color-muted]" />
        </button>
      </div>
    </div>
  );
} 