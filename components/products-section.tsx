"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SuspenseWrapper } from "@/components/suspense-wrapper"

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

// This component will be wrapped in Suspense
function ProductsContent() {
  const [currentFilter, setCurrentFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
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

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <>
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

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <Card
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="aspect-square relative bg-gray-50 p-8">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  {product.badge && (
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">{product.badge}</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">€{product.price}</span>
                  <Link href={product.href || "/#products"}>
                    <Button className="bg-facebook hover:bg-facebook-dark text-white">Add to Cart</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
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
    </>
  )
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-lightblue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Individual Solutions</h2>
          <p className="text-lg text-gray-600">Build your custom solution with our individual products</p>
        </div>

        <SuspenseWrapper>
          <ProductsContent />
        </SuspenseWrapper>
      </div>
    </section>
  )
}
