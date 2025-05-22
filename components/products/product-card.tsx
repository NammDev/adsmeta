'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import { useState, useEffect } from 'react'
import { CartNotification } from '@/components/cart/cart-notification'
import { H3, Body, Small } from '@/components/typography'

interface ProductCardProps {
  title: string
  description: string
  price: number
  features: string[]
  href: string
  isPopular?: boolean
  id?: string
  image?: string
  category?: string
}

export default function ProductCard({
  title,
  description,
  price,
  features,
  href,
  isPopular = false,
  id = title.toLowerCase().replace(/\s+/g, '-'),
  image = '/placeholder.svg?height=100&width=100&query=' + encodeURIComponent(title),
  category = 'pack',
}: ProductCardProps) {
  const { addItem, openCart } = useCart() || {}
  const [isAdding, setIsAdding] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [addedItem, setAddedItem] = useState<any>(null)
  const [isMobile, setIsMobile] = useState(false)

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

  const handleAddToCart = () => {
    if (!addItem) {
      console.error('Cart functionality not available')
      return
    }

    setIsAdding(true)

    try {
      const item = {
        id,
        name: title,
        price,
        quantity: 1,
        image,
        category,
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
      setTimeout(() => setIsAdding(false), 500)
    }
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
  }

  return (
    <>
      <Card
        className={`border ${
          isPopular ? 'border-2 border-facebook' : 'border-gray-200'
        } rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md relative`}
      >
        {isPopular && (
          <div className='absolute top-0 right-0 bg-facebook text-white px-2 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-medium'>
            Most Popular
          </div>
        )}
        <CardContent className='p-4 sm:p-6 md:p-8'>
          <div className='mb-4 sm:mb-6'>
            <H3 className='mb-1 sm:mb-2'>{title}</H3>
            <Body className='text-gray-600'>{description}</Body>
            <div className='mt-3 sm:mt-4 flex items-end'>
              <span className='text-2xl sm:text-4xl font-bold text-gray-900'>€{price}</span>
              <span className='text-gray-500 ml-2 text-sm sm:text-base'>one-time</span>
            </div>
          </div>
          <ul className='space-y-2 sm:space-y-4 mb-4 sm:mb-8'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-start gap-2 sm:gap-3'>
                <CheckCircle className='h-4 w-4 sm:h-5 sm:w-5 text-facebook mt-0.5 flex-shrink-0' />
                <Small className='text-gray-700'>{feature}</Small>
              </li>
            ))}
          </ul>
          <div className='flex flex-col gap-2 sm:gap-3'>
            <Button
              className='bg-facebook hover:bg-facebook-dark text-white font-medium w-full py-3 sm:py-6 text-sm sm:text-base'
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </Button>
            <Link href={href} className='w-full' scroll={true}>
              <Button
                variant='outline'
                className='text-gray-700 border-gray-300 hover:bg-gray-50 w-full py-3 sm:py-6 text-sm sm:text-base'
              >
                Learn More
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Cart notification for mobile only */}
      {isMobile && (
        <CartNotification
          show={showNotification}
          item={addedItem}
          onClose={handleCloseNotification}
        />
      )}
    </>
  )
}
