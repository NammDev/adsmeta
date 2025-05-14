import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Tag } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Why Us</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Why Agencies Trust Us
          </h2>
          <p className="text-lg text-gray-600">Simple solutions that deliver results</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-facebook/10 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-facebook" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Quality</h3>
            <p className="text-gray-600">All accounts verified with 2-3 green line tick for maximum performance.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-facebook/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-facebook" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-600">Professional support via Telegram & WhatsApp whenever you need assistance.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-facebook/10 rounded-full flex items-center justify-center mb-6">
              <Tag className="h-8 w-8 text-facebook" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden fees. Simple, clear pricing for all our products and packages.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
