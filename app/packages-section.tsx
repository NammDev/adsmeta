import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/product-card"

export default function PackagesSection() {
  return (
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
          <ProductCard
            title="Starter Pack"
            description="Perfect for beginners"
            price={50}
            features={[
              "1 Unverified BM (€10, code 5)",
              "1 Via XMDT Asia (€25, code 7)",
              "1 Pixel (€15)",
              "7-Day Support",
            ]}
            href="/starter-pack"
          />

          <ProductCard
            title="Pro Pack"
            description="Scale your campaigns"
            price={150}
            features={[
              "1 Verified BM (€80, code 1)",
              "2 Via XMDT (1 Asia €25, 1 USA €40)",
              "1 Pixel (€15)",
              "7-Day Warranty",
            ]}
            href="/pro-pack"
            isPopular={true}
          />

          <ProductCard
            title="Agency Pack"
            description="For high-ROAS campaigns"
            price={400}
            features={[
              "1 Verified BM5 Unlimited (€350, code 4)",
              "2 Via XMDT USA (€40 x 2, code 9)",
              "1 Pixel (€15)",
              "14-Day Warranty",
            ]}
            href="/agency-pack"
          />
        </div>

        <div className="mt-12 bg-facebook/10 text-facebook text-center py-6 px-8 rounded-lg">
          <p className="text-lg font-medium">
            First 50 Buyers Get 10% Off! Use Code: <span className="font-bold">META10</span>
          </p>
        </div>
      </div>
    </section>
  )
}
