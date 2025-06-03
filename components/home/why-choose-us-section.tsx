import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Tag } from "lucide-react"
import SectionHeader from "../ui/section-header"

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <SectionHeader badge="Why Us" title="Why Agencies Trust Us" />

        {/* Mobile view (stacked cards with horizontal layout) */}
        <div className="md:hidden space-y-4">
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Quality</h3>
                <p className="text-gray-600">
                  All accounts verified with 2-3 green line tick for maximum performance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Professional support via Telegram & WhatsApp whenever you need assistance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Tag className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees. Simple, clear pricing for all our products and packages.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop view (original design) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 relative inline-block">
              <span>Verified Quality</span>
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-50 transition-opacity rounded-full"></div>
            </h3>
            <p className="text-gray-600">
              All accounts verified with 2-3 green line tick for maximum performance.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 relative inline-block">
              <span>24/7 Support</span>
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-50 transition-opacity rounded-full"></div>
            </h3>
            <p className="text-gray-600">
              Professional support via Telegram & WhatsApp whenever you need assistance.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Tag className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 relative inline-block">
              <span>Transparent Pricing</span>
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-200 to-orange-200 opacity-0 group-hover:opacity-50 transition-opacity rounded-full"></div>
            </h3>
            <p className="text-gray-600">
              No hidden fees. Simple, clear pricing for all our products and packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
