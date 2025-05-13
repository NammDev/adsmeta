import type { ReactNode } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/site-footer"
import NewsletterSection from "@/components/newsletter-section"

interface MinimalProductLayoutProps {
  children: ReactNode
}

export default function MinimalProductLayout({ children }: MinimalProductLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header - Synced with landing page style */}
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
            <Link href="/" className="text-base text-gray-700 hover:text-facebook transition-colors">
              Home
            </Link>
            <Link href="/#packages" className="text-base text-gray-700 hover:text-facebook transition-colors">
              Packages
            </Link>
            <Link href="/#products" className="text-base text-gray-700 hover:text-facebook transition-colors">
              Products
            </Link>
            <Link href="/#reviews" className="text-base text-gray-700 hover:text-facebook transition-colors">
              Customer Reviews
            </Link>
            <Link href="/#contact" className="text-base text-gray-700 hover:text-facebook transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-gray-700">
              <span className="text-sm">EN</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <Link href="/cart" className="relative text-gray-700 hover:text-facebook">
              <ShoppingCart className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-facebook text-white">
                0
              </Badge>
            </Link>
            <button className="md:hidden text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 bg-white [&>section:first-child]:mt-[-20px]">{children}</div>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
