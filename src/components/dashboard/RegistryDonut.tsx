"use client"

import type React from "react"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

type Datum = { name: string; value: number }

export function RegistryDonut({ data }: { data: Array<Datum> | undefined }) {
  const colors = ["#0B246D", "#FDB515", "#F08080", "#006400", "#8C8C8C"]
  const safe = Array.isArray(data) ? data : []

  return (
    <div className="rounded-lg border p-4 h-[320px] md:h-[380px] lg:h-[420px]">
      <p className="text-sm text-muted-foreground mb-2">Projects by Registry</p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 8, right: 8, left: 8, bottom: 16 }}>
          <Pie data={safe} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={2}>
            {safe.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(v: number) => Intl.NumberFormat().format(v)} />
          <Legend verticalAlign="bottom" wrapperStyle={{ paddingBottom: 4 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


