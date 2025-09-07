import Link from "next/link"
import fs from "fs"
import path from "path"
import { Navbar } from "@/components/navbar"

export default function ApiDocsPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "https://YOUR-PROJECT.supabase.co"
  const restUrl = `${supabaseUrl}/rest/v1/voluntaryregistryoffsets`
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY"

  // Load apidocs.md if present (repo root or parent folder)
  const candidates = [
    path.join(process.cwd(), "apidocs.md"),
    path.join(process.cwd(), "..", "apidocs.md"),
  ]
  let apiMd = ""
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        apiMd = fs.readFileSync(p, "utf8")
        break
      }
    } catch {}
  }

  type FieldSnippet = { field: string; description: string; code: string }
  const parseFieldSnippets = (md: string): FieldSnippet[] => {
    const lines = md.split(/\r?\n/)
    const out: FieldSnippet[] = []
    let field = ""
    let description = ""
    let collecting = false
    let codeLines: string[] = []
    for (const line of lines) {
      if (line.startsWith("Field: ")) {
        if (field && (codeLines.length || description)) out.push({ field, description, code: codeLines.join("\n") })
        field = line.replace("Field: ", "").trim()
        description = ""
        collecting = false
        codeLines = []
      } else if (line.startsWith("Description:")) {
        description = line.replace("Description:", "").trim()
      } else if (/^let\s+\{\s*data:/.test(line)) {
        collecting = true
        codeLines = [line]
      } else if (collecting) {
        codeLines.push(line)
        if (line.trim().endsWith(";")) collecting = false
      }
    }
    if (field && (codeLines.length || description)) out.push({ field, description, code: codeLines.join("\n") })
    return out
  }

  const fieldSnippets = apiMd ? parseFieldSnippets(apiMd) : []

  return (
    <main id="content" className="min-h-screen bg-background">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">API Docs</h1>
        <p className="mt-2 text-muted-foreground">
          Public, read-only APIs for the Voluntary Registry Offsets dataset. These endpoints power the dashboard and can be consumed directly.
        </p>

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold">Base REST endpoint</h2>
            <p className="mt-2">Table: <code>voluntaryregistryoffsets</code></p>
            <div className="mt-2 rounded-md border bg-white p-3 text-sm">
              <div className="font-mono break-words">{restUrl}</div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              You will need your project anon key for requests. Keep service keys private.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Authentication headers</h2>
            <pre className="mt-2 overflow-auto rounded-md border bg-white p-3 text-sm"><code>{`apikey: ${anonKey}
Authorization: Bearer ${anonKey}`}</code></pre>
            <p className="mt-2 text-sm text-muted-foreground">This anon key is public (RLS-protected). Do NOT share your service_role key.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Quick start (cURL)</h2>
            <p className="mt-2">Fetch 10 rows:</p>
            <pre className="mt-2 overflow-auto rounded-md border bg-white p-3 text-sm"><code>{`curl '${restUrl}?select=*&limit=10' \
  -H 'apikey: ${anonKey}' \
  -H 'Authorization: Bearer ${anonKey}'`}</code></pre>

            <p className="mt-4">Filter examples (REST):</p>
            <ul className="list-disc pl-6 text-sm">
              <li>Registry equals: <code>?voluntary_registry=eq.VERRA</code></li>
              <li>Country IN list: <code>?country=in.(United%20States,India)</code></li>
              <li>Methodology contains: <code>?methodology_protocol=ilike.*Forest*</code></li>
              <li>Project name search: <code>?project_name=ilike.*solar*</code></li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">Combine with <code>&amp;select=</code> to choose columns and <code>Range</code> header for paging.</p>
            <pre className="mt-2 overflow-auto rounded-md border bg-white p-3 text-sm"><code>{`curl '${restUrl}?select=project_id,project_name,voluntary_registry,country,total_credits_issued&country=in.(United%20States,India)&order=total_credits_issued.desc' \
  -H 'Range: 0-49' \
  -H 'apikey: ${anonKey}' \
  -H 'Authorization: Bearer ${anonKey}'`}</code></pre>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Using supabase-js</h2>
            <pre className="mt-2 overflow-auto rounded-md border bg-white p-3 text-sm"><code>{`import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

const { data, error } = await supabase
  .from('voluntaryregistryoffsets')
  .select('project_id, project_name, voluntary_registry, country, total_credits_issued')
  .eq('voluntary_registry', 'VERRA')
  .in('country', ['United States', 'India'])
  .ilike('methodology_protocol', '%Forest%')
  .order('total_credits_issued', { ascending: false })
  .range(0, 49)

if (error) throw error
console.log(data)`}</code></pre>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Dashboard-compatible query params</h2>
            <p className="mt-2 text-sm">The dashboard encodes filters in the URL. You can reuse the same names when calling the REST API:</p>
            <ul className="mt-2 list-disc pl-6 text-sm">
              <li><code>registry</code>: maps to <code>voluntary_registry</code> (supports <code>eq</code>, <code>in</code>)</li>
              <li><code>methodology</code>: maps to <code>methodology_protocol</code> (<code>ilike.*value*</code>)</li>
              <li><code>country</code>, <code>region</code>: (<code>eq</code>, <code>in</code>)</li>
              <li><code>project_name</code>: (<code>ilike.*value*</code>)</li>
              <li>Pagination: use <code>Range: from-to</code> headers or <code>limit</code> and the <code>range()</code> method in supabase-js</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Notes</h2>
            <ul className="mt-2 list-disc pl-6 text-sm">
              <li>RLS is enabled with a policy granting public read access for this table.</li>
              <li>Cache-heavy clients should page through results in batches of 1,000 rows.</li>
              <li>Prefer selecting only the columns you need via <code>select=</code>.</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              Reference: <Link href="https://supabase.com/dashboard/project/ctmrhpbdadtzygvrbkim/api?resource=voluntaryregistryoffsets" className="underline">Supabase API reference for this table</Link>.
            </p>
          </section>
        </div>
      </section>
      {fieldSnippets.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Per-field examples (supabase-js)</h2>
          <p className="mt-2 text-sm text-muted-foreground">Auto-generated from apidocs.md. Each snippet fetches a single column.</p>
          <div className="mt-6 space-y-6">
            {fieldSnippets.map((s, i) => (
              <div key={`${s.field}-${i}`} className="rounded-md border bg-white p-3">
                <div className="font-semibold">{s.field}</div>
                {s.description && (
                  <div className="mt-1 text-sm text-muted-foreground">{s.description}</div>
                )}
                {s.code && (
                  <pre className="mt-3 overflow-auto rounded bg-gray-50 p-3 text-sm"><code>{s.code}</code></pre>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}


