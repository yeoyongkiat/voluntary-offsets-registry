import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/dashboard`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/api-docs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ]
}


