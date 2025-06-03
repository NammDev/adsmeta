import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CONTACT_INFO } from "@/config"

interface SiteFooterProps {
  className?: string
}

export default function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={cn("relative overflow-hidden z-10", className)}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop Footer - Logo on left, 4 columns on right */}
        <div className="hidden md:flex flex-col md:flex-row gap-12 mb-12">
          {/* Left side - Logo and Company Info */}
          <div className="md:w-1/5">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-2 shadow-sm">
                <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-600 mb-6">
              Professional Facebook advertising solutions for agencies and marketers worldwide.
            </p>
            <div className="flex gap-4">
              <Link
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
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
                    className="text-blue-500"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </Link>
              <Link href="contact" className="text-gray-500 hover:text-blue-500 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
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
                    className="text-blue-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right side - 4 columns of links */}
          <div className="md:w-4/5 grid grid-cols-4 gap-8">
            {/* Column 1 - Products */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                <span>Products</span>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-50 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Business Manager
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Via XMDT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Pixels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Resources */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                <span>Resources</span>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 to-pink-200 opacity-50 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-purple-500 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-purple-500 transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-purple-500 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-purple-500 transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                <span>Company</span>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-green-200 to-teal-200 opacity-50 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-600 hover:text-green-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-green-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Useful Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
                <span>Useful Links</span>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-200 to-orange-200 opacity-50 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/packs"
                    className="text-gray-600 hover:text-amber-500 transition-colors"
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Footer - 2x2 Grid with centered text */}
        <div className="md:hidden">
          {/* Logo and Company Info */}
          <div className="mb-8">
            <Link
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-4"
            >
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-2 shadow-sm">
                <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-600 text-center mb-6">
              Professional Facebook advertising solutions for agencies and marketers worldwide.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="contact" className="text-gray-500 hover:text-blue-500 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Footer Links - 2x2 Grid with centered text */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* INQUIRIES */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase relative inline-block">
                <span>Inquiries</span>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-50 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                    Recommendations
                  </Link>
                </li>
              </ul>
            </div>

            {/* HELP */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase relative inline-block">
                <span>Help</span>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 to-pink-200 opacity-50 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-purple-500 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-500 transition-colors">
                    How to buy?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-purple-500 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* POLICIES */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase relative inline-block">
                <span>Policies</span>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-green-200 to-teal-200 opacity-50 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                    Shipping And Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* USEFUL LINKS */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase relative inline-block">
                <span>Useful Links</span>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-200 to-orange-200 opacity-50 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-amber-500 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">
                    My Purchases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors">
                    2FA Code Generator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 GoAds Agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors text-sm"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
