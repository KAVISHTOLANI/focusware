"use client";

import { create } from "zustand";

export type Mood = "neutral" | "upbeat" | "stressed" | "tired" | "focused";

interface UiState {
  mood: Mood;
  setMood: (mood: Mood) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  focusStreakDays: number;
  incrementStreak: () => void;
  mentorMessage: string;
  setMentorMessage: (msg: string) => void;
}

export const useUiStore = create<UiState>((set) => ({
  mood: "neutral",
  setMood: (mood) => set({ mood }),
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  focusStreakDays: 5,
  incrementStreak: () => set((s) => ({ focusStreakDays: s.focusStreakDays + 1 })),
  mentorMessage: "You're on Day 5 streak 🔥 let’s make it Day 6!",
  setMentorMessage: (mentorMessage) => set({ mentorMessage }),
})); 