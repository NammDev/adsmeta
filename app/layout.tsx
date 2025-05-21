import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/site-header'
import { CartProvider } from '@/context/cart-context'
import SocialButtons from '@/components/social-buttons'
import { CartDrawer } from '@/components/cart-drawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GoAds - Buy Facebook Profiles, Verified BMs, Pages',
  description: 'Premium Facebook Ads solutions for businesses and marketers',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='overflow-x-hidden'>
      <body className={`${inter.className} overflow-x-hidden pt-20 bg-blue-50/10`}>
        <CartProvider>
          {/* <TopProgressBar /> */}

          <SiteHeader />
          <div className='flex min-h-screen flex-col overflow-x-hidden'>
            <main className='flex-1 overflow-x-hidden'>{children}</main>
            {/* Remove SiteFooter from here as it's likely included in page components */}
          </div>
          <CartDrawer />
          <SocialButtons />
        </CartProvider>
      </body>
    </html>
  )
}
