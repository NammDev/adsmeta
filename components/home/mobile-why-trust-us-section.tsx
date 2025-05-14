import { Shield, Zap, BanknoteIcon } from "lucide-react"

export default function MobileWhyTrustUsSection() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Trust Us</h2>
          <p className="text-lg text-gray-600">Reasons to choose our services</p>
        </div>

        <div className="space-y-4">
          {/* Verified Products Card */}
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-facebook" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Products</h3>
                <p className="text-gray-600">All our products are verified and tested for quality and performance.</p>
              </div>
            </div>
          </div>

          {/* Fast Support Card */}
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-amber-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Support</h3>
                <p className="text-gray-600">Get help within 24 hours from our dedicated support team.</p>
              </div>
            </div>
          </div>

          {/* Money-back Guarantee Card */}
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 flex items-center justify-center">
                  <BanknoteIcon className="h-10 w-10 text-amber-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Money-back Guarantee</h3>
                <p className="text-gray-600">Not satisfied? Get your money back within 7 days, no questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
