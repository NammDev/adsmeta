"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { getRelatedProducts, getAllProducts } from "@/data/products"

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

  // Get products to display
  const getProductsToShow = () => {
    // First get related products
    const products = getRelatedProducts(currentProductId)

    // If we have less than 8, add more products
    if (products.length < 8) {
      const allProducts = getAllProducts()
      const currentProductIds = new Set([currentProductId, ...products.map((p) => p.id)])

      // First, add products from the same category
      const sameCategoryProducts = allProducts.filter(
        (product) => product.category === currentCategory && !currentProductIds.has(product.id)
      )

      for (const product of sameCategoryProducts) {
        if (products.length >= 8) break
        products.push(product)
        currentProductIds.add(product.id)
      }

      // If still less than 8, add products from other categories
      if (products.length < 8) {
        const otherProducts = allProducts.filter(
          (product) => product.category !== currentCategory && !currentProductIds.has(product.id)
        )

        for (const product of otherProducts) {
          if (products.length >= 8) break
          products.push(product)
        }
      }
    }

    return products.slice(0, 8)
  }

  const productsToShow = getProductsToShow()

  // Scroll carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? -180 : -320
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })

      const newIndex = Math.max(0, activeIndex - 1)
      setActiveIndex(newIndex)
    }
  }

  // Scroll carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? 180 : 320
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })

      const newIndex = Math.min(productsToShow.length - (isMobile ? 2 : 4), activeIndex + 1)
      setActiveIndex(newIndex)
    }
  }

  // Auto scroll carousel
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      if (activeIndex < productsToShow.length - (isMobile ? 2 : 4)) {
        scrollRight()
      } else {
        if (carouselRef.current) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
          setActiveIndex(0)
        }
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, productsToShow.length, isMobile, isHovering])

  // Render product card
  const renderProductCard = (product: any) => (
    <Card className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg h-full bg-white relative group hover:border-blue-300">
      {/* Badge positioned absolutely */}
      {product.badge && (
        <div className="absolute top-3 right-3 z-10">
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

      <CardContent className={`${isMobile ? "p-4" : "p-6"} relative z-10`}>
        {/* Product category */}
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">{product.category}</div>

        {/* Product name */}
        <h3
          className={`${
            isMobile ? "text-lg" : "text-xl"
          } font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2`}
        >
          {product.name}
        </h3>

        {/* Product description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.description}</p>

        {/* Price and action */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col">
            <span
              className={`${
                isMobile ? "text-xl" : "text-2xl"
              } font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
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

  if (productsToShow.length === 0) return null

  return (
    <div className={cn("relative pt-8 pb-0", className)}>
      {children}

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
            <span className="relative z-10">You Might Also Like</span>
            <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
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
            {productsToShow.map((product) => (
              <div
                key={product.id}
                className={`${
                  isMobile ? "min-w-[180px] w-[180px]" : "min-w-[280px] w-[280px]"
                } flex-none snap-start`}
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
          {Array.from({ length: Math.max(0, productsToShow.length - (isMobile ? 1 : 3)) }).map(
            (_, index) => (
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
            )
          )}
        </div>
      </div>
    </div>
  )
}
