"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingBag, ChevronLeft, ChevronRight, Heart } from "lucide-react"
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
    {
      id: "starter-pack",
      slug: "starter-pack",
      name: "Facebook Ads Starter Pack",
      description: "Complete starter package for Facebook advertising beginners.",
      price: 399,
      image: "/facebook-starter-pack.png",
      category: "Packages",
      badge: "Best Value",
      rating: 4.9,
      purchases: 87,
    },
    {
      id: "agency-pack",
      slug: "agency-pack",
      name: "Agency Growth Bundle",
      description: "Premium bundle for marketing agencies managing multiple clients.",
      price: 799,
      image: "/facebook-agency-pack.png",
      category: "Packages",
      badge: "Premium",
      rating: 4.8,
      purchases: 42,
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
    .slice(0, 8) // Limit to 8 products

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
      const newIndex = Math.min(filteredProducts.length - (isMobile ? 2 : 4), activeIndex + 1)
      setActiveIndex(newIndex)
    }
  }

  // Auto scroll carousel
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      if (activeIndex < filteredProducts.length - (isMobile ? 2 : 4)) {
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
  }, [activeIndex, filteredProducts.length, isMobile, isHovering])

  // Render star rating
  const renderRating = (rating = 4.5, purchases = 0) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        <span className="text-xs text-gray-500">({purchases})</span>
      </div>
    )
  }

  // Render product card with vibrant styling
  const renderProductCard = (product: RelatedProduct) => (
    <Card className="border-0 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full bg-white/90 backdrop-blur-sm relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative">
        {/* Rating display */}
        <div className="absolute left-3 top-3 z-10 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 shadow-sm">
          {renderRating(product.rating, product.purchases)}
        </div>

        {/* Product image */}
        <div className="aspect-square relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 mix-blend-overlay"></div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-6 transform transition-transform group-hover:scale-105 duration-500"
          />
        </div>

        {/* Badge if any */}
        {product.badge && (
          <div className="absolute right-3 top-3 rotate-3">
            <Badge
              className={`
              ${
                product.badge === "Popular"
                  ? "bg-gradient-to-r from-amber-400 to-orange-500"
                  : product.badge === "Premium"
                    ? "bg-gradient-to-r from-purple-500 to-pink-600"
                    : "bg-gradient-to-r from-emerald-500 to-teal-600"
              } 
              text-white border-0 shadow-md px-2 py-1`}
            >
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Quick action buttons */}
        <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white"
          >
            <Heart className="h-4 w-4 text-pink-500" />
          </Button>
        </div>
      </div>

      <CardContent className={`${isMobile ? "p-3" : "p-4"} relative z-10`}>
        {/* Purchase count */}
        <div className="flex items-center gap-1 mb-2 text-gray-600">
          <ShoppingBag className="h-3 w-3" />
          <span className="text-xs">{product.purchases} purchased</span>
        </div>

        {/* Product name and description */}
        <h3
          className={`${isMobile ? "text-base" : "text-lg"} font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300`}
        >
          {product.name}
        </h3>
        {!isMobile && <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>}

        {/* Price and action */}
        <div className="flex justify-between items-center mt-2">
          <span
            className={`${isMobile ? "text-lg" : "text-xl"} font-bold bg-gradient-to-r from-facebook to-blue-700 bg-clip-text text-transparent`}
          >
            €{product.price}
          </span>
          <Link href={`/products/${product.slug}`}>
            <Button
              size={isMobile ? "sm" : "default"}
              className="bg-gradient-to-r from-facebook to-blue-700 hover:from-facebook-dark hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              {isMobile ? "View" : "View Details"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )

  if (filteredProducts.length === 0) return null

  return (
    <div className={cn("relative pt-8 pb-0", className)}>
      {children}

      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 relative inline-block">
          <span className="relative z-10">You Might Also Like</span>
          <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
        </h2>

        {/* Carousel Navigation - Desktop */}
        <div className="hidden md:flex justify-end mb-4 gap-2">
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
            {filteredProducts.map((product) => (
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
          {Array.from({ length: filteredProducts.length - (isMobile ? 1 : 3) }).map((_, index) => (
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
