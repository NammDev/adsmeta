export interface PackageFeature {
  id: string
  name: string
  included: boolean
  highlight?: boolean
}

export interface PackageImage {
  src: string
  alt: string
}

export interface PackageInclude {
  name: string
  description: string
  icon?: string
}

export interface Package {
  id: string
  numericId?: number // For compatibility with landing page
  slug: string
  name: string
  description: string
  shortDescription?: string
  longDescription?: string // For pack detail page
  price: number
  originalPrice?: number
  comparePrice?: number // Alias for originalPrice used in pack detail page
  discount?: number
  popular?: boolean
  featured?: boolean
  category: "starter" | "business" | "agency" | "premium"
  image: PackageImage | string // Support both formats
  features: PackageFeature[]
  // Simple features array for landing page compatibility
  simpleFeatures?: string[]
  benefits?: string[]
  idealFor?: string[]
  faqs?: Array<{
    question: string
    answer: string
  }>
  // For pack detail page
  faq?: Array<{
    question: string
    answer: string
  }>
  includes?: PackageInclude[]
  stock?: "in-stock" | "low-stock" | "out-of-stock"
  deliveryTime?: string
  callToAction?: string
  secondaryCallToAction?: string
  // Styling properties for landing page
  gradient?: string
  bgGradient?: string
  borderColor?: string
  hoverGradient?: string
  // URL for packs page
  url?: string
  badge?: string
}

// Package data
export const packages: Package[] = [
  {
    id: "starter-pack",
    numericId: 1,
    slug: "starter-pack",
    name: "Starter Pack",
    description: "Perfect for beginners and small businesses",
    shortDescription: "Get started with Facebook ads quickly and easily",
    longDescription: `Our Starter Pack is designed for individuals and small businesses who are just beginning their journey with Facebook advertising. This comprehensive package provides everything you need to get started with confidence.

    The pack includes a verified Business Manager with basic ad account setup, essential documentation, and a beginner-friendly guide to help you navigate the Facebook ads platform. We've also included email support to assist you with any questions you might have during the setup process.

    This is the ideal solution for those who want to start advertising on Facebook without the complexity and high costs often associated with advanced advertising solutions.`,
    price: 50,
    originalPrice: 99,
    comparePrice: 99,
    discount: 50,
    popular: false,
    category: "starter",
    image: "/facebook-starter-pack.png",
    features: [
      { id: "feature-1", name: "1 Verified Business Manager", included: true, highlight: true },
      { id: "feature-2", name: "1 Payment Method", included: true },
      { id: "feature-3", name: "1 Facebook Pixel", included: true },
      { id: "feature-4", name: "Basic Support", included: true },
    ],
    simpleFeatures: [
      "1 Verified Business Manager",
      "1 Payment Method",
      "1 Facebook Pixel",
      "Basic Support",
    ],
    includes: [
      {
        name: "Verified Business Manager",
        description: "A fully verified Business Manager account ready for advertising",
        icon: "/facebook-business-manager-icon.png",
      },
      {
        name: "Payment Method",
        description: "1 payment method for your ad campaigns",
        icon: "/facebook-payment-method-icon.png",
      },
      {
        name: "Facebook Pixel",
        description: "Tracking pixel for conversion optimization",
        icon: "/facebook-pixel-icon.png",
      },
    ],
    benefits: [
      "Start advertising immediately",
      "No account restrictions",
      "Reliable setup for beginners",
    ],
    idealFor: [
      "Small businesses just starting with Facebook ads",
      "Freelancers managing a single client",
      "Personal brand advertising",
    ],
    faq: [
      {
        question: "Is this pack suitable for complete beginners?",
        answer:
          "Yes, this pack is specifically designed for beginners with no prior experience in Facebook advertising.",
      },
      {
        question: "Can I upgrade to a more advanced pack later?",
        answer:
          "You can upgrade to our Pro Pack or Agency Pack at any time. We'll provide a discount based on your initial purchase.",
      },
    ],
    callToAction: "Get Started",
    secondaryCallToAction: "Learn More",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    hoverGradient: "from-blue-600 to-cyan-600",
    url: "/starter-pack",
    stock: "in-stock",
    deliveryTime: "24 hours",
  },
  {
    id: "pro-pack",
    numericId: 2,
    slug: "pro-pack",
    name: "Pro Pack",
    description: "Ideal for growing agencies and marketers",
    shortDescription: "Scale your Facebook advertising with multiple payment methods",
    longDescription: `The Pro Pack is our mid-tier solution designed for growing businesses and marketers who have some experience with Facebook advertising and are looking to scale their efforts.

    This comprehensive package includes multiple verified Business Managers, payment methods, and Facebook pixels for advanced tracking. The Pro Pack also comes with priority support and account recovery assistance.

    With the Pro Pack, you'll have all the tools and resources needed to take your Facebook advertising to the next level and achieve better results for your business or clients.`,
    price: 150,
    originalPrice: 249,
    comparePrice: 249,
    discount: 40,
    popular: true,
    category: "business",
    image: "/facebook-agency-pack.png",
    features: [
      { id: "feature-1", name: "3 Verified Business Managers", included: true, highlight: true },
      { id: "feature-2", name: "3 Payment Methods", included: true },
      { id: "feature-3", name: "3 Facebook Pixels", included: true },
      { id: "feature-4", name: "Priority Support", included: true },
      { id: "feature-5", name: "Account Recovery Assistance", included: true },
    ],
    simpleFeatures: [
      "3 Verified Business Managers",
      "3 Payment Methods",
      "3 Facebook Pixels",
      "Priority Support",
      "Account Recovery Assistance",
    ],
    includes: [
      {
        name: "Multiple Business Managers",
        description: "3 verified Business Manager accounts for different campaigns",
        icon: "/verified-facebook-business-manager-icon.png",
      },
      {
        name: "Multiple Payment Methods",
        description: "3 payment methods for flexible spending",
        icon: "/multiple-payment-methods-icon.png",
      },
      {
        name: "Advanced Pixel Setup",
        description: "3 Facebook Pixels for detailed conversion tracking",
        icon: "/facebook-pixel-tracking-icon.png",
      },
    ],
    benefits: [
      "Multiple payment methods for spending flexibility",
      "Verified business status for higher trust",
      "Enhanced pixel tracking for better analytics",
    ],
    idealFor: [
      "Growing businesses with increasing ad spend",
      "Marketers managing multiple campaigns",
      "E-commerce stores with multiple product lines",
    ],
    faq: [
      {
        question: "What's the difference between the Starter Pack and Pro Pack?",
        answer:
          "The Pro Pack includes 3 Business Managers instead of 1, 3 payment methods instead of 1, and comes with priority support and account recovery assistance.",
      },
      {
        question: "Can I add more payment methods later?",
        answer:
          "Yes, additional payment methods can be purchased separately or you can upgrade to our Agency Pack for more options.",
      },
    ],
    callToAction: "Upgrade Now",
    secondaryCallToAction: "See Details",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    hoverGradient: "from-purple-600 to-pink-600",
    url: "/pro-pack",
    badge: "Most Popular",
    stock: "in-stock",
    deliveryTime: "48 hours",
  },
  {
    id: "agency-pack",
    numericId: 3,
    slug: "agency-pack",
    name: "Agency Pack",
    description: "Complete solution for professional agencies",
    shortDescription: "Complete solution for agencies managing multiple clients",
    longDescription: `The Agency Pack is our premium solution designed specifically for marketing agencies and professional advertisers managing multiple clients or large-scale campaigns.

    This comprehensive package includes 5 verified Business Managers, unlimited payment methods, and 5 Facebook pixels for comprehensive tracking. The Agency Pack also comes with 24/7 priority support, account recovery assistance, custom ad account setup, and scaling strategy consultation.

    With the Agency Pack, you'll have all the tools and resources needed to manage multiple clients efficiently and deliver exceptional results for your agency.`,
    price: 400,
    originalPrice: 599,
    comparePrice: 599,
    discount: 33,
    featured: true,
    category: "agency",
    image: "/facebook-verified-business-manager.png",
    features: [
      { id: "feature-1", name: "5 Verified Business Managers", included: true, highlight: true },
      { id: "feature-2", name: "Unlimited Payment Methods", included: true, highlight: true },
      { id: "feature-3", name: "5 Facebook Pixels", included: true },
      { id: "feature-4", name: "24/7 Priority Support", included: true },
      { id: "feature-5", name: "Account Recovery Assistance", included: true },
      { id: "feature-6", name: "Custom Ad Account Setup", included: true },
      { id: "feature-7", name: "Scaling Strategy Consultation", included: true },
    ],
    simpleFeatures: [
      "5 Verified Business Managers",
      "Unlimited Payment Methods",
      "5 Facebook Pixels",
      "24/7 Priority Support",
      "Account Recovery Assistance",
      "Custom Ad Account Setup",
      "Scaling Strategy Consultation",
    ],
    includes: [
      {
        name: "Multiple Business Managers",
        description: "5 verified Business Manager accounts for different clients",
        icon: "/verified-facebook-business-manager-icon.png",
      },
      {
        name: "Unlimited Payment Methods",
        description: "No limit on payment methods for maximum flexibility",
        icon: "/multiple-payment-methods-icon.png",
      },
      {
        name: "Advanced Strategy",
        description: "Custom scaling strategy consultation for optimal results",
        icon: "/experienced-marketer-icon.png",
      },
    ],
    benefits: [
      "Manage multiple clients from one dashboard",
      "Higher spending limits for large campaigns",
      "Advanced tracking and analytics capabilities",
    ],
    idealFor: [
      "Marketing agencies with multiple clients",
      "Large businesses with multiple brands",
      "Advanced marketers running complex campaigns",
    ],
    faq: [
      {
        question: "Is this pack suitable for agencies of all sizes?",
        answer:
          "Yes, the Agency Pack is designed to scale with your agency, whether you're managing a handful of clients or dozens.",
      },
      {
        question: "What kind of consultation is included?",
        answer:
          "The scaling strategy consultation includes personalized advice on budget allocation, audience targeting, and campaign optimization for maximum ROI.",
      },
    ],
    callToAction: "Get Agency Access",
    secondaryCallToAction: "Request Demo",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
    hoverGradient: "from-amber-600 to-orange-600",
    url: "/agency-pack",
    badge: "Premium",
    stock: "low-stock",
    deliveryTime: "72 hours",
  },
  {
    id: "business-complete-pack",
    numericId: 4,
    slug: "business-complete-pack",
    name: "Business Complete Pack",
    description: "All-in-one solution for established businesses",
    shortDescription: "All-in-one solution for established businesses",
    longDescription: `The Business Complete Pack is a comprehensive solution designed for established businesses looking to maximize their Facebook advertising potential.

    This package includes a verified BM5 Business Manager with spending limits, multiple USA profiles, and an aged reinstated page that provides immediate credibility. The Business Complete Pack also comes with advanced setup assistance and priority support to ensure your advertising campaigns run smoothly.

    With the Business Complete Pack, you'll have everything you need to run sophisticated advertising campaigns and achieve your business goals.`,
    price: 499,
    originalPrice: 699,
    comparePrice: 699,
    discount: 28,
    category: "premium",
    image: "/generic-social-media-bundle.png",
    features: [
      { id: "feature-1", name: "1 Verified BM5 Limited", included: true },
      { id: "feature-2", name: "2 USA Profiles", included: true, highlight: true },
      { id: "feature-3", name: "1 Aged Reinstated Page", included: true, highlight: true },
      { id: "feature-4", name: "Advanced setup assistance", included: true },
      { id: "feature-5", name: "Priority support", included: true },
      { id: "feature-6", name: "2 months consultation", included: true },
      { id: "feature-7", name: "Campaign optimization", included: true },
      { id: "feature-8", name: "Audience targeting guidance", included: true },
    ],
    simpleFeatures: [
      "1 Verified BM5 Limited",
      "2 USA Profiles",
      "1 Aged Reinstated Page",
      "Advanced setup assistance",
      "Priority support",
      "2 months consultation",
    ],
    includes: [
      {
        name: "Verified BM5 Limited",
        description: "A verified Business Manager with spending limits",
        icon: "/verified-facebook-business-manager-icon.png",
      },
      {
        name: "USA Profiles",
        description: "2 USA-based profiles for better ad performance",
        icon: "/facebook-business-manager-icon.png",
      },
      {
        name: "Aged Reinstated Page",
        description: "A pre-established page with history and credibility",
        icon: "/growing-business-icon.png",
      },
    ],
    benefits: [
      "Immediate access to established advertising assets",
      "USA-based profiles for better targeting options",
      "Expert setup and ongoing support",
    ],
    idealFor: [
      "Established businesses looking to scale advertising",
      "Companies targeting US markets",
      "Businesses needing quick advertising solutions",
    ],
    faq: [
      {
        question: "What advantages do USA profiles provide?",
        answer:
          "USA profiles typically have better targeting options, higher trust scores, and fewer restrictions compared to profiles from other regions.",
      },
      {
        question: "What is an aged reinstated page?",
        answer:
          "An aged reinstated page is a Facebook page with history that has been previously used and restored to good standing, providing immediate credibility for your advertising.",
      },
    ],
    callToAction: "Get Complete Pack",
    secondaryCallToAction: "Learn More",
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    hoverGradient: "from-blue-600 to-indigo-600",
    url: "/business-complete-pack",
    stock: "in-stock",
    deliveryTime: "48 hours",
  },
]

// Helper functions
export function getAllPackages(): Package[] {
  return packages
}

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((pack) => pack.slug === slug)
}

export function getPackageById(id: string): Package | undefined {
  return packages.find((pack) => pack.id === id)
}

export function getPackageByNumericId(id: number): Package | undefined {
  return packages.find((pack) => pack.numericId === id)
}

export function getPackagesByCategory(category: string): Package[] {
  return packages.filter((pack) => pack.category === category)
}

export function getFeaturedPackages(): Package[] {
  return packages.filter((pack) => pack.featured)
}

export function getPopularPackages(): Package[] {
  return packages.filter((pack) => pack.popular)
}

export function getPackagesWithDiscount(): Package[] {
  return packages.filter((pack) => pack.discount && pack.discount > 0)
}

// Landing page specific helper
export function getLandingPagePackages(): Package[] {
  return packages.filter((pack) => pack.numericId && pack.numericId <= 3)
}

// Packs page specific helper
export function getPacksPageData(): any[] {
  return packages.map((pack) => ({
    id: pack.id,
    name: pack.name,
    description: pack.description,
    price: `€${pack.price}`,
    features: pack.simpleFeatures || [],
    image: typeof pack.image === "string" ? pack.image : pack.image.src,
    badge: pack.badge,
    url: pack.url || `/${pack.slug}`,
    featured: pack.featured,
  }))
}

// Pack detail page specific helper
export function getPackDetailData(): any[] {
  return packages.map((pack) => ({
    id: pack.id,
    slug: pack.slug,
    name: pack.name,
    description: pack.description,
    longDescription: pack.longDescription || "",
    price: pack.price,
    comparePrice: pack.comparePrice || pack.originalPrice,
    features: pack.simpleFeatures || [],
    includes: pack.includes || [],
    image: typeof pack.image === "string" ? pack.image : pack.image.src,
    badge: pack.badge,
    stock: pack.stock || "in-stock",
    deliveryTime: pack.deliveryTime || "48 hours",
    faq: pack.faq || [],
  }))
}
