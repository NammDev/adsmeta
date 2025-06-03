"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-media-query"
import { openEmail, openTelegram, openWhatsApp } from "@/lib/utils"

export default function NewsletterSection({ className }: { className?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section className={`relative overflow-hidden ${className || "py-16"}`}>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Mobile Design */}
          {isMobile ? (
            <div className="space-y-8">
              {/* Newsletter Subscription - Mobile */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-blue-100/50">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-30 blur-md"></div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3 relative z-10">
                  Get updates and special offers
                </h3>
                <div className="flex flex-col space-y-3 relative z-10 my-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="rounded-lg border-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 shadow-md">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Contact Options - Mobile */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-purple-100/50">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-md"></div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4 relative z-10">
                  Contact us directly
                </h3>
                <div className="space-y-5 relative z-10">
                  {/* WhatsApp */}
                  <div
                    onClick={() => openWhatsApp()}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 hover:from-[#25D366]/15 hover:to-[#25D366]/10 transition-colors border border-[#25D366]/20 shadow-sm cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">WhatsApp Support</h4>
                      <p className="text-sm text-gray-600">Available 24/7 for urgent inquiries</p>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div
                    onClick={() => openTelegram()}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-[#0088cc]/10 to-[#0088cc]/5 hover:from-[#0088cc]/15 hover:to-[#0088cc]/10 transition-colors border border-[#0088cc]/20 shadow-sm cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0088cc] to-[#0055aa] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Telegram Channel</h4>
                      <p className="text-sm text-gray-600">
                        Join our channel for updates and offers
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div
                    onClick={() => openEmail()}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-100/50 to-indigo-100/50 hover:from-blue-100 hover:to-indigo-100 transition-colors border border-blue-200/30 shadow-sm cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email Support</h4>
                      <p className="text-sm text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop Design - Original */
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 lg:gap-24 relative">
              {/* Newsletter Subscription */}
              <div className="flex-1 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 blur-3xl"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">
                  <span className="relative inline-block">
                    Get updates and special offers
                    <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-50 rounded-full"></div>
                  </span>
                </h3>
                <div className="flex relative z-10 my-8">
                  <Input
                    type="email"
                    placeholder="Enter your email address..."
                    className="rounded-r-none border-r-0 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                  <Button className="rounded-l-none bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 shadow-md">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Contact Options */}
              <div className="flex-1 space-y-4 relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">
                  <span className="relative inline-block">
                    Contact us directly
                    <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 to-pink-200 opacity-50 rounded-full"></div>
                  </span>
                </h3>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 group relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      onClick={() => openWhatsApp()}
                      className="text-gray-800 font-medium group-hover:text-[#25D366] transition-colors cursor-pointer"
                    >
                      WhatsApp Support
                    </div>
                    <p className="text-sm text-gray-600">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-center gap-3 group relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0088cc] to-[#0055aa] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      onClick={() => openTelegram()}
                      className="text-gray-800 font-medium group-hover:text-[#25D366] transition-colors cursor-pointer"
                    >
                      Telegram Channel
                    </div>
                    <p className="text-sm text-gray-600">Join our channel for updates and offers</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 group relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div
                      onClick={() => openEmail()}
                      className="text-gray-800 font-medium group-hover:text-[#25D366] transition-colors cursor-pointer"
                    >
                      Email Support
                    </div>
                    <p className="text-sm text-gray-600">Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
