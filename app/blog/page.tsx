"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { CalendarIcon, Clock, TrendingUp, Eye, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import SupportingPageLayout from "@/components/supporting-page-layout"
import PageSection from "@/components/page-section"
import { useMediaQuery } from "@/hooks/use-media-query"

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: "facebook-ad-account-warm-up-checklist",
    title: "Facebook Ad Account Warm-Up Checklist: The Essential Guide",
    excerpt:
      "Learn how to properly warm up your Facebook ad account to avoid restrictions and maximize performance with our step-by-step guide.",
    date: "May 10, 2025",
    readTime: "8 min read",
    category: "Facebook Ads",
    image: "/facebook-ads-dashboard.png",
    views: 1930,
  },
  {
    id: "business-manager-verification-guide",
    title: "Complete Guide to Facebook Business Manager Verification",
    excerpt:
      "Everything you need to know about verifying your Facebook Business Manager account to unlock higher spending limits and more features.",
    date: "May 5, 2025",
    readTime: "6 min read",
    category: "Business Manager",
    image: "/placeholder.svg?key=1k2cp",
    views: 1245,
  },
  {
    id: "via-xmdt-explained",
    title: "Via XMDT Explained: What It Is and Why You Need It",
    excerpt:
      "Discover what Via XMDT is, how it works, and why it's essential for serious Facebook advertisers looking to scale their campaigns.",
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "Payment Methods",
    image: "/placeholder.svg?key=kjbej",
    views: 1876,
  },
  {
    id: "facebook-pixel-setup-guide",
    title: "Facebook Pixel Setup Guide: Track Conversions Like a Pro",
    excerpt:
      "A comprehensive guide to setting up and optimizing your Facebook Pixel for maximum conversion tracking and audience building.",
    date: "April 22, 2025",
    readTime: "7 min read",
    category: "Tracking",
    image: "/placeholder.svg?key=yut3s",
    views: 2103,
  },
  {
    id: "scaling-facebook-ads",
    title: "Scaling Facebook Ads: From $10 to $10,000 Per Day",
    excerpt:
      "Learn the proven strategies for scaling your Facebook ad campaigns from small tests to major budget allocations without losing performance.",
    date: "April 15, 2025",
    readTime: "10 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=yxrvy",
    trending: true,
    views: 3542,
  },
  {
    id: "facebook-ad-account-banned",
    title: "What to Do When Your Facebook Ad Account Gets Banned",
    excerpt:
      "A step-by-step recovery plan for when your Facebook ad account gets restricted or banned, including prevention tips for the future.",
    date: "April 8, 2025",
    readTime: "9 min read",
    category: "Troubleshooting",
    image: "/placeholder.svg?key=q8kj7",
    views: 4210,
  },
  {
    id: "facebook-ads-targeting-2025",
    title: "Facebook Ads Targeting in 2025: What's Changed and How to Adapt",
    excerpt:
      "Stay ahead of the curve with our comprehensive guide to Facebook's latest targeting options and strategies for 2025.",
    date: "March 30, 2025",
    readTime: "8 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=t7h9p",
    views: 1865,
  },
  {
    id: "facebook-creative-best-practices",
    title: "Creative Best Practices for Facebook Ads in 2025",
    excerpt:
      "Discover the latest creative trends and best practices to make your Facebook ads stand out and drive better results.",
    date: "March 22, 2025",
    readTime: "7 min read",
    category: "Creative",
    image: "/placeholder.svg?key=r5g2m",
    views: 2341,
  },
  {
    id: "facebook-ads-budget-optimization",
    title: "Facebook Ads Budget Optimization Strategies for 2025",
    excerpt: "Learn how to optimize your Facebook ads budget to get the most out of your advertising spend.",
    date: "March 15, 2025",
    readTime: "6 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=b3d9f",
    views: 1756,
  },
  {
    id: "facebook-ads-copywriting-guide",
    title: "The Ultimate Facebook Ads Copywriting Guide",
    excerpt: "Master the art of writing compelling ad copy that converts for your Facebook campaigns.",
    date: "March 8, 2025",
    readTime: "8 min read",
    category: "Creative",
    image: "/placeholder.svg?key=p7r2s",
    views: 2089,
  },
  {
    id: "facebook-ads-for-ecommerce",
    title: "Facebook Ads for E-commerce: Complete Strategy Guide",
    excerpt: "A comprehensive guide to running successful Facebook ad campaigns for your e-commerce business.",
    date: "March 1, 2025",
    readTime: "12 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=e5t8y",
    views: 3267,
  },
  {
    id: "facebook-ads-automation",
    title: "Facebook Ads Automation: Save Time and Improve Results",
    excerpt: "Discover how to automate your Facebook ads to save time and improve campaign performance.",
    date: "February 22, 2025",
    readTime: "9 min read",
    category: "Automation",
    image: "/placeholder.svg?key=a4s7d",
    views: 1932,
  },
  {
    id: "facebook-ads-retargeting",
    title: "Advanced Facebook Retargeting Strategies That Convert",
    excerpt: "Learn how to create effective retargeting campaigns that bring customers back and boost conversions.",
    date: "February 15, 2025",
    readTime: "7 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=r3t4g",
    views: 2567,
  },
  {
    id: "facebook-ads-analytics",
    title: "Mastering Facebook Ads Analytics: Metrics That Matter",
    excerpt: "Focus on the right metrics to optimize your Facebook ad campaigns and improve ROI.",
    date: "February 8, 2025",
    readTime: "8 min read",
    category: "Analytics",
    image: "/placeholder.svg?key=a5n6l",
    views: 1843,
  },
  {
    id: "facebook-ads-creative-testing",
    title: "Facebook Ads Creative Testing: A Scientific Approach",
    excerpt: "Learn how to systematically test your ad creatives to find winners and scale your campaigns.",
    date: "February 1, 2025",
    readTime: "9 min read",
    category: "Creative",
    image: "/placeholder.svg?key=c7t8s",
    views: 2134,
  },
  {
    id: "facebook-ads-for-local-business",
    title: "Facebook Ads for Local Businesses: Complete Guide",
    excerpt: "A step-by-step guide to creating effective Facebook ad campaigns for local businesses.",
    date: "January 25, 2025",
    readTime: "10 min read",
    category: "Local Business",
    image: "/placeholder.svg?key=l9b0z",
    views: 1987,
  },
  {
    id: "facebook-ads-compliance",
    title: "Facebook Ads Compliance: Avoiding Rejections and Restrictions",
    excerpt: "Stay compliant with Facebook's advertising policies to avoid ad rejections and account restrictions.",
    date: "January 18, 2025",
    readTime: "8 min read",
    category: "Compliance",
    image: "/placeholder.svg?key=c1m2p",
    views: 3421,
  },
  {
    id: "facebook-ads-b2b-marketing",
    title: "Facebook Ads for B2B Marketing: Strategies That Work",
    excerpt: "Learn how to effectively use Facebook ads to generate B2B leads and drive business growth.",
    date: "January 11, 2025",
    readTime: "9 min read",
    category: "B2B",
    image: "/placeholder.svg?key=b3m4k",
    views: 1765,
  },
]

// Get unique categories from blog posts
const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))].sort()

export default function BlogPage() {
  // State for selected category and pagination
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6 // Show 6 posts (2 rows of 3) per page
  const [activeSlide, setActiveSlide] = useState(0)

  // Add this after the other state declarations
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Filter posts by selected category
  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  // Get most viewed posts (top 4)
  const mostViewedPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 4)

  // Get exactly 2 posts for the main grid (to match the height of most viewed)
  const regularPosts = filteredPosts
    .filter((post) => !mostViewedPosts.slice(0, 2).some((p) => p.id === post.id))
    .slice(0, 2)

  // Get posts for the "New Posts Every Day" section with pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const dailyPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when changing category
  }

  // Simple carousel navigation
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === regularPosts.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? regularPosts.length - 1 : prev - 1))
  }

  return (
    <SupportingPageLayout
      title="Blog"
      subtitle="Expert insights, guides, and tips for Facebook advertising success"
      breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      showNewsletter={false} // Hide the newsletter section only on the blog page
    >
      {/* Two Column Layout: Most Viewed + Regular Posts */}
      <PageSection className="py-8">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-3 gap-8 ${isMobile ? "flex flex-col" : ""}`}>
            {/* Most Viewed Posts Column - First on desktop, second on mobile */}
            <div className={`md:col-span-1 flex flex-col ${isMobile ? "order-2 mt-8" : "order-1"}`}>
              <div className="flex items-center gap-2 mb-6">
                <Eye className="h-5 w-5 text-facebook" />
                <h2 className="text-xl font-bold">Most Viewed</h2>
              </div>

              <div className="space-y-6 flex-1">
                {mostViewedPosts.map((post) => (
                  <div key={post.id} className="group">
                    <Link href={`/blog/${post.id}`} className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-1 bg-facebook/10 text-facebook hover:bg-facebook/20 text-xs">
                          {post.category}
                        </Badge>
                        <h3 className="font-semibold text-sm mb-1 group-hover:text-facebook transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Articles - Second on desktop, first on mobile */}
            <div className={`md:col-span-2 flex flex-col ${isMobile ? "order-1" : "order-2"}`}>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-facebook" />
                <h2 className="text-xl font-bold">Latest Articles</h2>
              </div>

              {isMobile ? (
                // New simplified mobile carousel for Latest Articles
                <div className="relative w-full">
                  {/* Left navigation arrow */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Carousel container */}
                  <div className="w-full overflow-hidden">
                    <div className="w-full">
                      {regularPosts.map((post, index) => (
                        <div
                          key={post.id}
                          className={`w-full transition-opacity duration-300 ${
                            index === activeSlide ? "block" : "hidden"
                          }`}
                        >
                          <Card className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group h-full">
                            <Link href={`/blog/${post.id}`} className="block">
                              <div className="relative h-48 w-full">
                                <Image
                                  src={post.image || "/placeholder.svg"}
                                  alt={post.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              </div>
                            </Link>
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">
                                  {post.category}
                                </Badge>
                                <span className="text-xs text-gray-500">{post.date}</span>
                              </div>
                              <h3 className="text-base font-bold mb-3 group-hover:text-facebook transition-colors line-clamp-2">
                                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                              </h3>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center text-xs text-gray-500 gap-3">
                                  <div className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span>{post.readTime}</span>
                                  </div>
                                </div>
                                <Link
                                  href={`/blog/${post.id}`}
                                  className="text-facebook hover:underline text-xs font-medium"
                                >
                                  Read More
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right navigation arrow */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Dots indicator */}
                  <div className="flex justify-center mt-4">
                    {regularPosts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 w-2 rounded-full mx-1 ${index === activeSlide ? "bg-facebook" : "bg-gray-300"}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                // Desktop grid for Latest Articles (unchanged)
                <div className="grid sm:grid-cols-2 gap-6 flex-1">
                  {regularPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group"
                    >
                      <Link href={`/blog/${post.id}`} className="block">
                        <div className="relative h-48 w-full">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </Link>
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">{post.category}</Badge>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-facebook transition-colors line-clamp-2">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center text-xs text-gray-500 gap-3">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              <span>{post.views} views</span>
                            </div>
                          </div>
                          <Link href={`/blog/${post.id}`} className="text-facebook hover:underline text-sm font-medium">
                            Read More
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Daily New Posts Section with Category Filter and Embedded Newsletter */}
      <PageSection bgColor="facebook-light" className="py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-facebook" />
              <h2 className="text-xl font-bold">New Posts Every Day</h2>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-start gap-3 scrollbar-hide">
              {categories.map((category) => (
                <Badge
                  key={category}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap cursor-pointer ${
                    category === selectedCategory
                      ? "bg-facebook text-white hover:bg-facebook-dark"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {dailyPosts.length > 0 ? (
            <>
              {/* Desktop view (unchanged) */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {dailyPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
                  >
                    <Link href={`/blog/${post.id}`} className="block relative">
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {post.trending && (
                        <Badge className="absolute top-3 left-3 bg-orange-500 text-white">Trending</Badge>
                      )}
                    </Link>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">{post.category}</Badge>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 hover:text-facebook transition-colors line-clamp-2">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-facebook border-facebook hover:bg-facebook hover:text-white"
                        >
                          <Link href={`/blog/${post.id}`}>Read Article</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mobile view (new compact layout) - Fixed white space and added hover effects */}
              <div className="md:hidden space-y-4">
                {dailyPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                      <div className="flex h-[140px]">
                        {/* Left side - Image with hover effect */}
                        <div className="relative w-[140px] h-full flex-shrink-0 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          {post.trending && (
                            <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-medium px-2 py-0.5">
                              Trending
                            </div>
                          )}
                        </div>

                        {/* Right side - Content */}
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-gray-500">
                              {post.category} | {post.date}
                            </span>
                          </div>
                          <h3 className="font-bold text-sm mb-auto group-hover:text-facebook transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <div className="flex items-center text-xs text-gray-500 mt-3 pt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{post.readTime}</span>
                            <span className="mx-2">•</span>
                            <Eye className="h-3 w-3 mr-1" />
                            <span>{post.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination for New Posts Every Day section */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  >
                    Previous
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant="outline"
                      className={page === currentPage ? "bg-facebook text-white hover:bg-facebook-dark" : ""}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-600">No posts found in this category. Please try another category.</p>
            </div>
          )}

          {/* Compact Newsletter Component - Embedded within the New Posts Every Day section */}
          <div className="mt-12 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-5 w-5 text-facebook" />
                  <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
                </div>
                <p className="text-gray-600 text-sm mb-0">
                  Get the latest Facebook advertising tips, strategies, and updates delivered straight to your inbox.
                </p>
              </div>
              <div className="md:w-1/3 w-full">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="rounded-r-none border-r-0 focus:ring-facebook"
                  />
                  <Button className="rounded-l-none bg-facebook hover:bg-facebook-dark">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
