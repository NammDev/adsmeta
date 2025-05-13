import Link from "next/link"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
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
            <p className="text-gray-600 mb-6">
              Professional Facebook advertising solutions for agencies and marketers worldwide.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-facebook">
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
              <Link href="#" className="text-gray-500 hover:text-facebook">
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

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Business Manager
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Via XMDT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Pixels
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-facebook">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Image src="/placeholder.svg?height=30&width=60" alt="Visa" width={60} height={30} />
          <Image src="/placeholder.svg?height=30&width=60" alt="Mastercard" width={60} height={30} />
          <Image src="/placeholder.svg?height=30&width=60" alt="PayPal" width={60} height={30} />
          <Image src="/placeholder.svg?height=30&width=60" alt="Bitcoin" width={60} height={30} />
          <Image src="/placeholder.svg?height=30&width=60" alt="Ethereum" width={60} height={30} />
          <Image src="/placeholder.svg?height=30&width=60" alt="USDT" width={60} height={30} />
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 EasyAdsPack. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-facebook text-sm">
                Terms
              </Link>
              <Link href="#" className="text-gray-500 hover:text-facebook text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-facebook text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
