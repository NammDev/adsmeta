"use client"

import { Button } from "@/components/ui/button"
import { scrollToElement } from "@/lib/scroll-utils"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function PaymentMethodsCompact() {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null)

  const paymentMethods = [
    { name: "Stripe", logo: "/payment-logos/stripe.webp" },
    { name: "PayPal", logo: "/payment-logos/paypal.webp" },
    { name: "Visa", logo: "/payment-logos/visa.webp" },
    { name: "Mastercard", logo: "/payment-logos/mastercard.webp" },
    { name: "Wise", logo: "/payment-logos/wise.webp" },
    { name: "IBAN", logo: "/payment-logos/iban.webp" },
    { name: "Bitcoin", logo: "/payment-logos/bitcoin.webp" },
  ]

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden border border-blue-100 shadow-sm w-full max-w-[900px] mx-auto">
      {/* Background Elements */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute right-20 top-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>

      {/* Blue Heart Decorations */}
      <div className="absolute right-10 top-10 w-20 h-20 hidden sm:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500/30 fill-current">
          <path d="M50,90 C25,65 0,50 0,25 C0,10 10,0 25,0 C35,0 45,5 50,15 C55,5 65,0 75,0 C90,0 100,10 100,25 C100,50 75,65 50,90 Z" />
        </svg>
      </div>
      <div className="absolute right-40 top-40 w-12 h-12 hidden sm:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500/20 fill-current">
          <path d="M50,90 C25,65 0,50 0,25 C0,10 10,0 25,0 C35,0 45,5 50,15 C55,5 65,0 75,0 C90,0 100,10 100,25 C100,50 75,65 50,90 Z" />
        </svg>
      </div>

      {/* Mobile View */}
      <div className="md:hidden py-8 px-6 flex flex-col items-center relative">
        {/* Payment Methods Grid for Mobile - 2 columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8 w-full max-w-sm">
          {paymentMethods.slice(0, 6).map((method) => (
            <div
              key={method.name}
              className="flex items-center justify-center"
              onMouseEnter={() => setHoveredMethod(method.name)}
              onMouseLeave={() => setHoveredMethod(null)}
            >
              <img
                src={method.logo || "/placeholder.svg"}
                alt={method.name}
                className="h-10 w-auto object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Bitcoin centered on its own row */}
        <div className="flex justify-center mb-8 w-full">
          <img
            src={paymentMethods[6].logo || "/placeholder.svg"}
            alt={paymentMethods[6].name}
            className="h-10 w-auto object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
          />
        </div>

        {/* CTA Button for Mobile */}
        <Button
          onClick={() => scrollToElement("products")}
          size="default"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group mb-8"
        >
          Contact Us
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>

        {/* Title and Description */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Buy Facebook ads Accounts Using</h2>
          <p className="text-lg text-gray-700">These Payment Methods.</p>
        </div>

        {/* Blue Heart Decorations for Mobile */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-blue-500/40 fill-current">
            <path d="M50,90 C25,65 0,50 0,25 C0,10 10,0 25,0 C35,0 45,5 50,15 C55,5 65,0 75,0 C90,0 100,10 100,25 C100,50 75,65 50,90 Z" />
          </svg>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex relative z-10 h-[300px]">
        {/* Left Content */}
        <div className="w-[55%] p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Buy Facebook ads Accounts</h2>
            <p className="text-lg text-gray-600">Using These Payment Methods</p>
          </div>

          {/* Payment Methods Grid */}
          <div className="grid grid-cols-4 gap-4">
            {paymentMethods.slice(0, 4).map((method) => (
              <div
                key={method.name}
                className="group relative p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center min-h-[60px]"
                onMouseEnter={() => setHoveredMethod(method.name)}
                onMouseLeave={() => setHoveredMethod(null)}
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <img
                  src={method.logo || "/placeholder.svg"}
                  alt={method.name}
                  className="w-full h-8 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-4">
            {paymentMethods.slice(4).map((method) => (
              <div
                key={method.name}
                className="group relative p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center min-h-[60px]"
                onMouseEnter={() => setHoveredMethod(method.name)}
                onMouseLeave={() => setHoveredMethod(null)}
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <img
                  src={method.logo || "/placeholder.svg"}
                  alt={method.name}
                  className="w-full h-8 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <Button
            onClick={() => scrollToElement("products")}
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
