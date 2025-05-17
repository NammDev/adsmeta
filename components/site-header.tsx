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
    <div className="fixed top-4 left-0 right-0 z-50 mx-auto px-4 max-w-7xl">
      <header
        className={`w-full rounded-xl transition-all duration-300 relative overflow-hidden ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        {/* More colorful background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 via-purple-50/80 to-pink-50/90"></div>

        {/* Subtle decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-blue-400/20 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-[15%] w-2 h-2 rounded-full bg-purple-400/20 animate-pulse-delay"></div>
          <div className="absolute top-1/4 right-[10%] w-3 h-3 rounded-full bg-pink-400/20 animate-pulse-delay-2"></div>
          <div className="absolute bottom-1/4 right-[15%] w-2 h-2 rounded-full bg-cyan-400/20 animate-pulse-slow"></div>

          {/* Add subtle diagonal lines */}
          <div className="absolute -right-16 -top-16 w-32 h-32 border-2 border-blue-200/30 rounded-full"></div>
          <div className="absolute -left-16 -bottom-16 w-32 h-32 border-2 border-purple-200/30 rounded-full"></div>
        </div>

        {/* Geometric accent pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-8 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 20" preserveAspectRatio="none">
            <path d="M0,10 C300,30 600,0 1200,10 L1200,20 L0,20 Z" fill="url(#header-gradient)"></path>
            <defs>
              <linearGradient id="header-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="33%" stopColor="#8B5CF6" />
                <stop offset="66%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Backdrop blur when scrolled */}
        {scrolled && <div className="absolute inset-0 backdrop-blur-md"></div>}

        <div className="mx-auto flex h-16 items-center justify-between px-6 relative z-10">
          {/* Logo with BIGGER size */}
          <Link href="/" className="flex items-center group relative">
            <div className="relative w-20 h-20">
              <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain relative z-10" priority />
            </div>
          </Link>

          {/* Navigation with BIGGER and BOLDER text */}
          <nav className="hidden md:flex items-center space-x-8">
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
                  className={`text-base font-medium relative group transition-all duration-300 ${
                    isActive ? "text-[#0066FF] font-semibold" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {/* Text shadow for better readability */}
                  <span className="relative z-10 drop-shadow-sm">{item.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              )
            })}
          </nav>

          {/* Cart with SLIGHTLY BIGGER icon */}
          <div className="flex items-center gap-3">
            <div className="relative group scale-110">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></div>
              <CartButton />
            </div>

            <button
              className="md:hidden relative group bg-white text-gray-700 p-2 rounded-md hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="absolute -inset-0.5 rounded bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Menu className="h-6 w-6 relative z-10" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </div>
  )
}

export default SiteHeader
