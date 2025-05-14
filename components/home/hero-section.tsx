import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Users } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Mobile-specific hero section
  if (isMobile) {
    return (
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 px-6 py-2 text-sm mb-6">
              Facebook Ads Solutions
            </Badge>

            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
              Simplify Your <span className="text-facebook">Facebook Ads</span> Management
            </h1>

            <p className="text-base text-gray-600 mb-8 max-w-md mx-auto">
              Premium packages starting at €50. Get verified Business Manager, Via XMDT, and Pixels to launch
              high-performing campaigns. Trusted by agencies worldwide.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-xs mb-10">
              <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium py-4 w-full rounded-md">
                <Link href="#packages">Explore Packages</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent hover:bg-gray-50 text-gray-700 border-gray-300 font-medium py-4 w-full rounded-md"
              >
                Contact Sales
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-w-md text-gray-600">
              <div className="flex flex-col items-center gap-2 text-center">
                <Shield className="h-6 w-6 text-facebook mb-1" />
                <span className="text-sm">Verified Solutions</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Clock className="h-6 w-6 text-facebook mb-1" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Users className="h-6 w-6 text-facebook mb-1" />
                <span className="text-sm">100+ Agency Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Desktop hero section (unchanged)
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 px-4 py-1.5 text-sm">
              Facebook Ads Solutions
            </Badge>
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
              Simplify Your <span className="text-facebook">Facebook Ads</span> Management
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Premium packages starting at €50. Get verified Business Manager, Via XMDT, and Pixels to launch
              high-performing campaigns. Trusted by agencies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button className="bg-facebook hover:bg-facebook-dark text-white font-medium text-sm md:text-base py-4 md:py-6 px-6 md:px-8 rounded-md">
                <Link href="#packages">Explore Packages</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent hover:bg-gray-50 text-gray-700 border-gray-300 font-medium text-sm md:text-base py-4 md:py-6 px-6 md:px-8 rounded-md"
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
  )
}
