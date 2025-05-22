'use client'

import type React from 'react'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, ArrowRight, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import { CartNotification } from '@/components/cart/cart-notification'
import { getLandingPagePackages } from '@/data/packages'

export default function PackagesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAdding, setIsAdding] = useState<number | null>(null)
  const [showNotification, setShowNotification] = useState(false)
  const [addedItem, setAddedItem] = useState<any>(null)
  const { addItem, openCart } = useCart() || {}
  const carouselRef = useRef<HTMLDivElement>(null)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Get packages from centralized data source
  const packages = getLandingPagePackages().map((pack) => ({
    id: pack.numericId,
    name: pack.name,
    description: pack.description,
    price: pack.price,
    features: pack.simpleFeatures || [],
    image: typeof pack.image === 'string' ? pack.image : pack.image.src,
    gradient: pack.gradient,
    bgGradient: pack.bgGradient,
    borderColor: pack.borderColor,
    hoverGradient: pack.hoverGradient,
    popular: pack.popular,
  }))

  const handleAddToCart = (pkg: any) => {
    if (!addItem) {
      console.error('Cart functionality not available')
      return
    }

    setIsAdding(pkg.id)

    try {
      const item = {
        id: `pack-${pkg.id}`,
        name: pkg.name,
        price: pkg.price,
        quantity: 1,
        image: pkg.image,
        category: 'pack',
      }

      addItem(item)

      // Show notification on mobile, open cart on desktop
      if (isMobile) {
        setAddedItem(item)
        setShowNotification(true)
      } else if (openCart) {
        openCart()
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setTimeout(() => setIsAdding(null), 500)
    }
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === packages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch handling for carousel
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section id='packages' className='pt-32 pb-16 relative overflow-hidden'>
      <div className='container mx-auto px-4 relative'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <Badge className='bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 mb-4 border-0 shadow-md'>
            Packages
          </Badge>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 relative inline-block'>
            <span className='relative z-10'>Choose Your Package</span>
            <div className='absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full'></div>
          </h2>
          <p className='text-lg text-gray-600'>
            Select the perfect solution for your advertising needs
          </p>
        </div>

        {/* Desktop Grid View */}
        {!isMobile && (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className='relative'
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {pkg.popular && (
                  <div className='absolute -top-4 left-0 right-0 flex justify-center z-10'>
                    <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md'>
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`border ${
                    pkg.borderColor
                  } rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 h-full transform ${
                    hoveredCard === index ? 'scale-105' : 'scale-100'
                  }`}
                >
                  <div className='p-6 pb-0'>
                    <div className='flex justify-between items-start mb-4'>
                      <div>
                        <h3 className='text-xl font-bold text-gray-900 mb-1'>{pkg.name}</h3>
                        <p className='text-sm text-gray-600'>{pkg.description}</p>
                      </div>
                      <div className='relative w-16 h-16 bg-white rounded-lg shadow-sm overflow-hidden'>
                        <Image
                          src={pkg.image || '/placeholder.svg'}
                          alt={pkg.name}
                          fill
                          className='object-contain p-2'
                        />
                      </div>
                    </div>

                    <div className='mb-6'>
                      <span
                        className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${pkg.gradient}`}
                      >
                        €{pkg.price}
                      </span>
                      <span className='text-gray-600 ml-1'>one-time</span>
                    </div>
                  </div>

                  <CardContent className='p-6 pt-0'>
                    <ul className='space-y-3 mb-6'>
                      {pkg.features.map((feature, i) => (
                        <li key={i} className='flex items-start'>
                          <div
                            className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.gradient} flex-shrink-0 flex items-center justify-center mt-0.5 mr-3`}
                          >
                            <Check className='h-3 w-3 text-white' />
                          </div>
                          <span className='text-gray-700'>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className='flex gap-2'>
                      <Button
                        className={`flex-1 bg-gradient-to-r ${pkg.gradient} hover:${pkg.hoverGradient} text-white border-0 shadow-md group`}
                        onClick={() => handleAddToCart(pkg)}
                        disabled={isAdding === pkg.id}
                      >
                        {isAdding === pkg.id ? (
                          'Adding...'
                        ) : (
                          <>
                            <ShoppingCart className='mr-2 h-4 w-4' />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </Button>
                      <Link
                        href={`/packs/${pkg.name.toLowerCase().replace(' ', '-')}`}
                        className='flex-1'
                      >
                        <Button
                          className={`w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 group`}
                        >
                          <span>Details</span>
                          <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className='relative max-w-sm mx-auto'>
            <div
              ref={carouselRef}
              className='overflow-hidden'
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className='flex transition-transform duration-300 ease-in-out'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {packages.map((pkg, index) => (
                  <div key={pkg.id} className='w-full flex-shrink-0 px-2'>
                    <div className='relative'>
                      {pkg.popular && (
                        <div className='absolute -top-4 left-0 right-0 flex justify-center z-20'>
                          <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md'>
                            Most Popular
                          </span>
                        </div>
                      )}
                      <Card
                        className={`border ${
                          pkg.borderColor
                        } rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md h-full ${
                          pkg.popular ? 'mt-4' : ''
                        }`}
                      >
                        <div className='p-6 pb-0'>
                          <div className='flex justify-between items-start mb-4'>
                            <div>
                              <h3 className='text-xl font-bold text-gray-900 mb-1'>{pkg.name}</h3>
                              <p className='text-sm text-gray-600'>{pkg.description}</p>
                            </div>
                            <div className='relative w-16 h-16 bg-white rounded-lg shadow-sm overflow-hidden'>
                              <Image
                                src={pkg.image || '/placeholder.svg'}
                                alt={pkg.name}
                                fill
                                className='object-contain p-2'
                              />
                            </div>
                          </div>

                          <div className='mb-6'>
                            <span
                              className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${pkg.gradient}`}
                            >
                              €{pkg.price}
                            </span>
                            <span className='text-gray-600 ml-1'>one-time</span>
                          </div>
                        </div>

                        <CardContent className='p-6 pt-0'>
                          <ul className='space-y-3 mb-6'>
                            {pkg.features.slice(0, 4).map((feature, i) => (
                              <li key={i} className='flex items-start'>
                                <div
                                  className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.gradient} flex-shrink-0 flex items-center justify-center mt-0.5 mr-3`}
                                >
                                  <Check className='h-3 w-3 text-white' />
                                </div>
                                <span className='text-gray-700'>{feature}</span>
                              </li>
                            ))}
                            {pkg.features.length > 4 && (
                              <li className='text-sm text-gray-500 italic'>
                                +{pkg.features.length - 4} more features
                              </li>
                            )}
                          </ul>

                          <div className='flex gap-2'>
                            <Button
                              className={`flex-1 bg-gradient-to-r ${pkg.gradient} hover:${pkg.hoverGradient} text-white border-0 shadow-md`}
                              onClick={() => handleAddToCart(pkg)}
                              disabled={isAdding === pkg.id}
                            >
                              {isAdding === pkg.id ? (
                                'Adding...'
                              ) : (
                                <>
                                  <ShoppingCart className='mr-2 h-4 w-4' />
                                  <span>Add to Cart</span>
                                </>
                              )}
                            </Button>
                            <Link
                              href={`/packs/${pkg.name.toLowerCase().replace(' ', '-')}`}
                              className='flex-1'
                            >
                              <Button
                                className={`w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50`}
                              >
                                Details
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <Button
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-md border-0 z-10 w-10 h-10 p-0'
              onClick={prevSlide}
              aria-label='Previous package'
            >
              <ChevronLeft className='h-5 w-5' />
            </Button>

            <Button
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-md border-0 z-10 w-10 h-10 p-0'
              onClick={nextSlide}
              aria-label='Next package'
            >
              <ChevronRight className='h-5 w-5' />
            </Button>

            {/* Dots Navigation */}
            <div className='flex justify-center mt-6 gap-2'>
              {packages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-6'
                      : 'bg-gray-300'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to package ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
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
