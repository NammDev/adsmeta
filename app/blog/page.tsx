import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SupportingPageLayout from "@/components/supporting-page-layout"
import PageSection from "@/components/page-section"

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
    featured: true,
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
  },
]

export default function BlogPage() {
  // Get the featured post
  const featuredPost = blogPosts.find((post) => post.featured)
  // Get the rest of the posts
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <SupportingPageLayout
      title="Blog"
      subtitle="Expert insights, guides, and tips for Facebook advertising success"
      breadcrumbs={[{ label: "Blog", href: "/blog" }]}
    >
      {/* Featured Post */}
      {featuredPost && (
        <PageSection>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">Featured</Badge>
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link href={`/blog/${featuredPost.id}`} className="hover:text-facebook transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-gray-600">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/blog/${featuredPost.id}`}>Read Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </PageSection>
      )}

      {/* Blog Categories */}
      <PageSection bgColor="facebook-light">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "All",
              "Facebook Ads",
              "Business Manager",
              "Payment Methods",
              "Tracking",
              "Strategy",
              "Troubleshooting",
            ].map((category) => (
              <Badge
                key={category}
                className={`px-4 py-2 text-sm font-medium ${
                  category === "All"
                    ? "bg-facebook text-white hover:bg-facebook-dark"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Blog Posts Grid */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-facebook transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-facebook hover:underline text-sm font-medium">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline" className="bg-facebook text-white hover:bg-facebook-dark">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
