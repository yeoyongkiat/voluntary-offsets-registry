"use client"

import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

type Props = {
  projectsByCountry?: Record<string, number>
  issuedByCountry?: Record<string, number>
}

export function WorldMap({ projectsByCountry = {}, issuedByCountry = {} }: Props) {
  const [mode, setMode] = React.useState<"projects" | "issued">("projects")
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const [tooltip, setTooltip] = React.useState<{
    visible: boolean
    x: number
    y: number
    name: string
    projects: number
    issued: number
  }>({ visible: false, x: 0, y: 0, name: "", projects: 0, issued: 0 })

  // Normalize country names and handle common aliases so values match map features
  const normalize = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "")
  const aliasPairs: Array<[string, string]> = [
    ["united states of america", "united states"],
    ["russian federation", "russia"],
    ["viet nam", "vietnam"],
    ["cote d'ivoire", "cote divoire"],
    ["tanzania, united republic of", "tanzania"],
    ["bolivia (plurinational state of)", "bolivia"],
    ["venezuela (bolivarian republic of)", "venezuela"],
    ["iran, islamic republic of", "iran"],
    ["syrian arab republic", "syria"],
    ["lao people's democratic republic", "laos"],
    ["moldova, republic of", "moldova"],
    ["korea, democratic people's republic of", "north korea"],
    ["korea, republic of", "south korea"],
    ["czechia", "czech republic"],
    ["myanmar", "burma"],
  ]

  const buildNormalizedMap = (obj: Record<string, number>) => {
    const map = new Map<string, number>()
    for (const [k, v] of Object.entries(obj)) {
      map.set(normalize(k), v ?? 0)
    }
    for (const [a, b] of aliasPairs) {
      const na = normalize(a)
      const nb = normalize(b)
      if (map.has(nb) && !map.has(na)) map.set(na, map.get(nb) as number)
      if (map.has(na) && !map.has(nb)) map.set(nb, map.get(na) as number)
    }
    return map
  }

  const projectsMap = React.useMemo(() => buildNormalizedMap(projectsByCountry), [projectsByCountry])
  const issuedMap = React.useMemo(() => buildNormalizedMap(issuedByCountry), [issuedByCountry])

  const getValue = (name: string) => {
    const n = normalize(name)
    return mode === "projects" ? (projectsMap.get(n) ?? 0) : (issuedMap.get(n) ?? 0)
  }

  const maxValue = React.useMemo(() => {
    const values = Array.from((mode === "projects" ? projectsMap : issuedMap).values())
    return values.length ? Math.max(...values) : 0
  }, [mode, projectsMap, issuedMap])

  // Log scaling for skewed distributions
  const colorScale = (v: number) => {
    if (!maxValue) return "#E5E7EB"
    const t = Math.min(1, Math.log10(v + 1) / Math.log10(maxValue + 1))
    const start = [224, 231, 255] // indigo-100
    const end = [11, 36, 109] // Berkeley blue
    const r = Math.round(start[0] + (end[0] - start[0]) * t)
    const g = Math.round(start[1] + (end[1] - start[1]) * t)
    const b = Math.round(start[2] + (end[2] - start[2]) * t)
    return `rgb(${r}, ${g}, ${b})`
  }

  return (
    <div className="w-full h-full border rounded-md p-2 bg-white flex flex-col">
      <div className="flex items-center gap-2 mb-1">
        <div className="inline-flex rounded-md border overflow-hidden" role="tablist" aria-label="Map mode">
          <button
            type="button"
            onClick={() => setMode("projects")}
            className={`px-3 py-1.5 text-sm ${mode === "projects" ? "bg-[rgb(11,36,109)] text-white" : "bg-white text-gray-900"}`}
            role="tab"
            aria-selected={mode === "projects"}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => setMode("issued")}
            className={`px-3 py-1.5 text-sm border-l ${mode === "issued" ? "bg-[rgb(11,36,109)] text-white" : "bg-white text-gray-900"}`}
            role="tab"
            aria-selected={mode === "issued"}
          >
            Credits Issued
          </button>
        </div>
      </div>
      <div className="relative flex-1" ref={wrapperRef}>
        <ComposableMap projectionConfig={{ scale: 145 }} className="absolute inset-0 w-full h-full">
          <Geographies geography={geoUrl}>
            {({ geographies }: any) =>
              geographies.map((geo: any) => {
                const name = (geo.properties as any).name as string
                const n = normalize(name)
                const valProjects = projectsMap.get(n) ?? 0
                const valIssued = issuedMap.get(n) ?? 0
                const val = getValue(name)
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: colorScale(val), stroke: "#94A3B8", strokeWidth: 0.5 },
                      hover: { fill: "#0B246D", stroke: "#0B246D" },
                      pressed: { fill: "#0B246D" },
                    }}
                    onMouseEnter={(e: React.MouseEvent<SVGElement>) => {
                      const rect = wrapperRef.current?.getBoundingClientRect()
                      const x = rect ? e.clientX - rect.left : e.clientX
                      const y = rect ? e.clientY - rect.top : e.clientY
                      setTooltip({ visible: true, x, y, name, projects: valProjects, issued: valIssued })
                    }}
                    onMouseMove={(e: React.MouseEvent<SVGElement>) => {
                      const rect = wrapperRef.current?.getBoundingClientRect()
                      const x = rect ? e.clientX - rect.left : e.clientX
                      const y = rect ? e.clientY - rect.top : e.clientY
                      setTooltip((t) => ({ ...t, x, y }))
                    }}
                    onMouseLeave={() => setTooltip((t) => ({ ...t, visible: false }))}
                  >
                    <title>{`${name}\nProjects: ${valProjects.toLocaleString()}\nCredits Issued: ${valIssued.toLocaleString()}`}</title>
                  </Geography>
                )
              })
            }
          </Geographies>
        </ComposableMap>
        {/* Legend */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-3">
          <span className="text-[10px] text-gray-600">0</span>
          <div
            className="h-2 flex-1 rounded"
            style={{ background: `linear-gradient(to right, ${colorScale(0)}, ${colorScale(maxValue)})` }}
            aria-hidden
          />
          <span className="text-[10px] text-gray-600">{maxValue.toLocaleString()}</span>
          <span className="text-[10px] text-gray-600 ml-2">(log scale)</span>
        </div>
        {tooltip.visible && (
          <div
            className="pointer-events-none absolute z-10 rounded-md bg-white/95 backdrop-blur px-2 py-1 text-xs shadow border"
            style={{ left: Math.min(tooltip.x + 12, (wrapperRef.current?.clientWidth ?? 0) - 160), top: Math.min(tooltip.y + 12, (wrapperRef.current?.clientHeight ?? 0) - 60) }}
            role="tooltip"
          >
            <div className="font-medium text-gray-900">{tooltip.name}</div>
            <div className="text-gray-700">Projects: {tooltip.projects.toLocaleString()}</div>
            <div className="text-gray-700">Credits Issued: {tooltip.issued.toLocaleString()}</div>
          </div>
        )}
      </div>
    </div>
  )
}


