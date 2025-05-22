'use client'

import { useState, useRef, useEffect, type TouchEvent } from 'react'
import SupportingPageLayout from '@/components/layout/supporting-page-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Package2, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import PageSection from '@/components/page-section'
import { getPacksPageData } from '@/data/packages'

// Pack type definition
interface Pack {
  id: string
  name: string
  description: string
  price: string
  features: string[]
  image: string
  badge?: string
  url: string
  featured?: boolean
}

export default function PacksPage() {
  // Use media query to detect mobile screens
  const isMobile = useMediaQuery('(max-width: 768px)')

  // State for mobile carousel
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  // Get packs data from centralized source
  const packs: Pack[] = getPacksPageData()

  // Separate featured packs from regular packs
  const featuredPacks = packs.filter((pack) => pack.featured)
  const regularPacks = packs.filter((pack) => !pack.featured)

  // Handle manual scroll and update active index
  useEffect(() => {
    if (!isMobile) return

    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft
        const cardWidth = carouselRef.current.offsetWidth
        const newIndex = Math.round(scrollPosition / cardWidth)

        // Only update if the index has actually changed
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < regularPacks.length) {
          setActiveIndex(newIndex)
        }
      }
    }

    const handleScrollEnd = () => {
      setIsScrolling(false)
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
      carousel.addEventListener('scrollend', handleScrollEnd)
      return () => {
        carousel.removeEventListener('scroll', handleScroll)
        carousel.removeEventListener('scrollend', handleScrollEnd)
      }
    }
  }, [activeIndex, isMobile, regularPacks.length])

  // Navigate to specific card
  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      setIsScrolling(true)
      const cardWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      })
      setActiveIndex(index)

      // Set a timeout to ensure isScrolling is reset even if scrollend doesn't fire
      setTimeout(() => {
        setIsScrolling(false)
      }, 500)
    }
  }

  // Navigate to previous card
  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1)
    }
  }

  // Navigate to next card
  const handleNext = () => {
    if (activeIndex < regularPacks.length - 1) {
      scrollToCard(activeIndex + 1)
    }
  }

  // Touch handlers for swiping
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && activeIndex < regularPacks.length - 1) {
      handleNext()
    }

    if (isRightSwipe && activeIndex > 0) {
      handlePrev()
    }

    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <SupportingPageLayout
      title='All Packs'
      subtitle='Bundled solutions for every advertising need'
      showNewsletter={true}
      breadcrumbs={[{ label: 'Packs', href: '/packs' }]}
    >
      {/* Title Section */}
      <PageSection className='pt-6 md:pt-8 pb-0'>
        <div className='max-w-3xl mx-auto text-center mb-10'>
          <div className='flex items-center justify-center gap-3'>
            <Badge className='bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-0 shadow-md'>
              Value Packs
            </Badge>
            <h1 className='text-3xl md:text-4xl font-bold relative inline-block'>
              <span className='relative z-10'>Facebook Ads Solutions</span>
              <div className='absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full'></div>
            </h1>
          </div>
          <p className='text-lg text-gray-600 mt-2'>
            Choose the perfect package for your advertising needs
          </p>
        </div>
      </PageSection>

      {/* Content Section */}
      <PageSection className='pt-0 pb-8'>
        <div className='container mx-auto px-4'>
          {/* Featured Packs Section (Mobile Only) */}
          {isMobile && featuredPacks.length > 0 && (
            <div className='mb-12 relative'>
              {/* Decorative elements */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2'></div>
              <div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-20 translate-y-1/4 -translate-x-1/4'></div>

              <div className='flex items-center gap-2 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md'>
                  <Star className='h-5 w-5 text-white' />
                </div>
                <h2 className='text-xl font-bold relative'>
                  <span className='relative z-10'>Recommended For You</span>
                  <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-50 rounded-full'></div>
                </h2>
              </div>

              <div className='space-y-4'>
                {featuredPacks.map((pack) => (
                  <Card
                    key={pack.id}
                    className='overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg group relative'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='flex flex-row relative z-10'>
                      <div className='relative w-1/3 aspect-square bg-gradient-to-br from-gray-50 to-white overflow-hidden'>
                        <Image
                          src={pack.image || '/placeholder.svg'}
                          alt={pack.name}
                          fill
                          className='object-cover p-2 transition-transform duration-300 group-hover:scale-105'
                        />
                        {pack.badge && (
                          <Badge className='absolute top-1 right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-1.5 py-0.5 border-0'>
                            {pack.badge}
                          </Badge>
                        )}
                      </div>
                      <CardContent className='w-2/3 p-3'>
                        <h3 className='text-base font-bold mb-1 line-clamp-1 group-hover:text-facebook transition-colors'>
                          {pack.name}
                        </h3>
                        <p className='text-xs text-gray-600 mb-2 line-clamp-2'>
                          {pack.description}
                        </p>
                        <div className='flex items-center justify-between'>
                          <span className='text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                            {pack.price}
                          </span>
                          <Button
                            asChild
                            size='sm'
                            className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white px-2 h-8 shadow-sm'
                          >
                            <Link href={pack.url}>View Pack</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Packs Section Title */}
          <div className='flex items-center gap-3 mb-10 relative z-10'>
            <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md'>
              <Package2 className='h-6 w-6 text-white' />
            </div>
            <h2 className='text-2xl font-bold relative'>
              <span className='relative z-10'>{isMobile ? 'All Packs' : 'Value Packs'}</span>
              <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full'></div>
            </h2>
          </div>

          {/* All Packs Section Content */}
          <div className='relative pt-0'>
            {/* Desktop View - Original Layout */}
            {!isMobile && (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
                {packs.map((pack) => (
                  <Card
                    key={pack.id}
                    className='overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl group relative'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='relative aspect-video bg-gradient-to-br from-gray-50 to-white overflow-hidden'>
                      <Image
                        src={pack.image || '/placeholder.svg'}
                        alt={pack.name}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                      {pack.badge && (
                        <Badge className='absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 border-0 shadow-sm'>
                          {pack.badge}
                        </Badge>
                      )}
                    </div>
                    <CardContent className='p-6 relative z-10'>
                      <h3 className='text-xl font-bold mb-2 group-hover:text-facebook transition-colors'>
                        {pack.name}
                      </h3>
                      <p className='text-gray-600 mb-4'>{pack.description}</p>

                      <ul className='mb-6 space-y-2' style={{ minHeight: '180px' }}>
                        {pack.features.map((feature, index) => (
                          <li key={index} className='flex items-start'>
                            <div className='h-5 w-5 text-facebook mr-2 mt-0.5 flex-shrink-0 relative'>
                              <svg
                                className='absolute inset-0 text-facebook'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                              <div className='absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity'></div>
                            </div>
                            <span className='text-sm'>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className='flex items-center justify-between mt-auto'>
                        <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                          {pack.price}
                        </span>
                        <Button
                          asChild
                          className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-sm'
                        >
                          <Link href={pack.url}>View Pack</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Mobile View - Carousel Layout (like on landing page) */}
            {isMobile && (
              <div className='relative'>
                {/* Mobile Carousel */}
                <div
                  ref={carouselRef}
                  className='flex overflow-x-scroll scrollbar-hide touch-pan-x'
                  style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                  }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {regularPacks.map((pack) => (
                    <div
                      key={pack.id}
                      className='min-w-full w-full flex-shrink-0 px-4'
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <Card className='overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg group relative'>
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <div className='relative aspect-video bg-gradient-to-br from-gray-50 to-white overflow-hidden'>
                          <Image
                            src={pack.image || '/placeholder.svg'}
                            alt={pack.name}
                            fill
                            className='object-cover transition-transform duration-500 group-hover:scale-105'
                          />
                          {pack.badge && (
                            <Badge className='absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 border-0 shadow-sm'>
                              {pack.badge}
                            </Badge>
                          )}
                        </div>
                        <CardContent className='p-6 relative z-10'>
                          <h3 className='text-xl font-bold mb-2 group-hover:text-facebook transition-colors'>
                            {pack.name}
                          </h3>
                          <p className='text-gray-600 mb-4'>{pack.description}</p>

                          <ul className='mb-6 space-y-2'>
                            {pack.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className='flex items-start'>
                                <div className='h-5 w-5 text-facebook mr-2 mt-0.5 flex-shrink-0 relative'>
                                  <svg
                                    className='absolute inset-0 text-facebook'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                  >
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth={2}
                                      d='M5 13l4 4L19 7'
                                    />
                                  </svg>
                                  <div className='absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity'></div>
                                </div>
                                <span className='text-sm'>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className='flex items-center justify-between mt-auto'>
                            <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                              {pack.price}
                            </span>
                            <Button
                              asChild
                              className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-sm'
                            >
                              <Link href={pack.url}>View Pack</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md disabled:opacity-30 z-10 transition-transform hover:scale-110 active:scale-95'
                  aria-label='Previous package'
                >
                  <ChevronLeft className='h-6 w-6 text-facebook' />
                </button>

                <button
                  onClick={handleNext}
                  disabled={activeIndex === regularPacks.length - 1}
                  className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md disabled:opacity-30 z-10 transition-transform hover:scale-110 active:scale-95'
                  aria-label='Next package'
                >
                  <ChevronRight className='h-6 w-6 text-facebook' />
                </button>

                {/* Pagination Indicators */}
                <div className='flex justify-center mt-6 gap-2'>
                  {regularPacks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToCard(index)}
                      className='relative h-2.5 rounded-full bg-gray-300 overflow-hidden transition-all duration-300'
                      style={{
                        width: activeIndex === index ? '1.5rem' : '0.625rem',
                      }}
                      aria-label={`Go to package ${index + 1}`}
                    >
                      <span
                        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                        style={{
                          opacity: activeIndex === index ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out',
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </PageSection>

      {/* Additional Info Section */}
      <PageSection className='pt-6 md:pt-8 pb-0'>
        <div className='mb-10'>
          <div className='flex items-center justify-center gap-3'>
            <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md flex-shrink-0'>
              <Sparkles className='h-6 w-6 text-white' />
            </div>
            <h3 className='text-xl md:text-2xl font-bold relative'>
              <span className='relative z-10'>Need a Custom Solution?</span>
              <div className='absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full'></div>
            </h3>
          </div>
        </div>
      </PageSection>

      <PageSection className='pt-0 pb-12'>
        <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-20 translate-y-1/2 -translate-x-1/4'></div>

          <div className='flex flex-col md:flex-row items-center gap-6 relative z-10'>
            <div>
              <p className='text-gray-600 mb-4 text-center md:text-left'>
                We offer tailored packages for businesses with specific requirements. Contact our
                team to discuss your needs.
              </p>
              <div className='flex justify-center md:justify-start'>
                <Button
                  asChild
                  className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-sm'
                >
                  <Link href='/contact'>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
