import { GlowCard, ProgressGlow } from "@/components/Primitives";

const badges = [
  { name: "Day One", desc: "Completed your first focus session", color: "#3aa0ff" },
  { name: "Deep Diver", desc: "3x 50-min deep work", color: "#9b5cff" },
  { name: "Comeback", desc: "Recovered after a tough day", color: "#ff9a44" },
];

export default function RewardsPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <GlowCard className="p-6">
        <div className="text-sm text-[--color-muted]">Streak Progress</div>
        <div className="mt-1 text-3xl font-bold">Day 5</div>
        <div className="mt-3"><ProgressGlow value={64} /></div>
      </GlowCard>
      <GlowCard className="p-6">
        <div className="text-sm text-[--color-muted]">Badges</div>
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          {badges.map((b) => (
            <div key={b.name} className="p-3 rounded-lg border border-white/10 bg-white/5">
              <div className="w-10 h-10 rounded-full" style={{ background: b.color, opacity: 0.8 }} />
              <div className="mt-2 font-medium">{b.name}</div>
              <div className="text-sm text-[--color-muted]">{b.desc}</div>
            </div>
          ))}
        </div>
      </GlowCard>
    </div>
  );
} 