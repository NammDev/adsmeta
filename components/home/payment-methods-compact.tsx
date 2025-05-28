"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function PaymentMethodsCompact() {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null)

  const paymentMethods = [
    { name: "Stripe", logo: "/placeholder.svg?height=40&width=100&text=Stripe" },
    { name: "PayPal", logo: "/placeholder.svg?height=40&width=100&text=PayPal" },
    { name: "Visa", logo: "/placeholder.svg?height=40&width=100&text=VISA" },
    { name: "Mastercard", logo: "/placeholder.svg?height=40&width=100&text=Mastercard" },
    { name: "Wise", logo: "/placeholder.svg?height=40&width=100&text=Wise" },
    { name: "IBAN", logo: "/placeholder.svg?height=40&width=100&text=IBAN" },
    { name: "Bitcoin", logo: "/placeholder.svg?height=40&width=100&text=Bitcoin" },
  ]

  return (
    <div
      className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden border border-blue-100 shadow-sm"
      style={{ width: "900px", height: "300px" }}
    >
      {/* Background Elements */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute right-20 top-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>

      {/* Blue Heart Decorations (from original design) */}
      <div className="absolute right-10 top-10 w-20 h-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500/30 fill-current">
          <path d="M50,90 C25,65 0,50 0,25 C0,10 10,0 25,0 C35,0 45,5 50,15 C55,5 65,0 75,0 C90,0 100,10 100,25 C100,50 75,65 50,90 Z" />
        </svg>
      </div>
      <div className="absolute right-40 top-40 w-12 h-12">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500/20 fill-current">
          <path d="M50,90 C25,65 0,50 0,25 C0,10 10,0 25,0 C35,0 45,5 50,15 C55,5 65,0 75,0 C90,0 100,10 100,25 C100,50 75,65 50,90 Z" />
        </svg>
      </div>

      <div className="relative z-10 h-full flex">
        {/* Left Content */}
        <div className="w-[500px] p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Buy Facebook ads Accounts</h2>
            <p className="text-lg text-gray-600">Using These Payment Methods</p>
          </div>

          {/* Payment Methods Grid */}
          <div className="grid grid-cols-4 gap-4">
            {paymentMethods.slice(0, 4).map((method) => (
              <div
                key={method.name}
                className="group relative p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredMethod(method.name)}
                onMouseLeave={() => setHoveredMethod(null)}
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <img
                  src={method.logo || "/placeholder.svg"}
                  alt={method.name}
                  className="w-full h-8 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-4">
            {paymentMethods.slice(4).map((method) => (
              <div
                key={method.name}
                className="group relative p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredMethod(method.name)}
                onMouseLeave={() => setHoveredMethod(null)}
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <img
                  src={method.logo || "/placeholder.svg"}
                  alt={method.name}
                  className="w-full h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  )
}
