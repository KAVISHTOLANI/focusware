"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useUiStore } from "@/store/ui";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/features", label: "Features" },
  { href: "/analytics", label: "Analytics" },
  { href: "/mentor", label: "Mentor" },
  { href: "/community", label: "Community" },
  { href: "/settings", label: "Settings" },
];

export function TopNav() {
  const pathname = usePathname();
  const toggleSidebar = useUiStore((s) => s.toggleSidebar);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-surface-200/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md border border-white/10 hover:border-white/20 transition-colors bg-surface-300/40"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-[--color-foreground]" />
        </button>
        <Link href="/" className="text-lg font-semibold tracking-tight neon-text">
          Focusware
        </Link>
        <nav className="hidden md:flex items-center gap-2 ml-4">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  active
                    ? "text-white bg-white/10"
                    : "text-[--color-muted] hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto">
          <Link
            href="/dashboard"
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-black bg-white overflow-hidden"
          >
            <span className="absolute inset-0 -z-10 neon-gradient opacity-80" />
            Open App
          </Link>
        </div>
      </div>
    </header>
  );
} 