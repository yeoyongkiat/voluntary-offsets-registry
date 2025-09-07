"use client"

import type React from "react"
import { useEffect, useState } from "react"

type Item = { id: number; color: string; isEmpty: boolean }

export function GridAnimation({ className }: { className?: string }) {
  const [gridItems, setGridItems] = useState<Array<Item>>([])

  useEffect(() => {
    const totalItems = 400
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
    <div className={className}>
      <div className="grid grid-cols-20 gap-0.5 lg:gap-1 w-full h-full p-2">
        {gridItems.map((item, i) => {
          const opacity = getOpacityForPosition(i)
          return (
            <div
              key={`${item.id}-${i}`}
              className={`${item.isEmpty ? "bg-transparent" : ""} aspect-square transition-all duration-100 ease-in-out hover:scale-105`}
              style={
                item.isEmpty
                  ? {}
                  : ({
                      backgroundColor: `rgb(var(--${item.color}) / ${opacity})`,
                      "--berkeley-blue": "11 36 109",
                      "--berkeley-blue-light": "30 64 175",
                      "--berkeley-gold": "253 181 21",
                      "--berkeley-gold-light": "255 205 90",
                    } as React.CSSProperties & Record<string, string>)
              }
            />
          )
        })}
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/30 pointer-events-none" />
    </div>
  )
}


