import Link from "next/link"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Desktop Footer - Logo on left, 4 columns on right */}
        <div className="hidden md:flex flex-col md:flex-row gap-12 mb-12">
          {/* Left side - Logo and Company Info */}
          <div className="md:w-1/5">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-16 h-16">
                <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-600 mb-6">
              Professional Facebook advertising solutions for agencies and marketers worldwide.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-[#0066FF]">
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
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#0066FF]">
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
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side - 4 columns of links */}
          <div className="md:w-4/5 grid grid-cols-4 gap-8">
            {/* Column 1 - Products */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Products</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/products" className="text-gray-600 hover:text-[#0066FF]">
                    Business Manager
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-600 hover:text-[#0066FF]">
                    Via XMDT
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-600 hover:text-[#0066FF]">
                    Pixels
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-600 hover:text-[#0066FF]">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Resources */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-[#0066FF]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-[#0066FF]">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-[#0066FF]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#0066FF]">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about-us" className="text-gray-600 hover:text-[#0066FF]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#0066FF]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Useful Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Useful Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/packs" className="text-gray-600 hover:text-[#0066FF]">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
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
            <Link href="/" className="flex items-center justify-center mb-4">
              <div className="relative w-16 h-16">
                <Image src="/logo-2.svg" alt="GoAds Agency Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-600 text-center mb-6">
              Professional Facebook advertising solutions for agencies and marketers worldwide.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="#" className="text-gray-500 hover:text-[#0066FF]">
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
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#0066FF]">
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
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Footer Links - 2x2 Grid with centered text */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* INQUIRIES */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase">Inquiries</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-[#0066FF]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-600 hover:text-[#0066FF]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    Recommendations
                  </Link>
                </li>
              </ul>
            </div>

            {/* HELP */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase">Help</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#0066FF]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    How to buy?
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-[#0066FF]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* POLICIES */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase">Policies</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    Shipping And Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* USEFUL LINKS */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase">Useful Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-[#0066FF]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    My Purchases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0066FF]">
                    2FA Code Generator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 GoAds Agency. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-[#0066FF] text-sm">
                Terms
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#0066FF] text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#0066FF] text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
