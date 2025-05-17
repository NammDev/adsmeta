import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock, Facebook, Twitter, Linkedin, Copy, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SupportingPageLayout from "@/components/supporting-page-layout"
import PageSection from "@/components/page-section"
import { TableOfContents } from "@/components/table-of-contents"
import { BlogCarousel } from "@/components/blog-carousel"

// This would typically come from a CMS or API based on the slug
const blogPost = {
  id: "facebook-ad-account-warm-up-checklist",
  title: "Facebook Ad Account Warm-Up Checklist: The Essential Guide",
  excerpt:
    "Learn how to properly warm up your Facebook ad account to avoid restrictions and maximize performance with our step-by-step guide.",
  date: "May 10, 2025",
  readTime: "8 min read",
  category: "Facebook Ads",
  author: "Alex Johnson",
  authorRole: "Facebook Ads Specialist",
  authorImage: "/male-marketing-owner.png",
  image: "/facebook-ads-dashboard.png",
  content: `
    <p class="lead">If you've ever had a Facebook ad account restricted or banned, you know the frustration it causes. One of the most effective ways to prevent this is by properly "warming up" your ad account before scaling your campaigns.</p>
    
    <p>In this comprehensive guide, we'll walk through the essential steps to warm up your Facebook ad account, ensuring it remains healthy and active for the long term.</p>
    
    <h2>Why Warming Up Your Facebook Ad Account Matters</h2>
    
    <p>Facebook's algorithm is designed to detect unusual activity and potential policy violations. When you create a new ad account and immediately start spending large amounts, it raises red flags in Facebook's system.</p>
    
    <p>By gradually increasing your activity and spending, you signal to Facebook that you're a legitimate advertiser who follows the rules, reducing the risk of restrictions.</p>
    
    <h2>The Complete Facebook Ad Account Warm-Up Checklist</h2>
    
    <h3>Week 1: Account Setup and Initial Campaigns</h3>
    
    <ul>
      <li><strong>Day 1-2:</strong> Complete your business information and verify your account</li>
      <li><strong>Day 3-4:</strong> Add your payment method and set up Facebook Pixel</li>
      <li><strong>Day 5-7:</strong> Launch your first campaign with a daily budget of $5-10</li>
    </ul>
    
    <p>During the first week, focus on creating a solid foundation. Use conservative targeting and stick to Facebook's recommended ad formats. Avoid making frequent changes to your campaigns during this period.</p>
    
    <div class="callout">
      <p><strong>Pro Tip:</strong> Start with engagement campaigns rather than conversion campaigns. Facebook views these as lower-risk and they help establish account credibility.</p>
    </div>
    
    <h3>Week 2: Gradual Scaling</h3>
    
    <ul>
      <li><strong>Day 8-10:</strong> Increase daily budget to $15-20 if your initial campaign is performing well</li>
      <li><strong>Day 11-12:</strong> Add a second campaign with similar targeting</li>
      <li><strong>Day 13-14:</strong> Begin testing different ad creatives (but keep targeting consistent)</li>
    </ul>
    
    <p>In the second week, you can start to expand cautiously. The key is to make incremental changes rather than dramatic ones. Monitor your account quality score in the Account Quality section of Business Manager.</p>
    
    <h3>Week 3: Expanding Your Strategy</h3>
    
    <ul>
      <li><strong>Day 15-17:</strong> Increase budget to $30-50 per day across campaigns</li>
      <li><strong>Day 18-19:</strong> Begin testing conversion campaigns if you've been focusing on engagement</li>
      <li><strong>Day 20-21:</strong> Start exploring different audience targeting options</li>
    </ul>
    
    <p>By week three, your account should have established some history with Facebook. You can now begin to diversify your strategy and test more campaign types.</p>
    
    <h3>Week 4 and Beyond: Scaling with Confidence</h3>
    
    <ul>
      <li><strong>Day 22-25:</strong> Increase budget to $75-100 per day if performance remains strong</li>
      <li><strong>Day 26-28:</strong> Expand to additional campaign objectives</li>
      <li><strong>Day 29+:</strong> Continue scaling by 20-30% every 3-4 days</li>
    </ul>
    
    <p>After a month of careful warming up, your account should be in good standing with Facebook. You can now scale more aggressively, but continue to monitor your account health and avoid making too many changes at once.</p>
    
    <h2>Common Mistakes to Avoid</h2>
    
    <ol>
      <li><strong>Scaling too quickly:</strong> Increasing your budget by more than 30% in a single day</li>
      <li><strong>Frequent campaign changes:</strong> Making multiple edits to campaigns in a short period</li>
      <li><strong>Ignoring ad policies:</strong> Using prohibited content or making prohibited claims</li>
      <li><strong>Neglecting account quality:</strong> Not monitoring your account health regularly</li>
      <li><strong>Using a new payment method:</strong> Switching payment methods during the warm-up period</li>
    </ol>
    
    <h2>Signs Your Account Is Properly Warmed Up</h2>
    
    <p>How do you know when your account is ready for more aggressive scaling? Look for these indicators:</p>
    
    <ul>
      <li>Consistent ad delivery without interruptions</li>
      <li>No warnings in your Account Quality section</li>
      <li>Stable or improving ad performance</li>
      <li>Ability to get ads approved quickly</li>
      <li>Multiple successful campaigns running simultaneously</li>
    </ul>
    
    <h2>Conclusion</h2>
    
    <p>Warming up your Facebook ad account is an investment in your long-term advertising success. By following this checklist and taking a patient, methodical approach, you'll build a healthy account that can scale to meet your business goals without triggering Facebook's restrictions.</p>
    
    <p>Remember that even with a properly warmed-up account, it's important to stay current with Facebook's advertising policies and continue monitoring your account health regularly.</p>
    
    <div class="author-note">
      <p><strong>About the Author:</strong> Alex Johnson is a Facebook Ads Specialist with over 8 years of experience managing ad accounts for businesses of all sizes. He specializes in account health and scaling strategies.</p>
    </div>
  `,
  tags: ["Facebook Ads", "Account Warm-up", "Ad Strategy", "Account Health"],
  relatedPosts: [
    {
      id: "business-manager-verification-guide",
      title: "Complete Guide to Facebook Business Manager Verification",
      excerpt:
        "Everything you need to know about verifying your Facebook Business Manager account to unlock higher spending limits and more features.",
      image: "/placeholder.svg?key=k5f8w",
      category: "Business Manager",
    },
    {
      id: "facebook-ad-account-banned",
      title: "What to Do When Your Facebook Ad Account Gets Banned",
      excerpt:
        "A step-by-step recovery plan for when your Facebook ad account gets restricted or banned, including prevention tips for the future.",
      image: "/placeholder.svg?key=gykza",
      category: "Troubleshooting",
    },
    {
      id: "scaling-facebook-ads",
      title: "Scaling Facebook Ads: From $10 to $10,000 Per Day",
      excerpt:
        "Learn the proven strategies for scaling your Facebook ad campaigns from small tests to major budget allocations without losing performance.",
      image: "/placeholder.svg?key=v5ldp",
      category: "Strategy",
    },
    {
      id: "facebook-pixel-implementation",
      title: "Advanced Facebook Pixel Implementation Guide",
      excerpt:
        "Learn how to properly set up and configure Facebook Pixel for maximum tracking accuracy and conversion optimization.",
      image: "/placeholder.svg?key=p9j2m",
      category: "Tracking",
    },
    {
      id: "facebook-ads-creative-best-practices",
      title: "Facebook Ads Creative Best Practices for 2025",
      excerpt:
        "Discover the latest creative strategies and formats that are driving the highest engagement and conversion rates on Facebook.",
      image: "/placeholder.svg?key=r7t3n",
      category: "Creative",
    },
  ],
}

// Add this function before the BlogPostPage component
function extractHeadings(content: string) {
  const headingRegex = /<h([2-3])>(.*?)<\/h[2-3]>/g
  const headings: { id: string; text: string; level: number }[] = []

  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = Number.parseInt(match[1])
    const text = match[2]
    const id = text.toLowerCase().replace(/[^\w]+/g, "-")

    headings.push({ id, text, level })
  }

  return headings
}

// Now, modify the content rendering to add IDs to headings
// Add this function before the BlogPostPage component
function processContent(content: string) {
  return content.replace(/<h([2-3])>(.*?)<\/h[2-3]>/g, (match, level, text) => {
    const id = text.toLowerCase().replace(/[^\w]+/g, "-")
    return `<h${level} id="${id}">${text}</h${level}>`
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post data based on the slug
  // For this example, we're using the hardcoded data above

  const headings = extractHeadings(blogPost.content)
  const processedContent = processContent(blogPost.content)

  return (
    <SupportingPageLayout
      title={blogPost.title}
      subtitle={blogPost.excerpt}
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: blogPost.title, href: `/blog/${blogPost.id}` },
      ]}
      showNewsletter={true}
    >
      {/* Combined Image and Content Section */}
      <PageSection className="py-8 relative overflow-hidden">
        {/* Add decorative gradient circles */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md mb-4">
              {blogPost.category}
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 relative inline-block">
              <span className="relative z-10">{blogPost.title}</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
            </h1>
            <p className="text-lg text-gray-600">{blogPost.excerpt}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Featured Image with Metadata */}
              <div className="mb-6">
                <div className="relative h-[250px] w-full rounded-lg overflow-hidden shadow-md border border-transparent bg-gradient-to-r from-blue-100 to-purple-100 p-[1px]">
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <Image
                      src={blogPost.image || "/placeholder.svg"}
                      alt={blogPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end mt-3 mb-6 text-sm text-gray-500 border-b border-gray-200 pb-4">
                  <div className="flex items-center mr-4">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{blogPost.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{blogPost.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>338 views</span>
                  </div>
                </div>
              </div>

              {/* Blog Post Content */}
              <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: processedContent }} />

              {/* Social Sharing */}
              <div className="border-t border-gray-200 mt-8 pt-6 mb-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">Share this article:</p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-sm p-5 border border-transparent bg-gradient-to-r from-blue-50 to-purple-50 p-[1px]">
                  <TableOfContents headings={headings} title="Table of Contents" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Author Bio */}
      <PageSection bgColor="facebook-light" className="py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col md:flex-row gap-6 items-center border border-transparent bg-gradient-to-r from-blue-50 to-purple-50 p-[1px]">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-transparent bg-gradient-to-r from-blue-300 to-purple-300 p-[2px]">
              <div className="rounded-full overflow-hidden h-full w-full">
                <Image
                  src={blogPost.authorImage || "/placeholder.svg"}
                  alt={blogPost.author}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 relative inline-block">
                <span className="relative z-10">About {blogPost.author}</span>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full"></div>
              </h3>
              <p className="text-gray-600 mb-4">
                Alex Johnson is a Facebook Ads Specialist with over 8 years of experience managing ad accounts for
                businesses of all sizes. He specializes in account health and scaling strategies.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                >
                  <Facebook className="h-4 w-4 mr-2" /> Follow
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                >
                  <Twitter className="h-4 w-4 mr-2" /> Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Related Posts Carousel */}
      <PageSection className="py-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center relative inline-block mx-auto w-full">
            <span className="relative z-10">You Might Also Like</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full w-48"></div>
          </h2>

          <BlogCarousel itemsPerView={3} mobileItemsPerView={2} className="px-4">
            {blogPost.relatedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full group"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative h-36 md:h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 z-10"></div>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                </Link>
                <div className="p-4 md:p-6">
                  {/* Badge only shows on desktop */}
                  <Badge className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 hover:from-blue-500/20 hover:to-purple-500/20 mb-3 hidden md:inline-flex border-0">
                    {post.category}
                  </Badge>

                  <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Summary text - reduced on mobile */}
                  <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4 line-clamp-1 md:line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Simplified link for mobile */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:underline text-xs md:text-sm font-medium flex items-center group-hover:text-blue-700"
                  >
                    <span className="md:block">Read</span>
                    <span className="hidden md:inline"> Article</span>
                    <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </BlogCarousel>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
