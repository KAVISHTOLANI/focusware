import { GlowCard, ProgressGlow, NeonButton } from "@/components/Primitives";
import { Timer } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <GlowCard className="p-6 md:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Daily Goals</h2>
            <NeonButton size="sm">Add Task</NeonButton>
          </div>
          <div className="mt-4 space-y-3">
            {["Write 2 pages", "Review notes", "Deep work 50 min"].map((t, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <span>{t}</span>
                <button className="text-[--color-muted] hover:text-white text-sm">Start</button>
              </div>
            ))}
          </div>
        </GlowCard>
        <GlowCard className="p-6">
          <div className="text-sm text-[--color-muted]">Focus Streak</div>
          <div className="mt-1 text-3xl font-bold">5 days 🔥</div>
          <div className="mt-3"><ProgressGlow value={72} /></div>
        </GlowCard>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <GlowCard className="p-6">
          <div className="text-sm text-[--color-muted]">Mentor Message</div>
          <div className="mt-2">“Tough day? No worries — reset with a 2-min reboot game.”</div>
          <div className="mt-4">
            <NeonButton size="sm" variant="ghost">Open Mentor</NeonButton>
          </div>
        </GlowCard>
        <GlowCard className="p-6 md:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[--color-muted]">Pomodoro Focus</div>
              <div className="text-2xl font-semibold">25:00</div>
            </div>
            <NeonButton size="lg" className="rounded-full"><Timer className="w-5 h-5" /> Quick Start</NeonButton>
          </div>
          <div className="mt-4"><ProgressGlow value={0} /></div>
        </GlowCard>
      </div>
    </div>
  );
} 