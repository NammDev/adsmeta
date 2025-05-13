import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import MinimalProductLayout from "@/components/minimal-product-layout"
import MinimalProductDetails from "@/components/minimal-product-details"
import MinimalProductTabs from "@/components/minimal-product-tabs"
import PageSection from "@/components/page-section"
import EnhancedRecommendations from "@/components/enhanced-recommendations"
import ProductImageGallery from "@/components/product-image-gallery"

export default function ProPack() {
  // Force scroll to top on page load
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0)
  }

  return (
    <MinimalProductLayout>
      <PageSection spacious>
        {/* Breadcrumb Navigation */}
        <div className="mb-10">
          <div className="flex items-center text-base text-gray-600">
            <Link href="/" className="hover:text-facebook">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#packages" className="hover:text-facebook">
              Pack
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Pro Pack</span>
          </div>
        </div>

        {/* Product Section - More spacious */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Product Image Gallery - With thumbnails */}
          <ProductImageGallery
            mainImage="/abstract-facebook-verified-business-manager.png"
            thumbnails={[
              "/facebook-ads-scaling-graph.png",
              "/facebook-ads-dashboard-beginners.png",
              "/multiple-payment-methods-icon.png",
            ]}
            altText="Pro Pack"
          />

          {/* Product Details - More spacious */}
          <MinimalProductDetails
            name="Pro Pack"
            tagline="Scale Your Facebook Ads With Confidence"
            price={150}
            description="The perfect solution for marketers ready to scale their campaigns. Get verified accounts and multiple payment methods to maximize your advertising potential."
            features={[
              "1 Verified BM (€80, code 1)",
              "2 Via XMDT (1 Asia €25, 1 USA €40)",
              "1 Pixel (€15)",
              "7-Day Warranty",
              "Priority support included",
            ]}
          />
        </div>
      </PageSection>

      {/* Product Information Tabs - More spacious */}
      <PageSection bgColor="gray-50" spacious>
        <MinimalProductTabs
          defaultTab="whats-included"
          tabs={[
            {
              id: "whats-included",
              label: "What's Included",
              content: (
                <div>
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Components</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Tools for Serious Advertisers</h2>
                    <p className="text-lg text-gray-600">
                      The Pro Pack includes everything you need to scale your Facebook advertising campaigns.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-facebook/10 rounded-full flex items-center justify-center mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-facebook"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="M9 9h6v6H9z" />
                          <path d="m12 3-3 3 3 3 3-3z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1 Verified BM</h3>
                      <p className="text-gray-600 mb-4">
                        A fully verified Business Manager account that allows you to run ads without restrictions.
                        Perfect for scaling your campaigns with higher spending limits.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Verified status - no restrictions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Code 1 - Premium quality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Value: €80</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-facebook/10 rounded-full flex items-center justify-center mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-facebook"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                          <path d="M6 15h.01" />
                          <path d="M10 15h.01" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">2 Via XMDT</h3>
                      <p className="text-gray-600 mb-4">
                        Two verified payment methods (1 Asia, 1 USA) that allow you to target different regions
                        effectively and provide backup in case one has issues.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">1 Asia Via XMDT (Code 7)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">1 USA Via XMDT (Code 9)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Value: €65 (€25 + €40)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-facebook/10 rounded-full flex items-center justify-center mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-facebook"
                        >
                          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                          <path d="M8.5 8.5v.01" />
                          <path d="M16 15.5v.01" />
                          <path d="M12 12v.01" />
                          <path d="M11 17v.01" />
                          <path d="M7 14v.01" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1 Pixel</h3>
                      <p className="text-gray-600 mb-4">
                        A Facebook Pixel to track conversions, optimize your ads, build custom audiences, and create
                        powerful retargeting campaigns.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Advanced conversion tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Retargeting capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Value: €15</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              id: "specifications",
              label: "Specifications",
              content: (
                <div>
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Details</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                    <p className="text-lg text-gray-600">
                      Detailed information about what's included in your Pro Pack.
                    </p>
                  </div>

                  <div className="overflow-hidden bg-white rounded-lg shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-lightblue">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                            Package Type
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Pro Pack</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Business Manager
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Verified BM (Code 1)</td>
                        </tr>
                        <tr className="bg-lightblue">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Payment Methods
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            1 Via XMDT Asia (Code 7), 1 Via XMDT USA (Code 9)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pixel</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            1 Standard Facebook Pixel
                          </td>
                        </tr>
                        <tr className="bg-lightblue">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Warranty Period
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">7 Days</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Support</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            7 Days Priority Support via Telegram & WhatsApp
                          </td>
                        </tr>
                        <tr className="bg-lightblue">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Delivery Time
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Within 24 hours</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ideal For</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            Growing Businesses, Experienced Marketers, E-commerce Stores
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ),
            },
            {
              id: "faq",
              label: "FAQ",
              content: (
                <div>
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Help</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">Find answers to common questions about our Pro Pack.</p>
                  </div>

                  <div className="space-y-8">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        What makes the Pro Pack different from the Starter Pack?
                      </h3>
                      <p className="text-gray-600">
                        The Pro Pack includes a verified Business Manager (vs. unverified in the Starter Pack) and two
                        Via XMDT payment methods (vs. one in the Starter Pack). This allows for higher spending limits,
                        fewer restrictions, and the ability to target multiple regions effectively.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">How long does the warranty last?</h3>
                      <p className="text-gray-600">
                        The Pro Pack comes with a 7-day warranty. During this period, we provide full support and
                        replacements if any issues arise with your Business Manager or payment methods.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Can I upgrade from the Starter Pack to the Pro Pack?
                      </h3>
                      <p className="text-gray-600">
                        Yes! We offer special upgrade pricing for existing customers. Contact our support team to
                        discuss your upgrade options and receive a discount on your Pro Pack purchase.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">What kind of support is included?</h3>
                      <p className="text-gray-600">
                        The Pro Pack includes 7 days of priority support via Telegram and WhatsApp. Our team will help
                        you with setup, troubleshooting, and answer any questions about optimizing your Facebook ad
                        campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              id: "reviews",
              label: "Customer Reviews",
              content: (
                <div>
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Testimonials</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
                    <p className="text-lg text-gray-600">Read reviews from businesses that have used our Pro Pack.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                          <Image
                            src="/male-marketing-owner.png"
                            alt="Michael Chen"
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
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#FBBF24"
                            stroke="#FBBF24"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">
                        "The Pro Pack helped me scale my agency's campaigns without restrictions. Within a month of
                        switching to the verified BM, we were able to increase our clients' ad spend by 3x with much
                        better approval rates."
                      </p>
                      <p className="text-sm text-gray-500">Pro Pack (€150) Customer</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                          <Image
                            src="/female-ecommerce-owner.png"
                            alt="Jennifer Lopez"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Jennifer Lopez</p>
                          <p className="text-sm text-gray-500">E-commerce Store Owner</p>
                        </div>
                      </div>
                      <div className="mb-6 flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#FBBF24"
                            stroke="#FBBF24"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">
                        "After struggling with ad account restrictions for months, the Pro Pack was exactly what my
                        business needed. The verified BM and dual payment methods allowed me to scale my store's ads
                        without interruptions."
                      </p>
                      <p className="text-sm text-gray-500">Pro Pack (€150) Customer</p>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </PageSection>

      {/* Related Products - Enhanced with packs and individual products */}
      <PageSection spacious>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">More Options</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <p className="text-lg text-gray-600">Explore related packs and products to enhance your advertising setup.</p>
        </div>

        <EnhancedRecommendations currentPackId="pro-pack" />
      </PageSection>
    </MinimalProductLayout>
  )
}
