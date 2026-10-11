"use client";

import { useEffect } from "react";
import { useUiStore } from "@/store/ui";

export function MoodEffect() {
  const mood = useUiStore((s) => s.mood);

  useEffect(() => {
    const root = document.documentElement;
    // Base neon palette
    let neonBlue = "#3aa0ff";
    let neonPurple = "#9b5cff";
    let neonGreen = "#34e89e";
    let neonOrange = "#ff9a44";

    switch (mood) {
      case "upbeat":
        neonBlue = "#5cc8ff";
        neonPurple = "#b07aff";
        neonGreen = "#5bf0b3";
        break;
      case "stressed":
        neonBlue = "#2f7bd8";
        neonPurple = "#7a57df";
        neonOrange = "#ff6a3d";
        break;
      case "tired":
        neonBlue = "#2b6cb0";
        neonPurple = "#6b46c1";
        neonGreen = "#2fb07b";
        break;
      case "focused":
        neonBlue = "#00b7ff";
        neonPurple = "#875bff";
        neonGreen = "#00f5a0";
        break;
    }

    root.style.setProperty("--neon-blue", neonBlue);
    root.style.setProperty("--neon-purple", neonPurple);
    root.style.setProperty("--neon-green", neonGreen);
    root.style.setProperty("--neon-orange", neonOrange);
  }, [mood]);

  return null;
} 