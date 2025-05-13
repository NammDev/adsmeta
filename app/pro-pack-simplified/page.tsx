import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Tag } from "lucide-react"

export default function ProPackSimplified() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-6 px-3 py-1">Pro Pack</Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Scale Your <span className="text-blue-600">Facebook Ads</span> With Confidence
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                The perfect solution for marketers ready to scale their campaigns. Get verified accounts and multiple
                payment methods to maximize your advertising potential for just €150.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-base py-3 px-6 rounded-md">
                  Buy Now for €150
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-gray-50 text-gray-700 border-gray-300 font-medium text-base py-3 px-6 rounded-md"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Verified Accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>7-Day Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-blue-600" />
                  <span>Save €10</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500&query=facebook ads campaign manager dashboard"
                  alt="Pro Pack Dashboard"
                  width={500}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium">Perfect For</div>
                <div className="text-xl font-bold">Scaling Up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
