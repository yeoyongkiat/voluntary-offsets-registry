"use client"

import type React from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

type Row = { scope: string; [region: string]: number | string }

export function ProjectsDistStacked({ data, regions }: { data: Array<Row>; regions: string[] }) {
  const colors = ["#0B246D", "#FDB515", "#F08080", "#006400", "#8C8C8C", "#1E40AF", "#3A7BEA"]
  return (
    <div className="rounded-lg border p-4 h-[360px] md:h-[420px]">
      <p className="text-sm text-muted-foreground mb-2">Project Distribution by Scope (stacked by Region)</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 16, right: 24, top: 8, bottom: 8 }}>
          <XAxis type="number" tickFormatter={(v) => Intl.NumberFormat().format(v)} />
          <YAxis type="category" dataKey="scope" width={140} tick={{ fontSize: 11 }} interval={0} />
          <Tooltip formatter={(v: number) => Intl.NumberFormat().format(v)} />
          <Legend />
          {regions.map((r, i) => (
            <Bar key={r} dataKey={r} stackId="a" fill={colors[i % colors.length]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}


