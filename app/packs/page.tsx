import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package2 } from "lucide-react"
import ClientSupportingPageLayout from "@/components/client-supporting-page-layout"

// Pack type definition
interface Pack {
  id: string
  name: string
  description: string
  price: string
  features: string[]
  image: string
  badge?: string
  url: string
}

export default function PacksPage() {
  // All packs data
  const packs: Pack[] = [
    {
      id: "starter-pack",
      name: "Starter Pack",
      description: "Perfect for beginners starting with Facebook ads",
      price: "€199",
      features: ["1 Verified Business Manager", "1 Ad Account", "Basic setup guide", "Email support"],
      image: "/facebook-starter-pack.png",
      badge: "Popular",
      url: "/starter-pack",
    },
    {
      id: "pro-pack",
      name: "Pro Pack",
      description: "For growing businesses with established ad campaigns",
      price: "€399",
      features: [
        "1 Verified BM5 with $250 limit",
        "3 Ad Accounts",
        "Advanced setup guide",
        "Priority email support",
        "1 month consultation",
      ],
      image: "/facebook-ads-success-graph.png",
      badge: "Best Value",
      url: "/pro-pack",
    },
    {
      id: "pro-pack-simplified",
      name: "Pro Pack Simplified",
      description: "Streamlined version of our Pro Pack for easier management",
      price: "€349",
      features: ["1 Verified BM1 with $250 limit", "2 Ad Accounts", "Setup assistance", "Email support"],
      image: "/facebook-ads-scaling-graph.png",
      url: "/pro-pack-simplified",
    },
    {
      id: "agency-pack",
      name: "Agency Pack",
      description: "Complete solution for marketing agencies managing multiple clients",
      price: "€799",
      features: [
        "1 Unlimited Verified BM5",
        "5 Ad Accounts",
        "Agency setup guide",
        "Priority support",
        "3 months consultation",
        "Account strategy review",
      ],
      image: "/facebook-agency-pack.png",
      badge: "Premium",
      url: "/agency-pack",
    },
    {
      id: "usa-profiles-pack",
      name: "USA Profiles Pack",
      description: "Bundle of USA profiles for advanced advertising",
      price: "€199",
      features: [
        "2 USA Reinstated profiles with 2 green lines",
        "1 USA Reinstated 902 profile with 3 green lines",
        "Setup guide",
        "Email support",
      ],
      image: "/facebook-xmdt-usa.png",
      url: "/usa-profiles-pack",
    },
    {
      id: "business-complete-pack",
      name: "Business Complete Pack",
      description: "All-in-one solution for established businesses",
      price: "€499",
      features: [
        "1 Verified BM5 Limited",
        "2 USA Profiles",
        "1 Aged Reinstated Page",
        "Advanced setup assistance",
        "Priority support",
        "2 months consultation",
      ],
      image: "/generic-social-media-bundle.png",
      url: "/business-complete-pack",
    },
  ]

  return (
    <ClientSupportingPageLayout
      title="All Packs"
      subtitle="Bundled solutions for every advertising need"
      showNewsletter={true}
      breadcrumbs={[{ label: "Packs", href: "/packs" }]}
    >
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Package2 className="h-6 w-6 text-facebook" />
            <h2 className="text-2xl font-bold">Value Packs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packs.map((pack) => (
              <Card
                key={pack.id}
                className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-video bg-gray-100">
                  <Image src={pack.image || "/placeholder.svg"} alt={pack.name} fill className="object-cover" />
                  {pack.badge && (
                    <Badge className="absolute top-3 right-3 bg-facebook text-white px-3 py-1">{pack.badge}</Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
                  <p className="text-gray-600 mb-4">{pack.description}</p>

                  <ul className="mb-6 space-y-2">
                    {pack.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-facebook mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-facebook">{pack.price}</span>
                    <Button asChild className="bg-facebook hover:bg-facebook/90">
                      <Link href={pack.url}>View Pack</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ClientSupportingPageLayout>
  )
}
