'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ShoppingCart,
  AlertCircle,
  Shield,
  CreditCard,
  Star,
  Package2,
  Zap,
  Clock,
  Users,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  DollarSign,
  ArrowRight,
} from 'lucide-react'
import SupportingPageLayout from '@/components/layout/supporting-page-layout'
import { useCart } from '@/context/cart-context'
import { processContent } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'
import { CartNotification } from '@/components/cart/cart-notification'
import { getPackageDetailBySlug, getPackagesListPage } from '@/data/packs'
import type { Package, ProductInPack, PackageLandingPage } from '@/data/packs'
import { useParams } from 'next/navigation'
import PackLoading from './loading'
import PackFAQ from '@/components/pack/pack-faq'
import PackSuccessStories from '@/components/pack/pack-review'
import PackDesign from '@/components/pack/pack-design'

// Stock status indicator
const stockStatus = {
  'in-stock': {
    label: 'In Stock',
    color: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white',
  },
  'low-stock': {
    label: 'Low Stock',
    color: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white',
  },
  'out-of-stock': {
    label: 'Out of Stock',
    color: 'bg-gradient-to-r from-red-400 to-rose-500 text-white',
  },
}

export default function PackPage() {
  const params = useParams()
  const packSlug = params?.pack as string
  const [pack, setPack] = useState<Package | null>(null)
  const [suggestedPack, setSuggestedPack] = useState<PackageLandingPage | null>(null)
  const { addItem, openCart } = useCart() || {}
  const [isLoading, setIsLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [showNotification, setShowNotification] = useState(false)
  const [addedItem, setAddedItem] = useState<any>(null)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)') // md breakpoint

  useEffect(() => {
    const packData = getPackageDetailBySlug(packSlug)
    setPack(packData || null)

    // Get all packs and find a suggested pack
    if (packData) {
      const allPacks = getPackagesListPage()
      // Find a pack with higher price (next tier up) or if current is highest, suggest a lower tier
      const currentPrice = packData.price
      const higherPriced = allPacks
        .filter((p) => p.price > currentPrice)
        .sort((a, b) => a.price - b.price)[0]
      const lowerPriced = allPacks
        .filter((p) => p.price < currentPrice)
        .sort((a, b) => b.price - a.price)[0]

      // Suggest higher priced pack if available, otherwise suggest lower priced
      setSuggestedPack(higherPriced || lowerPriced || null)
    }

    setIsLoading(false)
  }, [packSlug])

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    const cartItem = {
      id: pack.id,
      slug: pack.slug,
      name: pack.name,
      price: pack.price,
      image: pack.image,
      quantity: quantity,
      category: pack.category,
    }
    if (addItem) addItem(cartItem)

    // For mobile, show notification. For desktop, open cart directly.
    if (isMobile) {
      setAddedItem(cartItem)
      setShowNotification(true)
    } else {
      if (openCart) openCart()
    }
    setIsAddingToCart(false)
  }

  const mobilePackOverview = pack ? (
    <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
      <CardContent className="p-4 relative z-10">
        <div className="flex gap-4">
          {/* Mobile Pack Image - Smaller */}
          <div className="w-28 h-28 flex-shrink-0">
            {/* Slightly larger than product example for pack image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden border-0 bg-white shadow-md group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-300"></div>
              <Image
                src={pack.image || '/placeholder.svg'}
                alt={pack.name}
                fill
                className="object-cover transform transition-transform group-hover:scale-105 duration-300"
              />
              {pack.badge && (
                <div className="absolute -top-1 -right-1 rotate-3">
                  <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-md px-1.5 py-0.5 text-xs font-bold">
                    {pack.badge}
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Pack Details - Compact */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                <Package2 className="h-3 w-3 text-white" />
              </div>
              <h2 className="text-lg font-bold leading-tight relative inline-block">
                <span className="relative z-10">{pack.name}</span>
                <div className="absolute -bottom-0.5 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
              </h2>
            </div>

            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xl font-bold bg-gradient-to-r from-facebook to-blue-700 bg-clip-text text-transparent">
                €{pack.price}
              </span>
              {pack.comparePrice && (
                <span className="text-gray-500 line-through text-sm">€{pack.comparePrice}</span>
              )}
            </div>
            <Badge
              className={`text-xs ${stockStatus[pack.stock]?.color} border-0 shadow-sm mb-2 w-fit`}
            >
              {stockStatus[pack.stock]?.label}
            </Badge>

            <div className="flex items-center gap-1 mb-1">
              {/* Reduced mb */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < 4.5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">120 reviews</span>
            </div>
          </div>
        </div>

        {/* Mobile Action Section */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          {/* Increased pt for spacing */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-3 py-1.5 text-gray-900 bg-white text-sm">{quantity}</span>
              {/* Increased px for quantity number */}
              <button
                className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-facebook to-blue-700 hover:from-facebook-dark hover:to-blue-800 text-white flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 px-4 py-2 text-sm flex-1"
              disabled={pack.stock === 'out-of-stock' || isAddingToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              {isAddingToCart ? 'Adding...' : 'Add to Cart'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : null

  if (isLoading) {
    return <PackLoading />
  }

  if (!pack) {
    return (
      <SupportingPageLayout
        title="Pack Not Found"
        subtitle="The pack you're looking for doesn't exist."
      >
        <div className="py-12 flex flex-col items-center justify-center text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
          <p className="text-gray-600 mb-6">Please check the URL or browse our packs.</p>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            <Link href="/packs">Browse Packs</Link>
          </Button>
        </div>
      </SupportingPageLayout>
    )
  }

  const commonPackOverview = (
    <>
      <div className="relative aspect-square rounded-xl overflow-hidden border-0 bg-white shadow-lg group mx-auto w-full max-w-xs sm:max-w-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-300"></div>
        <Image
          src={pack.image || '/placeholder.svg'}
          alt={pack.name}
          fill
          className="object-cover transform transition-transform group-hover:scale-105 duration-500"
        />
        {pack.badge && (
          <div className="absolute top-3 right-3 rotate-3">
            <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-md px-3 py-1.5 text-sm font-bold">
              {pack.badge}
            </Badge>
          </div>
        )}
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
            <Package2 className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold relative inline-block">
            <span className="relative z-10">{pack.name}</span>
            <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <span className="text-3xl font-bold bg-gradient-to-r from-facebook to-blue-700 bg-clip-text text-transparent">
              €{pack.price}
            </span>
            {pack.comparePrice && (
              <span className="ml-2 text-gray-500 line-through">€{pack.comparePrice}</span>
            )}
          </div>
          <Badge className={`${stockStatus[pack.stock]?.color} border-0 shadow-sm w-fit`}>
            {stockStatus[pack.stock]?.label}
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full sm:w-auto justify-between">
            <button
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-4 py-2 text-gray-900 bg-white">{quantity}</span>
            <button
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <Button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-facebook to-blue-700 hover:from-facebook-dark hover:to-blue-800 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 py-3 px-4 sm:px-6 w-full sm:w-auto"
            disabled={pack.stock === 'out-of-stock' || isAddingToCart}
          >
            <ShoppingCart className="h-5 w-5" />
            {isAddingToCart ? 'Adding...' : 'Add to Cart'}
          </Button>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < 4.5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
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
    </>
  )

  const commonPackDescription = (
    <>
      <h3 className="text-xl font-bold mb-4 relative inline-block">
        <span className="relative z-10">Pack Description</span>
        <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
      </h3>
      {pack.detail && (
        <div className="mb-6">
          <div className="product-detail prose prose-sm sm:prose-base max-w-none mb-4">
            <div dangerouslySetInnerHTML={{ __html: processContent(pack.detail) }} />
          </div>
        </div>
      )}
      <h4 className="text-lg font-semibold mb-6 relative inline-block">
        <span className="relative z-10">What's in the pack:</span>
        <div className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
      </h4>
      <ul className="space-y-3">
        {pack.products.map((item: ProductInPack, index: number) => (
          <li
            key={index}
            className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
          >
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium text-gray-800">
                {item.quantity}x {item.productId.replace(/-/g, ' ')}
              </span>
              <p className="text-sm text-gray-600">{item.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )

  const commonTabsSection = (
    <Tabs defaultValue="components" className="w-full">
      <TabsList className="grid w-full grid-cols-3 sm:grid-cols-3 gap-2 bg-gray-100 p-1 rounded-lg">
        <TabsTrigger
          value="components"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-md text-xs sm:text-sm"
        >
          <Package2 className="h-4 w-4 mr-1 sm:mr-2" />
          Design
        </TabsTrigger>
        <TabsTrigger
          value="stories"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-md text-xs sm:text-sm"
        >
          <Sparkles className="h-4 w-4 mr-1 sm:mr-2" />
          Stories
        </TabsTrigger>
        <TabsTrigger
          value="faq"
          className="data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-md text-xs sm:text-sm"
        >
          <HelpCircle className="h-4 w-4 mr-1 sm:mr-2" />
          FAQ
        </TabsTrigger>
      </TabsList>
      <div className="pt-6 min-h-[400px] sm:min-h-[500px]">
        {' '}
        {/* Adjusted min-height for tabs content */}
        <TabsContent value="components" className="h-full">
          <PackDesign category={pack.category} />
        </TabsContent>
        <TabsContent value="stories" className="h-full">
          <PackSuccessStories reviews={pack.reviews} />
        </TabsContent>
        <TabsContent value="faq" className="h-full">
          <PackFAQ faq={pack.faq} />
        </TabsContent>
      </div>
    </Tabs>
  )

  return (
    <SupportingPageLayout title={pack.name} subtitle={pack.description}>
      <div className="container mx-auto px-4 pt-6 md:pt-8 pb-10 md:pb-12 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - pack Info */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
              <CardContent className="p-6 md:px-10 relative z-10">
                <div className="flex flex-col md:flex-row md:gap-20">
                  <div className="md:w-1/4 flex-shrink-0">
                    {/* Re-using the image part of commonPackOverview, desktop specific styling if any can be here */}
                    <div className="relative aspect-square rounded-xl overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-300"></div>
                      <Image
                        src={pack.image || '/placeholder.svg'}
                        alt={pack.name}
                        fill
                        className="object-cover transform transition-transform group-hover:scale-105 duration-500"
                      />
                      {pack.badge && (
                        <div className="absolute top-3 right-3 rotate-3">
                          <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-md px-3 py-1.5 text-sm font-bold">
                            {pack.badge}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    {/* Re-using the details part of commonPackOverview */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                        <Package2 className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold relative inline-block">
                        <span className="relative z-10">{pack.name}</span>
                        <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
                      </h2>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <span className="text-3xl font-bold bg-gradient-to-r from-facebook to-blue-700 bg-clip-text text-transparent">
                          €{pack.price}
                        </span>
                        {pack.comparePrice && (
                          <span className="ml-2 text-gray-500 line-through">
                            €{pack.comparePrice}
                          </span>
                        )}
                      </div>
                      <Badge className={`${stockStatus[pack.stock]?.color} border-0 shadow-sm`}>
                        {stockStatus[pack.stock]?.label}
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
                        disabled={pack.stock === 'out-of-stock' || isAddingToCart}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        {isAddingToCart ? 'Adding...' : 'Add to Cart'}
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < 4.5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
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

            <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-200/10 to-indigo-200/10 rounded-full translate-y-1/2 translate-x-1/2"></div>
              <CardContent className="p-6 relative z-10">{commonPackDescription}</CardContent>
            </Card>

            <Card className="shadow-lg border-gray-200">
              <CardContent className="p-0 md:p-6">{commonTabsSection}</CardContent>
            </Card>
          </div>

          {/* Right Column - Features & Purchase Info (Hidden on mobile by parent grid) */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-5 relative inline-block">
                  <span className="relative z-10">Purchase Information</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
                </h3>
                <div className="space-y-4">
                  {/* Purchase info items */}
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
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tl from-pink-200/10 to-indigo-200/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-5 relative inline-block">
                  <span className="relative z-10">Key Benefits</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 rounded-full"></div>
                </h3>
                <div className="space-y-4">
                  {/* Key benefit items */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-800 mb-1">Quick Setup</h4>
                        <p className="text-sm text-gray-700">
                          Get started with Facebook ads in minutes, not days.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-800 mb-1">Verified Quality</h4>
                        <p className="text-sm text-gray-700">
                          All accounts are fully verified and ready for advertising.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-800 mb-1">Expert Support</h4>
                        <p className="text-sm text-gray-700">
                          Get help from our team of Facebook ads specialists.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Pack Card */}
            {suggestedPack && (
              <Card className="overflow-hidden border-0 shadow-xl relative bg-white/80 backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-5 relative inline-block">
                    <span className="relative z-10">You Might Also Like</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-200 to-orange-200 opacity-70 rounded-full"></div>
                  </h3>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
                        <Package2 className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="text-lg font-bold">{suggestedPack.name}</h4>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {suggestedPack.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        €{suggestedPack.price}
                      </span>
                      {suggestedPack.badge && (
                        <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-sm">
                          {suggestedPack.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      {suggestedPack.products.slice(0, 2).map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-700">{item.role}</p>
                        </div>
                      ))}
                      {suggestedPack.products.length > 2 && (
                        <p className="text-xs text-gray-500 italic">
                          + {suggestedPack.products.length - 2} more items
                        </p>
                      )}
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Link
                        href={`/packs/${suggestedPack.slug}`}
                        className="flex items-center justify-center gap-2"
                      >
                        View Pack <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Replace the old Card with the new mobilePackOverview */}
          {mobilePackOverview}

          <Card className="overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">{commonPackDescription}</CardContent>
          </Card>

          <Card className="shadow-lg border-gray-200">
            <CardContent className="p-4 sm:p-6">{commonTabsSection}</CardContent>
          </Card>
        </div>
      </div>

      {showNotification && addedItem && (
        <CartNotification
          item={addedItem}
          show={showNotification}
          onClose={() => {
            setShowNotification(false)
            setAddedItem(null)
          }}
        />
      )}
    </SupportingPageLayout>
  )
}
