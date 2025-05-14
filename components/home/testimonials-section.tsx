import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-6 md:py-12 bg-lightblue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Testimonials</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            What Our Clients Say
          </h2>
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
  )
}
