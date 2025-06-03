"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Clock, TrendingUp, Eye, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import SupportingPageLayout from "@/components/layout/supporting-page-layout"
import PageSection from "@/components/page-section"
import { useMediaQuery } from "@/hooks/use-media-query"
import { getAllCategories, getPostsByCategory, getMostViewedPosts } from "@/data/blog-posts"
import SectionHeader from "@/components/ui/section-header"

// Get unique categories from blog posts
const categories = getAllCategories()

export default function BlogPage() {
  // State for selected category and pagination
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6 // Show 6 posts (2 rows of 3) per page
  const [activeSlide, setActiveSlide] = useState(0)

  // Add this after the other state declarations
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Get most viewed posts (top 4)
  const mostViewedPosts = getMostViewedPosts(4)

  // Get posts for the "New Posts Every Day" section with pagination
  const { posts: dailyPosts, totalPages } = getPostsByCategory(
    selectedCategory,
    currentPage,
    postsPerPage
  )

  // Get exactly 2 posts for the main grid (to match the height of most viewed)
  const regularPosts = getPostsByCategory(selectedCategory, 1, 4)
    .posts.filter((post) => !mostViewedPosts.slice(0, 2).some((p) => p.id === post.id))
    .slice(0, 2)

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
      {/* Title Section with proper spacing */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <SectionHeader badge="Facebook Ads Insights" title="Expert Knowledge & Strategies" />
      </PageSection>

      {/* Content Section - with no top padding */}
      <PageSection className="pt-0 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-3 gap-8 ${isMobile ? "flex flex-col" : ""}`}>
            {/* Most Viewed Posts Column - First on desktop, second on mobile */}
            <div className={`md:col-span-1 flex flex-col ${isMobile ? "order-2 mt-8" : "order-1"}`}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold relative">
                  <span className="relative z-10">Most Viewed</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-amber-200 to-orange-200 opacity-50 rounded-full"></div>
                </h2>
              </div>

              <div className="space-y-6 flex-1 -ml-2">
                {mostViewedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group relative rounded-lg p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                  >
                    <Link href={`/blog/${post.id}`} className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        {/* Most Viewed Desktop - Thumbnail */}
                        <Image
                          src={post.image.thumbnail || "/placeholder.svg"}
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
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold relative">
                  <span className="relative z-10">Latest Articles</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 to-pink-200 opacity-50 rounded-full"></div>
                </h2>
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
                                {/* Latest Article - Mobile */}
                                <Image
                                  src={post.image.feature || "/placeholder.svg"}
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
                              {/* Added excerpt to fill white space */}
                              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                {post.excerpt}
                              </p>
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
                        className={`h-2 w-2 rounded-full mx-1 ${
                          index === activeSlide ? "bg-facebook" : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                // Desktop grid for Latest Articles (unchanged)
                <div className="grid sm:grid-cols-2 gap-6 flex-1 pb-16">
                  {regularPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group"
                    >
                      <Link href={`/blog/${post.id}`} className="block">
                        <div className="relative h-48 w-full overflow-hidden shadow-md border border-transparent bg-gradient-to-r from-blue-100 to-purple-100 p-[1px">
                          <div className="absolute inset-0 rounded-lg overflow-hidden">
                            {/* Latest Article - Desktop */}
                            <Image
                              src={post.image.feature || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                        </div>
                      </Link>
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-facebook transition-colors line-clamp-2">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        {/* Added excerpt to fill white space */}
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
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
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-facebook hover:underline text-sm font-medium"
                          >
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

      {/* Daily New Posts Section Title */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <SectionHeader badge="Daily Updates" title="New Posts Every Day" />
      </PageSection>

      {/* Daily New Posts Section Content */}
      <PageSection className="pt-0 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter - Limited to 6 categories */}
          <div className="mb-8">
            <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-start gap-3 scrollbar-hide">
              {categories.map((category) => (
                <Badge
                  key={category}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap cursor-pointer border-0 transition-all ${
                    category === selectedCategory
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-sm"
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
                    className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex flex-col h-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                    <Link href={`/blog/${post.id}`} className="block relative">
                      <div className="relative h-48 w-full overflow-hidden shadow-md border border-transparent bg-gradient-to-r from-blue-50 to-purple-50 p-[1px">
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                          {/* Daily Post Desktop */}
                          <Image
                            src={post.image.feature || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </div>
                      {post.trending && (
                        <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                          Trending
                        </Badge>
                      )}
                    </Link>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 hover:text-facebook transition-colors line-clamp-2">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-gradient-to-r from-blue-500/0 to-purple-500/0 hover:from-blue-500 hover:to-purple-500 text-blue-600 hover:text-white border border-blue-300 transition-all duration-300"
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
                        {/* Left side - Image with hover effect - Mobile Daily Post */}
                        <div className="relative w-[140px] h-full flex-shrink-0 overflow-hidden">
                          <Image
                            src={post.image.thumbnail || "/placeholder.svg"}
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
                      className={
                        page === currentPage
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-0"
                          : "hover:border-blue-300 transition-colors"
                      }
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
              <p className="text-gray-600">
                No posts found in this category. Please try another category.
              </p>
            </div>
          )}

          {/* Compact Newsletter Component - Embedded within the New Posts Every Day section */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-6 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>

            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-sm">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold relative">
                    <span>Subscribe to Our Newsletter</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
                  </h3>
                </div>
              </div>
              <div className="md:w-1/3 w-full">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="rounded-r-none border-r-0 focus:ring-blue-500"
                  />
                  <Button className="rounded-l-none bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
