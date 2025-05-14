import { Badge } from "@/components/ui/badge"
import { CheckCircle, Headset, Shield, Clock } from "lucide-react"

export default function TrustBuildingSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Our Guarantee</Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                We Stand Behind Our Products
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Every product we offer comes with a satisfaction guarantee and dedicated support to ensure your success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">7-14 day warranty on all products</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">24/7 support via Telegram & WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure payment methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">100+ satisfied clients</span>
                </li>
              </ul>
            </div>
            <div className="bg-lightblue p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-facebook" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Verified Products</h3>
                    <p className="text-gray-600">All our products are thoroughly tested before delivery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-facebook" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Fast Delivery</h3>
                    <p className="text-gray-600">Get your products within hours of purchase.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headset className="h-6 w-6 text-facebook" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Expert Support</h3>
                    <p className="text-gray-600">Our team is always available to help you succeed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
