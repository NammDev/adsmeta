import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Clock, Tag, Star } from "lucide-react"
import ProductPageLayout from "@/components/product-page-layout"

export default function AgencyPack() {
  return (
    <ProductPageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-facebook">
            Home
          </Link>
          <span>/</span>
          <Link href="/#packages" className="hover:text-facebook">
            Packages
          </Link>
          <span>/</span>
          <span className="text-gray-900">Agency Pack</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Premium Solution</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agency Pack</h1>
            <p className="text-xl text-gray-600 mb-6">
              Our most powerful solution for high-ROAS campaigns and serious agencies.
            </p>
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700">4.9/5 from 120+ agencies</span>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-gray-700">Price</span>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-gray-900">€400</span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
              </div>
              <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium w-full py-6 mb-3">
                Add to Cart
              </Button>
              <p className="text-sm text-gray-500 text-center">Secure payment • 14-day warranty • 24/7 support</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">1 Verified BM5 Unlimited</span>
                  <p className="text-gray-600">€350 value, code 4 - our premium business manager</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">2 Via XMDT USA</span>
                  <p className="text-gray-600">€40 x 2, code 9 - premium payment methods</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">1 Pixel</span>
                  <p className="text-gray-600">€15 value - for precise tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">14-Day Warranty</span>
                  <p className="text-gray-600">Extended coverage for peace of mind</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/facebook-agency-pack.png"
              alt="Agency Pack"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-facebook text-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">Total Value</div>
              <div className="text-3xl font-bold">€485</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose the Agency Pack?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-facebook" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unlimited Potential</h3>
                <p className="text-gray-600">
                  BM5 Unlimited allows you to create unlimited ad accounts and pages, perfect for agencies managing
                  multiple clients.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center mb-4">
                  <Tag className="h-6 w-6 text-facebook" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium USA Payments</h3>
                <p className="text-gray-600">
                  Two USA payment methods ensure your ads run smoothly with higher spending limits and fewer
                  restrictions.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-facebook" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Extended Warranty</h3>
                <p className="text-gray-600">
                  Our 14-day warranty gives you twice the coverage of other packages, with priority support from our
                  team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Agencies Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <Image
                      src="/male-marketing-owner.png"
                      alt="John Rodriguez"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">John Rodriguez</p>
                    <p className="text-sm text-gray-500">ROAS Agency Director</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "The Agency Pack has been a game-changer for our business. The unlimited BM5 allows us to manage all
                  our clients without restrictions, and the USA payment methods ensure we can scale campaigns without
                  issues."
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <Image
                      src="/female-ecommerce-owner.png"
                      alt="Sarah Thompson"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Thompson</p>
                    <p className="text-sm text-gray-500">E-commerce Agency Owner</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "We've tried several solutions, but the Agency Pack is by far the most reliable. The extended warranty
                  gives us peace of mind, and the support team is incredibly responsive. Worth every penny for serious
                  agencies."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is a BM5 Unlimited?</h3>
                <p className="text-gray-600">
                  BM5 Unlimited is our premium Business Manager that allows you to create unlimited ad accounts and
                  pages. It's fully verified with the highest spending limits, making it perfect for agencies managing
                  multiple clients.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How does the 14-day warranty work?</h3>
                <p className="text-gray-600">
                  Our 14-day warranty covers any issues with the Business Manager or payment methods. If you experience
                  any problems, we'll provide a replacement or fix the issue at no additional cost within the warranty
                  period.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I upgrade from another package?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade from the Starter or Pro Pack to the Agency Pack. Contact our support team, and
                  we'll apply the value of your current package toward the upgrade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-facebook/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Scale Your Agency?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful agencies using our Agency Pack to deliver exceptional results for their clients.
          </p>
          <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium py-6 px-8">
            Get Started with Agency Pack
          </Button>
        </div>
      </div>
    </ProductPageLayout>
  )
}
