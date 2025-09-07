"use client"

import type React from "react"

type Option = { value: string; label?: string }

type Props = {
  label?: string
  value: string
  onChange: (value: string) => void
  options: Array<string | Option>
  placeholder?: string
  id?: string
  className?: string
}

export function SelectField({ label, value, onChange, options, placeholder = "All", id, className }: Props) {
  return (
    <label className={`flex flex-col gap-1 ${className ?? ""}`} htmlFor={id}>
      {label ? <span className="text-sm text-muted-foreground">{label}</span> : null}
      <select
        id={id}
        className="rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(11,36,109)]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => {
          const option = typeof opt === "string" ? { value: opt, label: opt } : opt
          return (
            <option key={option.value} value={option.value}>
              {option.label ?? option.value}
            </option>
          )
        })}
      </select>
    </label>
  )
}


