"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

// Define product type
type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "verified-bm" | "unverified-bm" | "profile" | "page"
  badge?: string
  href?: string
  rating?: number
  reviewCount?: number
}

// All products data
const allProducts: Product[] = [
  // Verified BM
  {
    id: "verified-bm-1",
    name: "Verified BM",
    description: "Add your agency to BM and launch ads immediately.",
    price: 80,
    image: "/verified-facebook-business-manager-icon.png",
    category: "verified-bm",
    href: "/bm1-250-limit",
    rating: 4.8,
    reviewCount: 42,
  },
  {
    id: "verified-bm-2",
    name: "Verified BM1 $250 Limit",
    description: "Verified Business Manager with $250 daily spending limit.",
    price: 180,
    image: "/verified-facebook-business-manager-icon.png",
    category: "verified-bm",
    badge: "Popular",
    href: "/bm1-250-limit",
    rating: 4.9,
    reviewCount: 78,
  },
  {
    id: "verified-bm-3",
    name: "Verified BM5 $250 Limit",
    description: "Verified BM5 with $250 limit and 5 ad accounts.",
    price: 260,
    image: "/abstract-facebook-verified-business-manager.png",
    category: "verified-bm",
    href: "/bm1-250-limit",
    rating: 4.7,
    reviewCount: 36,
  },
  {
    id: "verified-bm-4",
    name: "Unlimited Verified BM5",
    description: "Unlimited verified BM5 with 5 ad accounts.",
    price: 350,
    image: "/abstract-facebook-verified-business-manager.png",
    category: "verified-bm",
    badge: "Premium",
    href: "/bm1-250-limit",
    rating: 4.9,
    reviewCount: 54,
  },

  // Unverified BM
  {
    id: "unverified-bm-1",
    name: "Unverified BM",
    description: "Basic unverified Business Manager for testing.",
    price: 10,
    image: "/facebook-business-manager-icon.png",
    category: "unverified-bm",
    href: "/#products",
    rating: 4.5,
    reviewCount: 28,
  },
  {
    id: "unverified-bm-2",
    name: "Recovered Unverified BM",
    description: "Recovered unverified Business Manager with history.",
    price: 30,
    image: "/facebook-business-manager-icon.png",
    category: "unverified-bm",
    href: "/#products",
    rating: 4.6,
    reviewCount: 32,
  },

  // Profile - FB accounts
  {
    id: "profile-1",
    name: "Asia Reinstated 2 Green Line",
    description: "Asia profile with 2 green line tick (verified 1 time).",
    price: 25,
    image: "/facebook-xmdt-usa.png",
    category: "profile",
    href: "/#products",
    rating: 4.7,
    reviewCount: 41,
  },
  {
    id: "profile-2",
    name: "Asia Reinstated 902 3 Green Line",
    description: "Asia profile with 3 green line tick (verified 2 times).",
    price: 35,
    image: "/facebook-xmdt-usa.png",
    category: "profile",
    href: "/#products",
    rating: 4.8,
    reviewCount: 47,
  },
  {
    id: "profile-3",
    name: "USA Reinstated 2 Green Line",
    description: "USA profile with 2 green line tick (verified 1 time).",
    price: 40,
    image: "/facebook-xmdt-usa.png",
    category: "profile",
    badge: "Premium",
    href: "/#products",
    rating: 4.9,
    reviewCount: 63,
  },
  {
    id: "profile-4",
    name: "USA Reinstated 902 3 Green Line",
    description: "USA profile with 3 green line tick (verified 2 times).",
    price: 50,
    image: "/facebook-xmdt-usa.png",
    category: "profile",
    badge: "Best Value",
    href: "/#products",
    rating: 5.0,
    reviewCount: 72,
  },

  // Recovered page
  {
    id: "page-1",
    name: "Aged Reinstated Page",
    description: "Recovered Facebook page with established history.",
    price: 30,
    image: "/facebook-pixel-icon.png",
    category: "page",
    href: "/#products",
    rating: 4.6,
    reviewCount: 38,
  },
]

// Filter options
const filterOptions = [
  { label: "All Products", value: "all" },
  { label: "Business Manager", value: "verified-bm" },
  { label: "Unverified BM", value: "unverified-bm" },
  { label: "Profiles", value: "profile" },
  { label: "Pages", value: "page" },
]

export default function ProductsSection() {
  const [currentFilter, setCurrentFilter] = useState("all")
  const carouselRef = useRef<HTMLDivElement>(null)
  const { addItem, openCart } = useCart() || { addItem: null, openCart: null }

  // Filter products based on selected category
  const filteredProducts =
    currentFilter === "all" ? allProducts : allProducts.filter((product) => product.category === currentFilter)

  // Safe addToCart function with error handling
  const addToCart = (product: Product) => {
    if (!addItem || !openCart || !product) {
      console.warn("Cart functionality not available or product is invalid")
      return
    }

    try {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image || "/placeholder-32px.png",
        category: product.category,
      })
      openCart() // Open the cart drawer when adding an item
    } catch (error) {
      console.error("Error adding item to cart:", error)
    }
  }

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    const scrollAmount = direction === "left" ? -600 : 600
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <section id="products" className="py-20 bg-lightblue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Individual Solutions</h2>
          <p className="text-lg text-gray-600">Build your custom solution with our individual products</p>
        </div>

        {/* Category Tabs - Styled like the reference image */}
        <div className="flex justify-center gap-4 mb-12">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              className={cn(
                "rounded-full px-8 py-6 text-base font-medium transition-all",
                currentFilter === option.value ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300",
              )}
              onClick={() => setCurrentFilter(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>

        {/* Product Carousel with Navigation Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-black rounded-full p-3 text-white shadow-lg"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Products Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="flex-shrink-0 w-[300px] border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <div className="relative">
                  {/* Rating Badge */}
                  {product.rating && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-medium z-10 flex items-center">
                      {product.rating} <span className="text-yellow-500 ml-1">★</span>
                      <span className="text-gray-500 text-xs ml-1">({product.reviewCount})</span>
                    </div>
                  )}

                  <div className="aspect-square relative bg-gray-50">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-base font-bold text-gray-900 line-clamp-1 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-bold text-gray-900">€{product.price}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="px-2"
                        onClick={() => addToCart(product)}
                        title="Add to cart"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                      <Link href={product.href || "/#products"}>
                        <Button size="sm" className="bg-facebook hover:bg-facebook-dark text-white">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-black rounded-full p-3 text-white shadow-lg"
            aria-label="Next products"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
