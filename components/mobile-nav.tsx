"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
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

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-medium">Menu</span>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-facebook"
                  onClick={onClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-facebook"
                  onClick={onClose}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/packs"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-facebook"
                  onClick={onClose}
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-facebook"
                  onClick={onClose}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-facebook"
                  onClick={onClose}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-facebook"
                  onClick={onClose}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-facebook"
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
