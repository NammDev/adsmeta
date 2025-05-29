import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import SectionHeader from "../ui/section-header"

export default function TestimonialsSection() {
  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real feedback from agencies using our solutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 overflow-hidden mr-4 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/avatar/sarah.png"
                      alt="Sarah"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-0">Sarah Johnson</p>
                  <p className="text-sm text-blue-600">Digital Marketing Freelancer</p>
                </div>
              </div>
              <div className="mb-6 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 relative z-10">
                "EasyAdsPack made running FB ads so simple! The Starter Pack had everything I needed
                to launch successful campaigns from day one."
              </p>
              <div className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 inline-block">
                Starter Pack (€50) Customer
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden mr-4 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/avatar/michael.png"
                      alt="Mike"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-0">Michael Chen</p>
                  <p className="text-sm text-purple-600">Small Agency Owner</p>
                </div>
              </div>
              <div className="mb-6 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 relative z-10">
                "The Pro Pack helped me scale my agency's campaigns without restrictions. Their
                support team is responsive and knowledgeable."
              </p>
              <div className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 inline-block">
                Pro Pack (€150) Customer
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 overflow-hidden mr-4 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/avatar/alex.png"
                      alt="John"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-0">John Rodriguez</p>
                  <p className="text-sm text-amber-600">ROAS Agency Director</p>
                </div>
              </div>
              <div className="mb-6 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 relative z-10">
                "Agency Pack is a game-changer for our high-ROAS campaigns. The unlimited BM5 has
                been crucial for our agency's growth and client success."
              </p>
              <div className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 inline-block">
                Agency Pack (€400) Customer
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium text-lg py-6 px-8 rounded-md shadow-md hover:shadow-lg transition-all border-0">
            Join Our Success Stories
          </Button>
        </div>
      </div>
    </section>
  )
}
