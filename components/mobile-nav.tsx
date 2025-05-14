"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Update the mobile menu to slide up from the bottom instead of from the right

  // Change the backdrop and menu container styles
  const [isMounted, setIsMounted] = useState(false)

  // Handle escape key press to close the menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"
    }

    setIsMounted(true)

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isMounted) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile menu - now slides up from bottom */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 bg-white z-50 shadow-xl rounded-t-xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        {/* Subtle drag handle */}
        <div className="w-full flex justify-center py-2">
          <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
        </div>

        <div className="max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="flex items-center" onClick={onClose}>
              <div className="relative w-14 h-14">
                <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" />
              </div>
            </Link>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-[#0066FF]"
                  onClick={onClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-[#0066FF]"
                  onClick={onClose}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/packs"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-[#0066FF]"
                  onClick={onClose}
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-[#0066FF]"
                  onClick={onClose}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-[#0066FF]"
                  onClick={onClose}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-[#0066FF]"
                  onClick={onClose}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-[#0066FF]"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
