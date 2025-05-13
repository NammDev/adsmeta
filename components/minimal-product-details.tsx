"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check } from "lucide-react"

interface MinimalProductDetailsProps {
  name: string
  tagline: string
  price: number
  description: string
  features: string[]
}

export default function MinimalProductDetails({
  name,
  tagline,
  price,
  description,
  features,
}: MinimalProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-8">
      <div>
        <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 px-4 py-1.5 text-sm mb-4">
          Facebook Ads Solution
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{name}</h1>
        <p className="text-lg text-gray-600">{tagline}</p>
      </div>

      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">€{price}</span>
          <span className="text-lg text-gray-500">one-time payment</span>
        </div>
        <p className="text-sm text-facebook mt-2 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <span>Save €{Math.round(price * 0.1)} with code: META10</span>
        </p>
      </div>

      <div>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-4 py-2 text-gray-900">{quantity}</span>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
          <div className="text-sm text-green-600 font-medium">In Stock</div>
        </div>

        <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium py-6 w-full flex items-center justify-center gap-2 text-base">
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
