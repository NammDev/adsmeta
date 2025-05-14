"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  },
  {
    id: "verified-bm-3",
    name: "Verified BM5 $250 Limit",
    description: "Verified BM5 with $250 limit and 5 ad accounts.",
    price: 260,
    image: "/abstract-facebook-verified-business-manager.png",
    category: "verified-bm",
    href: "/bm1-250-limit",
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
  },
  {
    id: "unverified-bm-2",
    name: "Recovered Unverified BM",
    description: "Recovered unverified Business Manager with history.",
    price: 30,
    image: "/facebook-business-manager-icon.png",
    category: "unverified-bm",
    href: "/#products",
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
  },
  {
    id: "profile-2",
    name: "Asia Reinstated 902 3 Green Line",
    description: "Asia profile with 3 green line tick (verified 2 times).",
    price: 35,
    image: "/facebook-xmdt-usa.png",
    category: "profile",
    href: "/#products",
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
  const [currentPage, setCurrentPage] = useState(1)
  // At the top of the component, add this logic to adjust products per page based on screen size
  const [productsPerPage, setProductsPerPage] = useState(4)

  // Add a useEffect to handle responsive adjustment
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(4) // Show fewer on mobile
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(6) // Show more on tablet
      } else {
        setProductsPerPage(8) // Show most on desktop
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Get cart functions
  const { addItem, openCart } = useCart() || { addItem: null, openCart: null }

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

  // Filter products based on selected category
  const filteredProducts =
    currentFilter === "all" ? allProducts : allProducts.filter((product) => product.category === currentFilter)

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <section id="products" className="py-20 bg-lightblue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Individual Solutions</h2>
          <p className="text-lg text-gray-600">Build your custom solution with our individual products</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant="outline"
              className={`bg-white text-gray-900 border-gray-200 hover:bg-gray-50 ${
                currentFilter === option.value ? "border-facebook text-facebook" : ""
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {currentProducts.map((product) => (
            <Card
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="aspect-[4/3] relative bg-gray-50">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-3 sm:p-5">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                    {product.badge && (
                      <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 text-xs">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-base sm:text-lg font-bold text-gray-900">€{product.price}</span>
                    <div className="flex gap-1 sm:gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="px-1 sm:px-2 text-xs"
                        onClick={() => addToCart(product)}
                        title="Add to cart"
                      >
                        <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Link href={product.href || "/#products"}>
                        <Button size="sm" className="bg-facebook hover:bg-facebook-dark text-white text-xs">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination - Make it more mobile-friendly */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 md:mt-12">
            <div className="flex items-center space-x-1 md:space-x-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border-gray-300 h-8 w-8 md:h-10 md:w-10 p-0"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Show fewer page numbers on mobile */}
              {window.innerWidth < 640 ? (
                <span className="px-3 py-2 text-sm">
                  {currentPage} / {totalPages}
                </span>
              ) : (
                Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    className={
                      currentPage === page
                        ? "bg-facebook text-white hover:bg-facebook-dark h-8 w-8 md:h-10 md:w-10 p-0"
                        : "border-gray-300 text-gray-700 h-8 w-8 md:h-10 md:w-10 p-0"
                    }
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))
              )}

              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border-gray-300 h-8 w-8 md:h-10 md:w-10 p-0"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
