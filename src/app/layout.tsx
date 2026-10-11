import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { Sidebar } from "@/components/Sidebar";
import { ReactNode } from "react";
import { MoodEffect } from "@/components/MoodEffect";
import { RefocusTrigger } from "@/components/RefocusTrigger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Focusware",
  description: "Master Your Mind, With a Mentor by Your Side.",
};

function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <MoodEffect />
      <RefocusTrigger />
      <TopNav />
      <div className="grid grid-cols-[auto_1fr]">
        <Sidebar />
        <main className="p-6 lg:p-10 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
