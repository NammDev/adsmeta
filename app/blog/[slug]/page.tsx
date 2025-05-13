import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Copy } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SupportingPageLayout from "@/components/supporting-page-layout"
import PageSection from "@/components/page-section"

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
  ],
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post data based on the slug
  // For this example, we're using the hardcoded data above

  return (
    <SupportingPageLayout
      title={blogPost.title}
      subtitle={blogPost.excerpt}
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: blogPost.title, href: `/blog/${blogPost.id}` },
      ]}
      showNewsletter={false}
    >
      {/* Back to Blog Link */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-facebook hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </PageSection>

      {/* Featured Image */}
      <PageSection noPadding>
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden">
            <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} fill className="object-cover" />
          </div>
        </div>
      </PageSection>

      {/* Blog Post Header */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">{blogPost.category}</Badge>
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">{blogPost.title}</h1>

          <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={blogPost.authorImage || "/placeholder.svg"}
                  alt={blogPost.author}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{blogPost.author}</p>
                <p className="text-sm text-gray-500">{blogPost.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Blog Post Content */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

          {/* Social Sharing */}
          <div className="border-t border-gray-200 mt-12 pt-6">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-900">Share this article:</p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Author Bio */}
      <PageSection bgColor="facebook-light">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={blogPost.authorImage || "/placeholder.svg"}
                alt={blogPost.author}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">About {blogPost.author}</h3>
              <p className="text-gray-600 mb-4">
                Alex Johnson is a Facebook Ads Specialist with over 8 years of experience managing ad accounts for
                businesses of all sizes. He specializes in account health and scaling strategies.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Facebook className="h-4 w-4 mr-2" /> Follow
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Twitter className="h-4 w-4 mr-2" /> Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Related Posts */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">You Might Also Like</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPost.relatedPosts.map((post) => (
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
                  <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-3">{post.category}</Badge>
                  <h3 className="text-lg font-bold mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-facebook transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-facebook hover:underline text-sm font-medium">
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Newsletter Section */}
      <PageSection bgColor="facebook-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest Facebook advertising tips, guides, and updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border border-gray-300 flex-grow focus:outline-none focus:ring-2 focus:ring-facebook focus:border-transparent"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
