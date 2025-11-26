'use client'
import { Badge } from '@/components/ui/badge'
import type React from 'react'

import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useCart } from '@/context/cart-context'
import { getProductSectionItems, type ProductSectionItem } from '@/data/products'
import SectionHeader from '../ui/section-header'
import { useRouter } from 'next/navigation'
import { CartNotification } from '@/components/cart/cart-notification'
import { useState } from 'react'

interface ProductsSectionProps {
  isProductsPage?: boolean
}

export default function ProductsSection({ isProductsPage = false }: ProductsSectionProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { addItem, openCart } = useCart()
  const router = useRouter()

  const [showNotification, setShowNotification] = useState(false)
  const [addedItem, setAddedItem] = useState<any>(null)
  const [isAdding, setIsAdding] = useState<string | null>(null)

  // Get products data from centralized source
  const allProducts = getProductSectionItems()

  // Group products by category for the new UI
  const businessManagerProducts = allProducts.filter(
    (product) => product.category === 'verified-bm' || product.category === 'unverified-bm'
  )

  // Profile products
  const profileProducts = allProducts.filter((product) => product.category === 'profile')

  // Ad Account products (new) - rendered similarly to Profile Accounts
  const adAccountProducts = allProducts.filter(
    (product) => String(product.category) === 'ad-account'
  )

  // Page products - render separately so pages are visible (don't include them in otherProducts)
  const pageProducts = allProducts.filter((product) => String(product.category) === 'page')

  // WABA products - WhatsApp Business API
  const wabaProducts = allProducts.filter((product) => String(product.category) === 'waba')

  // Service products - Services
  const serviceProducts = allProducts.filter((product) => String(product.category) === 'service')

  // Other products: exclude known explicit categories so they don't render twice
  const otherProducts = allProducts.filter(
    (product) =>
      ![
        'verified-bm',
        'unverified-bm',
        'profile',
        'page',
        'ad-account',
        'waba',
        'service',
      ].includes(String(product.category))
  )

  // Group other products by category
  const groupedOtherProducts = otherProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {} as Record<string, typeof otherProducts>)

  // Add this function to handle adding products to cart
  const handleAddToCart = (product: ProductSectionItem, event: React.MouseEvent) => {
    event.stopPropagation() // Prevent card click

    if (!addItem) {
      console.error('Cart functionality not available')
      return
    }

    setIsAdding(product.slug)

    try {
      const item = {
        id: product.id,
        slug: `products/${product.id}`,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image || '/placeholder.svg',
        category: product.category,
      }

      addItem(item)

      // Show notification on mobile, open cart on desktop
      if (isMobile) {
        setAddedItem(item)
        setShowNotification(true)
      } else if (!isMobile && openCart) {
        openCart()
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setTimeout(() => setIsAdding(null), 500)
    }
  }

  const handleCardClick = (productSlug: string) => {
    router.push(`/products/${productSlug}`)
  }

  // Helper function to highlight keywords in product names
  const highlightKeywords = (name: string) => {
    const highlightWords = [
      'Verified',
      'Blue',
      'Tick',
      'Reinstated',
      'Follower',
      'Strong',
      'Premium',
      'Livestream',
    ]
    return name.split(' ').map((word, index) => {
      const isHighlight = highlightWords.some((hw) => word.includes(hw))
      return (
        <span key={index} className={isHighlight ? 'text-blue-600 font-bold' : ''}>
          {word}{' '}
        </span>
      )
    })
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
  }

  return (
    <section
      id='products'
      className={`relative overflow-hidden ${
        isProductsPage ? 'pb-0 pt-6 md:pt-8' : 'py-8 md:py-16'
      }`}
    >
      <div className='container mx-auto px-4 relative'>
        {/* Header Section */}
        <SectionHeader title='Premium Services' />

        {/* Category-based Product Listing */}
        <div className='space-y-8'>
          {/* Business Manager Category */}
          {businessManagerProducts.length > 0 && (
            <div className='bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300'>
                  <span className='text-white font-bold text-xl'>🏢</span>
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900'>Business Managers</h3>
                {/* <Badge className="bg-blue-100 text-blue-700 border-0 animate-bounce hover:bg-transparent">
                  Premium Quality
                </Badge> */}
              </div>

              <div className='grid gap-6 md:grid-cols-2'>
                {businessManagerProducts.map((product, index) => (
                  <div
                    key={product.slug}
                    className='bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer'
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleCardClick(product.slug)}
                  >
                    {/* Mobile Layout */}
                    <div className='flex flex-col gap-3 md:hidden'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-blue-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center justify-between gap-3'>
                        <div className='text-left'>
                          <div className='text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className='hidden md:flex md:flex-row md:items-center justify-between gap-2'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-blue-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center gap-3'>
                        <div className='text-right'>
                          <div className='text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ad Account Category (new) */}
          {adAccountProducts.length > 0 && (
            <div className='bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300'>
                  <span className='text-white font-bold text-xl'>📣</span>
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900'>Ad Accounts</h3>
                {/* <Badge className="bg-amber-100 text-amber-700 border-0 animate-bounce hover:bg-transparent">Professional</Badge> */}
              </div>

              <div className='grid gap-6 md:grid-cols-2'>
                {adAccountProducts.map((product, index) => (
                  <div
                    key={product.slug}
                    className='bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer'
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleCardClick(product.slug)}
                  >
                    {/* Mobile Layout */}
                    <div className='flex flex-col gap-3 md:hidden'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-amber-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center justify-between gap-3'>
                        <div className='text-left'>
                          <div className='text-xl font-bold text-amber-600 group-hover:text-amber-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className='hidden md:flex md:flex-row md:items-center justify-between gap-2'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-amber-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center gap-3'>
                        <div className='text-right'>
                          <div className='text-xl font-bold text-amber-600 group-hover:text-amber-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile Account Category */}
          {profileProducts.length > 0 && (
            <div className='bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300'>
                  <span className='text-white font-bold text-xl'>👤</span>
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900'>Profile Accounts</h3>
                {/* <Badge className="bg-purple-100 text-purple-700 border-0 animate-bounce hover:bg-transparent">
                  Enterprise Ready
                </Badge> */}
              </div>

              <div className='grid gap-6 md:grid-cols-2'>
                {profileProducts.map((product, index) => (
                  <div
                    key={product.slug}
                    className='bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer'
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleCardClick(product.slug)}
                  >
                    {/* Mobile Layout */}
                    <div className='flex flex-col gap-3 md:hidden'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-purple-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center justify-between gap-3'>
                        <div className='text-left'>
                          <div className='text-xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className='hidden md:flex md:flex-row md:items-center justify-between gap-2'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-purple-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center gap-3'>
                        <div className='text-right'>
                          <div className='text-xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Page Category (restored) */}
          {pageProducts.length > 0 && (
            <div className='bg-gradient-to-r from-cyan-50 via-sky-50 to-teal-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300'>
                  <span className='text-white font-bold text-xl'>📄</span>
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900'>Pages</h3>
                {/* <Badge className="bg-cyan-100 text-cyan-700 border-0 animate-bounce hover:bg-transparent">Featured</Badge> */}
              </div>

              <div className='grid gap-6 md:grid-cols-2'>
                {pageProducts.map((product, index) => (
                  <div
                    key={product.slug}
                    className='bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer'
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleCardClick(product.slug)}
                  >
                    {/* Mobile Layout */}
                    <div className='flex flex-col gap-3 md:hidden'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-cyan-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center justify-between gap-3'>
                        <div className='text-left'>
                          <div className='text-xl font-bold text-cyan-600 group-hover:text-cyan-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-700 hover:to-sky-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className='hidden md:flex md:flex-row md:items-center justify-between gap-2'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-cyan-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center gap-3'>
                        <div className='text-right'>
                          <div className='text-xl font-bold text-cyan-600 group-hover:text-cyan-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-700 hover:to-sky-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WABA WhatsApp Business API Category */}
          {wabaProducts.length > 0 && (
            <div className='bg-gradient-to-r from-green-50 via-lime-50 to-emerald-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300'>
                  <span className='text-white font-bold text-xl'>💬</span>
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900'>
                  WhatsApp Business API
                </h3>
              </div>

              <div className='grid gap-6 md:grid-cols-2'>
                {wabaProducts.map((product, index) => (
                  <div
                    key={product.slug}
                    className='bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer'
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleCardClick(product.slug)}
                  >
                    {/* Mobile Layout */}
                    <div className='flex flex-col gap-3 md:hidden'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-green-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center justify-between gap-3'>
                        <div className='text-left'>
                          <div className='text-xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className='hidden md:flex md:flex-row md:items-center justify-between gap-2'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-green-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center gap-3'>
                        <div className='text-right'>
                          <div className='text-xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Service Category */}
          {serviceProducts.length > 0 && (
            <div className='bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300'>
                  <span className='text-white font-bold text-xl'>🛠️</span>
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900'>Services</h3>
              </div>

              <div className='grid gap-6 md:grid-cols-2'>
                {serviceProducts.map((product, index) => (
                  <div
                    key={product.slug}
                    className='bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer'
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleCardClick(product.slug)}
                  >
                    {/* Mobile Layout */}
                    <div className='flex flex-col gap-3 md:hidden'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-orange-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center justify-between gap-3'>
                        <div className='text-left'>
                          <div className='text-xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className='hidden md:flex md:flex-row md:items-center justify-between gap-2'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-orange-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center gap-3'>
                        <div className='text-right'>
                          <div className='text-xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Show other categories if they exist */}
          {Object.entries(groupedOtherProducts).map(([category, products]) => (
            <div
              key={category}
              className='bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01]'
            >
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300'>
                  <span className='text-white font-bold text-xl'>📊</span>
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900 capitalize'>
                  {category.replace('-', ' ')} Products
                </h3>
                {/* <Badge className="bg-green-100 text-green-700 border-0 animate-bounce hover:bg-transparent">
                  Professional
                </Badge> */}
              </div>

              <div className='grid gap-6 md:grid-cols-2'>
                {products.map((product, index) => (
                  <div
                    key={product.slug}
                    className='bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer'
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleCardClick(product.slug)}
                  >
                    {/* Mobile Layout */}
                    <div className='flex flex-col gap-3 md:hidden'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-green-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center justify-between gap-3'>
                        <div className='text-left'>
                          <div className='text-xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className='hidden md:flex md:flex-row md:items-center justify-between gap-2'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='text-lg font-semibold text-gray-900 transition-colors duration-300 mb-0'>
                            {highlightKeywords(product.name)}
                          </h4>
                        </div>
                        <p className='text-gray-600 text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300'>
                          {product.description}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-gray-500'>
                          <span className='flex items-center gap-1'>
                            <ShoppingBag className='h-4 w-4 group-hover:text-green-500 transition-colors duration-300' />
                            {product.purchases} purchased
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-row items-center gap-3'>
                        <div className='text-right'>
                          <div className='text-xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300'>
                            ${product.price}
                          </div>
                          <div className='text-xs text-gray-500'>per unit</div>
                        </div>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={(e) => handleAddToCart(product, e)}
                            className='bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-1.5 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg text-sm'
                            disabled={isAdding === product.slug}
                          >
                            {isAdding === product.slug ? 'Adding...' : 'Buy Now'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Cart notification for mobile */}
      {isMobile && (
        <CartNotification
          show={showNotification}
          item={addedItem}
          onClose={handleCloseNotification}
        />
      )}
    </section>
  )
}
