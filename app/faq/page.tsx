"use client"

import SupportingPageLayout from "@/components/supporting-page-layout"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  HelpCircle,
  ShoppingCart,
  Package,
  Truck,
  HeadphonesIcon,
  CheckCircle,
  AlertCircle,
  CreditCard,
} from "lucide-react"
import { cn } from "@/lib/utils"
import PageSection from "@/components/page-section"
import { Badge } from "@/components/ui/badge"

export default function FAQPage() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <SupportingPageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to the most common questions about our products and services"
    >
      {/* Page Title Section - Adjusted spacing */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <div className="max-w-5xl mx-auto mb-10">
          {/* Colorful Badge and Section Title */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-md px-4 py-1 text-sm">
                Help Center
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-0 relative inline-block">Frequently Asked Questions</h2>
            </div>
            <div className="mt-2">
              <span className="inline-block w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              Find answers to the most common questions about our products and services
            </p>
          </div>
        </div>
      </PageSection>

      {/* FAQ Categories - Removed top padding */}
      <div className="pb-12 bg-transparent">
        <div className="container px-4 md:px-6">
          {/* Category cards with landing page styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Products",
                icon: <Package className="h-8 w-8" />,
                count: 8,
                description: "Questions about our Facebook products and services",
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                name: "Ordering",
                icon: <ShoppingCart className="h-8 w-8" />,
                count: 6,
                description: "How to place orders and payment options",
                gradient: "from-indigo-500 to-purple-600",
              },
              {
                name: "Delivery",
                icon: <Truck className="h-8 w-8" />,
                count: 5,
                description: "Delivery times and account access",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                name: "Support",
                icon: <HeadphonesIcon className="h-8 w-8" />,
                count: 7,
                description: "Get help with your purchase",
                gradient: "from-pink-500 to-rose-600",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center border border-gray-100 group hover:translate-y-[-2px]"
              >
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br mb-4 text-white",
                    category.gradient,
                  )}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-facebook transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div
                  className={cn(
                    "inline-block px-3 py-1 text-white text-sm font-medium rounded-full bg-gradient-to-r shadow-sm",
                    category.gradient,
                  )}
                >
                  {category.count} questions
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product FAQs - Adjusted padding */}
      <div className="py-12 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              {/* Badge like landing page */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-full shadow-sm mb-4">
                Product Information
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Product Questions
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2"></div>
              </h2>

              <p className="text-gray-600">
                Everything you need to know about our Facebook Business Manager accounts and packages
              </p>

              <div className="hidden md:block mt-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
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
                    className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start group-hover:text-facebook transition-colors">
                      <HelpCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-blue-500" />
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

      {/* Ordering FAQs - Adjusted padding */}
      <div className="py-12 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            {/* Badge and title aligned on same line */}
            <div className="inline-flex items-center gap-3 mb-2">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-md px-4 py-1 text-sm">
                Payment
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-0">Ordering & Payment</h2>
            </div>
            <div className="mt-2">
              <span className="inline-block w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
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
                gradient: "from-purple-500 to-pink-600",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept credit cards, PayPal, and cryptocurrencies including Bitcoin, Ethereum, and USDT for your convenience.",
                icon: <CreditCard className="h-6 w-6" />,
                gradient: "from-pink-500 to-rose-600",
              },
              {
                question: "Is my payment information secure?",
                answer:
                  "Yes, we use industry-standard encryption and secure payment processors to protect your payment information.",
                icon: <CheckCircle className="h-6 w-6" />,
                gradient: "from-rose-500 to-red-600",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] group"
              >
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-12 h-12 rounded-full text-white mb-4 bg-gradient-to-br",
                    faq.gradient,
                  )}
                >
                  {faq.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-facebook transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600 flex-grow">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional FAQ Section - Adjusted padding */}
      <div className="py-12 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Badge like landing page */}
            <div className="inline-flex items-center gap-3 mb-2">
              <Badge className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-0 shadow-md px-4 py-1 text-sm">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-0">Other Frequently Asked Questions</h2>
            </div>
            <div className="mt-2 mb-10">
              <span className="inline-block w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full"></span>
            </div>

            <div className="space-y-4 mt-6">
              {[
                {
                  question: "How long does it take to set up my account?",
                  answer:
                    "Most accounts are set up within 24-48 hours after purchase. You'll receive login details via email once everything is ready.",
                },
                {
                  question: "Can I upgrade my package later?",
                  answer:
                    "Yes, you can upgrade to a higher package at any time. Contact our support team for assistance with upgrading your account.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer refunds only if we're unable to deliver the services as described. Please review our refund policy for more details.",
                },
                {
                  question: "How do I get support if I have issues?",
                  answer:
                    "We provide 24/7 support via email and live chat. You can also schedule a call with our support team for more complex issues.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden group hover:border-blue-200 transition-colors duration-300"
                >
                  <div className="p-5 flex justify-between items-start cursor-pointer bg-white hover:bg-blue-50/30 transition-colors duration-300">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-facebook transition-colors flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2 text-indigo-500 flex-shrink-0" />
                      {faq.question}
                    </h3>
                  </div>
                  <div className="px-5 pb-5 bg-white">
                    <p className="text-gray-600 ml-7">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SupportingPageLayout>
  )
}
