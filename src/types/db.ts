export type VoluntaryRegistryOffsets = {
  project_id: string
  project_name: string | null
  voluntary_registry: string | null
  region: string | null
  country: string | null
  state: string | null
  type: string | null
  scope: string | null
  voluntary_status: string | null
  total_credits_issued: number | null
  total_credits_retired: number | null
  total_credits_remaining: number | null
  first_year_of_project_vintage: number | null
}

export type Tables = {
  voluntaryregistryoffsets: VoluntaryRegistryOffsets
}


