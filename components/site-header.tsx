"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { CartButton } from "./cart-button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent scrolling when mobile menu is open and add content-shrink class
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.classList.add("content-shrink")
    } else {
      document.body.style.overflow = ""
      document.body.classList.remove("content-shrink")
    }
    return () => {
      document.body.style.overflow = ""
      document.body.classList.remove("content-shrink")
    }
  }, [mobileMenuOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <header
            className={`w-full rounded-xl transition-all duration-300 relative overflow-hidden ${
              scrolled ? "shadow-lg" : "shadow-md"
            }`}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 via-purple-50/80 to-pink-50/90"></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-blue-400/20 animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 left-[15%] w-2 h-2 rounded-full bg-purple-400/20 animate-pulse-delay"></div>
              <div className="absolute top-1/4 right-[10%] w-3 h-3 rounded-full bg-pink-400/20 animate-pulse-delay-2"></div>
              <div className="absolute bottom-1/4 right-[15%] w-2 h-2 rounded-full bg-cyan-400/20 animate-pulse-slow"></div>
              <div className="absolute -right-16 -top-16 w-32 h-32 border-2 border-blue-200/30 rounded-full"></div>
              <div className="absolute -left-16 -bottom-16 w-32 h-32 border-2 border-purple-200/30 rounded-full"></div>
            </div>

            {/* Accent pattern */}
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

            <div className="mx-auto flex h-16 items-center justify-between relative z-10">
              {/* Logo */}
              <Link href="/" className="flex items-center group relative pl-2">
                <div className="relative w-20 h-20">
                  <Image
                    src="/logo-2.svg"
                    alt="GoAds Agency Logo"
                    fill
                    className="object-contain relative z-10"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
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

              {/* Cart and Mobile Menu Button */}
              <div className="flex items-center gap-3 pr-6">
                <div className="relative group scale-110">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></div>
                  <CartButton />
                </div>

                <button
                  className="md:hidden bg-white text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile Menu - Bottom to Top Animation */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-[100]" onClick={() => setMobileMenuOpen(false)}></div>

          {/* Mobile Menu Panel */}
          <div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl z-[110] h-[65vh] mobile-menu-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full flex-col overflow-y-auto">
              {/* Handle at top for better UX */}
              <div className="w-full flex justify-center py-2">
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
              </div>

              {/* Replace the header section with logo instead of "Menu" text */}
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-3">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative w-12 h-12">
                    <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" />
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Update the nav section to have larger font */}
              <nav className="flex-1 space-y-1 px-3 py-4">
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
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center rounded-lg px-4 py-3.5 text-base transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
                      <span className={isActive ? "relative" : ""}>
                        {item.label}
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                        )}
                      </span>
                    </Link>
                  )
                })}
              </nav>

              {/* Update the social media section with proper icons */}
              <div className="px-6 py-4">
                <div className="flex flex-col space-y-4">
                  <div className="text-sm text-gray-500 font-medium">Follow us</div>
                  <div className="flex space-x-5">
                    <a
                      href="#facebook"
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-all hover:from-blue-500/20 hover:to-purple-500/20"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#youtube"
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 transition-all hover:from-red-500/20 hover:to-pink-500/20"
                    >
                      <span className="sr-only">YouTube</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-600"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                    <a
                      href="#instagram"
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 transition-all hover:from-purple-500/20 hover:to-pink-500/20"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-600"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default SiteHeader
