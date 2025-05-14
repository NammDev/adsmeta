"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle escape key press and clicks outside to close the menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"
    }

    setIsMounted(true)

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isMounted) return null

  return (
    <>
      {/* Backdrop - darkens the background */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        aria-hidden="true"
      />

      {/* Mobile menu - slides up from bottom */}
      <div
        ref={menuRef}
        className={cn(
          "fixed inset-x-0 bottom-0 bg-white z-50 rounded-t-2xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "translate-y-full",
        )}
        style={{ maxHeight: "70vh" }}
      >
        {/* Subtle drag handle */}
        <div className="w-full flex justify-center py-3">
          <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
        </div>

        <div className="overflow-y-auto max-h-[calc(70vh-40px)] pb-6">
          {/* Logo */}
          <div className="flex justify-center py-4">
            <Link href="/" className="flex items-center" onClick={onClose}>
              <div className="relative w-14 h-14">
                <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>

          {/* Navigation links */}
          <nav className="px-6">
            <div className="flex flex-col space-y-5">
              <Link
                href="/"
                className={`text-xl font-medium ${pathname === "/" ? "text-[#0066FF]" : "text-gray-800"}`}
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`text-xl font-medium ${pathname === "/products" ? "text-[#0066FF]" : "text-gray-800"}`}
                onClick={onClose}
              >
                Products
              </Link>
              <Link
                href="/packs"
                className={`text-xl font-medium ${pathname === "/packs" ? "text-[#0066FF]" : "text-gray-800"}`}
                onClick={onClose}
              >
                Packs
              </Link>
              <Link
                href="/blog"
                className={`text-xl font-medium ${
                  pathname === "/blog" || pathname.startsWith("/blog/") ? "text-[#0066FF]" : "text-gray-800"
                }`}
                onClick={onClose}
              >
                Blog
              </Link>
              <Link
                href="/about-us"
                className={`text-xl font-medium ${pathname === "/about-us" ? "text-[#0066FF]" : "text-gray-800"}`}
                onClick={onClose}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-xl font-medium ${pathname === "/contact" ? "text-[#0066FF]" : "text-gray-800"}`}
                onClick={onClose}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className={`text-xl font-medium ${pathname === "/faq" ? "text-[#0066FF]" : "text-gray-800"}`}
                onClick={onClose}
              >
                FAQ
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
