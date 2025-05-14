"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SuspenseWrapper } from "@/components/suspense-wrapper"
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

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
  purchases?: number
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
    purchases: 61,
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
    purchases: 122,
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
    purchases: 87,
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
    rating: 4.8,
    purchases: 45,
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
    purchases: 210,
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
    purchases: 98,
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
    purchases: 76,
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
    purchases: 54,
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
    purchases: 32,
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
    rating: 4.8,
    purchases: 28,
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
    rating: 4.7,
    purchases: 65,
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

// This component will be wrapped in Suspense
function ProductsContent() {
  const [currentFilter, setCurrentFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const productsPerPage = 8

  // Simulate data loading
  useEffect(() => {
    // Simulate loading delay when filter or page changes
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Simulate network delay

    return () => clearTimeout(timer)
  }, [currentFilter, currentPage])

  // Filter products based on selected category
  const filteredProducts =
    currentFilter === "all" ? allProducts : allProducts.filter((product) => product.category === currentFilter)

  // Calculate pagination for desktop
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

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

  // Render product card (used in both mobile and desktop)
  const renderProductCard = (product: Product) => (
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
          <Link href={product.href || "/#products"}>
            <Button size={isMobile ? "sm" : "default"} className="bg-facebook hover:bg-facebook-dark text-white">
              {isMobile ? "Add" : "Add to Cart"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      {/* Filter buttons - styled to match website */}
      <div
        className={`flex ${isMobile ? "flex-wrap justify-start overflow-x-auto pb-2" : "justify-center"} gap-2 mb-6`}
      >
        {filterOptions.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            size={isMobile ? "sm" : "default"}
            className={`${
              isMobile
                ? "rounded-full border-0 px-3 py-1 text-xs"
                : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
            } ${
              currentFilter === option.value
                ? isMobile
                  ? "bg-facebook text-white hover:bg-facebook-dark"
                  : "border-facebook text-facebook"
                : isMobile
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : ""
            }`}
            onClick={() => {
              setCurrentFilter(option.value)
              setCurrentPage(1) // Reset to first page when changing filters
            }}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {/* Mobile View - Carousel */}
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
            {isLoading
              ? // Loading skeletons for mobile
                Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="min-w-[150px] w-[calc(50%-6px)] flex-none snap-start">
                      <Card className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="aspect-square bg-gray-100 animate-pulse"></div>
                        <CardContent className="p-3">
                          <div className="h-3 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                          <div className="flex justify-between items-center">
                            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                            <div className="h-7 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))
              : filteredProducts.slice(0, 6).map((product) => (
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

          {/* See More Button for Mobile - Updated to match website style */}
          <div className="flex justify-center mt-6">
            <Link href="/products">
              <Button className="bg-facebook hover:bg-facebook-dark text-white px-8">See More</Button>
            </Link>
          </div>
        </div>
      ) : (
        /* Desktop View - Grid with Pagination */
        <>
          {isLoading ? (
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                      <div className="h-10 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentProducts.map((product) => (
                <div key={product.id}>{renderProductCard(product)}</div>
              ))}
            </div>
          )}

          {/* Pagination for desktop */}
          {totalPages > 1 && (
            <div className="hidden md:flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant="outline"
                    className={currentPage === page ? "bg-facebook text-white hover:bg-facebook-dark" : ""}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* Removed the "See More Products" button for desktop as requested */}
        </>
      )}
    </>
  )
}

export default function ProductsSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section id="products" className="py-20 bg-lightblue">
      <div className="container mx-auto px-4">
        {/* Title section - simplified on mobile */}
        <div className={`${isMobile ? "" : "max-w-3xl mx-auto"} text-center mb-${isMobile ? "6" : "16"}`}>
          {!isMobile && <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Products</Badge>}
          <h2
            className={`${isMobile ? "text-2xl" : "text-3xl md:text-4xl"} font-bold text-gray-900 mb-${isMobile ? "2" : "4"}`}
          >
            Individual Solutions
          </h2>
          {!isMobile && (
            <p className="text-lg text-gray-600">Build your custom solution with our individual products</p>
          )}
        </div>

        <SuspenseWrapper>
          <ProductsContent />
        </SuspenseWrapper>
      </div>
    </section>
  )
}
