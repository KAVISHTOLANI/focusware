"use client";

import { GlowCard, NeonButton } from "@/components/Primitives";
import { useState } from "react";
import { useUiStore, type Mood } from "@/store/ui";

export default function MentorPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "How was your day? Rate it 1-10. Best part? Worst part?" },
  ] as { role: "assistant" | "user"; text: string }[]);
  const mood = useUiStore((s) => s.mood);
  const setMood = useUiStore((s) => s.setMood);

  const [input, setInput] = useState("");

  function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, text: input.trim() };
    const reply = { role: "assistant" as const, text: "You're on Day 5 streak 🔥 let’s make it Day 6!" };
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  }

  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-6">
      <GlowCard className="p-0 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-sm text-[--color-muted]">AI Emotional Mentor</div>
            <div className="font-semibold">Here to support your focus</div>
          </div>
        </div>
        <div className="h-[480px] overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[70%] ${m.role === "assistant" ? "bg-white/5" : "bg-white/10 ml-auto"} p-3 rounded-lg border border-white/10`}>{m.text}</div>
          ))}
        </div>
        <div className="p-4 flex items-center gap-2 border-t border-white/10">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your check-in..."
            className="flex-1 bg-transparent border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-white/20"
          />
          <NeonButton onClick={send}>Send</NeonButton>
        </div>
      </GlowCard>

      <div className="space-y-4">
        <GlowCard className="p-4">
          <div className="text-sm text-[--color-muted]">Mood</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {["neutral","upbeat","stressed","tired","focused"].map((m) => (
              <button
                key={m}
                onClick={() => setMood(m as Mood)}
                className={`px-3 py-2 rounded-lg border text-sm ${mood === m ? "border-white/40 bg-white/10" : "border-white/10 hover:bg-white/5"}`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="mt-3 text-sm text-[--color-muted]">Theme adapts to your mood.</div>
        </GlowCard>
        <GlowCard className="p-4">
          <div className="text-sm text-[--color-muted]">Quick Suggestions</div>
          <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
            <li>Reset with a 2-min reboot game</li>
            <li>Schedule hardest task at 3-5 PM 🚀</li>
            <li>Start a 25-min focus sprint</li>
          </ul>
        </GlowCard>
      </div>
    </div>
  );
} 