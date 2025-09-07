"use client"

import type React from "react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { GridAnimation } from "@/components/home/GridAnimation"

export function Header() {
  const [gridItems, setGridItems] = useState<Array<{ id: number; color: string; isEmpty: boolean }>>([])

  useEffect(() => {
    const totalItems = 400
    const filledCount = Math.floor(totalItems * 0.35)
    const cols = 20

    const items = Array.from({ length: totalItems }).map((_, i) => {
      const row = Math.floor(i / cols)
      const col = i % cols
      const maxRow = Math.floor(totalItems / cols) - 1

      const triangleThreshold = (row + col) / (maxRow + cols - 1)
      const isInTriangle = triangleThreshold > 0.4

      const fillProbability = isInTriangle ? 0.7 : 0.35

      return {
        id: i,
        color:
          i % 8 === 0
            ? "berkeley-blue"
            : i % 6 === 0
              ? "berkeley-gold"
              : i % 4 === 0
                ? "berkeley-blue-light"
                : i % 3 === 0
                  ? "berkeley-gold-light"
                  : "berkeley-blue",
        isEmpty: Math.random() > fillProbability,
      }
    })

    const currentFilled = items.filter((item) => !item.isEmpty).length
    const targetFilled = filledCount

    if (currentFilled > targetFilled) {
      const filledIndices = items.map((item, idx) => ({ item, idx })).filter(({ item }) => !item.isEmpty)
      const toRemove = currentFilled - targetFilled

      filledIndices
        .sort((a, b) => {
          const aRow = Math.floor(a.idx / cols)
          const aCol = a.idx % cols
          const bRow = Math.floor(b.idx / cols)
          const bCol = b.idx % cols
          const aTriangle = (aRow + aCol) / (Math.floor(totalItems / cols) - 1 + cols - 1)
          const bTriangle = (bRow + bCol) / (Math.floor(totalItems / cols) - 1 + cols - 1)
          return aTriangle - bTriangle
        })
        .slice(0, toRemove)
        .forEach(({ idx }) => {
          items[idx].isEmpty = true
        })
    } else if (currentFilled < targetFilled) {
      const emptyIndices = items.map((item, idx) => ({ item, idx })).filter(({ item }) => item.isEmpty)
      const toAdd = targetFilled - currentFilled

      emptyIndices
        .sort((a, b) => {
          const aRow = Math.floor(a.idx / cols)
          const aCol = a.idx % cols
          const bRow = Math.floor(b.idx / cols)
          const bCol = b.idx % cols
          const aTriangle = (aRow + aCol) / (Math.floor(totalItems / cols) - 1 + cols - 1)
          const bTriangle = (bRow + bCol) / (Math.floor(totalItems / cols) - 1 + cols - 1)
          return bTriangle - aTriangle
        })
        .slice(0, toAdd)
        .forEach(({ idx }) => {
          items[idx].isEmpty = false
        })
    }

    setGridItems(items)

    const interval = setInterval(() => {
      setGridItems((prev) => {
        const newItems = [...prev]

        const filledIndices = newItems
          .map((item, index) => ({ item, index }))
          .filter(({ item }) => !item.isEmpty)
          .map(({ index }) => index)

        if (filledIndices.length < 2) return newItems

        const swapCount = Math.min(3, Math.floor(filledIndices.length / 4))

        for (let i = 0; i < swapCount; i++) {
          const idx1 = filledIndices[Math.floor(Math.random() * filledIndices.length)]
          const idx2 = filledIndices[Math.floor(Math.random() * filledIndices.length)]

          if (idx1 !== idx2) {
            const temp = newItems[idx1]
            newItems[idx1] = newItems[idx2]
            newItems[idx2] = temp
          }
        }

        return newItems
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const getOpacityForPosition = (index: number) => {
    const cols = 20
    const row = Math.floor(index / cols)
    const col = index % cols
    const maxRow = Math.floor(400 / cols) - 1
    const maxCol = cols - 1

    const progress = (row / maxRow + col / maxCol) / 2

    return 0.05 + progress * 0.95
  }

  return (
    <section className="fixed inset-0 z-0 h-screen">
      <div className="grid lg:grid-cols-2 items-center h-full">
        <div className="space-y-4 md:space-y-6 lg:space-y-8 px-4 lg:px-8 lg:pr-8 flex flex-col justify-center h-full pt-32 md:pt-40 lg:pt-16">
          <div className="space-y-4 md:space-y-6">
            <Image
              src="/seeds-logo.png"
              alt="Seeds"
              width={640}
              height={200}
              className="h-24 md:h-32 lg:h-40 w-auto"
              priority
            />
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-lg">
              A dashboard application for UC Berkeley's Voluntary Offsets Registry
            </p>
          </div>

          <div className="flex gap-3 md:gap-4">
            <a
              href="/dashboard"
              className="bg-white text-black border border-gray-300 hover:bg-[rgb(11,36,109)] hover:text-white hover:border-transparent px-8 py-3 text-base font-medium transition-colors cursor-pointer rounded-md"
            >
              Dashboard
            </a>
            <a
              href="/api-docs"
              className="bg-white text-black border border-gray-300 hover:bg-[rgb(11,36,109)] hover:text-white hover:border-transparent px-8 py-3 text-base font-medium transition-colors cursor-pointer rounded-md"
            >
              API Docs
            </a>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-3">
              <a
                href="https://gspp.berkeley.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/goldman-logo-NkOdhNOAZ3AKvHdtdwv28a7v3cBq4I.png"
                  alt="UC Berkeley Goldman School of Public Policy"
                  className="h-10 md:h-12 lg:h-14 w-auto"
                />
              </a>
              <span className="text-lg font-bold text-muted-foreground">×</span>
              <a
                href="https://rogueteacher.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rogueteacher-iconwhite-BM5oJzLJFuyaGM5S4avYGNkjgBU9DN.png"
                  alt="Rogue Teacher"
                  className="h-10 md:h-12 lg:h-14 w-auto"
                />
              </a>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
              Data prepared and provided by Barbara K Haya, Tyler Bernard, Aline Abayo, Xinyun Rong, Ivy S. So, Micah Elias. (2025). Voluntary Registry Offsets Database v2025-06, Berkeley Carbon Trading Project, University of California, Berkeley. Retrieved from: <a
                href="https://gspp.berkeley.edu/berkeley-carbon-trading-project/offsets-database"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                https://gspp.berkeley.edu/berkeley-carbon-trading-project/offsets-database
              </a>
            </p>
          </div>
        </div>

        <GridAnimation className="relative h-full w-full" />
      </div>
    </section>
  )
}


