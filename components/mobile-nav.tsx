"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"
import { usePathname } from "next/navigation"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()

  // Close mobile nav when pathname changes
  useEffect(() => {
    if (isOpen) onClose()
  }, [pathname, isOpen, onClose])

  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-xs bg-gradient-to-b from-white to-blue-50 shadow-xl animate-in slide-in-from-right">
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex items-center justify-between border-b border-gray-200/30 px-6 py-4">
            <Link href="/" className="flex items-center" onClick={onClose}>
              <div className="relative w-16 h-16">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" />
              </div>
            </Link>
            <button
              onClick={onClose}
              className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 space-y-1 px-3 py-6">
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
                  onClick={onClose}
                  className={`group flex items-center rounded-lg px-4 py-3 text-sm transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="mr-3 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
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
          <div className="border-t border-gray-200/30 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <div className="text-xs text-gray-500">Follow us</div>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="group flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-all hover:from-blue-500/20 hover:to-purple-500/20"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-500 mask-icon-${social}"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
