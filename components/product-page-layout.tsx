import type { ReactNode } from "react"
import Link from "next/link"
import { ShoppingCart, Heart, Menu, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import SiteFooter from "@/components/site-footer"
import NewsletterSection from "@/components/newsletter-section"

interface ProductPageLayoutProps {
  children: ReactNode
}

export default function ProductPageLayout({ children }: ProductPageLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header/Navigation - More e-commerce style */}
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

          <div className="hidden md:flex items-center space-x-8 flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-facebook"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/#packages" className="text-base text-gray-700 hover:text-facebook transition-colors">
                Shop
              </Link>
              <Link href="/#about" className="text-base text-gray-700 hover:text-facebook transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-base text-gray-700 hover:text-facebook transition-colors">
                Support
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="#" className="relative text-gray-700 hover:text-facebook">
                <Heart className="h-6 w-6" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-facebook text-white">
                  0
                </Badge>
              </Link>
              <Link href="#" className="relative text-gray-700 hover:text-facebook">
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
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 bg-white">{children}</div>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
