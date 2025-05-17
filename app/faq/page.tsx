"use client"

import SupportingPageLayout from "@/components/supporting-page-layout"
import { useMediaQuery } from "@/hooks/use-media-query"
import { HelpCircle, ShoppingCart, Package, Truck, HeadphonesIcon } from "lucide-react"

export default function FAQPage() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <SupportingPageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to the most common questions about our products and services"
    >
      {/* FAQ Categories - Background removed */}
      <div className="py-16 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">FAQ Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our most common question categories to find the answers you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Products",
                icon: <Package className="h-8 w-8" />,
                count: 8,
                description: "Questions about our Facebook products and services",
              },
              {
                name: "Ordering",
                icon: <ShoppingCart className="h-8 w-8" />,
                count: 6,
                description: "How to place orders and payment options",
              },
              {
                name: "Delivery",
                icon: <Truck className="h-8 w-8" />,
                count: 5,
                description: "Delivery times and account access",
              },
              {
                name: "Support",
                icon: <HeadphonesIcon className="h-8 w-8" />,
                count: 7,
                description: "Get help with your purchase",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-facebook mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="inline-block px-3 py-1 bg-blue-50 text-facebook text-sm font-medium rounded-full">
                  {category.count} questions
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product FAQs - Background removed */}
      <div className="py-16 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Product Questions</h2>
              <p className="text-gray-600">
                Everything you need to know about our Facebook Business Manager accounts and packages
              </p>
              <div className="hidden md:block mt-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-facebook">
                  <Package className="h-10 w-10" />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="space-y-6">
                {[
                  {
                    question: "What is a Facebook Business Manager?",
                    answer:
                      "A Facebook Business Manager is a tool that helps businesses manage their Facebook Pages and ad accounts in one place without sharing login information. It provides a central location to manage assets and user permissions.",
                  },
                  {
                    question: "What's included in the BM1 $250 Limit package?",
                    answer:
                      "The BM1 $250 Limit package includes a verified Facebook Business Manager with a $250 ad spend limit, 1 ad account, and basic verification. It's perfect for beginners or small businesses just starting with Facebook advertising.",
                  },
                  {
                    question: "What's the difference between Starter Pack and Pro Pack?",
                    answer:
                      "The Starter Pack is designed for beginners with lower spending limits and basic features. The Pro Pack offers higher spending limits, multiple ad accounts, and advanced verification, making it suitable for established businesses and agencies.",
                  },
                  {
                    question: "Are these accounts safe to use?",
                    answer:
                      "Yes, all our accounts are properly created and verified according to Facebook's policies. We follow all guidelines to ensure the accounts remain in good standing and minimize the risk of restrictions.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-blue-50/30 rounded-xl p-6 hover:bg-blue-50/50 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                      <HelpCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-facebook" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-600 ml-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ordering FAQs - Background removed */}
      <div className="py-16 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ordering & Payment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Information about our ordering process and payment options
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                question: "How do I place an order?",
                answer:
                  "Select your product, click 'Buy Now', and follow the checkout process. You'll receive access details after payment confirmation.",
                icon: <ShoppingCart className="h-6 w-6" />,
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept credit cards, PayPal, and cryptocurrencies including Bitcoin, Ethereum, and USDT for your convenience.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                ),
              },
              {
                question: "Is my payment information secure?",
                answer:
                  "Yes, we use industry-standard encryption and secure payment processors to protect your payment information.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ),
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col h-full"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-facebook mb-4">
                  {faq.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 flex-grow">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SupportingPageLayout>
  )
}
