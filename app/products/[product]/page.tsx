"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  ShoppingCart,
  AlertCircle,
  Shield,
  Info,
  CreditCard,
  Star,
  Package2,
  Award,
  Zap,
  Clock,
  Users,
} from "lucide-react"
import SupportingPageLayout from "@/components/layout/supporting-page-layout"
import { useCart } from "@/context/cart-context"
import RelatedProducts from "@/components/products/related-products"
import { getProductDetailData, getCategoryDisplayName, Product } from "@/data/products"

// Feature icons mapping
const featureIcons = [
  <Shield className="h-4 w-4 text-white" key="shield" />,
  <Users className="h-4 w-4 text-white" key="users" />,
  <Zap className="h-4 w-4 text-white" key="zap" />,
  <Star className="h-4 w-4 text-white" key="star" />,
  <Clock className="h-4 w-4 text-white" key="clock" />,
  <Award className="h-4 w-4 text-white" key="award" />,
  <CreditCard className="h-4 w-4 text-white" key="creditcard" />,
  <Package2 className="h-4 w-4 text-white" key="package" />,
]

// Gradient backgrounds for features
const gradients = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-rose-500 to-red-600",
  "from-cyan-500 to-blue-600",
  "from-fuchsia-500 to-purple-600",
  "from-lime-500 to-green-600",
]

export default function ProductPage() {
  const params = useParams()
  const productSlug = params.product as string
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    // Get the product based on the slug
    const productData = getProductDetailData(productSlug)
    setProduct(productData || null)
  }, [productSlug])

  if (!product) {
    return (
      <SupportingPageLayout
        title="Product Not Found"
        subtitle="The product you're looking for doesn't exist or has been removed."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Not Found", href: "#" },
        ]}
      >
        <div className="py-12 flex flex-col items-center justify-center">
          <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
          <p className="text-gray-600 mb-6">
            Please check the URL or browse our products to find what you're looking for.
          </p>
          <Button asChild className="bg-facebook hover:bg-facebook/90">
            <a href="/products">Browse Products</a>
          </Button>
        </div>
      </SupportingPageLayout>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      category: getCategoryDisplayName(product.category),
    })
  }

  // Stock status indicator
  const stockStatus = {
    "in-stock": {
      label: "In Stock",
      color: "bg-gradient-to-r from-green-400 to-emerald-500 text-white",
    },
    "low-stock": {
      label: "Low Stock",
      color: "bg-gradient-to-r from-amber-400 to-orange-500 text-white",
    },
    "out-of-stock": {
      label: "Out of Stock",
      color: "bg-gradient-to-r from-red-400 to-rose-500 text-white",
    },
  }

  return (
    <SupportingPageLayout title={product.name} subtitle={product.description}>
      <div className="container mx-auto px-4 pt-6 md:pt-8 pb-10 md:pb-12 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Overview */}
            <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="relative aspect-square rounded-xl overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-300"></div>
                      <Image
                        src={product.imageDescription || product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transform transition-transform group-hover:scale-105 duration-500"
                      />
                      {product.badge && (
                        <div className="absolute top-3 right-3 rotate-3">
                          <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-md px-3 py-1.5 text-sm font-bold">
                            {product.badge}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                        <Package2 className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold relative inline-block">
                        <span className="relative z-10">{product.name}</span>
                        <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
                      </h2>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <span className="text-3xl font-bold bg-gradient-to-r from-facebook to-blue-700 bg-clip-text text-transparent">
                          €{product.price}
                        </span>
                        {product.comparePrice && (
                          <span className="ml-2 text-gray-500 line-through">
                            €{product.comparePrice}
                          </span>
                        )}
                      </div>

                      <Badge
                        className={`${
                          product.stock === "in-stock"
                            ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 shadow-sm"
                            : product.stock === "low-stock"
                            ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-sm"
                            : "bg-gradient-to-r from-red-400 to-rose-500 text-white border-0 shadow-sm"
                        }`}
                      >
                        {stockStatus[product.stock].label}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <button
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          -
                        </button>
                        <span className="px-3 py-2 text-gray-900 bg-white">{quantity}</span>
                        <button
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <Button
                        onClick={handleAddToCart}
                        className="bg-gradient-to-r from-facebook to-blue-700 hover:from-facebook-dark hover:to-blue-800 text-white flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 py-3 px-6"
                        disabled={product.stock === "out-of-stock"}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < 4.5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <a
                        href="#reviews"
                        className="text-sm text-gray-500 hover:text-facebook transition-colors"
                      >
                        120 reviews
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Description */}
            <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-200/10 to-indigo-200/10 rounded-full translate-y-1/2 translate-x-1/2"></div>

              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-4 relative inline-block">
                  <span className="relative z-10">Product Description</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
                </h3>

                <div className="prose max-w-none">
                  {product.overview && product.overview.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview:</h4>
                      {product.overview.map((item, index) => (
                        <p key={index} className="mb-3 text-gray-700">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}

                  {product.details && product.details.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Details:</h4>
                      {product.details.map((item, index) => (
                        <p key={index} className="mb-3 text-gray-700">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}

                  {product.status && product.status.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Status:</h4>
                      {product.status.map((item, index) => (
                        <p key={index} className="mb-4 text-gray-700">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    <Image
                      src={
                        product.imageDescription ||
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BM1250-bKJxFWR53R7t8C2X90KhNDoxJxqPQm.webp" ||
                        "/placeholder.svg"
                      }
                      alt={product.name}
                      width={800}
                      height={600}
                      className="w-full rounded-lg border border-gray-200 shadow-sm"
                    />
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-center mb-2 text-blue-800">Quick Setup</h4>
                    <p className="text-sm text-center text-gray-700">
                      Get started with Facebook ads in minutes, not days.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-center mb-2 text-purple-800">Verified Quality</h4>
                    <p className="text-sm text-center text-gray-700">
                      All accounts are fully verified and ready for advertising.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-center mb-2 text-amber-800">Expert Support</h4>
                    <p className="text-sm text-center text-gray-700">
                      Get help from our team of Facebook ads specialists.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Features & Purchase Info */}
          <div className="space-y-6">
            {/* Purchase Info Card */}
            <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-5 relative inline-block">
                  <span className="relative z-10">Purchase Information</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm">
                        Delivery Time
                      </h4>
                      <p className="text-gray-700 text-sm">1 - 3 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <CreditCard className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300 text-sm">
                        Payment Methods
                      </h4>
                      <p className="text-gray-700 text-sm">Credit Card, PayPal, Cryptocurrency</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors duration-300 text-sm">
                        Support
                      </h4>
                      <p className="text-gray-700 text-sm">Email, Live Chat (Business Hours)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 text-sm">
                        Warranty
                      </h4>
                      <p className="text-gray-700 text-sm">30-day replacement warranty</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 relative overflow-hidden border border-blue-100">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                  <h4 className="font-bold mb-2 text-center relative z-10 text-gray-800">
                    Ready to get started?
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 text-center relative z-10">
                    Get your {product.name} now and start advertising!
                  </p>

                  <Button
                    onClick={handleAddToCart}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 relative z-10"
                    disabled={product.stock === "out-of-stock"}
                  >
                    Add to Cart - €{product.price}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="overflow-hidden border-0 shadow-xl relative bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <CardContent className="p-6 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>

                <p className="text-center mb-4 italic text-gray-700">
                  {product.reviewComment ||
                    `"The ${product.name} completely transformed our Facebook advertising capabilities. Highly recommended!"`}
                </p>

                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white overflow-hidden mr-3 border border-gray-200">
                    <Image
                      src="/male-marketing-owner.png"
                      alt="Customer"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm text-gray-800">
                      {product.reviewAuthor || "Michael Thompson"}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {product.reviewAuthorTitle || "Marketing Director"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16 mb-0 relative overflow-hidden">
          <RelatedProducts currentProductId={product.id} currentCategory={product.category} />
        </div>
      </div>
    </SupportingPageLayout>
  )
}
