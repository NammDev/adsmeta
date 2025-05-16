import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Tag } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="py-12 md:py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 mb-4 border-0 shadow-md">
            Why Us
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 relative inline-block">
            <span className="relative z-10">Why Agencies Trust Us</span>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600">Simple solutions that deliver results</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 relative inline-block">
              <span>Verified Quality</span>
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-50 transition-opacity rounded-full"></div>
            </h3>
            <p className="text-gray-600">All accounts verified with 2-3 green line tick for maximum performance.</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 relative inline-block">
              <span>24/7 Support</span>
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-50 transition-opacity rounded-full"></div>
            </h3>
            <p className="text-gray-600">Professional support via Telegram & WhatsApp whenever you need assistance.</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Tag className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 relative inline-block">
              <span>Transparent Pricing</span>
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-200 to-orange-200 opacity-0 group-hover:opacity-50 transition-opacity rounded-full"></div>
            </h3>
            <p className="text-gray-600">No hidden fees. Simple, clear pricing for all our products and packages.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
