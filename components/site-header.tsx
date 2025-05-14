"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { CartButton } from "./cart-button"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <div className="relative w-20 h-20">
            <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" priority />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/products" className="text-base text-gray-700 hover:text-[#0066FF] transition-colors">
            Products
          </Link>
          <Link href="/packs" className="text-base text-gray-700 hover:text-[#0066FF] transition-colors">
            Packages
          </Link>
          <Link href="/blog" className="text-base text-gray-700 hover:text-[#0066FF] transition-colors">
            Blog
          </Link>
          <Link href="/faq" className="text-base text-gray-700 hover:text-[#0066FF] transition-colors">
            FAQ
          </Link>
          <Link href="/about-us" className="text-base text-gray-700 hover:text-[#0066FF] transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-base text-gray-700 hover:text-[#0066FF] transition-colors">
            Contact
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
