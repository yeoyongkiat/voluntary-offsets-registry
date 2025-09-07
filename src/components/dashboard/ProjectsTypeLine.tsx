"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

type Datum = { year: number; [type: string]: number | string }

export function ProjectsTypeLine({ data, types }: { data: Array<Datum>; types: string[] }) {
  const colors = ["#0B246D", "#FDB515", "#F08080", "#006400", "#8C8C8C", "#1E40AF", "#3A7BEA"]
  return (
    <div className="rounded-lg border p-4 h-[320px] md:h-[380px] lg:h-[420px]">
      <p className="text-sm text-muted-foreground mb-2">Project Retirement Over Time by Type</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 8, right: 16, top: 8, bottom: 8 }}>
          <XAxis dataKey="year" tickFormatter={(v) => String(v)} />
          <YAxis tickFormatter={(v) => `${(Number(v) / 1_000_000).toFixed(1)}M`} width={56} />
          <Tooltip formatter={(v: number) => Intl.NumberFormat().format(v)} />
          <Legend />
          {types.map((t, i) => (
            <Line key={t} type="monotone" dataKey={t} name={t} stroke={colors[i % colors.length]} strokeWidth={2.5} dot={false} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


