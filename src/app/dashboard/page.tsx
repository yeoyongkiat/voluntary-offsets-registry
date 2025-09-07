import { Navbar } from "@/components/navbar"
import { supabaseServer } from "@/lib/supabase/server"
import { KpiCards } from "@/components/dashboard/KpiCards"
import { RegistryDonut } from "@/components/dashboard/RegistryDonut"
import { Filters } from "@/components/dashboard/Filters"
import { TimeSeriesLine } from "@/components/dashboard/TimeSeriesLine"
import { RegionBar } from "@/components/dashboard/RegionBar"
import { ScopeBar } from "@/components/dashboard/ScopeBar"
import { WorldMap } from "@/components/dashboard/WorldMap"
import { ProjectsScopeBar } from "@/components/dashboard/ProjectsScopeBar"
import { ProjectsDistStacked } from "@/components/dashboard/ProjectsDistStacked"
import { ProjectsTypeLine } from "@/components/dashboard/ProjectsTypeLine"
import { RRLine } from "@/components/dashboard/RRLine"
import { unstable_cache } from "next/cache"

type SearchParams = {
  mode?: "project" | "credit" | "map"
  registry?: string
  methodology?: string
  country?: string
  region?: string
  project_name?: string
  year_min?: string
  year_max?: string
}

export default async function DashboardPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const supabase = supabaseServer()
  const sp = (await searchParams) ?? {}

  const select =
    "project_id,project_name,voluntary_registry,type,country,region,scope,reduction_removal,methodology_protocol,first_year_of_project_vintage,total_credits_issued,total_credits_retired,total_credits_remaining,credits_issued_by_issuance_year_1996:credits_issued_by_issuance_year_1996,credits_issued_by_issuance_year_1997:credits_issued_by_issuance_year_1997,credits_issued_by_issuance_year_1998:credits_issued_by_issuance_year_1998,credits_issued_by_issuance_year_1999:credits_issued_by_issuance_year_1999,credits_issued_by_issuance_year_2000:credits_issued_by_issuance_year_2000,credits_issued_by_issuance_year_2001:credits_issued_by_issuance_year_2001,credits_issued_by_issuance_year_2002:credits_issued_by_issuance_year_2002,credits_issued_by_issuance_year_2003:credits_issued_by_issuance_year_2003,credits_issued_by_issuance_year_2004:credits_issued_by_issuance_year_2004,credits_issued_by_issuance_year_2005:credits_issued_by_issuance_year_2005,credits_issued_by_issuance_year_2006:credits_issued_by_issuance_year_2006,credits_issued_by_issuance_year_2007:credits_issued_by_issuance_year_2007,credits_issued_by_issuance_year_2008:credits_issued_by_issuance_year_2008,credits_issued_by_issuance_year_2009:credits_issued_by_issuance_year_2009,credits_issued_by_issuance_year_2010:credits_issued_by_issuance_year_2010,credits_issued_by_issuance_year_2011:credits_issued_by_issuance_year_2011,credits_issued_by_issuance_year_2012:credits_issued_by_issuance_year_2012,credits_issued_by_issuance_year_2013:credits_issued_by_issuance_year_2013,credits_issued_by_issuance_year_2014:credits_issued_by_issuance_year_2014,credits_issued_by_issuance_year_2015:credits_issued_by_issuance_year_2015,credits_issued_by_issuance_year_2016:credits_issued_by_issuance_year_2016,credits_issued_by_issuance_year_2017:credits_issued_by_issuance_year_2017,credits_issued_by_issuance_year_2018:credits_issued_by_issuance_year_2018,credits_issued_by_issuance_year_2019:credits_issued_by_issuance_year_2019,credits_issued_by_issuance_year_2020:credits_issued_by_issuance_year_2020,credits_issued_by_issuance_year_2021:credits_issued_by_issuance_year_2021,credits_issued_by_issuance_year_2022:credits_issued_by_issuance_year_2022,credits_issued_by_issuance_year_2023:credits_issued_by_issuance_year_2023,credits_issued_by_issuance_year_2024:credits_issued_by_issuance_year_2024,credits_issued_by_issuance_year_2025:credits_issued_by_issuance_year_2025,credits_retired_or_cancelled_1996:credits_retired_or_cancelled_1996,credits_retired_or_cancelled_1997:credits_retired_or_cancelled_1997,credits_retired_or_cancelled_1998:credits_retired_or_cancelled_1998,credits_retired_or_cancelled_1999:credits_retired_or_cancelled_1999,credits_retired_or_cancelled_2000:credits_retired_or_cancelled_2000,credits_retired_or_cancelled_2001:credits_retired_or_cancelled_2001,credits_retired_or_cancelled_2002:credits_retired_or_cancelled_2002,credits_retired_or_cancelled_2003:credits_retired_or_cancelled_2003,credits_retired_or_cancelled_2004:credits_retired_or_cancelled_2004,credits_retired_or_cancelled_2005:credits_retired_or_cancelled_2005,credits_retired_or_cancelled_2006:credits_retired_or_cancelled_2006,credits_retired_or_cancelled_2007:credits_retired_or_cancelled_2007,credits_retired_or_cancelled_2008:credits_retired_or_cancelled_2008,credits_retired_or_cancelled_2009:credits_retired_or_cancelled_2009,credits_retired_or_cancelled_2010:credits_retired_or_cancelled_2010,credits_retired_or_cancelled_2011:credits_retired_or_cancelled_2011,credits_retired_or_cancelled_2012:credits_retired_or_cancelled_2012,credits_retired_or_cancelled_2013:credits_retired_or_cancelled_2013,credits_retired_or_cancelled_2014:credits_retired_or_cancelled_2014,credits_retired_or_cancelled_2015:credits_retired_or_cancelled_2015,credits_retired_or_cancelled_2016:credits_retired_or_cancelled_2016,credits_retired_or_cancelled_2017:credits_retired_or_cancelled_2017,credits_retired_or_cancelled_2018:credits_retired_or_cancelled_2018,credits_retired_or_cancelled_2019:credits_retired_or_cancelled_2019,credits_retired_or_cancelled_2020:credits_retired_or_cancelled_2020,credits_retired_or_cancelled_2021:credits_retired_or_cancelled_2021,credits_retired_or_cancelled_2022:credits_retired_or_cancelled_2022,credits_retired_or_cancelled_2023:credits_retired_or_cancelled_2023,credits_retired_or_cancelled_2024:credits_retired_or_cancelled_2024,credits_retired_or_cancelled_2025:credits_retired_or_cancelled_2025"

  const getBaseQuery = () => {
    let q = supabase.from("voluntaryregistryoffsets").select(select)
    const getMulti = (key: keyof SearchParams) => {
      const v = sp?.[key]
      if (!v) return [] as string[]
      return String(v)
        .split(",")
        .map((s) => decodeURIComponent(s))
        .filter(Boolean)
    }
    const by = (col: string, key: keyof SearchParams) => {
      const arr = getMulti(key)
      if (arr.length === 1) q = q.eq(col, arr[0])
      else if (arr.length > 1) q = q.in(col, arr)
    }
    by("voluntary_registry", "registry")
    by("country", "country")
    by("region", "region")
    const projectName = sp?.project_name?.toString().trim()
    if (projectName) {
      q = q.ilike("project_name", `%${projectName}%`)
    }
    const meth = getMulti("methodology")
    if (meth.length === 1) q = q.ilike("methodology_protocol", `%${meth[0]}%`)
    else if (meth.length > 1) {
      // Combine ilike conditions as OR
      const orFilters = meth.map((m) => `methodology_protocol.ilike.%${m}%`).join(",")
      q = q.or(orFilters)
    }
    // Year filters removed per request
    return q
  }

  const getAggregates = async () => {
    const PAGE = 1000
    const rows: any[] = []
    for (let from = 0; ; from += PAGE) {
      const to = from + PAGE - 1
      const { data, error } = await getBaseQuery().range(from, to)
      if (error) throw new Error(error.message)
      const chunk = data ?? []
      rows.push(...chunk)
      if (chunk.length < PAGE) break
    }

    const totalProjects = rows.length
    const totalIssued = rows.reduce((s, r) => s + (r.total_credits_issued ?? 0), 0)
    const totalRetired = rows.reduce((s, r) => s + (r.total_credits_retired ?? 0), 0)
    const totalRemaining = rows.reduce((s, r) => s + (r.total_credits_remaining ?? 0), 0)

    const registryMap = new Map<string, number>()
    const regionIssued = new Map<string, number>()
    const scopeIssued = new Map<string, number>()
    const countryIssued = new Map<string, number>()
    const countryProjects = new Map<string, number>()
    rows.forEach((row) => {
      const key = row.voluntary_registry ?? "Unknown"
      const issued = row.total_credits_issued ?? 0
      registryMap.set(key, (registryMap.get(key) ?? 0) + issued)
      const regionKey = row.region ?? "Unknown"
      regionIssued.set(regionKey, (regionIssued.get(regionKey) ?? 0) + issued)
      const scopeKey = row.scope ?? "Unknown"
      scopeIssued.set(scopeKey, (scopeIssued.get(scopeKey) ?? 0) + issued)
      const countryKey = row.country ?? "Unknown"
      countryIssued.set(countryKey, (countryIssued.get(countryKey) ?? 0) + issued)
      countryProjects.set(countryKey, (countryProjects.get(countryKey) ?? 0) + 1)
    })
    const registryData = Array.from(registryMap.entries()).map(([name, value]) => ({ name, value }))
    const regionData = Array.from(regionIssued.entries()).map(([name, value]) => ({ name, value }))
    const scopeData = Array.from(scopeIssued.entries()).map(([name, value]) => ({ name, value }))

    const years = Array.from({ length: 2025 - 1996 + 1 }, (_, i) => 1996 + i)
    const ts = years.map((year) => {
      const issuedKey = `credits_issued_by_issuance_year_${year}` as keyof typeof rows[number]
      const retiredKey = (year >= 1996 && year <= 2025
        ? `credits_retired_or_cancelled_${year}`
        : "") as keyof typeof rows[number]
      const issued = rows.reduce((s, r) => s + (Number(r[issuedKey]) || 0), 0)
      const retired = rows.reduce((s, r) => s + (Number(r[retiredKey]) || 0), 0)
      return { year, issued, retired }
    })

    const categories = [...new Set(rows.map((r) => r.reduction_removal).filter(Boolean) as string[])]
    const issuedRR = years.map((year) => {
      const key = `credits_issued_by_issuance_year_${year}` as keyof typeof rows[number]
      const base: any = { year }
      categories.forEach((c) => {
        base[c] = rows.filter((r) => r.reduction_removal === c).reduce((s, r) => s + (Number(r[key]) || 0), 0)
      })
      return base
    })

    const retiredRR = years.map((year) => {
      const key = (year >= 1996 && year <= 2025 ? `credits_retired_or_cancelled_${year}` : "") as keyof typeof rows[number]
      const base: any = { year }
      categories.forEach((c) => {
        base[c] = rows.filter((r) => r.reduction_removal === c).reduce((s, r) => s + (Number(r[key]) || 0), 0)
      })
      return base
    })

    const registries = [...new Set(rows.map((r) => r.voluntary_registry).filter(Boolean) as string[])]
    // Normalize and deduplicate methodology labels (trim, collapse spaces, case-insensitive unique)
    const methodologyMap = new Map<string, string>()
    ;(rows.map((r) => r.methodology_protocol).filter(Boolean) as string[]).forEach((m) => {
      const normalized = String(m).trim().replace(/\s+/g, " ")
      const key = normalized.toLowerCase()
      if (!methodologyMap.has(key)) methodologyMap.set(key, normalized)
    })
    const methodologies = Array.from(methodologyMap.values())
    const countries = [...new Set(rows.map((r) => r.country).filter(Boolean) as string[])]
    const regions = [...new Set(rows.map((r) => r.region).filter(Boolean) as string[])]
    const scopes = [...new Set(rows.map((r) => r.scope).filter(Boolean) as string[])]
    const typeWhitelist = [
      "REDD+",
      "Improved Forest Management",
      "Cookstoves",
      "Solar - Centralised",
      "Wind",
      "Hydropower",
      "Landfill Methane",
      "Afforestation/Reforestation",
    ]
    const types = typeWhitelist.filter((t) => rows.some((r) => r.type === t))
    const minYear = rows.reduce((m, r) => Math.min(m, r.first_year_of_project_vintage ?? Infinity), Infinity)
    const maxYear = rows.reduce((m, r) => Math.max(m, r.first_year_of_project_vintage ?? -Infinity), -Infinity)

    // Build datasets for Projects view
    const projectsByScope = scopes.map((s) => ({ name: s, value: rows.filter((r) => r.scope === s).length }))
    const projectsByRegistry = registries.map((r) => ({ name: r, value: rows.filter((row) => row.voluntary_registry === r).length }))
    const regionsList = regions
    const projectsStacked = scopes.map((s) => {
      const row: any = { scope: s }
      regionsList.forEach((reg) => {
        row[reg] = rows.filter((r) => r.scope === s && r.region === reg).length
      })
      return row
    })
    const yearsProjects = years
    const projectsTypeSeries = yearsProjects.map((y) => {
      const key = (y >= 1996 && y <= 2025 ? `credits_retired_or_cancelled_${y}` : "") as keyof typeof rows[number]
      const base: any = { year: y }
      types.forEach((t) => {
        base[t] = rows.filter((r) => r.type === t).reduce((s, r) => s + (Number(r[key]) || 0), 0)
      })
      return base
    })

    const projectsByCountryObj = Object.fromEntries(countryProjects.entries()) as Record<string, number>
    const issuedByCountryObj = Object.fromEntries(countryIssued.entries()) as Record<string, number>

    return { totalProjects, totalIssued, totalRetired, totalRemaining, registryData, regionData, scopeData, ts, issuedRR, retiredRR, categories, registries, methodologies, countries, regions, scopes, types, projectsByRegistry, projectsByScope, projectsStacked, projectsTypeSeries, minYear, maxYear, projectsByCountry: projectsByCountryObj, issuedByCountry: issuedByCountryObj }
  }

  let fetchError: string | null = null
  let aggregates = {
    totalProjects: 0,
    totalIssued: 0,
    totalRetired: 0,
    totalRemaining: 0,
    registryData: [] as Array<{ name: string; value: number }>,
    regionData: [] as Array<{ name: string; value: number }>,
    scopeData: [] as Array<{ name: string; value: number }>,
    ts: [] as Array<{ year: number; issued: number; retired: number }>,
    issuedRR: [] as Array<any>,
    retiredRR: [] as Array<any>,
    categories: [] as string[],
    registries: [] as string[],
    methodologies: [] as string[],
    countries: [] as string[],
    regions: [] as string[],
    scopes: [] as string[],
    types: [] as string[],
    projectsByRegistry: [] as Array<{ name: string; value: number }>,
    projectsByScope: [] as Array<{ name: string; value: number }>,
    projectsStacked: [] as Array<any>,
    projectsTypeSeries: [] as Array<any>,
    minYear: 1990,
    maxYear: 2030,
    projectsByCountry: {} as Record<string, number>,
    issuedByCountry: {} as Record<string, number>,
  }
  try {
    aggregates = await unstable_cache(
      async () => getAggregates(),
      [
        "voluntaryregistryoffsets:v3",
        JSON.stringify({
          registry: sp?.registry ?? null,
          methodology: sp?.methodology ?? null,
          country: sp?.country ?? null,
          region: sp?.region ?? null,
          project_name: sp?.project_name ?? null,
          year_min: sp?.year_min ?? null,
          year_max: sp?.year_max ?? null,
        }),
      ],
      { revalidate: 900, tags: ["voluntaryregistryoffsets"] }
    )()
  } catch (e: any) {
    fetchError = e?.message ?? "Unknown error"
  }

  const { totalProjects, totalIssued, totalRetired, totalRemaining, registryData, regionData, scopeData, ts, issuedRR, retiredRR, categories, registries, methodologies, countries, regions, scopes, types, projectsByRegistry, projectsByScope, projectsStacked, projectsTypeSeries, minYear, maxYear, projectsByCountry, issuedByCountry } = aggregates

  // Filter option lists are derived from committed filters so choices narrow accordingly
  const options = { registriesAll: registries, methodologiesAll: methodologies, countriesAll: countries, regionsAll: regions, minYearAll: minYear, maxYearAll: maxYear }

  return (
    <main id="content" className="min-h-screen bg-background">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Registry Dashboard</h1>
        <p className="mt-2 text-muted-foreground">This dashboard allows you
          to explore the data from the Voluntary Offsets Registry Database.
          Data is fetched from a live database and updated whenever the
          Berkeley Carbon Trading Project releases new data.
        </p>

        {fetchError && (
          <div role="alert" className="mt-6 rounded-md border border-red-300 bg-red-50 p-3 text-red-900">
            Failed to load data: {fetchError}
          </div>
        )}

        <Filters
          registries={options.registriesAll}
          methodologies={options.methodologiesAll}
          countries={options.countriesAll}
          regions={options.regionsAll}
        />

        {totalProjects === 0 ? (
          <div className="mt-8 rounded-md border p-6 text-center text-muted-foreground">No data found.</div>
        ) : (
          <KpiCards
            totalProjects={totalProjects}
            totalIssued={totalIssued}
            totalRetired={totalRetired}
            totalRemaining={totalRemaining}
          />
        )}

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {totalProjects > 0 && sp.mode === "map" && (
            <div className="md:col-span-2 h-[100vh] min-h-[680px]">
              <WorldMap projectsByCountry={projectsByCountry} issuedByCountry={issuedByCountry} />
            </div>
          )}
          {totalProjects > 0 && sp.mode !== "project" && sp.mode !== "map" && (
            <>
              <TimeSeriesLine data={ts} />
              <RRLine title="Credit Issuances by Reduction / Removal" data={issuedRR} series={categories} />
              <RRLine title="Credit Retirements by Reduction / Removal" data={retiredRR} series={categories} />
              <RegistryDonut data={registryData} />
              <RegionBar data={regionData} />
              <ScopeBar data={scopeData} />
            </>
          )}
          {totalProjects > 0 && sp.mode === "project" && (
            <>
              <RegistryDonut data={projectsByRegistry} />
              <ProjectsScopeBar data={projectsByScope} />
            </>
          )}
        </div>
      </section>
    </main>
  )
}


