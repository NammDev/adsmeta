"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { CartButton } from "./cart-button"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <div className="relative w-20 h-20">
            <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" priority />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm ${pathname === "/" ? "text-[#0066FF] font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`text-sm ${pathname === "/products" ? "text-[#0066FF] font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            Products
          </Link>
          <Link
            href="/packs"
            className={`text-sm ${pathname === "/packs" ? "text-[#0066FF] font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            Packs
          </Link>
          <Link
            href="/blog"
            className={`text-sm ${pathname === "/blog" || pathname.startsWith("/blog/") ? "text-[#0066FF] font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            Blog
          </Link>
          <Link
            href="/about-us"
            className={`text-sm ${pathname === "/about-us" ? "text-[#0066FF] font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm ${pathname === "/contact" ? "text-[#0066FF] font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className={`text-sm ${pathname === "/faq" ? "text-[#0066FF] font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <CartButton />
          <button
            className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}

export default SiteHeader
