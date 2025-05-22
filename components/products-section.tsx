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
import { useCart } from "@/context/cart-context"
import {
  getProductSectionItems,
  filterProductSectionItems,
  getProductSectionFilterOptions,
  type ProductSectionItem,
} from "@/data/products"

// Use the ProductSectionItem type from data/products.ts
type Product = ProductSectionItem

// Get products data from centralized source
const allProducts: Product[] = getProductSectionItems()

// Get filter options from centralized source
const filterOptions = getProductSectionFilterOptions()

// This component will be wrapped in Suspense
function ProductsContent() {
  const [currentFilter, setCurrentFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const productsPerPage = 8

  // Add this state for tracking which product is being added
  const [isAddingToCart, setIsAddingToCart] = useState<string | null>(null)
  const { addItem, openCart } = useCart()

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
  const filteredProducts = currentFilter === "all" ? allProducts : filterProductSectionItems(currentFilter)

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
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        <span className="text-xs text-gray-500">({purchases})</span>
      </div>
    )
  }

  // Add this function to handle adding products to cart
  const handleAddToCart = (product: Product) => {
    if (!addItem) {
      console.error("Cart functionality not available")
      return
    }

    setIsAddingToCart(product.id)

    try {
      const item = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image || "/placeholder.svg",
        category: product.category,
      }

      addItem(item)

      // Open cart on desktop, or just show feedback on mobile
      if (!isMobile && openCart) {
        openCart()
      }
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setTimeout(() => setIsAddingToCart(null), 500)
    }
  }

  // Render product card (used in both mobile and desktop)
  const renderProductCard = (product: Product) => (
    <Card
      className={`border-0 rounded-xl overflow-hidden bg-gradient-to-br ${product.bgGradient || "from-blue-50 to-indigo-50"} shadow-md hover:shadow-lg transition-all duration-300 h-full transform ${hoveredCard === product.id ? "scale-105" : "scale-100"}`}
      onMouseEnter={() => setHoveredCard(product.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative">
          {/* Product image */}
          <div className="aspect-square relative bg-white/50">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-8" />
          </div>

          {/* Badge if any */}
          {product.badge && (
            <div className="absolute right-4 top-4">
              <Badge
                className={`bg-gradient-to-r ${product.gradient || "from-blue-500 to-indigo-500"} text-white border-0 shadow-sm`}
              >
                {product.badge}
              </Badge>
            </div>
          )}
        </div>
      </Link>

      <CardContent className={`${isMobile ? "p-4" : "p-6"}`}>
        <Link href={`/products/${product.id}`} className="block">
          {/* Purchase count */}
          <div className="flex items-center gap-1 mb-2 text-gray-600">
            <ShoppingBag className="h-3 w-3" />
            <span className="text-xs">{product.purchases} purchased</span>
          </div>

          {/* Product name and description */}
          <h3 className={`${isMobile ? "text-base" : "text-lg"} font-bold text-gray-900 mb-1`}>{product.name}</h3>
          {!isMobile && <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>}
        </Link>

        {/* Price and action */}
        <div className="flex justify-between items-center mt-2">
          <span
            className={`${isMobile ? "text-lg" : "text-xl"} font-bold text-transparent bg-clip-text bg-gradient-to-r ${product.gradient || "from-blue-500 to-indigo-500"}`}
          >
            €{product.price}
          </span>
          <Button
            size={isMobile ? "sm" : "default"}
            className={`bg-gradient-to-r ${product.gradient || "from-blue-500 to-indigo-500"} hover:opacity-90 text-white border-0 shadow-sm`}
            onClick={(e) => {
              e.preventDefault() // Prevent navigation when clicking the button
              e.stopPropagation() // Stop event from bubbling up
              handleAddToCart(product)
            }}
          >
            {isAddingToCart === product.id ? "Adding..." : isMobile ? "Add" : "Add to Cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      {/* Filter buttons - styled to match website */}
      <div
        className={`flex ${
          isMobile ? "flex-wrap justify-start overflow-x-auto pb-2" : "justify-center"
        } gap-2 mb-6 max-w-full`}
      >
        {filterOptions.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            size={isMobile ? "sm" : "default"}
            className={`${
              isMobile
                ? "rounded-full border-0 px-3 py-1 text-xs !transition-none"
                : "rounded-full border-0 px-5 py-2 text-sm"
            } ${
              currentFilter === option.value
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 shadow-md"
                : isMobile
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 shadow-sm"
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
        <div className="relative md:hidden overflow-hidden">
          {/* Left navigation arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Products carousel */}
          <div
            ref={carouselRef}
            className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x max-w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {isLoading
              ? // Loading skeletons for mobile
                Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="min-w-[150px] w-[calc(50%-6px)] flex-none snap-start">
                      <Card className="border-0 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <div className="aspect-square bg-white/50 animate-pulse"></div>
                        <CardContent className="p-4">
                          <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded-full w-full mb-2 animate-pulse"></div>
                          <div className="flex justify-between items-center">
                            <div className="h-4 bg-gray-200 rounded-full w-1/4 animate-pulse"></div>
                            <div className="h-7 bg-gray-200 rounded-full w-1/3 animate-pulse"></div>
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
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* See More Button for Mobile - Updated to match website style */}
          <div className="flex justify-center mt-6">
            <Link href="/products">
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white px-8 border-0 shadow-md rounded-full">
                See More
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        /* Desktop View - Grid with Pagination */
        <>
          {isLoading ? (
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <Card
                  key={i}
                  className="border-0 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
                >
                  <div className="aspect-square bg-white/50 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-full mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 bg-gray-200 rounded-full w-1/4 animate-pulse"></div>
                      <div className="h-10 bg-gray-200 rounded-full w-1/3 animate-pulse"></div>
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
                  className="rounded-full border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-gray-100 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant="outline"
                    className={
                      currentPage === page
                        ? "rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 border-0 shadow-md"
                        : "rounded-full border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-gray-100"
                    }
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-full border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-gray-100 disabled:opacity-50"
                >
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default function ProductsSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section id="products" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 mb-4 border-0 shadow-md">
            Products
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 relative inline-block">
            <span className="relative z-10">Individual Solutions</span>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600">Build your custom solution with our individual products</p>
        </div>

        <SuspenseWrapper>
          <ProductsContent />
        </SuspenseWrapper>
      </div>
    </section>
  )
}
