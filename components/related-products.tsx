"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

// Product type definition
interface RelatedProduct {
  id: string
  slug: string
  name: string
  description: string
  price: number
  image: string
  category: string
  badge?: string
  rating?: number
  purchases?: number
}

interface RelatedProductsProps {
  currentProductId: string
  currentCategory: string
  className?: string
}

export default function RelatedProducts({ currentProductId, currentCategory, className }: RelatedProductsProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart() || {}
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Sample related products data - in a real app, this would come from an API or database
  const allProducts: RelatedProduct[] = [
    {
      id: "bm1-250-limit",
      slug: "bm1-250-limit",
      name: "Business Manager BM1 with $250 Limit",
      description: "Verified Business Manager with $250 spending limit for Facebook advertising.",
      price: 199,
      image: "/facebook-verified-business-manager.png",
      category: "Business Manager",
      badge: "Popular",
      rating: 4.9,
      purchases: 122,
    },
    {
      id: "facebook-xmdt-usa",
      slug: "facebook-xmdt-usa",
      name: "Facebook XMDT USA Account",
      description: "Premium USA-based Facebook account with XMDT verification for advanced advertising capabilities.",
      price: 299,
      image: "/facebook-xmdt-usa.png",
      category: "Facebook Accounts",
      rating: 4.7,
      purchases: 76,
    },
    {
      id: "verified-bm5",
      slug: "verified-bm5",
      name: "Verified BM5 Unlimited",
      description: "Premium Business Manager with 5 ad accounts and unlimited spending potential.",
      price: 350,
      image: "/abstract-facebook-verified-business-manager.png",
      category: "Business Manager",
      badge: "Premium",
      rating: 4.8,
      purchases: 45,
    },
    {
      id: "facebook-pixel",
      slug: "facebook-pixel",
      name: "Advanced Facebook Pixel",
      description: "Enhanced tracking pixel for optimized conversion tracking and audience building.",
      price: 25,
      image: "/facebook-pixel-icon.png",
      category: "Tracking Tools",
      rating: 4.6,
      purchases: 98,
    },
    {
      id: "payment-method",
      slug: "payment-method",
      name: "USA Payment Method",
      description: "Verified USA payment method for Facebook advertising accounts.",
      price: 60,
      image: "/facebook-payment-method-icon.png",
      category: "Payment Methods",
      rating: 4.5,
      purchases: 65,
    },
  ]

  // Filter out the current product and prioritize products from the same category
  const filteredProducts = allProducts
    .filter((product) => product.id !== currentProductId)
    .sort((a, b) => {
      // Products from the same category come first
      if (a.category === currentCategory && b.category !== currentCategory) return -1
      if (a.category !== currentCategory && b.category === currentCategory) return 1
      return 0
    })
    .slice(0, 6) // Limit to 6 products

  // Scroll carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  // Scroll carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  // Render star rating - exactly like in the products section
  const renderRating = (rating = 4.5, purchases = 0) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        <span className="text-xs text-gray-500">({purchases})</span>
      </div>
    )
  }

  // Render product card (used in both mobile and desktop) - exactly like in the products section
  const renderProductCard = (product: RelatedProduct) => (
    <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md h-full">
      <div className="relative">
        {/* Rating display */}
        <div className="absolute left-4 top-4 z-10">{renderRating(product.rating, product.purchases)}</div>

        {/* Product image */}
        <div className="aspect-square relative bg-gray-50">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-8" />
        </div>

        {/* Badge if any */}
        {product.badge && (
          <div className="absolute right-4 top-4">
            <Badge className="bg-facebook text-white">{product.badge}</Badge>
          </div>
        )}
      </div>

      <CardContent className={`${isMobile ? "p-3" : "p-6"}`}>
        {/* Purchase count */}
        <div className="flex items-center gap-1 mb-2 text-gray-600">
          <ShoppingBag className="h-3 w-3" />
          <span className="text-xs">{product.purchases} purchased</span>
        </div>

        {/* Product name and description */}
        <h3 className={`${isMobile ? "text-base" : "text-lg"} font-bold text-gray-900 mb-1`}>{product.name}</h3>
        {!isMobile && <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>}

        {/* Price and action */}
        <div className="flex justify-between items-center mt-2">
          <span className={`${isMobile ? "text-lg" : "text-xl"} font-bold text-gray-900`}>€{product.price}</span>
          <Link href={`/products/${product.slug}`}>
            <Button size={isMobile ? "sm" : "default"} className="bg-facebook hover:bg-facebook-dark text-white">
              {isMobile ? "View" : "View Details"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )

  if (filteredProducts.length === 0) return null

  return (
    <div className={cn("", className)}>
      <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>

      {/* Mobile View - Carousel with 2 items per view */}
      {isMobile ? (
        <div className="relative md:hidden">
          {/* Left navigation arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white p-2 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Products carousel */}
          <div
            ref={carouselRef}
            className="flex gap-3 overflow-x-auto pb-4 pt-1 scrollbar-hide snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredProducts.map((product) => (
              <div key={product.id} className="min-w-[150px] w-[calc(50%-6px)] flex-none snap-start">
                {renderProductCard(product)}
              </div>
            ))}
          </div>

          {/* Right navigation arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-2 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      ) : (
        /* Desktop View - Grid */
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.slice(0, 4).map((product) => (
            <div key={product.id}>{renderProductCard(product)}</div>
          ))}
        </div>
      )}
    </div>
  )
}
