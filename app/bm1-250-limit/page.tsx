import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import MinimalProductLayout from "@/components/minimal-product-layout"
import MinimalProductDetails from "@/components/minimal-product-details"
import MinimalProductTabs from "@/components/minimal-product-tabs"
import PageSection from "@/components/page-section"
import ProductImageGallery from "@/components/product-image-gallery"

export default function BM1250LimitPage() {
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
            <Link href="/#products" className="hover:text-facebook">
              Business Managers
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">BM1 $250 Limit</span>
          </div>
        </div>

        {/* Product Section - More spacious */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Product Image Gallery - With thumbnails */}
          <ProductImageGallery
            mainImage="/verified-facebook-business-manager-icon.png"
            thumbnails={[
              "/facebook-business-manager-icon.png",
              "/facebook-ads-dashboard-beginners.png",
              "/facebook-ads-setup.png",
            ]}
            altText="BM1 $250 Limit"
          />

          {/* Product Details - More spacious */}
          <MinimalProductDetails
            name="BM1 $250 Limit"
            tagline="Verified Business Manager with $250 Spending Limit"
            price={80}
            description="Start advertising on Facebook with our verified BM1 account. Perfect for small businesses and marketers looking to launch campaigns with a $250 daily spending limit."
            features={[
              "Verified Business Manager (BM1)",
              "$250 daily spending limit",
              "Ready to use immediately",
              "Pre-verified payment method",
              "7-Day warranty included",
              "24/7 technical support",
            ]}
          />
        </div>
      </PageSection>

      {/* Rest of the page content remains the same */}
      <PageSection bgColor="gray-50" spacious>
        <MinimalProductTabs
          defaultTab="description"
          tabs={[
            {
              id: "description",
              label: "Description",
              content: (
                <div>
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Verified Account</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">BM1 $250 Limit Business Manager</h2>
                    <p className="text-lg text-gray-600">
                      A fully verified Facebook Business Manager account with a $250 daily spending limit, perfect for
                      small to medium-sized advertising campaigns.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Product Features</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">Verified Status</span>
                            <p className="text-gray-600 mt-1">Fully verified BM1 account with no restrictions</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">$250 Daily Spending Limit</span>
                            <p className="text-gray-600 mt-1">Suitable for most small to medium advertising needs</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">Pre-verified Payment Method</span>
                            <p className="text-gray-600 mt-1">Ready to use with a pre-verified payment method</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">Instant Delivery</span>
                            <p className="text-gray-600 mt-1">Get your account details within 24 hours of purchase</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">What You'll Get</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">Full Account Access</span>
                            <p className="text-gray-600 mt-1">Complete login details and ownership transfer</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">Setup Instructions</span>
                            <p className="text-gray-600 mt-1">Step-by-step guide to get started with your new BM</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">7-Day Warranty</span>
                            <p className="text-gray-600 mt-1">Full replacement guarantee if any issues arise</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-facebook mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">24/7 Support</span>
                            <p className="text-gray-600 mt-1">Technical assistance via Telegram and WhatsApp</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            },
            // Other tabs remain the same
            {
              id: "specifications",
              label: "Specifications",
              content: (
                // Content remains the same
                <div>
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Details</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                    <p className="text-lg text-gray-600">
                      Detailed information about your BM1 $250 Limit Business Manager
                    </p>
                  </div>

                  <div className="overflow-hidden bg-white rounded-lg shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-lightblue">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                            Product Type
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            Facebook Business Manager (BM1)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Verification Status
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Fully Verified</td>
                        </tr>
                        <tr className="bg-lightblue">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Daily Spending Limit
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$250 USD</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Payment Method
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Pre-verified</td>
                        </tr>
                        <tr className="bg-lightblue">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Account Age</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Fresh (0-30 days)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Warranty Period
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">7 Days</td>
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
                            Small businesses, Freelancers, Digital marketers
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ),
            },
            {
              id: "usage",
              label: "How To Use",
              content: (
                // Content remains the same
                <div>
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Guide</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                    <p className="text-lg text-gray-600">
                      Follow these steps to set up and start using your new Business Manager account
                    </p>
                  </div>

                  <div className="space-y-12 max-w-4xl mx-auto">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-facebook font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Account Access</h3>
                        <p className="text-gray-600 mb-4">
                          After purchase, you'll receive login credentials via email or Telegram. Use these to access
                          your new Business Manager account.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-facebook font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Change Security Details</h3>
                        <p className="text-gray-600 mb-4">
                          Immediately change the password, email, and security questions to secure your account. We
                          recommend using a strong password and enabling two-factor authentication.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-facebook font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Create Ad Account</h3>
                        <p className="text-gray-600 mb-4">
                          Navigate to Business Settings {"->"} Accounts {"->"} Ad Accounts {"->"} Add to create your ad
                          account. The pre-verified payment method is already set up for immediate use.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-facebook font-bold text-xl">4</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Set Up Your Campaigns</h3>
                        <p className="text-gray-600 mb-4">
                          Create your first campaign through Ads Manager. Remember that your daily spending limit is
                          $250, so plan your budget accordingly.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-facebook font-bold text-xl">5</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Support If Needed</h3>
                        <p className="text-gray-600 mb-4">
                          If you encounter any issues during setup or use, contact our 24/7 support team via Telegram or
                          WhatsApp. We're here to help ensure your advertising success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              id: "faq",
              label: "FAQ",
              content: (
                // Content remains the same
                <div>
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Help</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">
                      Find answers to common questions about our BM1 $250 Limit account
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">What does "BM1" mean?</h3>
                      <p className="text-gray-600">
                        BM1 refers to a specific type of Facebook Business Manager account that has been verified to the
                        first level. This verification allows for basic advertising capabilities with a moderate
                        spending limit.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Can I increase the $250 daily spending limit?
                      </h3>
                      <p className="text-gray-600">
                        The $250 daily limit is set by Facebook based on the account's verification level. As you build
                        a positive advertising history, Facebook may automatically increase your limit. Alternatively,
                        you can purchase one of our higher-tier Business Manager accounts with larger spending limits.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        What happens if my account gets restricted?
                      </h3>
                      <p className="text-gray-600">
                        Our 7-day warranty covers account restrictions. If your account gets restricted within 7 days of
                        purchase for reasons not related to policy violations from your ads, we'll provide a replacement
                        at no additional cost.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Can I use my own payment method with this account?
                      </h3>
                      <p className="text-gray-600">
                        Yes, you can add your own payment method to the account. However, we recommend keeping the
                        pre-verified payment method as a backup to ensure smooth operation of your advertising
                        campaigns.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        How many ad accounts can I create with this BM?
                      </h3>
                      <p className="text-gray-600">
                        With a BM1 account, you can typically create 1-2 ad accounts initially. As you build a positive
                        history with Facebook, this limit may increase over time.
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
                // Content remains the same
                <div>
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Testimonials</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
                    <p className="text-lg text-gray-600">Read reviews from businesses using our BM1 accounts</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                          <Image
                            src="/male-freelancer-portrait.png"
                            alt="Alex Thompson"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Alex Thompson</p>
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
                        "The BM1 account was delivered within hours of my purchase. Setup was straightforward, and I was
                        able to start running ads for my clients immediately. The $250 limit is perfect for my small
                        business clients."
                      </p>
                      <p className="text-sm text-gray-500">Purchased 2 months ago</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                          <Image
                            src="/female-business-owner-portrait.png"
                            alt="Rebecca Martinez"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Rebecca Martinez</p>
                          <p className="text-sm text-gray-500">E-commerce Store Owner</p>
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
                        "I needed a reliable BM account to promote my online store. This BM1 account has been working
                        great for the past month. The $250 daily limit is enough for my current needs, and I appreciate
                        the responsive support team."
                      </p>
                      <p className="text-sm text-gray-500">Purchased 1 month ago</p>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </PageSection>

      {/* Related Products section remains the same */}
      <PageSection spacious>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">More Options</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <p className="text-lg text-gray-600">Explore related products to enhance your advertising setup</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="aspect-square relative bg-lightblue p-8">
              <Image
                src="/verified-facebook-business-manager-icon.png"
                alt="BM5 Unlimited"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">BM5 Unlimited</h3>
                <Badge className="bg-facebook/10 text-facebook">Premium</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4">Unlimited spending limit for large-scale campaigns.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">€350</span>
                <Link href="/#products">
                  <Button className="bg-facebook hover:bg-facebook-dark text-white">View Details</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="aspect-square relative bg-lightblue p-8">
              <Image src="/facebook-payment-method-icon.png" alt="Via XMDT USA" fill className="object-contain p-8" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">Via XMDT USA</h3>
                <Badge className="bg-facebook/10 text-facebook">Popular</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4">Premium payment method for US-targeted campaigns.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">€40</span>
                <Link href="/#products">
                  <Button className="bg-facebook hover:bg-facebook-dark text-white">View Details</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="aspect-square relative bg-lightblue p-8">
              <Image src="/facebook-pixel-icon.png" alt="Facebook Pixel" fill className="object-contain p-8" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">Facebook Pixel</h3>
                <Badge className="bg-facebook/10 text-facebook">Essential</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4">Track conversions and optimize your ad campaigns.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">€15</span>
                <Link href="/#products">
                  <Button className="bg-facebook hover:bg-facebook-dark text-white">View Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </MinimalProductLayout>
  )
}
