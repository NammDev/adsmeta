"use client"

import SupportingPageLayout from "@/components/supporting-page-layout"
import PageSection from "@/components/page-section"
import { MessageCircleQuestionIcon as QuestionMarkCircle } from "lucide-react"
import BackgroundDecorations from "@/components/background-decorations"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function FAQPage() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <main className="flex min-h-screen flex-col bg-blue-50/10 overflow-x-hidden relative">
      {/* Background decorations - using the SAME component as landing page */}
      <BackgroundDecorations />

      {/* Content sections */}
      <div className="relative z-10">
        <SupportingPageLayout
          title="Frequently Asked Questions"
          subtitle="Find answers to the most common questions about our products and services"
          breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
          heroIcon={<QuestionMarkCircle className="h-10 w-10 text-facebook" />}
        >
          {/* FAQ Categories - Mobile Optimized */}
          <PageSection className="bg-transparent">
            <div className="max-w-5xl mx-auto">
              {/* Desktop view - unchanged */}
              <div className="hidden md:grid md:grid-cols-4 md:gap-4">
                {[
                  { name: "Products", icon: "📦", count: 8 },
                  { name: "Ordering", icon: "🛒", count: 6 },
                  { name: "Delivery", icon: "🚚", count: 5 },
                  { name: "Support", icon: "🤝", count: 7 },
                ].map((category, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} questions</p>
                  </div>
                ))}
              </div>

              {/* Mobile view - single line */}
              <div className="flex md:hidden overflow-x-auto pb-2 gap-3">
                {[
                  { name: "Products", icon: "📦" },
                  { name: "Ordering", icon: "🛒" },
                  { name: "Delivery", icon: "🚚" },
                  { name: "Support", icon: "🤝" },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2"
                  >
                    <span>{category.icon}</span>
                    <span className="font-medium text-sm">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </PageSection>

          {/* Product FAQs - Mobile Optimized */}
          <PageSection className="bg-transparent">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Product Questions</h2>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y">
                {[
                  {
                    question: "What is a Facebook Business Manager?",
                    answer:
                      "A tool that helps businesses manage Facebook Pages and ad accounts in one place without sharing login information.",
                  },
                  {
                    question: "What's in the BM1 $250 Limit package?",
                    answer:
                      "A verified Facebook Business Manager with $250 ad spend limit, 1 ad account, and basic verification.",
                  },
                  {
                    question: "Starter Pack vs Pro Pack?",
                    answer:
                      "Starter Pack: beginners, lower limits. Pro Pack: higher limits, multiple ad accounts, advanced verification.",
                  },
                  {
                    question: "Are these accounts safe?",
                    answer: "Yes, all accounts are properly created and verified according to Facebook's policies.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="p-4 md:p-6">
                    <h3 className="font-medium text-base md:text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-sm md:text-base text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </PageSection>

          {/* Ordering FAQs - Mobile Optimized */}
          <PageSection className="bg-transparent">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Ordering & Payment</h2>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y">
                {[
                  {
                    question: "How do I place an order?",
                    answer: "Select your product, click 'Buy Now', and follow the checkout process.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "Credit cards, PayPal, and cryptocurrencies (Bitcoin, Ethereum, USDT).",
                  },
                  {
                    question: "Is my payment information secure?",
                    answer: "Yes, we use industry-standard encryption and secure payment processors.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="p-4 md:p-6">
                    <h3 className="font-medium text-base md:text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-sm md:text-base text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </PageSection>
        </SupportingPageLayout>
      </div>
    </main>
  )
}
