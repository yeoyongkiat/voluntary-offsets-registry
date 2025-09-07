"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

type Point = { year: number; issued: number; retired: number }

export function TimeSeriesLine({ data }: { data: Array<Point> }) {
  return (
    <div className="rounded-lg border p-4 h-[320px] md:h-[380px] lg:h-[420px]">
      <p className="text-sm text-muted-foreground mb-2">Credits Issued and Retired Over Time</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 8, right: 16, top: 8, bottom: 8 }}>
          <XAxis dataKey="year" tickFormatter={(v) => String(v)} />
          <YAxis tickFormatter={(v) => `${(Number(v) / 1_000_000).toFixed(1)}M`} width={56} />
          <Tooltip formatter={(v: number) => Intl.NumberFormat().format(v)} />
          <Legend />
          <Line type="monotone" dataKey="issued" name="Issued" stroke="#0B246D" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="retired" name="Retired" stroke="#B4812E" strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


