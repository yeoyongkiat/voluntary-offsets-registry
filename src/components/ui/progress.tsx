"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: number
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => {
    const clamped = typeof value === "number" ? Math.max(0, Math.min(100, value)) : undefined
    return (
      <div
        ref={ref}
        className={cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", className)}
        {...props}
      >
        {typeof clamped === "number" ? (
          <div
            className="h-full rounded-full bg-[rgb(11,36,109)] transition-[width] duration-300 ease-out"
            style={{ width: `${clamped}%` }}
          />
        ) : (
          <div className="absolute inset-y-0 left-0 h-full w-2/5 rounded-full bg-[rgb(11,36,109)]"
               style={{ animation: "progress-indeterminate 1.4s ease-in-out infinite" }}
          />
        )}
      </div>
    )
  }
)
Progress.displayName = "Progress"


