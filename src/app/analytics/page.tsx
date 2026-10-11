"use client";

import { GlowCard } from "@/components/Primitives";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const focusData = [
  { day: "Mon", hours: 3 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 2 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 4.5 },
  { day: "Sat", hours: 3.2 },
  { day: "Sun", hours: 4.8 },
];

const blockData = [
  { day: "Mon", blocks: 12 },
  { day: "Tue", blocks: 18 },
  { day: "Wed", blocks: 8 },
  { day: "Thu", blocks: 20 },
  { day: "Fri", blocks: 13 },
  { day: "Sat", blocks: 10 },
  { day: "Sun", blocks: 17 },
];

export default function AnalyticsPage() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <GlowCard className="p-6">
        <div className="text-sm text-[--color-muted]">Focus Hours</div>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={focusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="day" stroke="#9fb3c8" />
              <YAxis stroke="#9fb3c8" />
              <Tooltip />
              <Line type="monotone" dataKey="hours" stroke="#3aa0ff" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GlowCard>

      <GlowCard className="p-6">
        <div className="text-sm text-[--color-muted]">Distractions Blocked</div>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={blockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="day" stroke="#9fb3c8" />
              <YAxis stroke="#9fb3c8" />
              <Tooltip />
              <Bar dataKey="blocks" fill="#9b5cff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlowCard>
    </div>
  );
} 