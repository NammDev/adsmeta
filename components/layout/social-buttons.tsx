'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Mail, X } from 'lucide-react'
import { ChatBubbleIcon } from './chat-bubble-icon'
// Add the import for the openWhatsAppChat function
import { cn, openWhatsAppChat } from '@/lib/utils'

interface SocialButtonsProps {
  threshold?: number
  className?: string
}

export default function SocialButtons({ threshold = 300, className }: SocialButtonsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Handle scroll event to show/hide buttons
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Replace the openWhatsApp function with this:
  // Open WhatsApp function
  const openWhatsApp = () => {
    openWhatsAppChat("Hello! I'm interested in your products.")
  }

  // Open Telegram function
  const openTelegram = () => {
    // Replace with your actual Telegram username or link
    const username = 'yourusername'
    window.open(`https://t.me/${username}`, '_blank')
  }

  // Open Gmail function
  const openGmail = () => {
    // Replace with your actual email, subject and body
    const email = 'your-email@gmail.com'
    const subject = 'Inquiry about your products'
    const body = "Hello! I'm interested in learning more about your products."
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    )
  }

  const buttonStyle = {
    width: '60px',
    height: '60px',
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-40 transition-all duration-300',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none',
        className
      )}
    >
      {/* Main Button */}
      <div className='relative'>
        <Button
          onClick={toggleMenu}
          style={buttonStyle}
          className={cn(
            'rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white p-0 flex items-center justify-center z-50',
            'transition-all duration-500 ease-in-out',
            isOpen ? 'shadow-xl' : ''
          )}
          aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
          aria-expanded={isOpen}
        >
          <div
            className={cn(
              'transition-all duration-500 ease-in-out',
              isOpen ? 'rotate-[360deg] scale-110' : 'rotate-0 scale-100'
            )}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isOpen ? (
              <X style={{ width: '32px', height: '32px', minWidth: '32px', minHeight: '32px' }} />
            ) : (
              <ChatBubbleIcon width={32} height={32} />
            )}
          </div>
        </Button>
      </div>

      {/* WhatsApp Button */}
      <div
        className={cn(
          'absolute right-0 transition-all duration-500 ease-in-out',
          isOpen
            ? 'bottom-[220px] opacity-100 scale-100'
            : 'bottom-0 opacity-0 scale-0 pointer-events-none'
        )}
      >
        <Button
          onClick={openWhatsApp}
          style={buttonStyle}
          className='rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl'
          aria-label='Contact on WhatsApp'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            style={{ width: '32px', height: '32px', minWidth: '32px', minHeight: '32px' }}
          >
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
          </svg>
        </Button>
      </div>

      {/* Telegram Button */}
      <div
        className={cn(
          'absolute right-0 transition-all duration-500 ease-in-out',
          isOpen
            ? 'bottom-[150px] opacity-100 scale-100'
            : 'bottom-0 opacity-0 scale-0 pointer-events-none'
        )}
      >
        <Button
          onClick={openTelegram}
          style={buttonStyle}
          className='rounded-full shadow-lg bg-[#0088cc] hover:bg-[#0077b5] text-white p-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl'
          aria-label='Contact on Telegram'
        >
          <Send style={{ width: '32px', height: '32px', minWidth: '32px', minHeight: '32px' }} />
        </Button>
      </div>

      {/* Gmail Button */}
      <div
        className={cn(
          'absolute right-0 transition-all duration-500 ease-in-out',
          isOpen
            ? 'bottom-[80px] opacity-100 scale-100'
            : 'bottom-0 opacity-0 scale-0 pointer-events-none'
        )}
      >
        <Button
          onClick={openGmail}
          style={buttonStyle}
          className='rounded-full shadow-lg bg-[#EA4335] hover:bg-[#D93025] text-white p-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl'
          aria-label='Contact via Email'
        >
          <Mail style={{ width: '32px', height: '32px', minWidth: '32px', minHeight: '32px' }} />
        </Button>
      </div>
    </div>
  )
}
