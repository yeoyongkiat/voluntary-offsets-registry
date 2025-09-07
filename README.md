Seeds – UC Berkeley Voluntary Offsets Registry Dashboard
=======================================================

Open‑source dashboard and public API docs for exploring the Voluntary Registry Offsets Database maintained by UC Berkeley’s Berkeley Carbon Trading Project.

What’s inside
-------------
- Next.js App Router + React + TypeScript
- Tailwind CSS + shadcn/ui
- Recharts for charts, react-simple-maps for the world map
- Supabase (RLS-enabled) as the data backend
- Caching, pagination, and filterable views
- API Docs page generated from your environment and optional `apidocs.md`

Live pages
----------
- Landing page (hero, About, Tech Stack)
- Dashboard: `/dashboard`
  - Filters: Registry, Methodology, Country, Region, Project Name
  - Views: Credit (charts), Projects (project-based charts), Map (choropleth by country)
  - “Search” icon opens a live table of filtered projects
- API Docs: `/api-docs`
  - REST and supabase‑js examples
  - Optionally renders per‑field examples parsed from `apidocs.md`

Prerequisites
-------------
- Node 18+ and pnpm (recommended)
- A Supabase project populated with the `voluntaryregistryoffsets` table
- RLS enabled with a read‑only policy for anonymous users

Environment
-----------
Create `.env.local` in the project root (get keys and URL from the api docs at https://rogueteacher.me/projects/seed.html):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

# Optional but recommended for SEO and canonical URLs
NEXT_PUBLIC_SITE_URL=https://your-domain.tld
```

Run locally
-----------
```bash
pnpm install
pnpm dev
# then open http://localhost:3000
```

Using the API
-------------
Anonymous key is intentionally public (RLS protects data). Replace values with yours.

```bash
curl "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/voluntaryregistryoffsets?select=*&limit=10" \
  -H "apikey: ${NEXT_PUBLIC_SUPABASE_ANON_KEY}" \
  -H "Authorization: Bearer ${NEXT_PUBLIC_SUPABASE_ANON_KEY}"
```

Common filters (REST query params):
- `voluntary_registry=eq.VERRA`
- `country=in.(United%20States,India)`
- `methodology_protocol=ilike.*Forest*`
- `project_name=ilike.*solar*`

Dashboards & features
---------------------
- KPIs: totals for projects, credits issued, retired, remaining
- Charts: time series, registry/region/scope distributions
- Map: project count or credits issued by country, log scaling, hover tooltip
- Filters update the entire dashboard and the projects table
- Server‑side pagination for tables and large Supabase reads

SEO
---
- Metadata, Open Graph, and Twitter cards are set in `src/app/layout.tsx`
- `robots.txt` and `sitemap.xml` are provided (driven by `NEXT_PUBLIC_SITE_URL`)

Folder structure highlights
---------------------------
- `src/app/dashboard/page.tsx` – dashboard data and rendering
- `src/components/dashboard/*` – charts, filters, map, KPI cards
- `src/app/api-docs/page.tsx` – API docs (reads `NEXT_PUBLIC_SUPABASE_*`, parses `apidocs.md` if present)
- `src/app/api/projects-table/route.ts` – filtered, paginated table data endpoint
- `src/lib/supabase/*` – Supabase clients for server and client

Contributing
------------
1. Fork and create a feature branch
2. Make changes with clear commits
3. Open a PR describing the change and screenshots (if UI)

License
-------
CC0‑1.0 – Public Domain Dedication. See `LICENSE`.
