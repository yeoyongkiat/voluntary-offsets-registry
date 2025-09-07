"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Header } from "@/components/home/Header"
import { About } from "@/components/home/About"
import { TechStack } from "@/components/home/TechStack"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Header />
      <div className="h-screen snap-start snap-always" aria-hidden="true" />
      <About />
      <TechStack />
    </main>
  )
}
