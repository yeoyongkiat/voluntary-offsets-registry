"use client"

import type React from "react"

const technologies: Array<{ name: string; url: string }> = [
  { name: "Next.js", url: "https://nextjs.org" },
  { name: "React", url: "https://react.dev" },
  { name: "TypeScript", url: "https://www.typescriptlang.org" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/" },
]

export function TechStack() {
  return (
    <section
      id="techstack"
      className="min-h-screen flex items-center px-4 lg:px-8 bg-white scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h3
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          style={{ color: "rgb(11, 36, 109)" }}
        >
          Tech Stack
        </h3>
        <p className="text-base md:text-lg text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
          Built with modern, well-supported tools that prioritize developer experience and performance.
          Most importantly, it's free! These tools come with free tiers, and in particular, Supabase 
          also has intutitive GUIs that UC Berkeley researchers and students can use to maintain the data, if they so choose.
          This way, they will have a structured way to maintain their own data pipeline.
        </p>
        <div className="mt-10 flex items-center justify-center gap-10">
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Next.js"
            className="group"
          >
            <img
              src="/nextjs.png"
              alt="Next.js"
              className="h-16 w-16 rounded-full ring-2 ring-gray-200 shadow-sm transition group-hover:ring-[rgb(11,36,109)]"
            />
          </a>
          <a
            href="https://supabase.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Supabase"
            className="group"
          >
            <img
              src="/supabase.svg"
              alt="Supabase"
              className="h-16 w-16 rounded-full ring-2 ring-gray-200 shadow-sm transition group-hover:ring-[rgb(11,36,109)] p-2"
            />
          </a>
        </div>
      </div>
    </section>
  )
}


