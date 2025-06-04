export interface PackReview {
  name: string
  role: string
  comment: string
  achievement: string
  rating?: number
  count?: number
}

export interface BudgetInfo {
  dailyBudget: number
  warning: string
}

export interface ProductInPack {
  productId: string
  quantity: number
  role: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Package {
  id: string
  slug: string
  name: string
  description: string
  price: number
  comparePrice: number
  category: "basic" | "advanced" | "premium" | "elite"
  image: string
  imageDesign?: string
  stock: "in-stock" | "low-stock" | "out-of-stock"
  badge?: string
  purchases: number
  products: ProductInPack[]
  detail: string
  faq: FAQ[]
  budgetInfo: BudgetInfo
  reviews: PackReview[]
}

export interface PackageLandingPage {
  id: string
  slug: string
  name: string
  description: string
  price: number
  image: string
  badge?: string
  products: ProductInPack[]
}

// Mock data for the pack - as provided in the current file
const packsData: Package[] = [
  {
    id: "premium-pack",
    slug: "premium-pack",
    name: "GoAds Premium",
    description: "A perfect pack for individuals who working with ads Agency!",
    price: 420,
    comparePrice: 500,
    category: "premium",
    image: "/packs/premium.png", // Placeholder image
    stock: "in-stock",
    badge: "Best Value",
    purchases: 250,
    products: [
      {
        productId: "bm-verified-250",
        quantity: 1,
        role: "1 Admin + 2 Employee ads Account (BM Verified $250 Limit)",
      },
      {
        productId: "bm-verified-250-pixel",
        quantity: 1,
        role: "Pixel & Page, 2 Admin (BM Verified $250 Limit)",
      },
      { productId: "fanpage", quantity: 2, role: "Optimized Advertising Page" },
      {
        productId: "Profile-usa-greenline",
        quantity: 5,
        role: "USA Profile (Including 2 Greenline)",
      },
    ],
    detail: `<p><strong>Popular Pack</strong> is specially designed for agencies and professional advertisers, offering a complete solution to scale your campaigns.</p><ul><li>Includes <strong>2 BM Verified $250 Limit:</strong> One BM with <span>1 Admin + 2 Employee</span> permissions, and another with <span>Pixel & Page + 2 Admin</span> for flexible management and delegation.</li><li>Comes with <strong>2 high-quality Fanpages:</strong> Pre-optimized for advertising, boosting engagement and credibility.</li><li>Features <strong>5 USA Profile accounts:</strong> Including <span>2 Greenline Profiles</span>, ensuring high trust and stability for critical ads campaigns.</li><li><strong>Ready to use:</strong> All accounts and pages are meticulously prepared — <span>start your campaigns immediately</span> without complex setup.</li></ul>`,
    faq: [
      {
        question: "What is a Greenline Profile, and why is it important?",
        answer:
          "A Greenline Profile is a high-quality USA account with verified status, ensuring higher trust and stability for managing ads accounts. It's ideal for agencies running large-scale campaigns as it reduces the risk of restrictions.",
      },
      {
        question: "How do I set up the BM and Profile in this pack?",
        answer:
          "Your pack comes with a detailed Setup Guide (see the 'Setup Guide' tab). You can also contact our support team Profile Live Chat or Email for personalized assistance during business hours.",
      },
      {
        question: "Can I customize this pack or request different components?",
        answer:
          "While this pack is pre-configured for optimal value, we do offer custom solutions. Please contact our support team to discuss your specific needs, and we'll do our best to accommodate them.",
      },
      {
        question: "What happens if an account in the pack gets restricted?",
        answer:
          "All accounts in the Popular Pack come with a 30-day replacement warranty. If any account is restricted within 30 days of purchase due to issues not caused by policy violations on your part, we'll replace it free of charge.",
      },
    ],
    budgetInfo: {
      dailyBudget: 250,
      warning:
        "Each BM in this pack supports a $250 daily spend limit per ads account. This is ideal for scaling campaigns effectively while maintaining account health.",
    },
    reviews: [
      {
        name: "Alex Chen",
        role: "Marketing Director at TechFlow Agency",
        comment:
          "GoAds Premium completely transformed our Facebook advertising approach. The account stability is incredible - no more worrying about sudden bans disrupting our campaigns.",
        achievement: "300% ROI increase in 2 months",
      },
      {
        name: "Sarah Johnson",
        role: "E-commerce Owner at Fashion Forward",
        comment:
          "After losing 3 ad accounts in a month, I was desperate. GoAds saved my business. The verified business managers are rock solid and customer support is outstanding.",
        achievement: "Scaled from $5K to $50K monthly ad spend",
      },
    ],
  },
  {
    id: "advanced-pack",
    slug: "advanced-pack",
    name: "GoAds Advanced",
    description:
      "A perfect starter pack for Beginners who want to start their Facebook ads journey!",
    price: 170,
    comparePrice: 200,
    category: "advanced",
    image: "/packs/advanced.png",
    stock: "in-stock",
    badge: "Great Start",
    purchases: 150,
    products: [
      {
        productId: "bm-verified-250",
        quantity: 1,
        role: "Add Account Agency (BM Verified $250 Limit)",
      },
      {
        productId: "bm-unverified",
        quantity: 1,
        role: "Pixel & Page (BM Unverified)",
      },
      { productId: "fanpage", quantity: 1, role: "Optimized Advertising Page" },
      { productId: "Profile-asia", quantity: 2, role: "Asia Profile (Admin Accounts)" },
    ],
    detail: `<p><strong>Basic Pack</strong> is designed for small businesses and individuals, providing essential tools to launch effective ads campaigns.</p><ul><li>Includes <strong>1 BM Verified $250 Limit:</strong> Perfect for <span>adding Agency accounts</span> with high stability.</li><li>Comes with <strong>1 BM Unverified:</strong> Equipped with <span>Pixel & Page</span> for seamless tracking and management.</li><li>Features <strong>1 high-quality Fanpage:</strong> Pre-optimized for advertising to <span>boost engagement</span>.</li><li>Provides <strong>2 Asia Profile accounts:</strong> Reliable for <span>admin roles</span>, ensuring smooth operations.</li><li><strong>Ready to use:</strong> Start your campaigns <span>immediately</span> with minimal setup.</li></ul>`,
    faq: [
      {
        question: "What's the difference between a BM Verified and BM Unverified?",
        answer:
          "A BM Verified is authenticated with higher trust, ideal for adding Agency accounts, while a BM Unverified is suitable for basic ads setups with Pixel and Page integration. Both are pre-configured for immediate use.",
      },
      {
        question: "How do I set up the BM and Profile in this pack?",
        answer:
          "Your pack includes a detailed Setup Guide (see the 'Setup Guide' tab). You can also reach out to our support team Profile Live Chat or Email for assistance during business hours.",
      },
      {
        question: "Can I upgrade this pack to include USA accounts?",
        answer:
          "Yes! You can upgrade to the Popular Pack or Vip Pro Max Pack for USA accounts, or contact our support team to customize your pack based on your needs.",
      },
      {
        question: "What happens if an account in the pack gets restricted?",
        answer:
          "All accounts in the Basic Pack come with a 30-day replacement warranty. If any account is restricted within 30 days due to issues not caused by policy violations on your part, we'll replace it free of charge.",
      },
    ],
    budgetInfo: {
      dailyBudget: 250,
      warning:
        "The BM Verified in this pack supports a $250 daily spend limit per ads account, perfect for small to medium campaigns.",
    },
    reviews: [
      {
        name: "Alex Chen",
        role: "Marketing Director at TechFlow Agency",
        comment:
          "GoAds Premium completely transformed our Facebook advertising approach. The account stability is incredible - no more worrying about sudden bans disrupting our campaigns.",
        achievement: "300% ROI increase in 2 months",
      },
      {
        name: "Sarah Johnson",
        role: "E-commerce Owner at Fashion Forward",
        comment:
          "After losing 3 ad accounts in a month, I was desperate. GoAds saved my business. The verified business managers are rock solid and customer support is outstanding.",
        achievement: "Scaled from $5K to $50K monthly ad spend",
      },
    ],
  },
  {
    id: "basic-pack",
    slug: "basic-pack",
    name: "GoAds Basic",
    description:
      "An affordable entry-level pack for individuals or small businesses starting their Facebook ads journey.",
    price: 90,
    comparePrice: 120,
    category: "basic",
    image: "/packs/basic.png",
    stock: "in-stock",
    badge: "Entry Level",
    purchases: 200,
    products: [
      { productId: "bm-unverified", quantity: 1, role: "Business Manager (Unverified)" },
      { productId: "Profile-asia", quantity: 1, role: "Asia Profile (Admin Account)" },
      { productId: "fanpage", quantity: 1, role: "Optimized Advertising Page" },
    ],
    detail: `<p><strong>Super Basic Pack</strong> is tailored for beginners, providing the essentials to start your Facebook ads campaigns.</p><ul><li>Includes <strong>1 Business Manager (Unverified):</strong> Ready for <span>basic ads management</span>.</li><li>Comes with <strong>1 Asia Profile:</strong> A reliable <span>admin account</span> for smooth operations.</li><li>Features <strong>1 high-quality Fanpage:</strong> Pre-optimized to <span>boost engagement</span> and credibility.</li><li><strong>Ready to use:</strong> Launch your first campaign <span>immediately</span> with no complicated setup.</li></ul>`,
    faq: [
      {
        question: "Is this pack suitable for complete beginners?",
        answer:
          "Yes! The Super Basic Pack is designed for those new to Facebook advertising, providing the essentials to get started without overwhelming complexity.",
      },
      {
        question: "How do I set up the components in this pack?",
        answer:
          "Your pack includes a step-by-step Setup Guide (see the 'Setup Guide' tab). You can also contact our support team Profile Live Chat or Email for assistance during business hours.",
      },
      {
        question: "Can I upgrade this pack for more features?",
        answer:
          "Absolutely! You can upgrade to the Basic Pack, Popular Pack, or Vip Pro Max Pack for additional features and accounts. Contact our support team for more details.",
      },
      {
        question: "What happens if an account in the pack gets restricted?",
        answer:
          "All accounts in the Super Basic Pack come with a 30-day replacement warranty. If any account is restricted within 30 days due to issues not caused by policy violations on your part, we'll replace it free of charge.",
      },
    ],
    budgetInfo: {
      dailyBudget: 50,
      warning:
        "The BM in this pack supports a starting $50 daily spend limit, suitable for small campaigns.",
    },
    reviews: [
      {
        name: "Alex Chen",
        role: "Marketing Director at TechFlow Agency",
        comment:
          "GoAds Premium completely transformed our Facebook advertising approach. The account stability is incredible - no more worrying about sudden bans disrupting our campaigns.",
        achievement: "300% ROI increase in 2 months",
      },
      {
        name: "Sarah Johnson",
        role: "E-commerce Owner at Fashion Forward",
        comment:
          "After losing 3 ad accounts in a month, I was desperate. GoAds saved my business. The verified business managers are rock solid and customer support is outstanding.",
        achievement: "Scaled from $5K to $50K monthly ad spend",
      },
    ],
  },
  {
    id: "elite-pack",
    slug: "elite-pack",
    name: "GoAds Elite",
    description: "The ultimate pack for large agencies, offering powerful Business Managers",
    price: 790,
    comparePrice: 1000,
    category: "elite",
    image: "/packs/elite.png",
    stock: "in-stock",
    badge: "Premium Choice",
    purchases: 100,
    products: [
      {
        productId: "bm5",
        quantity: 1,
        role: "4 Profile Accounts: 2 Admin + 2 Employee (BM5)",
      },
      {
        productId: "bm-verified-250",
        quantity: 1,
        role: "2 Admin + 2 Pages (BM Verified $250 Limit)",
      },
      { productId: "fanpage", quantity: 2, role: "Optimized Advertising Page" },
      {
        productId: "Profile-usa-greenline",
        quantity: 6,
        role: "USA Profile (Including 3 Greenline)",
      },
    ],
    detail: `<p><strong>Vip Pro Max Pack</strong> is the ultimate choice for large agencies, delivering powerful tools for advanced ads campaigns.</p><ul><li>Includes <strong>1 BM5:</strong> Comes with <span>4 Profile accounts (2 Admin + 2 Employee)</span> for maximum control and scalability.</li><li>Features <strong>1 BM Verified $250 Limit:</strong> Equipped with <span>2 Admin + 2 Pages</span> for flexible management.</li><li>Comes with <strong>2 high-quality Fanpages:</strong> Pre-optimized for <span>high engagement</span> and credibility.</li><li>Provides <strong>6 USA Profile accounts:</strong> Including <span>3 Greenline Profiles</span>, ensuring top-tier trust and stability.</li><li><strong>Ready to use:</strong> Launch your campaigns <span>immediately</span> with seamless integration.</li></ul>`,
    faq: [
      {
        question: "What makes BM5 different from a regular BM?",
        answer:
          "A BM5 is a high-capacity Business Manager that supports more ads accounts and higher spend limits, ideal for large agencies. It comes with 4 Profile accounts (2 Admin + 2 Employee) for advanced management.",
      },
      {
        question: "How do I set up the BM and Profile in this pack?",
        answer:
          "Your pack includes a comprehensive Setup Guide (see the 'Setup Guide' tab). You can also contact our support team Profile Live Chat or Email for personalized assistance during business hours.",
      },
      {
        question: "Can I use this pack for Shopify ads campaigns?",
        answer:
          "Yes! The Vip Pro Max Pack is optimized for Shopify integration, with pre-configured Pages and Profiles to help you run effective e-commerce ads campaigns.",
      },
      {
        question: "What happens if an account in the pack gets restricted?",
        answer:
          "All accounts in the Vip Pro Max Pack come with a 30-day replacement warranty. If any account is restricted within 30 days due to issues not caused by policy violations on your part, we'll replace it free of charge.",
      },
    ],
    budgetInfo: {
      dailyBudget: 250,
      warning:
        "The BM Verified in this pack supports a $250 daily spend limit per ads account, while the BM5 allows for higher scalability.",
    },
    reviews: [
      {
        name: "Alex Chen",
        role: "Marketing Director at TechFlow Agency",
        comment:
          "GoAds Premium completely transformed our Facebook advertising approach. The account stability is incredible - no more worrying about sudden bans disrupting our campaigns.",
        achievement: "300% ROI increase in 2 months",
      },
      {
        name: "Sarah Johnson",
        role: "E-commerce Owner at Fashion Forward",
        comment:
          "After losing 3 ad accounts in a month, I was desperate. GoAds saved my business. The verified business managers are rock solid and customer support is outstanding.",
        achievement: "Scaled from $5K to $50K monthly ad spend",
      },
    ],
  },
]

export function getPackageDetailBySlug(slug: string): Package | undefined {
  return packsData.find((pack) => pack.slug === slug)
}

// Landing page specific helper
export function getPackagesLandingPage(): PackageLandingPage[] {
  return [...packsData]
    .sort((a, b) => a.price - b.price)
    .slice(1, 4)
    .map(({ id, slug, name, description, price, image, badge, products }, index) => ({
      id,
      slug,
      name,
      description,
      price,
      image,
      badge,
      products,
    }))
}

// Pages pack specific helper
export function getPackagesListPage(): PackageLandingPage[] {
  return packsData
    .map((pack) => ({
      id: pack.id,
      slug: pack.slug,
      name: pack.name,
      description: pack.description,
      price: pack.price,
      image: pack.image,
      badge: pack.badge,
      products: pack.products,
    }))
    .sort((a, b) => {
      // Extract numeric price values by removing the € symbol and converting to number
      const priceA = parseFloat(a.price.toString().replace("€", ""))
      const priceB = parseFloat(b.price.toString().replace("€", ""))
      return priceA - priceB
    })
}
