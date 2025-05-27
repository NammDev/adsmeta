import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './prose.css'
import SiteHeader from '@/components/layout/site-header'
import { CartProvider } from '@/context/cart-context'
import { LoadingProvider } from '@/context/loading-context'
import SocialButtons from '@/components/layout/social-buttons'
import { CartDrawer } from '@/components/cart/cart-drawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GoAds - Buy Facebook Profiles, Verified BMs, Pages',
  description: 'Premium Facebook Ads solutions for businesses and marketers',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden pt-20 bg-blue-50/10`}>
        <CartProvider>
          <LoadingProvider>
            <SiteHeader />
            <div className="flex min-h-screen flex-col overflow-x-hidden">
              <main className="flex-1 overflow-x-hidden">{children}</main>
            </div>
            <CartDrawer />
            <SocialButtons />
          </LoadingProvider>
        </CartProvider>
      </body>
    </html>
  )
}
