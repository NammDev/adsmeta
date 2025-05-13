"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useState } from "react"

interface ProductCardProps {
  title: string
  description: string
  price: number
  features: string[]
  href: string
  isPopular?: boolean
  id?: string
  image?: string
  category?: string
}

export default function ProductCard({
  title,
  description,
  price,
  features,
  href,
  isPopular = false,
  id = title.toLowerCase().replace(/\s+/g, "-"),
  image = "/placeholder.svg?height=100&width=100&query=" + encodeURIComponent(title),
  category = "pack",
}: ProductCardProps) {
  const { addItem, openCart } = useCart() || {}
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    if (!addItem) {
      console.error("Cart functionality not available")
      return
    }

    setIsAdding(true)

    try {
      addItem({
        id,
        name: title,
        price,
        quantity: 1,
        image,
        category,
      })

      // Optional: Open cart after adding
      if (openCart) openCart()
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setTimeout(() => setIsAdding(false), 500)
    }
  }

  return (
    <Card
      className={`border ${isPopular ? "border-2 border-facebook" : "border-gray-200"} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md relative`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-facebook text-white px-4 py-1 text-sm font-medium">Most Popular</div>
      )}
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4 flex items-end">
            <span className="text-4xl font-bold text-gray-900">€{price}</span>
            <span className="text-gray-500 ml-2">one-time</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <Button
            className="bg-facebook hover:bg-facebook-dark text-white font-medium w-full py-6"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </Button>
          <Link href={href} className="w-full" scroll={true}>
            <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 w-full">
              Learn More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
