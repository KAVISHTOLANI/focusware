"use client";

import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { ReactNode } from "react";

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("card-surface glow-soft", className)}>
      {children}
    </div>
  );
}

const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-transform active:scale-[0.98] overflow-hidden",
  {
    variants: {
      variant: {
        primary: "text-black bg-white",
        ghost: "text-[--color-muted] hover:text-white border border-white/10 hover:bg-white/5",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export function NeonButton({
  children,
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
}) {
  return (
    <button className={cn(buttonStyles({ variant, size }), className)} {...props}>
      <span className="absolute inset-0 -z-10 neon-gradient opacity-80" />
      {children}
    </button>
  );
}

export function ProgressGlow({ value }: { value: number }) {
  return (
    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
      <div
        className="h-full neon-gradient animate-glow"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
} 