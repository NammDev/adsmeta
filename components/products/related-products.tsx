"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { getRelatedProducts } from "@/data/products"

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
  children?: React.ReactNode
}

export default function RelatedProducts({
  currentProductId,
  currentCategory,
  className,
  children,
}: RelatedProductsProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart() || {}
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Get real related products from data
  const relatedProducts = getRelatedProducts(currentProductId)

  // Scroll carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? -180 : -320
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })

      // Update active index
      const newIndex = Math.max(0, activeIndex - 1)
      setActiveIndex(newIndex)
    }
  }

  // Scroll carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? 180 : 320
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })

      // Update active index
      const newIndex = Math.min(relatedProducts.length - (isMobile ? 2 : 4), activeIndex + 1)
      setActiveIndex(newIndex)
    }
  }

  // Auto scroll carousel
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      if (activeIndex < relatedProducts.length - (isMobile ? 2 : 4)) {
        scrollRight()
      } else {
        // Reset to beginning
        if (carouselRef.current) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
          setActiveIndex(0)
        }
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, relatedProducts.length, isMobile, isHovering])

  // Render product card with vibrant styling
  const renderProductCard = (product: any) => (
    <Card className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg h-full bg-white relative group hover:border-blue-300">
      <CardContent className={`${isMobile ? "p-4" : "p-6"} relative z-10`}>
        {/* Badge if any */}
        {product.badge && (
          <div className="mb-3">
            <Badge
              className={`
            ${
              product.badge === "Popular"
                ? "bg-gradient-to-r from-amber-400 to-orange-500"
                : product.badge === "Premium"
                  ? "bg-gradient-to-r from-purple-500 to-pink-600"
                  : product.badge === "Best Value"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600"
            } 
            text-white border-0 shadow-sm px-2 py-1 text-xs`}
            >
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Product category */}
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">{product.category}</div>

        {/* Product name */}
        <h3
          className={`${isMobile ? "text-lg" : "text-xl"} font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2`}
        >
          {product.name}
        </h3>

        {/* Product description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.shortDescription || product.description}</p>

        {/* Rating and purchases */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{(product.rating || 4.5).toFixed(1)}</span>
            <span className="text-xs text-gray-500">({product.purchases || 0})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <ShoppingBag className="h-3 w-3" />
            <span className="text-xs">{product.purchases || 0} sold</span>
          </div>
        </div>

        {/* Price and action */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span
              className={`${isMobile ? "text-xl" : "text-2xl"} font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
            >
              €{product.price}
            </span>
            {product.comparePrice && (
              <span className="text-sm text-gray-500 line-through">€{product.comparePrice}</span>
            )}
          </div>
          <Link href={`/products/${product.slug}`}>
            <Button
              size={isMobile ? "sm" : "default"}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              {isMobile ? "View" : "View Details"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )

  if (relatedProducts.length === 0) return null

  return (
    <div className={cn("relative pt-8 pb-0", className)}>
      {children}

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
            <span className="relative z-10">You Might Also Like</span>
            <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
          </h2>

          {/* Carousel Navigation - Desktop */}
          <div className="hidden md:flex gap-2">
            <Button
              onClick={scrollLeft}
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors duration-300"
              aria-label="Previous products"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={scrollRight}
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors duration-300"
              aria-label="Next products"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          {/* Mobile Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white/90 backdrop-blur-sm p-2 shadow-lg border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          {/* Products carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-6 pt-1 scrollbar-hide snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className={`${isMobile ? "min-w-[180px] w-[180px]" : "min-w-[280px] w-[280px]"} flex-none snap-start`}
              >
                {renderProductCard(product)}
              </div>
            ))}
          </div>

          {/* Right navigation arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/90 backdrop-blur-sm p-2 shadow-lg border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-4 gap-1.5">
          {Array.from({ length: Math.max(0, relatedProducts.length - (isMobile ? 1 : 3)) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                if (carouselRef.current) {
                  const scrollAmount = (isMobile ? 180 : 320) * index
                  carouselRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" })
                  setActiveIndex(index)
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
