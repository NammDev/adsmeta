import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
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
          <Link href="/" className="hover:text-facebook">Home</Link>
          <span>/</span>
          <Link href="/#packages" className="hover:text-facebook">Packages</Link>
          <span>/</span>
          <span className="text-gray-900">Agency Pack</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg

Now, let's update the main page to link to these product pages:

```typescriptreact file=\"app/page.tsx"
[v0-no-op-code-block-prefix]import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Headset, Tag, Users, ChevronDown, Menu, Shield, Clock, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                fill="#1877F2"
              />
              <path
                d="M21 16H18V14C18 13.448 18.448 13 19 13H20V10H18C15.791 10 14 11.791 14 14V16H12V19H14V26H18V19H20L21 16Z"
                fill="white"
              />
            </svg>
            <span className="text-2xl font-medium text-gray-900">EasyAdsPack</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-base text-gray-700 hover:text-facebook transition-colors">
              Home
            </Link>
            <Link href="#packages" className="text-base text-gray-700 hover:text-facebook transition-colors">
              Packages
            </Link>
            <Link href="#products" className="text-base text-gray-700 hover:text-facebook transition-colors">
              Products
            </Link>
            <Link href="#about" className="text-base text-gray-700 hover:text-facebook transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="text-base text-gray-700 hover:text-facebook transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-gray-700">
              <span className="text-sm">EN</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium">Get Started</Button>
            <button className="md:hidden text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-28">
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-medium">
            Trusted by agencies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8">
                <Image src={`/placeholder.svg?height=32&width=120`} alt={`Partner logo ${i}`} width={120} height={32} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect solution to launch and scale your Facebook advertising campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Pack */}
            <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Starter Pack</h3>
                  <p className="text-gray-600">Perfect for beginners</p>
                  <div className="mt-4 flex items-end">
                    <span className="text-4xl font-bold text-gray-900">€50</span>
                    <span className="text-gray-500 ml-2">one-time</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">1 Unverified BM (€10, code 5)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">1 Via XMDT Asia (€25, code 7)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">1 Pixel (€15)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">7-Day Support</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium w-full py-6">
                    <Link href="/starter-pack">Buy Now</Link>
                  </Button>
                  <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 w-full">
                    <Link href="/starter-pack">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro Pack */}
            <Card className="border-2 border-facebook rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md relative">
              <div className="absolute top-0 right-0 bg-facebook text-white px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Pack</h3>
                  <p className="text-gray-600">Scale your campaigns</p>
                  <div className="mt-4 flex items-end">
                    <span className="text-4xl font-bold text-gray-900">€150</span>
                    <span className="text-gray-500 ml-2">one-time</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">1 Verified BM (€80, code 1)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">2 Via XMDT (1 Asia €25, 1 USA €40)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">1 Pixel (€15)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">7-Day Warranty</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium w-full py-6">
                    <Link href="/pro-pack">Buy Now</Link>
                  </Button>
                  <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 w-full">
                    <Link href="/pro-pack">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agency Pack */}
            <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Agency Pack</h3>
                  <p className="text-gray-600">For high-ROAS campaigns</p>
                  <div className="mt-4 flex items-end">
                    <span className="text-4xl font-bold text-gray-900">€400</span>
                    <span className="text-gray-500 ml-2">one-time</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">1 Verified BM5 Unlimited (€350, code 4)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">2 Via XMDT USA (€40 x 2, code 9)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">1 Pixel (€15)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">14-Day Warranty</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium w-full py-6">
                    <Link href="/agency-pack">Buy Now</Link>
                  </Button>
                  <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 w-full">
                    <Link href="/agency-pack">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-facebook/10 text-facebook text-center py-6 px-8 rounded-lg">
            <p className="text-lg font-medium">
              First 50 Buyers Get 10% Off! Use Code: <span className="font-bold">META10</span>
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Products</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Individual Solutions</h2>
            <p className="text-lg text-gray-600">Build your custom solution with our individual products</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" className="bg-white text-gray-900 border-gray-200 hover:bg-gray-50">
              All Products
            </Button>
            <Button variant="outline" className="bg-white text-gray-900 border-gray-200 hover:bg-gray-50">
              Business Manager
            </Button>
            <Button variant="outline" className="bg-white text-gray-900 border-gray-200 hover:bg-gray-50">
              Via XMDT
            </Button>
            <Button variant="outline" className="bg-white text-gray-900 border-gray-200 hover:bg-gray-50">
              Pixel
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Unverified BM */}
            <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="aspect-square relative bg-gray-50 p-8">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Unverified BM"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Unverified BM</h3>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Code 5</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">Great for testing campaigns. 7-day support.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">€10</span>
                  <Button className="bg-facebook hover:bg-facebook-dark text-white">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            {/* Via XMDT Asia */}
            <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="aspect-square relative bg-gray-50 p-8">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Via XMDT Asia"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Via XMDT Asia</h3>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Code 7</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">2 green line tick, ready to use. 7-day warranty.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">€25</span>
                  <Button className="bg-facebook hover:bg-facebook-dark text-white">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            {/* Via XMDT USA */}
            <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="aspect-square relative bg-gray-50 p-8">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Via XMDT USA"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Via XMDT USA</h3>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Code 9</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">Perfect for international ads. 7-day warranty.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">€40</span>
                  <Button className="bg-facebook hover:bg-facebook-dark text-white">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            {/* Verified BM */}
            <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="aspect-square relative bg-gray-50 p-8">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Verified BM"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Verified BM</h3>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Code 1</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">Launch ads instantly. 7-day support.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">€80</span>
                  <Button className="bg-facebook hover:bg-facebook-dark text-white">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-gray-50">
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
              <div className="bg-gray-50 p-8 rounded-lg">
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our products and services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border border-gray-200 rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is a Business Manager (BM)?</h3>
                <p className="text-gray-600">
                  A Business Manager is a tool that helps you organize and manage your business assets on Facebook,
                  including ad accounts, Pages, and apps, all in one place.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is Via XMDT?</h3>
                <p className="text-gray-600">
                  Via XMDT is a verified payment method that allows you to run Facebook ads without restrictions. It
                  comes with 2 green line ticks in the Account Quality section.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How long is the warranty period?</h3>
                <p className="text-gray-600">
                  Our Starter and Pro Packs come with a 7-day warranty, while the Agency Pack includes a 14-day
                  warranty. During this period, we provide full support and replacements if needed.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do I receive my products after purchase?</h3>
                <p className="text-gray-600">
                  After your payment is confirmed, we'll deliver your products via email or Telegram within 24 hours
                  (usually much faster). We'll also provide setup instructions and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Contact</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions about our solutions? Our team is ready to help you choose the right package for your
                  needs.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-facebook"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">WhatsApp Support</h3>
                      <Link href="https://wa.me/84123456789" className="text-facebook hover:underline">
                        +84 123 456 789
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">Available 24/7 for urgent inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-facebook"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Telegram Channel</h3>
                      <Link href="https://t.me/EasyAdsPack" className="text-facebook hover:underline">
                        @EasyAdsPack
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">Join our channel for updates and offers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-facebook"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Email Support</h3>
                      <Link href="mailto:support@easyadspack.com" className="text-facebook hover:underline">
                        support@easyadspack.com
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      className="w-full border-gray-300 focus:border-facebook focus:ring-facebook"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full border-gray-300 focus:border-facebook focus:ring-facebook"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="w-full min-h-[150px] border-gray-300 focus:border-facebook focus:ring-facebook"
                    />
                  </div>
                  <Button className="w-full bg-facebook hover:bg-facebook-dark text-white font-medium py-6">
                    Send Message
                  </Button>
                </form>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M21 16H18V14C18 13.448 18.448 13 19 13H20V10H18C15.791 10 14 11.791 14 14V16H12V19H14V26H18V19H20L21 16Z"
                    fill="white"
                  />
                </svg>
                <span className="text-2xl font-medium text-white">EasyAdsPack</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Professional Facebook advertising solutions for agencies and marketers worldwide.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Products</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Business Manager
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Via XMDT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Pixels
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-facebook">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 EasyAdsPack. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="text-gray-400 hover:text-facebook text-sm">
                  Terms
                </Link>
                <Link href="#" className="text-gray-400 hover:text-facebook text-sm">
                  Privacy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-facebook text-sm">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
