"use client";

import Link from "next/link";
import { BarChart3, Brain, Flame, Goal, MessageCircle, Timer, Shield } from "lucide-react";
import { useUiStore } from "@/store/ui";

const items = [
  { href: "/goals", label: "Goals", icon: Goal },
  { href: "/pomodoro", label: "Pomodoro", icon: Timer },
  { href: "/blackbox", label: "BlackBox", icon: Shield },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/mentor", label: "Mentor Chat", icon: MessageCircle },
];

export function Sidebar() {
  const open = useUiStore((s) => s.sidebarOpen);

  return (
    <aside className={`transition-all duration-300 ${open ? "w-64" : "w-0"} overflow-hidden border-r border-white/10 bg-surface-200/80 backdrop-blur`}> 
      <div className="p-4">
        <div className="card-surface p-4 glow-soft">
          <div className="flex items-center gap-2 text-sm text-[--color-muted]">
            <Flame className="w-4 h-4 text-[--color-neon-orange]" />
            Focus Streak
          </div>
          <div className="mt-2 text-2xl font-semibold">5 days 🔥</div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div className="h-2 rounded-full neon-gradient animate-glow" style={{ width: "72%" }} />
          </div>
        </div>
      </div>
      <div className="px-2 space-y-1">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-[--color-muted] hover:text-white hover:bg-white/5 transition-colors"
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
      <div className="p-4">
        <div className="card-surface p-4 flex items-center gap-3">
          <Brain className="w-5 h-5 text-[--color-neon-green]" />
          <div>
            <div className="text-sm text-[--color-muted]">NeuroDynamic Mode</div>
            <div className="text-sm">Adaptive sequencing active</div>
          </div>
        </div>
      </div>
    </aside>
  );
} 