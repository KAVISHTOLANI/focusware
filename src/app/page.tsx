import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute -top-20 -right-32 w-80 h-80 rounded-full blur-3xl opacity-30 neon-gradient animate-spin-slow" />
      <div className="absolute -bottom-20 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 neon-gradient animate-spin-slow" />

      <section className="text-center py-16 lg:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight neon-text">
          Master Your Mind, With a Mentor by Your Side.
        </h1>
        <p className="mt-4 text-[--color-muted] text-base md:text-lg max-w-2xl mx-auto">
          Focusware is a futuristic productivity platform that adapts to your mood, fights distractions,
          and helps you build unbreakable focus streaks.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/dashboard" className="relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-black bg-white font-semibold">
            <span className="absolute inset-0 -z-10 neon-gradient opacity-80" />
            Sign Up
          </Link>
          <Link href="/dashboard" className="px-6 py-3 rounded-2xl text-[--color-muted] hover:text-white border border-white/10 hover:bg-white/5 transition-colors">
            Login
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card-surface p-6 glow-soft">
          <div className="text-sm text-[--color-muted]">AI Emotional Mentor</div>
          <div className="mt-2 text-lg font-semibold">Supportive daily check-ins</div>
          <p className="mt-2 text-sm text-[--color-muted]">“Peak focus time: 3-5 PM. Schedule your hardest task here 🚀.”</p>
        </div>
        <div className="card-surface p-6 glow-soft">
          <div className="text-sm text-[--color-muted]">NeuroDynamic Sequencing</div>
          <div className="mt-2 text-lg font-semibold">Smart task ordering</div>
          <p className="mt-2 text-sm text-[--color-muted]">Adaptive planner that fits your energy and mood.</p>
        </div>
        <div className="card-surface p-6 glow-soft">
          <div className="text-sm text-[--color-muted]">Gamified Focus</div>
          <div className="mt-2 text-lg font-semibold">Streaks, badges, rewards</div>
          <p className="mt-2 text-sm text-[--color-muted]">Glowing meters and playful achievements to keep you going.</p>
        </div>
      </section>
    </div>
  );
}
