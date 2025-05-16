"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart, AlertCircle } from "lucide-react"
import SupportingPageLayout from "@/components/supporting-page-layout"
import { useCart } from "@/context/cart-context"
import RelatedProducts from "@/components/related-products"

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

// Sample product data - in a real app, this would come from an API or database
const productsData: Product[] = [
  {
    id: "bm1-250-limit",
    slug: "bm1-250-limit",
    name: "Business Manager BM1 with $250 Limit",
    description: "Verified Business Manager with $250 spending limit for Facebook advertising.",
    longDescription: `Our Business Manager BM1 with $250 Limit is perfect for advertisers looking to start or scale their Facebook advertising campaigns. This fully verified account comes with a $250 spending limit and is ready to use immediately after purchase.

    The Business Manager is the central hub for managing your Facebook advertising assets, including ad accounts, pages, and pixels. With this BM1, you'll have a solid foundation to build your advertising strategy.

    All our Business Managers are created with legitimate business information and are fully verified to ensure long-term stability and compliance with Facebook's policies.`,
    price: 199,
    comparePrice: 249,
    features: [
      "Fully verified Business Manager",
      "$250 spending limit",
      "Ready to use immediately",
      "Compliant with Facebook policies",
      "Secure payment methods added",
      "30-day warranty",
      "Setup assistance included",
      "Email support",
    ],
    image: "/facebook-verified-business-manager.png",
    category: "Business Manager",
    badge: "Popular",
    stock: "in-stock",
    deliveryTime: "24 hours",
    faq: [
      {
        question: "How soon can I start using the Business Manager after purchase?",
        answer:
          "You can start using the Business Manager immediately after purchase. We'll provide you with all the necessary login details and setup instructions.",
      },
      {
        question: "Can I increase the spending limit later?",
        answer:
          "Yes, you can request a spending limit increase directly through Facebook after establishing a good payment history.",
      },
      {
        question: "Is this compliant with Facebook's policies?",
        answer:
          "Yes, all our Business Managers are created with legitimate business information and are fully verified to ensure compliance with Facebook's policies.",
      },
      {
        question: "What happens if my account gets restricted?",
        answer:
          "We offer a 30-day warranty on all our Business Managers. If your account gets restricted within this period, we'll provide a replacement at no additional cost.",
      },
    ],
  },
  {
    id: "facebook-xmdt-usa",
    slug: "facebook-xmdt-usa",
    name: "Facebook XMDT USA Account",
    description: "Premium USA-based Facebook account with XMDT verification for advanced advertising capabilities.",
    longDescription: `Our Facebook XMDT USA Account is a premium solution for advertisers who need reliable, high-quality accounts for their marketing campaigns. These accounts are created with authentic USA profiles and come with full XMDT verification.

    XMDT verification provides an additional layer of account security and stability, making these accounts ideal for advertisers who need dependable advertising solutions. Each account is carefully created and verified to ensure maximum longevity and performance.

    These accounts are perfect for agencies and professional marketers who need reliable advertising assets for their clients or campaigns.`,
    price: 299,
    features: [
      "Authentic USA-based profile",
      "Full XMDT verification",
      "High-quality account with history",
      "Ready for advertising",
      "Compatible with Business Manager",
      "30-day warranty",
      "Setup assistance included",
      "Priority support",
    ],
    image: "/facebook-xmdt-usa.png",
    category: "Facebook Accounts",
    stock: "low-stock",
    deliveryTime: "48 hours",
    faq: [
      {
        question: "What is XMDT verification?",
        answer:
          "XMDT verification is an advanced security feature that adds an extra layer of protection to Facebook accounts, making them more stable and less likely to be flagged by Facebook's security systems.",
      },
      {
        question: "Can I connect this account to my existing Business Manager?",
        answer: "Yes, you can connect this account to your existing Business Manager as an admin or advertiser.",
      },
      {
        question: "Why are USA accounts better for advertising?",
        answer:
          "USA accounts typically have better performance for advertising due to the market's high value and Facebook's prioritization of the region. They also face fewer restrictions compared to accounts from other regions.",
      },
      {
        question: "Do you provide the email access for this account?",
        answer:
          "Yes, we provide full email access for all our XMDT USA accounts, giving you complete control over the account.",
      },
    ],
  },
  // Add more products as needed
]

export default function ProductPage() {
  const params = useParams()
  const productSlug = params.product as string
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    // Find the product based on the slug
    const foundProduct = productsData.find((p) => p.slug === productSlug)
    setProduct(foundProduct || null)
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
      quantity: 1,
    })
  }

  // Stock status indicator
  const stockStatus = {
    "in-stock": { label: "In Stock", color: "bg-green-100 text-green-800" },
    "low-stock": { label: "Low Stock", color: "bg-yellow-100 text-yellow-800" },
    "out-of-stock": { label: "Out of Stock", color: "bg-red-100 text-red-800" },
  }

  return (
    <SupportingPageLayout
      title={product.name}
      subtitle={product.description}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: product.category, href: `/products?category=${product.category.toLowerCase().replace(/\s+/g, "-")}` },
        { label: product.name, href: `/products/${product.slug}` },
      ]}
    >
      {/* Main Product Content */}
      <div className="container mx-auto px-4">
        {/* Mobile Product Overview - Removed name and badge as requested */}
        <div className="md:hidden mb-6">
          <Card className="overflow-hidden">
            <div className="p-4">
              {/* Product Image and Details in a more balanced layout */}
              <div className="flex items-center border rounded-lg p-3 bg-gray-50 mb-3">
                {/* Product Image */}
                <div className="w-20 h-20 flex-shrink-0 relative rounded-md overflow-hidden border border-gray-200 bg-white">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Price and Stock Status */}
                <div className="flex-1 ml-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-bold text-facebook">€{product.price}</span>
                    {product.comparePrice && (
                      <span className="text-sm text-gray-500 line-through">€{product.comparePrice}</span>
                    )}
                  </div>

                  <Badge className={`${stockStatus[product.stock].color}`}>{stockStatus[product.stock].label}</Badge>

                  <p className="text-xs text-gray-600 mt-1">Delivery: {product.deliveryTime}</p>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-700 mb-4">{product.description}</p>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                className="w-full bg-facebook hover:bg-facebook/90 flex items-center justify-center gap-2"
                disabled={product.stock === "out-of-stock"}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </Card>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Overview */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {product.badge && (
                        <Badge className="absolute top-2 right-2 bg-facebook text-white">{product.badge}</Badge>
                      )}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="md:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-facebook">€{product.price}</span>
                        {product.comparePrice && (
                          <span className="ml-2 text-gray-500 line-through">€{product.comparePrice}</span>
                        )}
                      </div>

                      <Badge className={`${stockStatus[product.stock].color}`}>
                        {stockStatus[product.stock].label}
                      </Badge>
                    </div>

                    <p className="text-gray-700 mb-4">{product.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button
                        onClick={handleAddToCart}
                        className="bg-facebook hover:bg-facebook/90 flex items-center gap-2"
                        disabled={product.stock === "out-of-stock"}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                      </Button>

                      <Button variant="outline" asChild>
                        <a href="/contact">Contact Support</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Description */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <div className="prose max-w-none">
                  {product.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {product.faq.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium text-gray-900 mb-2">{item.question}</h4>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Features & Purchase Info */}
          <div className="space-y-6">
            {/* Features Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Purchase Info Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Purchase Information</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Delivery Time</h4>
                    <p className="text-gray-700">{product.deliveryTime}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Payment Methods</h4>
                    <p className="text-gray-700">Credit Card, PayPal, Cryptocurrency</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Support</h4>
                    <p className="text-gray-700">Email, Live Chat (Business Hours)</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Warranty</h4>
                    <p className="text-gray-700">30-day replacement warranty</p>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-facebook hover:bg-facebook/90 mt-6"
                  disabled={product.stock === "out-of-stock"}
                >
                  Add to Cart - €{product.price}
                </Button>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-facebook mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">5+ years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-facebook mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">10,000+ satisfied customers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-facebook mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Secure payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-facebook mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated customer support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Product Description and Features */}
        <div className="md:hidden space-y-6 mt-4">
          {/* Description */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-3">Description</h3>
              <div className="prose max-w-none text-sm">
                {product.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-3 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-3">Frequently Asked Questions</h3>
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
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-3">Purchase Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Delivery Time</h4>
                  <p className="text-gray-700">{product.deliveryTime}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Payment Methods</h4>
                  <p className="text-gray-700">Credit Card, PayPal, Cryptocurrency</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Support</h4>
                  <p className="text-gray-700">Email, Live Chat (Business Hours)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="container mx-auto px-4 mt-16 mb-20">
        <RelatedProducts currentProductId={product.id} currentCategory={product.category} />
      </div>
    </SupportingPageLayout>
  )
}
