import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Headset, Tag, Users, Shield, Clock, Star } from "lucide-react"
import PackagesSection from "./packages-section"
import SiteFooter from "@/components/site-footer"
import NewsletterSection from "@/components/newsletter-section"
import ProductsSection from "./products-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 px-4 py-1.5 text-sm">
                Facebook Ads Solutions
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Simplify Your <span className="text-facebook">Facebook Ads</span> Management
              </h1>
              <p className="text-lg text-gray-600">
                Premium packages starting at €50. Get verified Business Manager, Via XMDT, and Pixels to launch
                high-performing campaigns. Trusted by agencies worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium text-base py-6 px-8 rounded-md">
                  <Link href="#packages">Explore Packages</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-gray-50 text-gray-700 border-gray-300 font-medium text-base py-6 px-8 rounded-md"
                >
                  Contact Sales
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 text-gray-600 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-facebook" />
                  <span>Verified Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-facebook" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-facebook" />
                  <span>100+ Agency Clients</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative bg-white p-8 rounded-lg border border-gray-100 shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Facebook Ads Dashboard"
                  width={500}
                  height={400}
                  className="rounded-md"
                />
                <div className="absolute -bottom-6 -right-6 bg-facebook text-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm font-medium">Success Rate</div>
                  <div className="text-3xl font-bold">98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-lightblue">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-medium">
            Trusted by agencies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8">
                <Image
                  src={`/placeholder-32px.png?height=32&width=120`}
                  alt={`Partner logo ${i}`}
                  width={120}
                  height={32}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <PackagesSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Why Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Agencies Trust Us</h2>
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
              <p className="text-gray-600">
                Professional support via Telegram & WhatsApp whenever you need assistance.
              </p>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-lightblue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real feedback from agencies using our solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Sarah"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Digital Marketing Freelancer</p>
                  </div>
                </div>
                <div className="mb-6 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "EasyAdsPack made running FB ads so simple! The Starter Pack had everything I needed to launch
                  successful campaigns from day one."
                </p>
                <p className="text-sm text-gray-500">Starter Pack (€50) Customer</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Mike"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-500">Small Agency Owner</p>
                  </div>
                </div>
                <div className="mb-6 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The Pro Pack helped me scale my agency's campaigns without restrictions. Their support team is
                  responsive and knowledgeable."
                </p>
                <p className="text-sm text-gray-500">Pro Pack (€150) Customer</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="John"
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
                <div className="mb-6 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Agency Pack is a game-changer for our high-ROAS campaigns. The unlimited BM5 has been crucial for our
                  agency's growth and client success."
                </p>
                <p className="text-sm text-gray-500">Agency Pack (€400) Customer</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium text-lg py-6 px-8 rounded-md">
              Join Our Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Our Guarantee</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">We Stand Behind Our Products</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Every product we offer comes with a satisfaction guarantee and dedicated support to ensure your
                  success.
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

      {/* Chat Support Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="rounded-full w-16 h-16 bg-facebook hover:bg-facebook-dark text-white shadow-lg flex items-center justify-center">
          <Headset className="h-8 w-8" />
        </Button>
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
