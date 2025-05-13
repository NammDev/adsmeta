"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Shield, Info, Truck, CreditCard } from "lucide-react"
import Link from "next/link"

interface ProductDetailsProps {
  name: string
  tagline: string
  price: number
  rating: number
  reviewCount: number
  description: string
  features: string[]
  inStock?: boolean
}

export default function ProductDetails({
  name,
  tagline,
  price,
  rating,
  reviewCount,
  description,
  features,
  inStock = true,
}: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-6">
      <div>
        <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-2">Facebook Ads Solution</Badge>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{name}</h1>
        <p className="text-lg text-gray-600">{tagline}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
        <Link href="#reviews" className="text-sm text-gray-500 hover:text-facebook">
          {reviewCount} reviews
        </Link>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">€{price}</span>
          <span className="text-lg text-gray-500">one-time payment</span>
        </div>
        <p className="text-sm text-facebook mt-1 flex items-center gap-1">
          <Info className="h-4 w-4" />
          <span>Save €{Math.round(price * 0.1)} with code: META10</span>
        </p>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <Shield className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-3 py-2 text-gray-900">{quantity}</span>
            <button className="px-3 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {inStock ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium py-6 flex-1 flex items-center justify-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-6 flex items-center justify-center gap-2"
          >
            <Heart className="h-5 w-5" />
            Add to Wishlist
          </Button>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Truck className="h-5 w-5 text-facebook" />
          <span>Digital delivery within 24 hours</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Shield className="h-5 w-5 text-facebook" />
          <span>7-14 day warranty included</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <CreditCard className="h-5 w-5 text-facebook" />
          <span>Secure payment processing</span>
        </div>
      </div>
    </div>
  )
}
