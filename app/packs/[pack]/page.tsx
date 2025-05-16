"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart, AlertCircle, Package2 } from "lucide-react"
import SupportingPageLayout from "@/components/supporting-page-layout"
import { useCart } from "@/context/cart-context"

// Pack type definition
interface Pack {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  price: number
  comparePrice?: number
  features: string[]
  includes: Array<{
    name: string
    description: string
    icon?: string
  }>
  image: string
  badge?: string
  stock: "in-stock" | "low-stock" | "out-of-stock"
  deliveryTime: string
  faq: Array<{ question: string; answer: string }>
}

// Sample pack data - in a real app, this would come from an API or database
const packsData: Pack[] = [
  {
    id: "starter-pack",
    slug: "starter-pack",
    name: "Starter Pack",
    description: "Perfect for beginners starting with Facebook ads",
    longDescription: `Our Starter Pack is designed for individuals and small businesses who are just beginning their journey with Facebook advertising. This comprehensive package provides everything you need to get started with confidence.

    The pack includes a verified Business Manager with basic ad account setup, essential documentation, and a beginner-friendly guide to help you navigate the Facebook ads platform. We've also included email support to assist you with any questions you might have during the setup process.

    This is the ideal solution for those who want to start advertising on Facebook without the complexity and high costs often associated with advanced advertising solutions.`,
    price: 199,
    comparePrice: 249,
    features: [
      "1 Verified Business Manager",
      "1 Ad Account",
      "Basic setup guide",
      "Email support",
      "30-day warranty",
      "Beginner-friendly documentation",
      "Access to basic tutorials",
      "Payment method setup assistance",
    ],
    includes: [
      {
        name: "Verified Business Manager",
        description: "A fully verified Business Manager account ready for advertising",
        icon: "/facebook-business-manager-icon.png",
      },
      {
        name: "Ad Account",
        description: "1 standard ad account with basic spending limit",
        icon: "/facebook-payment-method-icon.png",
      },
      {
        name: "Setup Guide",
        description: "Step-by-step guide for beginners to start advertising",
        icon: "/facebook-ads-setup.png",
      },
    ],
    image: "/facebook-starter-pack.png",
    badge: "Popular",
    stock: "in-stock",
    deliveryTime: "24 hours",
    faq: [
      {
        question: "Is this pack suitable for complete beginners?",
        answer:
          "Yes, this pack is specifically designed for beginners with no prior experience in Facebook advertising.",
      },
      {
        question: "Can I upgrade to a more advanced pack later?",
        answer:
          "You can upgrade to our Pro Pack or Agency Pack at any time. We'll provide a discount based on your initial purchase.",
      },
      {
        question: "What kind of support is included?",
        answer:
          "The Starter Pack includes email support to help you with basic setup and troubleshooting. Support is available during business hours.",
      },
      {
        question: "How long does it take to set everything up?",
        answer:
          "Most users can complete the setup process in 1-2 hours following our step-by-step guide. If you encounter any issues, our support team is ready to assist.",
      },
    ],
  },
  {
    id: "pro-pack",
    slug: "pro-pack",
    name: "Pro Pack",
    description: "For growing businesses with established ad campaigns",
    longDescription: `The Pro Pack is our mid-tier solution designed for growing businesses and marketers who have some experience with Facebook advertising and are looking to scale their efforts.

    This comprehensive package includes a verified BM5 Business Manager with a $250 spending limit, multiple ad accounts, and advanced setup documentation. The Pro Pack also comes with priority email support and a one-month consultation to help you optimize your advertising strategy.

    With the Pro Pack, you'll have all the tools and resources needed to take your Facebook advertising to the next level and achieve better results for your business or clients.`,
    price: 399,
    features: [
      "1 Verified BM5 with $250 limit",
      "3 Ad Accounts",
      "Advanced setup guide",
      "Priority email support",
      "1 month consultation",
      "60-day warranty",
      "Campaign optimization tips",
      "Audience targeting strategies",
    ],
    includes: [
      {
        name: "Verified BM5 Business Manager",
        description: "A premium Business Manager with $250 spending limit",
        icon: "/verified-facebook-business-manager-icon.png",
      },
      {
        name: "Multiple Ad Accounts",
        description: "3 ad accounts for different campaigns or clients",
        icon: "/multiple-payment-methods-icon.png",
      },
      {
        name: "Pixel Setup",
        description: "Facebook Pixel setup for conversion tracking",
        icon: "/facebook-pixel-tracking-icon.png",
      },
    ],
    image: "/facebook-ads-success-graph.png",
    badge: "Best Value",
    stock: "in-stock",
    deliveryTime: "48 hours",
    faq: [
      {
        question: "What's the difference between the Starter Pack and Pro Pack?",
        answer:
          "The Pro Pack includes a higher-tier Business Manager (BM5) with a $250 spending limit, 3 ad accounts instead of 1, priority support, and a one-month consultation for campaign optimization.",
      },
      {
        question: "Is the consultation one-on-one or group-based?",
        answer: "The consultation is one-on-one and tailored to your specific business needs and advertising goals.",
      },
      {
        question: "Can I add more ad accounts later?",
        answer:
          "Yes, additional ad accounts can be purchased separately or you can upgrade to our Agency Pack for more accounts.",
      },
      {
        question: "What kind of spending limit increases can I expect?",
        answer:
          "With proper account management and consistent spending, you can typically request limit increases after 2-3 months of advertising history.",
      },
    ],
  },
  {
    id: "agency-pack",
    slug: "agency-pack",
    name: "Agency Pack",
    description: "Complete solution for marketing agencies managing multiple clients",
    longDescription: `The Agency Pack is our premium solution designed specifically for marketing agencies and professional advertisers managing multiple clients or large-scale campaigns.

    This comprehensive package includes an unlimited verified BM5 Business Manager, multiple ad accounts, and a complete agency setup guide. The Agency Pack also comes with priority support and a three-month consultation to help you optimize your client campaigns and scale your agency.

    With the Agency Pack, you'll have all the tools and resources needed to manage multiple clients efficiently and deliver exceptional results for your agency.`,
    price: 799,
    features: [
      "1 Unlimited Verified BM5",
      "5 Ad Accounts",
      "Agency setup guide",
      "Priority support",
      "3 months consultation",
      "Account strategy review",
      "90-day warranty",
      "Client management tools",
    ],
    includes: [
      {
        name: "Unlimited Verified BM5",
        description: "Premium Business Manager with unlimited potential",
        icon: "/verified-facebook-business-manager-icon.png",
      },
      {
        name: "Multiple Client Setup",
        description: "Structure for managing multiple clients efficiently",
        icon: "/growing-business-icon.png",
      },
      {
        name: "Advanced Strategies",
        description: "Professional-level advertising strategies and tools",
        icon: "/experienced-marketer-icon.png",
      },
    ],
    image: "/facebook-agency-pack.png",
    badge: "Premium",
    stock: "low-stock",
    deliveryTime: "72 hours",
    faq: [
      {
        question: "Is this pack suitable for agencies of all sizes?",
        answer:
          "Yes, the Agency Pack is designed to scale with your agency, whether you're managing a handful of clients or dozens.",
      },
      {
        question: "What does 'unlimited' BM5 mean?",
        answer:
          "The unlimited BM5 has no preset spending limit cap and can be scaled to accommodate large advertising budgets across multiple clients.",
      },
      {
        question: "Can I add team members to manage different clients?",
        answer:
          "Yes, the Agency Pack supports multiple team members with different permission levels for efficient client management.",
      },
      {
        question: "What kind of consultation is included?",
        answer:
          "The 3-month consultation includes strategy sessions, account reviews, and optimization recommendations tailored to your agency's client portfolio.",
      },
    ],
  },
  // Add more packs as needed
]

export default function PackPage() {
  const params = useParams()
  const packSlug = params.pack as string
  const [pack, setPack] = useState<Pack | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    // Find the pack based on the slug
    const foundPack = packsData.find((p) => p.slug === packSlug)
    setPack(foundPack || null)
  }, [packSlug])

  if (!pack) {
    return (
      <SupportingPageLayout
        title="Pack Not Found"
        subtitle="The pack you're looking for doesn't exist or has been removed."
        breadcrumbs={[
          { label: "Packs", href: "/packs" },
          { label: "Not Found", href: "#" },
        ]}
      >
        <div className="py-12 flex flex-col items-center justify-center">
          <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
          <p className="text-gray-600 mb-6">
            Please check the URL or browse our packs to find what you're looking for.
          </p>
          <Button asChild className="bg-facebook hover:bg-facebook/90">
            <a href="/packs">Browse Packs</a>
          </Button>
        </div>
      </SupportingPageLayout>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: pack.id,
      name: pack.name,
      price: pack.price,
      image: pack.image,
      quantity: 1,
      category: "Pack",
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
      title={pack.name}
      subtitle={pack.description}
      breadcrumbs={[
        { label: "Packs", href: "/packs" },
        { label: pack.name, href: `/packs/${pack.slug}` },
      ]}
    >
      <div className="container mx-auto px-4 pb-10 md:pb-16">
        {/* Mobile Pack Overview - Removed name and badge as requested */}
        <div className="md:hidden mb-6">
          <Card className="overflow-hidden">
            <div className="p-4">
              {/* Pack Image and Details in a more balanced layout */}
              <div className="flex items-center border rounded-lg p-3 bg-gray-50 mb-3">
                {/* Pack Image */}
                <div className="w-20 h-20 flex-shrink-0 relative rounded-md overflow-hidden border border-gray-200 bg-white">
                  <Image src={pack.image || "/placeholder.svg"} alt={pack.name} fill className="object-contain p-1" />
                </div>

                {/* Price and Stock Status */}
                <div className="flex-1 ml-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-bold text-facebook">€{pack.price}</span>
                    {pack.comparePrice && (
                      <span className="text-sm text-gray-500 line-through">€{pack.comparePrice}</span>
                    )}
                  </div>

                  <Badge className={`${stockStatus[pack.stock].color}`}>{stockStatus[pack.stock].label}</Badge>

                  <p className="text-xs text-gray-600 mt-1">Delivery: {pack.deliveryTime}</p>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-700 mb-4">{pack.description}</p>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                className="w-full bg-facebook hover:bg-facebook/90 flex items-center justify-center gap-2"
                disabled={pack.stock === "out-of-stock"}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </Card>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Pack Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pack Overview */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Small Pack Image (reduced emphasis) */}
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                      <Image src={pack.image || "/placeholder.svg"} alt={pack.name} fill className="object-cover" />
                      {pack.badge && (
                        <Badge className="absolute top-2 right-2 bg-facebook text-white">{pack.badge}</Badge>
                      )}
                    </div>
                  </div>

                  {/* Pack Details */}
                  <div className="md:w-3/4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package2 className="h-5 w-5 text-facebook" />
                      <h2 className="text-2xl font-bold">{pack.name}</h2>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-facebook">€{pack.price}</span>
                        {pack.comparePrice && (
                          <span className="ml-2 text-gray-500 line-through">€{pack.comparePrice}</span>
                        )}
                      </div>

                      <Badge className={`${stockStatus[pack.stock].color}`}>{stockStatus[pack.stock].label}</Badge>
                    </div>

                    <p className="text-gray-700 mb-4">{pack.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button
                        onClick={handleAddToCart}
                        className="bg-facebook hover:bg-facebook/90 flex items-center gap-2"
                        disabled={pack.stock === "out-of-stock"}
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

            {/* Pack Description */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Pack Description</h3>
                <div className="prose max-w-none">
                  {pack.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">What's Included</h3>
                <div className="space-y-6">
                  {pack.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      {item.icon && (
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <Image
                            src={item.icon || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {pack.faq.map((item, index) => (
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
                  {pack.features.map((feature, index) => (
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
                    <p className="text-gray-700">{pack.deliveryTime}</p>
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
                  disabled={pack.stock === "out-of-stock"}
                >
                  Add to Cart - €{pack.price}
                </Button>
              </CardContent>
            </Card>

            {/* Compare Packs */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Compare Packs</h3>
                <div className="space-y-4">
                  {packsData
                    .filter((p) => p.id !== pack.id)
                    .slice(0, 2)
                    .map((otherPack) => (
                      <div key={otherPack.id} className="flex items-center gap-4 p-3 border border-gray-100 rounded-lg">
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <Image
                            src={otherPack.image || "/placeholder.svg"}
                            alt={otherPack.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{otherPack.name}</h4>
                          <p className="text-sm text-gray-600 truncate">{otherPack.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-facebook">€{otherPack.price}</p>
                          <Button asChild variant="link" className="h-auto p-0 text-xs">
                            <a href={`/packs/${otherPack.slug}`}>View</a>
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <a href="/packs">View All Packs</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Pack Description and Features */}
        <div className="md:hidden space-y-6 mt-4">
          {/* Description */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-3">Description</h3>
              <div className="prose max-w-none text-sm">
                {pack.longDescription.split("\n\n").map((paragraph, index) => (
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
                {pack.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-3">What's Included</h3>
              <div className="space-y-4">
                {pack.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.icon && (
                      <div className="relative w-10 h-10 flex-shrink-0">
                        <Image src={item.icon || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-3">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {pack.faq.map((item, index) => (
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
                  <p className="text-gray-700">{pack.deliveryTime}</p>
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
    </SupportingPageLayout>
  )
}
