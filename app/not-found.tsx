import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Animated 404 Illustration */}
        <div className="h-64 w-full mx-auto flex items-center justify-center">
          <div className="relative">
            {/* Animated 404 Text */}
            <div className="text-[120px] font-bold text-facebook/10 leading-none animate-pulse">404</div>

            {/* Animated Character */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-bounce">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Face */}
                  <circle cx="60" cy="60" r="40" fill="#EFF6FF" stroke="#0066FF" strokeWidth="4" />

                  {/* Eyes */}
                  <circle cx="45" cy="50" r="5" fill="#0066FF" className="animate-pulse" />
                  <circle cx="75" cy="50" r="5" fill="#0066FF" className="animate-pulse" />

                  {/* Confused mouth */}
                  <path d="M45 75 Q60 65 75 75" stroke="#0066FF" strokeWidth="4" strokeLinecap="round" />

                  {/* Question mark */}
                  <path
                    d="M90 30 Q100 20 100 10 Q100 0 90 0 Q80 0 80 10 L80 15"
                    stroke="#0066FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    transform="translate(0, 15) scale(0.6)"
                    className="animate-spin-slow"
                  />
                  <circle cx="80" cy="30" r="2.5" fill="#0066FF" transform="translate(0, 15) scale(0.6)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-facebook animate-fadeIn">Page Not Found</h2>
          <p className="text-gray-600 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Oops! Looks like you've ventured into uncharted territory.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <Button asChild className="bg-facebook hover:bg-facebook-dark text-white">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-gray-300">
            <Link href="/contact" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </div>

        {/* Suggestions */}
        <div className="pt-12 border-t border-gray-100 mt-12 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-lg font-medium text-gray-900 mb-4">You might be looking for:</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products" className="text-facebook hover:underline hover:scale-105 transition-transform">
              Products
            </Link>
            <Link href="/packs" className="text-facebook hover:underline hover:scale-105 transition-transform">
              Packages
            </Link>
            <Link href="/blog" className="text-facebook hover:underline hover:scale-105 transition-transform">
              Blog
            </Link>
            <Link href="/faq" className="text-facebook hover:underline hover:scale-105 transition-transform">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
