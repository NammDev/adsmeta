import Link from "next/link"
import Image from "next/image"
import { Check, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import MinimalProductLayout from "@/components/minimal-product-layout"
import MinimalProductDetails from "@/components/minimal-product-details"
import MinimalProductTabs from "@/components/minimal-product-tabs"
import PageSection from "@/components/page-section"
import EnhancedRecommendations from "@/components/enhanced-recommendations"
import ProductImageGallery from "@/components/product-image-gallery"

export default function StarterPack() {
  return (
    <MinimalProductLayout>
      <PageSection spacious>
        {/* Simple Back Link instead of breadcrumbs */}
        <div className="mb-10">
          <Link href="/" className="text-base text-gray-600 hover:text-facebook flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Back to Shop
          </Link>
        </div>

        {/* Product Section - More spacious */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Product Image Gallery - With thumbnails */}
          <ProductImageGallery
            mainImage="/abstract-facebook-business-manager.png"
            thumbnails={["/facebook-starter-pack.png", "/facebook-pixel-icon.png", "/facebook-payment-method-icon.png"]}
            altText="Starter Pack"
          />

          {/* Product Details - More spacious */}
          <MinimalProductDetails
            name="Starter Pack"
            tagline="Your First Facebook Ads Weapon"
            price={50}
            description="Perfect for beginners and small businesses looking to launch their first Facebook ad campaigns. Get everything you need to start advertising effectively."
            features={[
              "1 Unverified BM (€10, code 5)",
              "1 Via XMDT Asia (€25, code 7)",
              "1 Pixel (€15)",
              "7-Day Support",
              "Setup assistance included",
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Everything You Need to Start</h2>
                    <p className="text-lg text-gray-600">
                      The Starter Pack includes all the essential tools to launch your first Facebook ad campaigns.
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
                          <path d="M9 17h6" />
                          <path d="M12 11v6" />
                          <circle cx="12" cy="7" r="1" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1 Unverified BM</h3>
                      <p className="text-gray-600 mb-4">
                        A fresh Business Manager account that allows you to create and manage your Facebook ad
                        campaigns. Perfect for testing and learning the platform.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Easy to set up and use</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Code 5 - Suitable for beginners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Value: €10</span>
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
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1 Via XMDT Asia</h3>
                      <p className="text-gray-600 mb-4">
                        A verified payment method that allows you to run Facebook ads without restrictions. Comes with 2
                        green line ticks in the Account Quality section.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">2 green line ticks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Code 7 - Ready to use</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Value: €25</span>
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
                        A Facebook Pixel to track conversions from your website, optimize ads, and build targeted
                        audiences for future ad campaigns.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Track website conversions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Build custom audiences</span>
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
                      Detailed information about what's included in your Starter Pack.
                    </p>
                  </div>

                  <div className="overflow-hidden bg-white rounded-lg shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-lightblue">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                            Package Type
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Starter Pack</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Business Manager
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Unverified BM (Code 5)</td>
                        </tr>
                        <tr className="bg-lightblue">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Payment Method
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            1 Via XMDT Asia (Code 7)
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
                            7 Days via Telegram & WhatsApp
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
                            Beginners, Small Businesses, Freelancers
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
                    <p className="text-lg text-gray-600">Find answers to common questions about our Starter Pack.</p>
                  </div>

                  <div className="space-y-8">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        How long does it take to set up after purchase?
                      </h3>
                      <p className="text-gray-600">
                        After your payment is confirmed, we'll deliver your Starter Pack components within 24 hours
                        (usually within a few hours). We'll also provide step-by-step setup instructions and support.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">What kind of support is included?</h3>
                      <p className="text-gray-600">
                        The Starter Pack includes 7 days of support via Telegram and WhatsApp. Our team will help you
                        with setup, troubleshooting, and basic questions about using your new Facebook ads tools.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Can I upgrade to a higher package later?</h3>
                      <p className="text-gray-600">
                        Yes! Many of our customers start with the Starter Pack and upgrade to the Pro or Agency Pack as
                        their advertising needs grow. We offer special upgrade discounts for existing customers.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        What's the difference between the Starter Pack and Pro Pack?
                      </h3>
                      <p className="text-gray-600">
                        The main differences are the type of Business Manager (unverified vs. verified) and the number
                        of Via XMDT payment methods. The Pro Pack includes a verified BM and two Via XMDT methods (one
                        Asia, one USA), making it more suitable for scaling your campaigns.
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
                    <p className="text-lg text-gray-600">
                      Read reviews from businesses that have used our Starter Pack.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                          <Image
                            src="/female-business-owner-portrait.png"
                            alt="Sarah Johnson"
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
                        "EasyAdsPack made running FB ads so simple! The Starter Pack had everything I needed to launch
                        successful campaigns from day one."
                      </p>
                      <p className="text-sm text-gray-500">Starter Pack (€50) Customer</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                          <Image
                            src="/male-freelancer-portrait.png"
                            alt="David Chen"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">David Chen</p>
                          <p className="text-sm text-gray-500">Small Business Owner</p>
                        </div>
                      </div>
                      <div className="mb-6 flex">
                        {[1, 2, 3, 4].map((star) => (
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#E5E7EB"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                      <p className="text-gray-700 mb-4">
                        "I needed a way to find new clients without spending a fortune. The Starter Pack gave me
                        everything I needed to create targeted ads. The support team helped me set everything up!"
                      </p>
                      <p className="text-sm text-gray-500">Starter Pack (€50) Customer</p>
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

        <EnhancedRecommendations currentPackId="starter-pack" />
      </PageSection>
    </MinimalProductLayout>
  )
}
