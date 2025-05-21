"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Home, HelpCircle, BookOpen, Package } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-200/30 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-200/30 animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-pink-200/30 animate-pulse-slow animation-delay-2000"></div>

      {/* Floating Social Icons */}
      <div className="absolute top-1/4 left-1/5 w-12 h-12 rounded-full bg-blue-500/80 flex items-center justify-center text-white transform rotate-12 animate-float">
        <span className="text-xl font-bold">f</span>
      </div>
      <div className="absolute bottom-1/3 right-1/3 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white transform -rotate-12 animate-float animation-delay-1500">
        <span className="text-lg font-bold">Ads</span>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-purple-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white text-center relative">
            <h1 className="text-4xl font-bold mb-2">Oops! 404</h1>
            <p className="text-blue-100">This page is lost in the ad universe</p>

            {/* Animated Character */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="relative w-32 h-32 bg-white rounded-full border-4 border-purple-300 flex items-center justify-center shadow-lg animate-bounce-slow">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center overflow-hidden">
                  {/* Face */}
                  <div className="relative w-full h-full">
                    {/* Eyes */}
                    <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-blue-600 animate-blink"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-blue-600 animate-blink animation-delay-300"></div>

                    {/* Mouth */}
                    <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-10 h-5 border-b-4 border-blue-600 rounded-b-full"></div>

                    {/* Question Mark */}
                    <div className="absolute -top-2 right-0 text-purple-600 font-bold text-xl transform rotate-12 animate-pulse">
                      ?
                    </div>
                    <div className="absolute -top-1 left-2 text-blue-600 font-bold text-xl transform -rotate-12 animate-pulse animation-delay-500">
                      ?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-20 pb-8 px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Looks like this page got lost while optimizing Facebook ads!
              <span className="block mt-2 text-sm text-purple-600">
                Maybe it's testing a new audience targeting strategy?
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home size={18} />
                  <span>Back to Home</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-200 hover:bg-purple-50 text-purple-700">
                <Link href="/contact" className="flex items-center gap-2">
                  <HelpCircle size={18} />
                  <span>Get Help</span>
                </Link>
              </Button>
            </div>

            {/* Fun Stats */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-blue-600">Fun Fact:</span> While you were looking for this page,
                <span className="font-bold text-purple-600 mx-1">1,253</span>
                Facebook ads were created worldwide!
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-t border-purple-100">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Destinations:</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/products"
                className="flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
              >
                <ShoppingCart size={14} />
                <span>Products</span>
              </Link>
              <Link
                href="/packs"
                className="flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm text-purple-600 hover:bg-purple-50 transition-colors shadow-sm"
              >
                <Package size={14} />
                <span>Packages</span>
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm text-pink-600 hover:bg-pink-50 transition-colors shadow-sm"
              >
                <BookOpen size={14} />
                <span>Blog</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const audio = new Audio("/notification-sound.mp3")
              audio.volume = 0.5
              audio.play()
              document.getElementById("easter-egg")?.classList.remove("hidden")
              setTimeout(() => {
                document.getElementById("easter-egg")?.classList.add("hidden")
              }, 3000)
            }}
            className="text-xs text-purple-400 hover:text-purple-600 transition-colors"
          >
            Click for a surprise
          </button>
          <div id="easter-egg" className="hidden mt-2 text-sm font-medium text-blue-600 animate-bounce">
            🎉 You found a hidden Facebook ad credit! (Just kidding, but wouldn't that be nice?)
          </div>
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--rotation, 0deg)); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
          --rotation: 12deg;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
        
        .animate-blink {
          animation: blink 4s infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
