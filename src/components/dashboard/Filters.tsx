"use client"

import { useRouter, useSearchParams } from "next/navigation"
import React, { useMemo } from "react"
// import { SelectField } from "@/components/ui/select" // unused
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Props = {
  registries: string[]
  methodologies: string[]
  countries: string[]
  regions: string[]
}

export function Filters({ registries, methodologies, countries, regions }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const current = useMemo(
    () => ({
      mode: (searchParams.get("mode") ?? "credit") as "project" | "credit" | "map",
      registry: searchParams.get("registry") ?? "",
      methodology: searchParams.get("methodology") ?? "",
      country: searchParams.get("country") ?? "",
      region: searchParams.get("region") ?? "",
      project_name: searchParams.get("project_name") ?? "",
    }),
    [searchParams]
  )

  // onChange reserved for future simple selects

  const setMode = (value: "project" | "credit" | "map") => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("mode", value)
    router.replace(`/dashboard?${params.toString()}`)
  }

  const MultiSelect = ({ label, param, options }: { label: string; param: "registry" | "country" | "methodology" | "region"; options: string[] }) => {
    const committed = (searchParams.get(param) ?? "").split(",").filter(Boolean)
    const [pending, setPending] = React.useState<string[]>(committed)
    const [query, setQuery] = React.useState("")
    const sortedOptions = React.useMemo(() => {
      const base = [...options].filter(Boolean).sort((a, b) => a.localeCompare(b))
      if (!query) return base
      const q = query.toLowerCase()
      return base.filter((o) => o.toLowerCase().includes(q))
    }, [options, query])

    React.useEffect(() => {
      setPending(committed)
    }, [searchParams, param])

    const toggleLocal = (opt: string) => {
      setPending((prev) => (prev.includes(opt) ? prev.filter((v) => v !== opt) : [...prev, opt]))
    }
    const clearLocal = () => setPending([])
    const selectAllLocal = () => setPending(options)
    const apply = () => {
      const params = new URLSearchParams(searchParams.toString())
      if (pending.length) params.set(param, pending.map(encodeURIComponent).join(","))
      else params.delete(param)
      router.replace(`/dashboard?${params.toString()}`)
    }
    const labelText = pending.length ? `${label} (${pending.length})` : label
    return (
      <div className="flex flex-col gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="justify-between">
              <span className="truncate max-w-[16rem] md:max-w-[20rem]">{labelText}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80">
            <DropdownMenuLabel>
              <div className="flex items-center justify-between gap-2">
                <Button size="sm" onClick={apply}>Apply</Button>
                <div className="flex items-center gap-2 ml-auto">
                  {options.length > 0 && (
                    <button className="text-xs text-[rgb(11,36,109)]" onClick={selectAllLocal}>Select all</button>
                  )}
                  {pending.length > 0 && (
                    <button className="text-xs text-[rgb(11,36,109)]" onClick={clearLocal}>Clear</button>
                  )}
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${label.toLowerCase()}...`}
                  className="w-full border rounded px-2 py-1 text-sm"
                  aria-label={`Search ${label}`}
                />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sortedOptions.map((opt) => (
              <DropdownMenuCheckboxItem
                key={opt}
                checked={pending.includes(opt)}
                onCheckedChange={() => toggleLocal(opt)}
                onSelect={(e) => e.preventDefault()}
                className="gap-2"
              >
                <span className="whitespace-normal break-words">{opt}</span>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  const ProjectNameSearch = () => {
    const committed = searchParams.get("project_name") ?? ""
    const [pending, setPending] = React.useState<string>(committed)

    React.useEffect(() => {
      setPending(committed)
    }, [committed])

    const apply = () => {
      const params = new URLSearchParams(searchParams.toString())
      const value = pending.trim()
      if (value) params.set("project_name", value)
      else params.delete("project_name")
      router.replace(`/dashboard?${params.toString()}`)
    }
    const clear = () => {
      setPending("")
      const params = new URLSearchParams(searchParams.toString())
      params.delete("project_name")
      router.replace(`/dashboard?${params.toString()}`)
    }

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        apply()
      }
    }

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 border rounded-md px-3 h-9 bg-background">
          <input
            id="project-name-input"
            value={pending}
            onChange={(e) => setPending(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Project Name"
            className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            aria-label="Project Name"
          />
          <button className="text-xs text-[rgb(11,36,109)]" onClick={apply}>Apply</button>
          {committed && (
            <button className="text-xs text-[rgb(11,36,109)]" onClick={clear}>Clear</button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-2">
        <div className="inline-flex rounded-md border overflow-hidden" role="tablist" aria-label="Data mode">
          <button
            type="button"
            onClick={() => setMode("credit")}
            className={`px-3 py-1.5 text-sm ${current.mode === "credit" ? "bg-[rgb(11,36,109)] text-white" : "bg-white text-gray-900"}`}
            role="tab"
            aria-selected={current.mode === "credit"}
          >
            Credit
          </button>
          <button
            type="button"
            onClick={() => setMode("map")}
            className={`px-3 py-1.5 text-sm border-l ${current.mode === "map" ? "bg-[rgb(11,36,109)] text-white" : "bg-white text-gray-900"}`}
            role="tab"
            aria-selected={current.mode === "map"}
          >
            Map
          </button>
          <button
            type="button"
            onClick={() => setMode("project")}
            className={`px-3 py-1.5 text-sm border-l ${current.mode === "project" ? "bg-[rgb(11,36,109)] text-white" : "bg-white text-gray-900"}`}
            role="tab"
            aria-selected={current.mode === "project"}
          >
            Projects
          </button>
        </div>
        {/* Search dialog opener */}
        <SearchDialog searchParams={searchParams} />
      </div>

      {true ? (
        <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-5">
          <MultiSelect label="Registry" options={registries} param="registry" />
          <MultiSelect label="Methodology" options={methodologies} param="methodology" />
          <MultiSelect label="Country" options={countries} param="country" />
          <MultiSelect label="Region" options={regions} param="region" />
          <ProjectNameSearch />
        </div>
      ) : null}
    </div>
  )
}

function SearchDialog({ searchParams }: { searchParams: ReturnType<typeof useSearchParams> }) {
  const [open, setOpen] = React.useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)
  return (
    <>
      <Button variant="outline" size="sm" aria-label="Open search table" onClick={onOpen}>
        <Search className="h-4 w-4" />
      </Button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <div className="relative bg-white rounded-md shadow-lg max-w-6xl w-[95vw] max-h-[85vh] overflow-auto p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Projects</h2>
              <Button size="sm" variant="outline" onClick={onClose} aria-label="Close">
                <X className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <SearchResultsTable searchParams={searchParams} />
          </div>
        </div>
      )}
    </>
  )
}

function SearchResultsTable({ searchParams }: { searchParams: ReturnType<typeof useSearchParams> }) {
  const [rows, setRows] = React.useState<any[]>([])
  const [count, setCount] = React.useState(0)
  const [page, setPage] = React.useState(1)
  const [limit] = React.useState(50)
  const [loading, setLoading] = React.useState(false)

  const fetchData = async (p = 1) => {
    setLoading(true)
    try {
      const params = new URLSearchParams(searchParams.toString())
      params.set("page", String(p))
      params.set("limit", String(limit))
      const res = await fetch(`/api/projects-table?${params.toString()}`, { cache: "no-store" })
      const json = await res.json()
      setRows(json.rows ?? [])
      setCount(json.count ?? 0)
      setPage(json.page ?? p)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchData(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const totalPages = Math.max(1, Math.ceil(count / limit))

  return (
    <>
      <div className="flex items-center justify-between mb-2 text-sm">
        <div>Showing {rows.length.toLocaleString()} of {count.toLocaleString()}</div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={() => fetchData(Math.max(1, page - 1))} disabled={page <= 1 || loading} aria-label="Previous page">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div>pg {page} / {totalPages}</div>
          <Button size="sm" variant="outline" onClick={() => fetchData(Math.min(totalPages, page + 1))} disabled={page >= totalPages || loading} aria-label="Next page">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Registry</TableHead>
              <TableHead>Methodology</TableHead>
              <TableHead>Scope</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>State</TableHead>
              <TableHead className="text-right">Total Credits Issued</TableHead>
              <TableHead className="text-right">Total Credits Retired</TableHead>
              <TableHead className="text-right">Total Credits Remaining</TableHead>
              <TableHead className="text-right">Total Buffer Pool Deposits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={12} className="text-center">Loading…</TableCell>
              </TableRow>
            ) : rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} className="text-center text-muted-foreground">No results</TableCell>
              </TableRow>
            ) : (
              rows.map((r) => (
                <TableRow key={r.project_id}>
                  <TableCell className="max-w-[280px] truncate" title={r.project_name ?? ""}>{r.project_name}</TableCell>
                  <TableCell>{r.voluntary_registry}</TableCell>
                  <TableCell>{r.methodology_protocol}</TableCell>
                  <TableCell>{r.scope}</TableCell>
                  <TableCell>{r.type}</TableCell>
                  <TableCell>{r.region}</TableCell>
                  <TableCell>{r.country}</TableCell>
                  <TableCell>{r.state}</TableCell>
                  <TableCell className="text-right">{Number(r.total_credits_issued ?? 0).toLocaleString()}</TableCell>
                  <TableCell className="text-right">{Number(r.total_credits_retired ?? 0).toLocaleString()}</TableCell>
                  <TableCell className="text-right">{Number(r.total_credits_remaining ?? 0).toLocaleString()}</TableCell>
                  <TableCell className="text-right">{Number(r.total_buffer_pool_deposits ?? 0).toLocaleString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
        <div>Tip: filters affect these results in real time.</div>
      </div>
    </>
  )
}


