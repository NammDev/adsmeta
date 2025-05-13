"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { CartButton } from "./cart-button"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              fill="#1877F2"
            />
            <path
              d="M21 16H18V14C18 13.448 18.448 13 19 13H20V10H18C15.791 10 14 11.791 14 14V16H12V19H14V26H18V19H20L21 16Z"
              fill="white"
            />
          </svg>
          <span className="text-2xl font-medium text-gray-900">EasyAdsPack</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/products" className="text-base text-gray-700 hover:text-facebook transition-colors">
            Products
          </Link>
          <Link href="/packs" className="text-base text-gray-700 hover:text-facebook transition-colors">
            Packages
          </Link>
          <Link href="/blog" className="text-base text-gray-700 hover:text-facebook transition-colors">
            Blog
          </Link>
          <Link href="/faq" className="text-base text-gray-700 hover:text-facebook transition-colors">
            FAQ
          </Link>
          <Link href="/about-us" className="text-base text-gray-700 hover:text-facebook transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-base text-gray-700 hover:text-facebook transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
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
