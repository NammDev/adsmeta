"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  Clock,
  ExternalLink,
  CheckCircle,
  HelpCircle,
  Copy,
  Check,
} from "lucide-react"
import SupportingPageLayout from "@/components/layout/supporting-page-layout"
import PageSection from "@/components/page-section"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/ui/section-header"
import { CONTACT_INFO } from "@/config"
import { openTelegram, openWhatsApp } from "@/lib/utils"
import { useState } from "react"

// Function to save contact information
function useSaveContact() {
  const [copied, setCopied] = useState(false)

  const saveContact = async () => {
    const contactInfo = {
      name: "GoAds Support",
      phone: CONTACT_INFO.phone,
      telegram: CONTACT_INFO.telegram,
      email: CONTACT_INFO.email,
    }

    // Try to use Web Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: "GoAds Contact Information",
          text: `Contact GoAds Support:\nPhone: ${contactInfo.phone}\nTelegram: ${contactInfo.telegram}\nEmail: ${contactInfo.email}`,
        })
        return
      } catch (err) {
        console.log("Error sharing:", err)
      }
    }

    // Fallback to clipboard copy
    const text = `GoAds Support\nPhone: ${contactInfo.phone}\nTelegram: ${contactInfo.telegram}\nEmail: ${contactInfo.email}`

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return { saveContact, copied }
}

export default function ContactPage() {
  const { saveContact, copied } = useSaveContact()

  return (
    <SupportingPageLayout
      title="Contact Us"
      subtitle="We're here to help with any questions you might have"
    >
      {/* Title Section with proper spacing */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <SectionHeader
          badge="Fast Response Channels"
          title="Connect With Us Instantly"
          subtitle="Get the fastest support through our messaging channels"
          badgeClassName="bg-gradient-to-r from-pink-500 to-purple-600"
        />
      </PageSection>

      {/* Messaging Channels Section - No top padding */}
      <PageSection className="pt-0 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Colorful Messaging Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp Card - Enhanced with gradients and effects */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-green-300/5 rounded-bl-full"></div>
              <div className="p-6 flex items-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-green-800 group-hover:text-green-700">
                    WhatsApp Support
                  </h3>
                  <p className="text-green-700 font-medium mb-4">{CONTACT_INFO.phone}</p>
                  <div className="flex space-x-3">
                    <Button
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-md"
                      onClick={() => openWhatsApp()}
                    >
                      <div className="flex items-center">
                        <MessageCircle className="mr-2 h-4 w-4" /> Chat Now
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-400 text-green-700 hover:bg-green-50"
                      onClick={saveContact}
                    >
                      <div className="flex items-center">
                        {copied ? (
                          <>
                            <Check className="mr-2 h-4 w-4" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-2 h-4 w-4" /> Save Contact
                          </>
                        )}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-green-50 p-4 border-t border-green-100">
                <p className="text-sm text-green-800 flex items-center">
                  <span className="inline-block w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-2 animate-pulse"></span>
                  Available 24/7 for urgent inquiries
                </p>
              </div>
            </div>

            {/* Telegram Card - Enhanced with gradients and effects */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-300/5 rounded-bl-full"></div>
              <div className="p-6 flex items-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-blue-800 group-hover:text-blue-700">
                    Telegram Channel
                  </h3>
                  <p className="text-blue-700 font-medium mb-4">{CONTACT_INFO.telegram}</p>
                  <div className="flex space-x-3">
                    <Button
                      onClick={() => openTelegram()}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-md"
                    >
                      <div className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Join Channel
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-700 hover:bg-blue-50"
                      onClick={() => openTelegram()}
                    >
                      Direct Message
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 border-t border-blue-100">
                <p className="text-sm text-blue-800 flex items-center">
                  <span className="inline-block w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 animate-pulse"></span>
                  Fast responses and product updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Additional Options Section */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <SectionHeader
          badge="Additional Options"
          title="Other Ways to Reach Us"
          subtitle="While WhatsApp and Telegram offer the fastest response times, you can also reach us through these channels"
          badgeClassName="bg-gradient-to-r from-purple-500 to-indigo-600"
          borderClassName="from-purple-400 to-indigo-500 h-2"
        />
      </PageSection>

      {/* Contact Methods Section - No top padding */}
      <PageSection className="pt-0 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods with Gradient Icons */}
            <div className="space-y-8">
              <div className="flex items-start space-x-5 group">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-xl text-white shadow-md group-hover:shadow-lg transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-900 mb-1 group-hover:text-purple-700 transition-colors">
                    Email Us
                  </h3>
                  <p className="text-purple-800 font-medium">{CONTACT_INFO.email}</p>
                  <p className="text-purple-600 text-sm mt-2 flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 p-4 rounded-xl text-white shadow-md group-hover:shadow-lg transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-indigo-900 mb-1 group-hover:text-indigo-700 transition-colors">
                    Business Hours
                  </h3>
                  <p className="text-indigo-800 font-medium">Monday-Friday: 9am-6pm EST</p>
                  <p className="text-indigo-600 text-sm mt-2 flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> We're closed on weekends and holidays
                  </p>
                </div>
              </div>
            </div>

            {/* QR Codes with Gradient Card */}
            <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg border border-purple-100/50 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-300/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-400/10 to-purple-300/5 rounded-tr-full"></div>

              <h3 className="font-bold text-xl text-indigo-900 mb-4 relative inline-block">
                Scan to Connect Instantly
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </h3>
              <p className="text-indigo-700 mb-6">
                Scan these QR codes with your phone to connect with us directly
              </p>

              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="bg-white p-2 rounded-lg shadow-md inline-block border border-green-200 hover:shadow-lg transition-all">
                    <Image
                      src="/about/whatsapp.png"
                      alt="WhatsApp QR Code"
                      width={120}
                      height={120}
                      className="rounded"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-400/5 to-transparent rounded-lg"></div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-green-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-2 rounded-lg shadow-md inline-block border border-blue-200 hover:shadow-lg transition-all">
                    <Image
                      src="/about/telegram.png"
                      alt="Telegram QR Code"
                      width={120}
                      height={120}
                      className="rounded"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 to-transparent rounded-lg"></div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-blue-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Telegram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* FAQ Section */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <SectionHeader
          badge="Quick Answers"
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions"
          badgeClassName="bg-gradient-to-r from-blue-500 to-cyan-600"
          borderClassName="from-blue-400 to-cyan-500 h-2"
        />
      </PageSection>

      {/* FAQ Cards - No top padding */}
      <PageSection className="pt-0 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Colorful FAQ Cards */}
          <div className="grid gap-6">
            {[
              {
                question: "How quickly will I receive my order?",
                answer:
                  "Most orders are delivered instantly after payment confirmation. You'll receive access to your purchased items via email.",
                icon: <Clock className="h-5 w-5" />,
                color: "from-blue-400 to-blue-600",
                textColor: "text-blue-900",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes, we offer a 100% replacement guarantee if an account doesn't work at login.",
                icon: <CheckCircle className="h-5 w-5" />,
                color: "from-green-400 to-green-600",
                textColor: "text-green-900",
              },
              {
                question: "How can I get help with my purchase?",
                answer:
                  "Our support team is available via WhatsApp and Telegram for immediate assistance. We also respond to emails within 24 hours.",
                icon: <HelpCircle className="h-5 w-5" />,
                color: "from-purple-400 to-purple-600",
                textColor: "text-purple-900",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="p-6 flex">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${faq.color} flex items-center justify-center text-white mr-5 shadow-md`}
                  >
                    {faq.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${faq.textColor} mb-2 group-hover:underline`}>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-all hover:from-blue-600 hover:to-blue-700"
            >
              View all FAQs <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
