"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    console.log("Subscribing email:", email)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest updates, tips, and special offers.
          </p>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
              Thank you for subscribing! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-facebook"
              />
              <Button type="submit" className="bg-facebook hover:bg-facebook/90">
                {isMobile ? "Subscribe" : "Subscribe to Newsletter"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
