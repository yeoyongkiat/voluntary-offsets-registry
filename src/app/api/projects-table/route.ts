import { NextResponse } from "next/server"
import { supabaseServer } from "@/lib/supabase/server"

export async function GET(req: Request) {
  const url = new URL(req.url)
  const sp = url.searchParams
  const supabase = supabaseServer()

  const page = Math.max(1, Number(sp.get("page") ?? "1"))
  const limit = Math.min(200, Math.max(10, Number(sp.get("limit") ?? "50")))
  const from = (page - 1) * limit
  const to = from + limit - 1

  const select =
    "project_id,project_name,voluntary_registry,methodology_protocol,scope,type,region,country,state,total_credits_issued,total_credits_retired,total_credits_remaining,total_buffer_pool_deposits"

  let q = supabase.from("voluntaryregistryoffsets").select(select, { count: "exact" })

  const getMulti = (key: string) => {
    const v = sp.get(key)
    if (!v) return [] as string[]
    return String(v)
      .split(",")
      .map((s) => decodeURIComponent(s))
      .filter(Boolean)
  }
  const by = (col: string, key: string) => {
    const arr = getMulti(key)
    if (arr.length === 1) q = q.eq(col, arr[0])
    else if (arr.length > 1) q = q.in(col, arr)
  }
  by("voluntary_registry", "registry")
  by("country", "country")
  by("region", "region")

  const meth = getMulti("methodology")
  if (meth.length === 1) q = q.ilike("methodology_protocol", `%${meth[0]}%`)
  else if (meth.length > 1) {
    const orFilters = meth.map((m) => `methodology_protocol.ilike.%${m}%`).join(",")
    q = q.or(orFilters)
  }

  const projectName = sp.get("project_name")?.toString().trim()
  if (projectName) q = q.ilike("project_name", `%${projectName}%`)

  q = q.order("total_credits_issued", { ascending: false, nullsFirst: true }).range(from, to)

  const { data, error, count } = await q
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ rows: data ?? [], count: count ?? 0, page, limit })
}


