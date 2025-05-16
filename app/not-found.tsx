import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Static 404 Illustration */}
        <div className="h-64 w-full mx-auto flex items-center justify-center">
          <div className="relative">
            {/* 404 Text */}
            <div className="text-[120px] font-bold text-gray-100 leading-none">404</div>

            {/* Static Character */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Face */}
                <circle cx="60" cy="60" r="40" fill="#EFF6FF" stroke="#0066FF" strokeWidth="4" />

                {/* Eyes */}
                <circle cx="45" cy="50" r="5" fill="#0066FF" />
                <circle cx="75" cy="50" r="5" fill="#0066FF" />

                {/* Confused mouth */}
                <path d="M45 75 Q60 65 75 75" stroke="#0066FF" strokeWidth="4" strokeLinecap="round" />

                {/* Question mark */}
                <path
                  d="M90 30 Q100 20 100 10 Q100 0 90 0 Q80 0 80 10 L80 15"
                  stroke="#0066FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  transform="translate(0, 15) scale(0.6)"
                />
                <circle cx="80" cy="30" r="2.5" fill="#0066FF" transform="translate(0, 15) scale(0.6)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Page Not Found</h2>
          <p className="text-gray-600">Oops! Looks like you've ventured into uncharted territory.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-gray-300">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>

        {/* Suggestions */}
        <div className="pt-12 border-t border-gray-100 mt-12">
          <h3 className="text-lg font-medium text-gray-900 mb-4">You might be looking for:</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products" className="text-blue-600 hover:underline">
              Products
            </Link>
            <Link href="/packs" className="text-blue-600 hover:underline">
              Packages
            </Link>
            <Link href="/blog" className="text-blue-600 hover:underline">
              Blog
            </Link>
            <Link href="/faq" className="text-blue-600 hover:underline">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
