export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  views: number
  trending?: boolean
  author: {
    name: string
    role?: string
    image: string
  }
  content: string // HTML content as a string
  tags: string[]
  relatedPosts?: BlogPostSummary[]
}

// Simplified version for related posts and listings
export interface BlogPostSummary {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date?: string
  readTime?: string
  views?: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "facebook-ad-account-warm-up-checklist",
    slug: "facebook-ad-account-warm-up-checklist",
    title: "Facebook Ad Account Warm-Up Checklist: The Essential Guide",
    excerpt:
      "Learn how to properly warm up your Facebook ad account to avoid restrictions and maximize performance with our step-by-step guide.",
    date: "May 10, 2025",
    readTime: "8 min read",
    category: "Facebook Ads",
    image: "/facebook-ads-dashboard.png",
    views: 1930,
    author: {
      name: "Alex Johnson",
      role: "Facebook Ads Specialist",
      image: "/male-marketing-owner.png",
    },
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
        slug: "business-manager-verification-guide",
        title: "Complete Guide to Facebook Business Manager Verification",
        excerpt:
          "Everything you need to know about verifying your Facebook Business Manager account to unlock higher spending limits and more features.",
        image: "/placeholder.svg?key=k5f8w",
        category: "Business Manager",
      },
      {
        id: "facebook-ad-account-banned",
        slug: "facebook-ad-account-banned",
        title: "What to Do When Your Facebook Ad Account Gets Banned",
        excerpt:
          "A step-by-step recovery plan for when your Facebook ad account gets restricted or banned, including prevention tips for the future.",
        image: "/placeholder.svg?key=gykza",
        category: "Troubleshooting",
      },
      {
        id: "scaling-facebook-ads",
        slug: "scaling-facebook-ads",
        title: "Scaling Facebook Ads: From $10 to $10,000 Per Day",
        excerpt:
          "Learn the proven strategies for scaling your Facebook ad campaigns from small tests to major budget allocations without losing performance.",
        image: "/placeholder.svg?key=v5ldp",
        category: "Strategy",
      },
      {
        id: "facebook-pixel-implementation",
        slug: "facebook-pixel-implementation",
        title: "Advanced Facebook Pixel Implementation Guide",
        excerpt:
          "Learn how to properly set up and configure Facebook Pixel for maximum tracking accuracy and conversion optimization.",
        image: "/placeholder.svg?key=p9j2m",
        category: "Tracking",
      },
      {
        id: "facebook-ads-creative-best-practices",
        slug: "facebook-ads-creative-best-practices",
        title: "Facebook Ads Creative Best Practices for 2025",
        excerpt:
          "Discover the latest creative strategies and formats that are driving the highest engagement and conversion rates on Facebook.",
        image: "/placeholder.svg?key=r7t3n",
        category: "Creative",
      },
    ],
  },
  {
    id: "business-manager-verification-guide",
    slug: "business-manager-verification-guide",
    title: "Complete Guide to Facebook Business Manager Verification",
    excerpt:
      "Everything you need to know about verifying your Facebook Business Manager account to unlock higher spending limits and more features.",
    date: "May 5, 2025",
    readTime: "6 min read",
    category: "Business Manager",
    image: "/placeholder.svg?key=1k2cp",
    views: 1245,
    author: {
      name: "Sarah Johnson",
      role: "Business Verification Specialist",
      image: "/female-business-owner-portrait.png",
    },
    content: `
    <p class="lead">Facebook Business Manager verification is a crucial step for serious advertisers looking to scale their campaigns and access advanced features. This guide covers everything you need to know about the verification process.</p>
    
    <h2>Why Verify Your Business Manager Account</h2>
    
    <p>Business verification helps Facebook confirm that your business is legitimate and builds trust with the platform. Verified businesses enjoy several benefits:</p>
    
    <ul>
      <li>Higher spending limits on ad accounts</li>
      <li>Access to more detailed audience targeting options</li>
      <li>Ability to create more ad accounts</li>
      <li>Reduced risk of account restrictions</li>
      <li>Priority support from Facebook</li>
    </ul>
    
    <h2>Verification Requirements</h2>
    
    <p>Before starting the verification process, make sure you have:</p>
    
    <ul>
      <li>A Facebook Business Manager account</li>
      <li>Admin access to the Business Manager</li>
      <li>A business website with a matching email domain</li>
      <li>Business documentation (registration, tax documents, etc.)</li>
      <li>A business phone number that can receive calls or texts</li>
    </ul>
    
    <h2>Step-by-Step Verification Process</h2>
    
    <h3>Step 1: Access Business Verification</h3>
    
    <p>In Business Manager, go to Security Center and look for the "Verify Your Business" section. Click "Start Verification" to begin the process.</p>
    
    <h3>Step 2: Provide Business Information</h3>
    
    <p>Enter your legal business name, address, website, and other requested details. Make sure this information matches your official business documentation exactly.</p>
    
    <h3>Step 3: Select Verification Method</h3>
    
    <p>Facebook offers several verification methods:</p>
    
    <ul>
      <li>Business phone verification (fastest method)</li>
      <li>Business document verification</li>
      <li>Domain verification</li>
    </ul>
    
    <p>We recommend trying phone verification first, as it's typically the quickest option.</p>
    
    <h3>Step 4: Complete Verification</h3>
    
    <p>Follow the prompts to complete your chosen verification method. For phone verification, you'll receive a code via call or text. For document verification, you'll need to upload official business documents.</p>
    
    <h3>Step 5: Wait for Approval</h3>
    
    <p>Facebook typically processes verification requests within 1-2 business days, though it can sometimes take longer. You'll receive a notification when the process is complete.</p>
    
    <h2>Troubleshooting Common Verification Issues</h2>
    
    <h3>Verification Rejected</h3>
    
    <p>If your verification is rejected, Facebook will usually provide a reason. Common issues include:</p>
    
    <ul>
      <li>Mismatched business information</li>
      <li>Insufficient or unclear documentation</li>
      <li>Unable to verify phone number</li>
      <li>Website domain doesn't match business name</li>
    </ul>
    
    <p>Address the specific issue and resubmit your verification request.</p>
    
    <h3>Verification Stuck in Review</h3>
    
    <p>If your verification has been pending for more than 5 business days, try:</p>
    
    <ul>
      <li>Checking for any notifications or emails from Facebook</li>
      <li>Contacting Facebook Business Support</li>
      <li>Canceling and restarting the verification process</li>
    </ul>
    
    <h2>Maintaining Your Verified Status</h2>
    
    <p>Once verified, keep your Business Manager in good standing by:</p>
    
    <ul>
      <li>Following Facebook's advertising policies</li>
      <li>Keeping your business information up to date</li>
      <li>Maintaining good payment history</li>
      <li>Responding promptly to any Facebook requests for information</li>
    </ul>
    
    <h2>Conclusion</h2>
    
    <p>Business verification is an investment in your long-term advertising success on Facebook. The process may seem tedious, but the benefits of higher spending limits, reduced restrictions, and additional features make it well worth the effort.</p>
    
    <p>By following this guide and preparing your documentation in advance, you can streamline the verification process and unlock the full potential of Facebook advertising for your business.</p>
    `,
    tags: ["Business Manager", "Account Verification", "Facebook Ads", "Ad Limits"],
    relatedPosts: [
      {
        id: "facebook-ad-account-warm-up-checklist",
        slug: "facebook-ad-account-warm-up-checklist",
        title: "Facebook Ad Account Warm-Up Checklist: The Essential Guide",
        excerpt:
          "Learn how to properly warm up your Facebook ad account to avoid restrictions and maximize performance with our step-by-step guide.",
        image: "/facebook-ads-dashboard.png",
        category: "Facebook Ads",
      },
      {
        id: "facebook-ad-account-banned",
        slug: "facebook-ad-account-banned",
        title: "What to Do When Your Facebook Ad Account Gets Banned",
        excerpt:
          "A step-by-step recovery plan for when your Facebook ad account gets restricted or banned, including prevention tips for the future.",
        image: "/placeholder.svg?key=gykza",
        category: "Troubleshooting",
      },
      {
        id: "via-xmdt-explained",
        slug: "via-xmdt-explained",
        title: "Via XMDT Explained: What It Is and Why You Need It",
        excerpt:
          "Discover what Via XMDT is, how it works, and why it's essential for serious Facebook advertisers looking to scale their campaigns.",
        image: "/placeholder.svg?key=kjbej",
        category: "Payment Methods",
      },
    ],
  },
  {
    id: "via-xmdt-explained",
    slug: "via-xmdt-explained",
    title: "Via XMDT Explained: What It Is and Why You Need It",
    excerpt:
      "Discover what Via XMDT is, how it works, and why it's essential for serious Facebook advertisers looking to scale their campaigns.",
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "Payment Methods",
    image: "/placeholder.svg?key=kjbej",
    views: 1876,
    author: {
      name: "Michael Chen",
      role: "Payment Solutions Expert",
      image: "/male-marketing-owner.png",
    },
    content: `<p>Content for Via XMDT article...</p>`,
    tags: ["Payment Methods", "XMDT", "Facebook Ads", "Scaling"],
  },
  {
    id: "facebook-pixel-setup-guide",
    slug: "facebook-pixel-setup-guide",
    title: "Facebook Pixel Setup Guide: Track Conversions Like a Pro",
    excerpt:
      "A comprehensive guide to setting up and optimizing your Facebook Pixel for maximum conversion tracking and audience building.",
    date: "April 22, 2025",
    readTime: "7 min read",
    category: "Tracking",
    image: "/placeholder.svg?key=yut3s",
    views: 2103,
    author: {
      name: "Emma Rodriguez",
      role: "Conversion Tracking Specialist",
      image: "/female-ecommerce-owner.png",
    },
    content: `<p>Content for Facebook Pixel Setup Guide...</p>`,
    tags: ["Facebook Pixel", "Conversion Tracking", "Audience Building", "Analytics"],
  },
  {
    id: "scaling-facebook-ads",
    slug: "scaling-facebook-ads",
    title: "Scaling Facebook Ads: From $10 to $10,000 Per Day",
    excerpt:
      "Learn the proven strategies for scaling your Facebook ad campaigns from small tests to major budget allocations without losing performance.",
    date: "April 15, 2025",
    readTime: "10 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=yxrvy",
    views: 3542,
    trending: true,
    author: {
      name: "David Wilson",
      role: "Facebook Ads Strategist",
      image: "/male-freelancer-portrait.png",
    },
    content: `<p>Content for Scaling Facebook Ads article...</p>`,
    tags: ["Scaling", "Budget Management", "Campaign Optimization", "ROI"],
  },
  {
    id: "facebook-ad-account-banned",
    slug: "facebook-ad-account-banned",
    title: "What to Do When Your Facebook Ad Account Gets Banned",
    excerpt:
      "A step-by-step recovery plan for when your Facebook ad account gets restricted or banned, including prevention tips for the future.",
    date: "April 8, 2025",
    readTime: "9 min read",
    category: "Troubleshooting",
    image: "/placeholder.svg?key=q8kj7",
    views: 4210,
    author: {
      name: "Alex Johnson",
      role: "Account Recovery Specialist",
      image: "/male-marketing-owner.png",
    },
    content: `<p>Content for Facebook Ad Account Banned article...</p>`,
    tags: ["Account Ban", "Policy Violations", "Appeals", "Account Recovery"],
  },
  {
    id: "facebook-ads-targeting-2025",
    slug: "facebook-ads-targeting-2025",
    title: "Facebook Ads Targeting in 2025: What's Changed and How to Adapt",
    excerpt:
      "Stay ahead of the curve with our comprehensive guide to Facebook's latest targeting options and strategies for 2025.",
    date: "March 30, 2025",
    readTime: "8 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=t7h9p",
    views: 1865,
    author: {
      name: "Sarah Johnson",
      role: "Targeting Specialist",
      image: "/female-business-owner-portrait.png",
    },
    content: `<p>Content for Facebook Ads Targeting article...</p>`,
    tags: ["Targeting", "Audience Segmentation", "Privacy Updates", "Strategy"],
  },
  {
    id: "facebook-creative-best-practices",
    slug: "facebook-creative-best-practices",
    title: "Creative Best Practices for Facebook Ads in 2025",
    excerpt:
      "Discover the latest creative trends and best practices to make your Facebook ads stand out and drive better results.",
    date: "March 22, 2025",
    readTime: "7 min read",
    category: "Creative",
    image: "/placeholder.svg?key=r5g2m",
    views: 2341,
    author: {
      name: "Emma Rodriguez",
      role: "Creative Director",
      image: "/female-ecommerce-owner.png",
    },
    content: `<p>Content for Creative Best Practices article...</p>`,
    tags: ["Creative", "Design", "Ad Copy", "Visual Strategy"],
  },
  {
    id: "facebook-ads-budget-optimization",
    slug: "facebook-ads-budget-optimization",
    title: "Facebook Ads Budget Optimization Strategies for 2025",
    excerpt: "Learn how to optimize your Facebook ads budget to get the most out of your advertising spend.",
    date: "March 15, 2025",
    readTime: "6 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=b3d9f",
    views: 1756,
    author: {
      name: "Michael Chen",
      role: "Budget Optimization Expert",
      image: "/male-marketing-owner.png",
    },
    content: `<p>Content for Budget Optimization article...</p>`,
    tags: ["Budget", "Optimization", "ROI", "Campaign Management"],
  },
  {
    id: "facebook-ads-copywriting-guide",
    slug: "facebook-ads-copywriting-guide",
    title: "The Ultimate Facebook Ads Copywriting Guide",
    excerpt: "Master the art of writing compelling ad copy that converts for your Facebook campaigns.",
    date: "March 8, 2025",
    readTime: "8 min read",
    category: "Creative",
    image: "/placeholder.svg?key=p7r2s",
    views: 2089,
    author: {
      name: "David Wilson",
      role: "Copywriting Specialist",
      image: "/male-freelancer-portrait.png",
    },
    content: `<p>Content for Copywriting Guide article...</p>`,
    tags: ["Copywriting", "Ad Copy", "Messaging", "Conversion Copy"],
  },
  {
    id: "facebook-ads-for-ecommerce",
    slug: "facebook-ads-for-ecommerce",
    title: "Facebook Ads for E-commerce: Complete Strategy Guide",
    excerpt: "A comprehensive guide to running successful Facebook ad campaigns for your e-commerce business.",
    date: "March 1, 2025",
    readTime: "12 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=e5t8y",
    views: 3267,
    author: {
      name: "Emma Rodriguez",
      role: "E-commerce Ads Specialist",
      image: "/female-ecommerce-owner.png",
    },
    content: `<p>Content for E-commerce Strategy Guide article...</p>`,
    tags: ["E-commerce", "Product Ads", "Catalog Sales", "DPA"],
  },
  {
    id: "facebook-ads-automation",
    slug: "facebook-ads-automation",
    title: "Facebook Ads Automation: Save Time and Improve Results",
    excerpt: "Discover how to automate your Facebook ads to save time and improve campaign performance.",
    date: "February 22, 2025",
    readTime: "9 min read",
    category: "Automation",
    image: "/placeholder.svg?key=a4s7d",
    views: 1932,
    author: {
      name: "Michael Chen",
      role: "Automation Expert",
      image: "/male-marketing-owner.png",
    },
    content: `<p>Content for Ads Automation article...</p>`,
    tags: ["Automation", "Rules", "Scripts", "Efficiency"],
  },
  {
    id: "facebook-ads-retargeting",
    slug: "facebook-ads-retargeting",
    title: "Advanced Facebook Retargeting Strategies That Convert",
    excerpt: "Learn how to create effective retargeting campaigns that bring customers back and boost conversions.",
    date: "February 15, 2025",
    readTime: "7 min read",
    category: "Strategy",
    image: "/placeholder.svg?key=r3t4g",
    views: 2567,
    author: {
      name: "Sarah Johnson",
      role: "Retargeting Specialist",
      image: "/female-business-owner-portrait.png",
    },
    content: `<p>Content for Retargeting Strategies article...</p>`,
    tags: ["Retargeting", "Custom Audiences", "Conversion", "Funnel Strategy"],
  },
  {
    id: "facebook-ads-analytics",
    slug: "facebook-ads-analytics",
    title: "Mastering Facebook Ads Analytics: Metrics That Matter",
    excerpt: "Focus on the right metrics to optimize your Facebook ad campaigns and improve ROI.",
    date: "February 8, 2025",
    readTime: "8 min read",
    category: "Analytics",
    image: "/placeholder.svg?key=a5n6l",
    views: 1843,
    author: {
      name: "David Wilson",
      role: "Analytics Expert",
      image: "/male-freelancer-portrait.png",
    },
    content: `<p>Content for Ads Analytics article...</p>`,
    tags: ["Analytics", "Metrics", "Reporting", "Performance"],
  },
  {
    id: "facebook-ads-creative-testing",
    slug: "facebook-ads-creative-testing",
    title: "Facebook Ads Creative Testing: A Scientific Approach",
    excerpt: "Learn how to systematically test your ad creatives to find winners and scale your campaigns.",
    date: "February 1, 2025",
    readTime: "9 min read",
    category: "Creative",
    image: "/placeholder.svg?key=c7t8s",
    views: 2134,
    author: {
      name: "Emma Rodriguez",
      role: "Creative Testing Specialist",
      image: "/female-ecommerce-owner.png",
    },
    content: `<p>Content for Creative Testing article...</p>`,
    tags: ["Creative Testing", "A/B Testing", "Optimization", "Performance"],
  },
  {
    id: "facebook-ads-for-local-business",
    slug: "facebook-ads-for-local-business",
    title: "Facebook Ads for Local Businesses: Complete Guide",
    excerpt: "A step-by-step guide to creating effective Facebook ad campaigns for local businesses.",
    date: "January 25, 2025",
    readTime: "10 min read",
    category: "Local Business",
    image: "/placeholder.svg?key=l9b0z",
    views: 1987,
    author: {
      name: "Michael Chen",
      role: "Local Marketing Specialist",
      image: "/male-marketing-owner.png",
    },
    content: `<p>Content for Local Business Guide article...</p>`,
    tags: ["Local Business", "Geo-targeting", "Store Traffic", "Local Awareness"],
  },
  {
    id: "facebook-ads-compliance",
    slug: "facebook-ads-compliance",
    title: "Facebook Ads Compliance: Avoiding Rejections and Restrictions",
    excerpt: "Stay compliant with Facebook's advertising policies to avoid ad rejections and account restrictions.",
    date: "January 18, 2025",
    readTime: "8 min read",
    category: "Compliance",
    image: "/placeholder.svg?key=c1m2p",
    views: 3421,
    author: {
      name: "Sarah Johnson",
      role: "Compliance Specialist",
      image: "/female-business-owner-portrait.png",
    },
    content: `<p>Content for Ads Compliance article...</p>`,
    tags: ["Compliance", "Policies", "Ad Approval", "Restrictions"],
  },
  {
    id: "facebook-ads-b2b-marketing",
    slug: "facebook-ads-b2b-marketing",
    title: "Facebook Ads for B2B Marketing: Strategies That Work",
    excerpt: "Learn how to effectively use Facebook ads to generate B2B leads and drive business growth.",
    date: "January 11, 2025",
    readTime: "9 min read",
    category: "B2B",
    image: "/placeholder.svg?key=b3m4k",
    views: 1765,
    author: {
      name: "David Wilson",
      role: "B2B Marketing Specialist",
      image: "/male-freelancer-portrait.png",
    },
    content: `<p>Content for B2B Marketing article...</p>`,
    tags: ["B2B", "Lead Generation", "Business Marketing", "Professional Targeting"],
  },
]

// Get all unique categories from blog posts
export function getAllCategories() {
  const categories = blogPosts.map((post) => post.category)
  return ["All", ...Array.from(new Set(categories))].sort()
}

// Get all blog posts
export function getAllBlogPosts() {
  return blogPosts
}

// Get blog post by slug
export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

// Get related posts (excluding current post)
export function getRelatedPosts(currentSlug: string, limit = 5) {
  const currentPost = getBlogPostBySlug(currentSlug)
  if (!currentPost?.relatedPosts) {
    // If no related posts are defined, return posts in the same category
    const category = currentPost?.category
    return blogPosts.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, limit)
  }
  return currentPost.relatedPosts.slice(0, limit)
}

// Get most viewed posts
export function getMostViewedPosts(limit = 4) {
  return [...blogPosts].sort((a, b) => b.views - a.views).slice(0, limit)
}

// Get trending posts
export function getTrendingPosts(limit = 3) {
  return blogPosts.filter((post) => post.trending).slice(0, limit)
}

// Get posts by category
export function getPostsByCategory(category: string, page = 1, postsPerPage = 6) {
  const filteredPosts = category === "All" ? blogPosts : blogPosts.filter((post) => post.category === category)

  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  return {
    posts: filteredPosts.slice(startIndex, endIndex),
    totalPages: Math.ceil(filteredPosts.length / postsPerPage),
    totalPosts: filteredPosts.length,
  }
}
