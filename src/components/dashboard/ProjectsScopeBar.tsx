"use client"

import type React from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

type Datum = { name: string; value: number }

export function ProjectsScopeBar({ data }: { data: Array<Datum> }) {
  const safe = Array.isArray(data) ? data : []
  const sorted = [...safe].sort((a, b) => (b.value ?? 0) - (a.value ?? 0))
  return (
    <div className="rounded-lg border p-4 h-[360px] md:h-[420px]">
      <p className="text-sm text-muted-foreground mb-2">Projects by Scope</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sorted} layout="vertical" margin={{ left: 16, right: 24, top: 8, bottom: 8 }} barCategoryGap={2}>
          <XAxis type="number" tickFormatter={(v) => Intl.NumberFormat().format(v)} />
          <YAxis type="category" dataKey="name" width={140} tick={{ fontSize: 11 }} interval={0} />
          <Tooltip formatter={(v: number) => Intl.NumberFormat().format(v)} />
          <Bar dataKey="value" name="Projects" fill="#0B246D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}


