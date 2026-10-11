"use client";

import { GlowCard, NeonButton } from "@/components/Primitives";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function BlackBoxPage() {
  const [enabled, setEnabled] = useState(true);

  return (
    <GlowCard className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[--color-neon-blue]" />
          <div>
            <div className="text-sm text-[--color-muted]">Distraction BlackBox</div>
            <div className="font-semibold">Block distracting apps and sites</div>
          </div>
        </div>
        <button
          onClick={() => setEnabled((e) => !e)}
          className={`px-3 py-1.5 rounded-full border ${enabled ? "bg-white text-black" : "text-[--color-muted] hover:text-white hover:bg-white/5"} border-white/10`}
        >
          {enabled ? "Enabled" : "Disabled"}
        </button>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        {["YouTube","Instagram","Reddit","Twitter"].map((s) => (
          <div key={s} className="p-3 rounded-lg border border-white/10 bg-white/5 flex items-center justify-between">
            <span>{s}</span>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <span className="w-10 h-6 bg-white/10 rounded-full relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full peer-checked:after:translate-x-4 transition-all" />
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-2">
        <NeonButton>Enable Focus Mode</NeonButton>
        <button className="px-4 py-2 rounded-xl text-[--color-muted] hover:text-white border border-white/10 hover:bg-white/5">Customize Rules</button>
      </div>
    </GlowCard>
  );
} 