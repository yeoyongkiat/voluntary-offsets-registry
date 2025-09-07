import type React from "react"

type Props = {
  totalProjects: number
  totalIssued: number
  totalRetired: number
  totalRemaining: number
}

export function KpiCards({ totalProjects, totalIssued, totalRetired, totalRemaining }: Props) {
  const kpis = [
    { label: "Credits Issued", value: totalIssued },
    { label: "Credits Retired", value: totalRetired },
    { label: "Credits Remaining", value: totalRemaining },
    { label: "Total No. of Projects", value: totalProjects },
  ]

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">{kpi.label}</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums">
            {Intl.NumberFormat().format(kpi.value)}
          </p>
        </div>
      ))}
    </div>
  )
}


