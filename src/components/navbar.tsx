"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "API Docs", href: "/api-docs" },
    { name: "About", href: "/#about" },
    { name: "Tech Stack", href: "/#techstack" },
    { name: "Berkeley Carbon Trading Project", href: "https://gspp.berkeley.edu/berkeley-carbon-trading-project" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" aria-label="Primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Go to home" prefetch>
              <Image
                src="/seeds-logo.png"
                alt="Seeds"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => {
                const isAnchor = link.href.startsWith("/#")
                const onClick = (e: React.MouseEvent) => {
                  if (!isAnchor) return
                  const id = link.href.split("#")[1]
                  if (pathname === "/") {
                    e.preventDefault()
                    const el = document.getElementById(id)
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }
                return link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-900 hover:text-[rgb(11,36,109)] px-3 py-2 text-sm font-medium transition-colors duration-200"
                    prefetch
                    onClick={onClick}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-900 hover:text-[rgb(11,36,109)] px-3 py-2 text-sm font-medium transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-[rgb(11,36,109)]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navLinks.map((link) => {
              const isAnchor = link.href.startsWith("/#")
              const onClick = (e: React.MouseEvent) => {
                if (!isAnchor) { setIsOpen(false); return }
                const id = link.href.split("#")[1]
                if (pathname === "/") {
                  e.preventDefault()
                  setIsOpen(false)
                  const el = document.getElementById(id)
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }
              return link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 hover:text-[rgb(11,36,109)] hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={onClick}
                  prefetch
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 hover:text-[rgb(11,36,109)] hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}