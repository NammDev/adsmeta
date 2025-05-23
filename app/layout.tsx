import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LoadingProvider } from "@/context/loading-context"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
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
