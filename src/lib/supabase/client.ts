"use client"

import { createClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
const anonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY

if (!url || !anonKey) {
  // Avoid throwing synchronously in client modules; log a helpful message instead
  // The server helper will throw with a clearer error.
  console.warn(
    "Supabase URL/Anon Key missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
  )
}

export const supabaseBrowser = createClient(url as string, anonKey as string)


