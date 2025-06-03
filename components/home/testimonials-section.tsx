import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import SectionHeader from "../ui/section-header"
import { TESTIMONIALS } from "@/config"

export default function TestimonialsSection() {
  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <SectionHeader badge="Testimonials" title="What Our Clients Say" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8 relative">
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${testimonial.gradient.card} rounded-full opacity-20 -translate-y-1/2 translate-x-1/2`}
                ></div>
                <div className="flex items-center mb-6 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient.avatar} overflow-hidden mr-4 p-0.5`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-0">{testimonial.name}</p>
                    <p className={`text-sm ${testimonial.gradient.text}`}>{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-6 flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 relative z-10">"{testimonial.testimonial}"</p>
                <div
                  className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.gradient.badge} ${testimonial.gradient.badgeText} inline-block`}
                >
                  {testimonial.pack}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => (window.location.href = "/blog")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium text-lg py-6 px-8 rounded-md shadow-md hover:shadow-lg transition-all border-0"
          >
            Join Our Success Stories
          </Button>
        </div>
      </div>
    </section>
  )
}
