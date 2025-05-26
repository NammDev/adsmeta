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
  Heart,
  Package2,
  Award,
  Zap,
  Clock,
  Users,
} from "lucide-react"
import SupportingPageLayout from "@/components/layout/supporting-page-layout"
import { useCart } from "@/context/cart-context"
import RelatedProducts from "@/components/products/related-products"
import { getProductDetailData } from "@/data/products"

// Product type definition
interface Product {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  price: number
  comparePrice?: number
  features: string[]
  image: string
  category: string
  badge?: string
  stock: "in-stock" | "low-stock" | "out-of-stock"
  deliveryTime: string
  faq: Array<{ question: string; answer: string }>
}

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
      category: product.category,
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
    <SupportingPageLayout
      title={product.name}
      subtitle={product.description}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        {
          label: product.category,
          href: `/products?category=${product.category.toLowerCase().replace(/\s+/g, "-")}`,
        },
        { label: product.name, href: `/products/${product.slug}` },
      ]}
    >
      <div className="container mx-auto px-4 pt-6 md:pt-8 pb-10 md:pb-12 relative z-10">
        {/* Mobile Product Overview */}
        <div className="md:hidden mb-6">
          <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="p-4 relative z-10">
              {/* Product Image and Details in a more balanced layout */}
              <div className="flex items-center rounded-lg p-3 bg-gradient-to-br from-gray-50 to-white mb-3 border border-gray-100 shadow-sm">
                {/* Product Image */}
                <div className="w-20 h-20 flex-shrink-0 relative rounded-md overflow-hidden border-2 border-gradient-to-r from-blue-300 to-purple-300 bg-white transform transition-transform hover:scale-105 duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 mix-blend-overlay"></div>
                  <Image
                    src="/images/verified-bm1-250-limit.png"
                    alt={product.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Price and Stock Status */}
                <div className="flex-1 ml-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-bold bg-gradient-to-r from-facebook to-blue-700 bg-clip-text text-transparent">
                      €{product.price}
                    </span>
                    {product.comparePrice && (
                      <span className="text-sm text-gray-500 line-through">€{product.comparePrice}</span>
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

                  <p className="text-xs text-gray-600 mt-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1 text-blue-500" />
                    Delivery: {product.deliveryTime}
                  </p>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-700 mb-4">{product.description}</p>

              {/* Quantity Selector */}
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
                <div className="text-sm text-gray-500">
                  {product.stock === "in-stock" ? (
                    <span className="text-green-600 flex items-center">
                      <Check className="h-4 w-4 mr-1" />
                      In Stock
                    </span>
                  ) : product.stock === "low-stock" ? (
                    <span className="text-amber-600 flex items-center">
                      <Info className="h-4 w-4 mr-1" />
                      Low Stock
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-facebook to-blue-700 hover:from-facebook-dark hover:to-blue-800 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                disabled={product.stock === "out-of-stock"}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </Card>
        </div>

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
                        src="/images/verified-bm1-250-limit.png"
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
                          <span className="ml-2 text-gray-500 line-through">€{product.comparePrice}</span>
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

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < 4.5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <a href="#reviews" className="text-sm text-gray-500 hover:text-facebook transition-colors">
                        120 reviews
                      </a>
                    </div>

                    <p className="text-gray-700 mb-4 text-lg">{product.description}</p>

                    <div className="flex flex-wrap gap-3 mb-4">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <Badge
                          key={index}
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300 py-1.5 px-3 border-0"
                        >
                          <Check className="h-3.5 w-3.5 mr-1 text-green-500" />
                          {feature.split(" ")[0]}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mb-6">
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
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button
                        onClick={handleAddToCart}
                        className="bg-gradient-to-r from-facebook to-blue-700 hover:from-facebook-dark hover:to-blue-800 text-white flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 py-6 px-8 text-lg"
                        disabled={product.stock === "out-of-stock"}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                      </Button>

                      <Button
                        variant="outline"
                        className="border-gray-300 hover:border-facebook hover:text-facebook transition-colors duration-300 flex items-center gap-2"
                      >
                        <Heart className="h-5 w-5" />
                        Add to Wishlist
                      </Button>
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
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Product Description
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  </h3>
                  <p className="text-gray-600">Everything you need to know about this Business Manager</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Overview Section */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <Package2 className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-blue-800">Overview</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm">
                            Fully verified Business Manager with official government ID attached.
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm">
                            Comes with $250 ad spend limit and 1 active ad account.
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm">
                            Stronger trust score than unverified BMs – ✅ More robust & stable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <Info className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-purple-800">Details</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/60 rounded-lg p-2 border border-purple-200/50">
                          <p className="text-xs font-semibold text-purple-700 mb-1">Billing Country</p>
                          <p className="text-gray-700 text-sm">Set to random and cannot be changed.</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 border border-purple-200/50">
                          <p className="text-xs font-semibold text-purple-700 mb-1">Currency & Timezone</p>
                          <p className="text-gray-700 text-sm">Can be customized for each ad account.</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 border border-purple-200/50">
                          <p className="text-xs font-semibold text-purple-700 mb-1">Pixel Sharing</p>
                          <p className="text-gray-700 text-sm">Fully supported – no restrictions or errors.</p>
                        </div>
                        <div className="bg-white/60 rounded-lg p-2 border border-purple-200/50">
                          <p className="text-xs font-semibold text-purple-700 mb-1">Upgrade Eligibility</p>
                          <p className="text-gray-700 text-sm">
                            Eligible for upgrade to BM3/BM5 after successful ad spend (up to 5 ad accounts allowed).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Section */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300 mb-6">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-teal-200/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-green-800">Status</h4>
                    </div>
                    <div className="bg-white/60 rounded-lg p-3 border border-green-200/50">
                      <p className="text-gray-700 text-sm">
                        Business Manager is active, clean, and ready for immediate use.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bonus Section */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300 mb-6">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-200/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-amber-800">Bonus</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-white/60 rounded-lg p-3 border border-amber-200/50">
                        <div className="flex items-center mb-2">
                          <Star className="h-4 w-4 text-amber-500 mr-2" />
                          <p className="font-semibold text-amber-700 text-sm">Exclusive Warm-up Guide</p>
                        </div>
                        <p className="text-gray-700 text-xs">
                          Includes GoAds exclusive warm-up guide with video tutorials.
                        </p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3 border border-amber-200/50">
                        <div className="flex items-center mb-2">
                          <Shield className="h-4 w-4 text-amber-500 mr-2" />
                          <p className="font-semibold text-amber-700 text-sm">Risk Optimization</p>
                        </div>
                        <p className="text-gray-700 text-xs">
                          Helps you start safely, scale confidently, and reduce risk of account issues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ideal For Section */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100 relative overflow-hidden mb-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-teal-200/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mb-3 shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-emerald-800 mb-2">Perfect For</h4>
                    <p className="text-gray-700 font-medium">
                      💼 Perfect for advertisers seeking higher trust and verified infrastructure from the start.
                    </p>
                  </div>
                </div>

                {/* Screenshot Section */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gray-200/20 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Live Interface Preview</h4>
                      <p className="text-gray-600 text-sm">See exactly what you'll get with your Business Manager</p>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BM1250-bKJxFWR53R7t8C2X90KhNDoxJxqPQm.webp"
                        alt="Facebook Ads Manager showing $250 daily spending limit"
                        width={800}
                        height={600}
                        className="w-full rounded-lg border border-gray-300 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      />
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 border border-gray-200">
                        <p className="text-xs font-medium text-gray-800">$250 Daily Limit Interface</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 relative group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-base font-bold text-blue-800 mb-1">Quick Setup</h4>
                      <p className="text-gray-700 text-sm">Get started with Facebook ads in minutes, not days.</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100 relative group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-base font-bold text-purple-800 mb-1">Verified Quality</h4>
                      <p className="text-gray-700 text-sm">
                        All accounts are fully verified and ready for advertising.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100 relative group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-base font-bold text-amber-800 mb-1">Expert Support</h4>
                      <p className="text-gray-700 text-sm">Get help from our team of Facebook ads specialists.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            {/* <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm mt-8">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-200/10 to-indigo-200/10 rounded-full translate-y-1/2 translate-x-1/2"></div>

              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-6 relative inline-block">
                  <span className="relative z-10">Frequently Asked Questions</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
                </h3>

                <div className="space-y-4">
                  {product.faq.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <h4 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 flex items-start">
                        <span className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs mr-3 flex-shrink-0 mt-0.5">
                          Q
                        </span>
                        {item.question}
                      </h4>

                      <div className="pl-9">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>

             //  Additional Questions 
                <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50"></div>

                  <h4 className="text-lg font-bold mb-3 text-center relative z-10">
                    Stillllllllll Have Questions?
                  </h4>
                  <p className="text-center text-gray-700 mb-4 relative z-10">
                    Our team is ready to help you with any additional questions you might have.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl"
                    >
                      <a href="/contact">Contact Support</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-gray-300 hover:border-blue-500 hover:text-blue-600 font-medium rounded-xl"
                    >
                      <a href="/faq">View All FAQs</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Right Column - Features & Purchase Info */}
          <div className="space-y-6">
            {/* Features Card */}
            {/* <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-5 relative inline-block">
                  <span className="relative z-10">Features</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                          gradients[index % gradients.length]
                        } flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0`}
                      >
                        {featureIcons[index % featureIcons.length]}
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}

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
                      <p className="text-gray-700 text-sm">{product.deliveryTime}</p>
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

                  <h4 className="font-bold mb-2 text-center relative z-10 text-gray-800">Ready to get started?</h4>
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

            {/* Trust Indicators */}
            {/* <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full -translate-y-1/2 -translate-x-1/2 z-0"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-5 relative inline-block">
                  <span className="relative z-10">Why Choose Us</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 to-blue-200 opacity-70 rounded-full"></div>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        5+ years of experience
                      </h4>
                      <p className="text-sm text-gray-600">
                        Trusted by thousands of advertisers worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        10,000+ satisfied customers
                      </h4>
                      <p className="text-sm text-gray-600">With a 98% satisfaction rate</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        Secure payment processing
                      </h4>
                      <p className="text-sm text-gray-600">Multiple payment options available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                        Dedicated customer support
                      </h4>
                      <p className="text-sm text-gray-600">
                        Available to assist you every step of the way
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */}

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
                  "The {product.name} completely transformed our Facebook advertising capabilities. Highly recommended!"
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
                    <p className="font-bold text-sm text-gray-800">Michael Thompson</p>
                    <p className="text-gray-600 text-xs">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Product Description and Features */}
        <div className="md:hidden space-y-6 mt-4">
          {/* Description */}
          <Card className="overflow-hidden border-0 shadow-md relative bg-white/80 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
            <CardContent className="p-4 relative z-10">
              <h3 className="text-lg font-bold mb-3 relative inline-block">
                <span className="relative z-10">Description</span>
                <div className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
              </h3>
              <div className="prose max-w-none text-sm">
                <p className="mb-3 text-gray-700">
                  Active, ready-to-use Business Manager (BM) with $250 ad spend limit.
                </p>
                <p className="mb-3 text-gray-700">Includes 1 ad account (default spend limit: $250/day).</p>
                <p className="mb-3 text-gray-700">
                  Unverified status – eligible for upgrade to BM3/BM5 after successful billing activity.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="overflow-hidden border-0 shadow-md relative bg-white/80 backdrop-blur-sm">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
            <CardContent className="p-4 relative z-10">
              <h3 className="text-lg font-bold mb-3 relative inline-block">
                <span className="relative z-10">Features</span>
                <div className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mr-2 flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-sm">
                      <Check className="h-2.5 w-2.5 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="overflow-hidden border-0 shadow-md relative bg-white/80 backdrop-blur-sm">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-200/20 to-purple-200/20 rounded-full translate-y-1/2 translate-x-1/2 z-0"></div>
            <CardContent className="p-4 relative z-10">
              <h3 className="text-lg font-bold mb-3 relative inline-block">
                <span className="relative z-10">Frequently Asked Questions</span>
                <div className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
              </h3>
              <div className="space-y-3">
                {product.faq.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <h4 className="font-medium text-gray-900 mb-1 text-sm">{item.question}</h4>
                    <p className="text-gray-700 text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Purchase Info */}
          <Card className="overflow-hidden border-0 shadow-lg relative bg-white/80 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-200/20 to-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
            <CardContent className="p-4 relative z-10">
              <h3 className="text-lg font-bold mb-3 relative inline-block">
                <span className="relative z-10">Purchase Information</span>
                <div className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-200 to-blue-200 opacity-70 rounded-full"></div>
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-xs">Delivery Time</h4>
                    <p className="text-gray-700 text-xs">{product.deliveryTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
                  <CreditCard className="h-4 w-4 text-purple-500" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-xs">Payment Methods</h4>
                    <p className="text-gray-700 text-xs">Credit Card, PayPal, Cryptocurrency</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
                  <Users className="h-4 w-4 text-amber-500" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-xs">Support</h4>
                    <p className="text-gray-700 text-xs">Email, Live Chat (Business Hours)</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 relative overflow-hidden border border-blue-100">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-purple-200/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <h4 className="font-bold mb-1 text-center text-sm relative z-10 text-gray-800">
                  Ready to get started?
                </h4>
                <p className="text-gray-600 text-xs mb-3 text-center relative z-10">Get your {product.name} now!</p>

                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 text-sm relative z-10"
                  disabled={product.stock === "out-of-stock"}
                >
                  Add to Cart - €{product.price}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products Section */}
        <div className="mt-16 mb-0 relative overflow-hidden">
          <RelatedProducts currentProductId={product.id} currentCategory={product.category} />
        </div>
      </div>
    </SupportingPageLayout>
  )
}
