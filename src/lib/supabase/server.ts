import { createClient } from "@supabase/supabase-js"

export const supabaseServer = () => {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      "Supabase URL/Anon Key missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
    )
  }

  return createClient(url, anonKey)
}


