import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { SiteHeader } from "@/components/site-header"
import ScrollToTop from "@/components/scroll-to-top"
// Remove the SiteFooter import as it's likely being included elsewhere
// import SiteFooter from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EasyAdsPack - Facebook Ads Solutions",
  description: "Premium Facebook advertising solutions for agencies and businesses",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ScrollToTop />
          <SiteHeader />
          {children}
          {/* Remove the SiteFooter component from here */}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
