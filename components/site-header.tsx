"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { CartButton } from "./cart-button"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      {/* Colorful top border */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo with decorative elements */}
        <Link href="/" className="flex items-center group relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
          <div className="relative w-20 h-20">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain relative z-10" priority />
          </div>
        </Link>

        {/* Navigation with colorful indicators and animations */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/packs", label: "Packs" },
            { href: "/blog", label: "Blog" },
            { href: "/about-us", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/faq", label: "FAQ" },
          ].map((item) => {
            const isActive = item.href === pathname || (item.href !== "/" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm relative group transition-all duration-300 ${
                  isActive ? "text-[#0066FF] font-medium" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full ${
                    isActive ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            )
          })}
        </nav>

        {/* Cart and mobile menu with enhanced styling */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></div>
            <CartButton />
          </div>

          <button
            className="md:hidden relative group bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 p-2 rounded-md hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="absolute -inset-0.5 rounded bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <Menu className="h-6 w-6 relative z-10" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-5 right-1/3 w-12 h-12 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-2xl -z-10"></div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}

export default SiteHeader
