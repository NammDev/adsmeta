export interface Review {
  rating: number
  count: number
  comments: string[]
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
  category: "agency" | "basic" | "premium"
  image: string
  stock: "in-stock" | "low-stock" | "out-of-stock"
  badge?: string
  purchases: number
  products: ProductInPack[]
  detail: string
  solution: string
  faq: FAQ[]
  budgetInfo: BudgetInfo
  review: Review
}

export interface PackageListPage {
  id: string
  name: string
  description: string
  price: string
  badge?: string
  image: string
  url: string
  products: ProductInPack[]
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
  gradient: string
  bgGradient: string
  borderColor: string
  hoverGradient: string
}

// Mock data for the pack - as provided in the current file
const packsData: Package[] = [
  {
    id: "premium-pack",
    slug: "premium-pack",
    name: "Goads Premium",
    description: "A perfect pack for individuals who working with Ad Agency!",
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
        role: "1 Admin + 2 Employee Ad Account (BM Verified $250 Limit)",
      },
      {
        productId: "bm-verified-250-pixel",
        quantity: 1,
        role: "Pixel & Page, 2 Admin (BM Verified $250 Limit)",
      },
      { productId: "fanpage", quantity: 2, role: "Optimized Advertising Page" },
      { productId: "via-usa-greenline", quantity: 5, role: "USA Via (Including 2 Greenline)" },
    ],
    detail: `<p><strong>Popular Pack</strong> is specially designed for agencies and professional advertisers, offering a complete solution to scale your campaigns.</p><ul><li>Includes <strong>2 BM Verified $250 Limit:</strong> One BM with <span>1 Admin + 2 Employee</span> permissions, and another with <span>Pixel & Page + 2 Admin</span> for flexible management and delegation.</li><li>Comes with <strong>2 high-quality Fanpages:</strong> Pre-optimized for advertising, boosting engagement and credibility.</li><li>Features <strong>5 USA Via accounts:</strong> Including <span>2 Greenline Vias</span>, ensuring high trust and stability for critical ad campaigns.</li><li><strong>Ready to use:</strong> All accounts and pages are meticulously prepared — <span>start your campaigns immediately</span> without complex setup.</li></ul>`,
    solution:
      "A comprehensive solution for agencies aiming to run large-scale ads with reliable USA accounts, optimizing performance and minimizing risks.",
    faq: [
      {
        question: "What is a Greenline Via, and why is it important?",
        answer:
          "A Greenline Via is a high-quality USA account with verified status, ensuring higher trust and stability for managing ad accounts. It's ideal for agencies running large-scale campaigns as it reduces the risk of restrictions.",
      },
      {
        question: "How do I set up the BM and Via in this pack?",
        answer:
          "Your pack comes with a detailed Setup Guide (see the 'Setup Guide' tab). You can also contact our support team via Live Chat or Email for personalized assistance during business hours.",
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
        "Each BM in this pack supports a $250 daily spend limit per ad account. This is ideal for scaling campaigns effectively while maintaining account health.",
    },
    review: {
      rating: 4.8,
      count: 60,
      comments: [
        "High-quality USA accounts!",
        "Great value for agencies.",
        "Fast and effective support.",
      ],
    },
  },
  {
    id: "advanced-pack",
    slug: "advanced-pack",
    name: "GoAds Advanced",
    description:
      "A perfect starter pack for Beginners who want to start their Facebook ad journey!",
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
      { productId: "via-asia", quantity: 2, role: "Asia Via (Admin Accounts)" },
    ],
    detail: `<p><strong>Basic Pack</strong> is designed for small businesses and individuals, providing essential tools to launch effective ad campaigns.</p><ul><li>Includes <strong>1 BM Verified $250 Limit:</strong> Perfect for <span>adding Agency accounts</span> with high stability.</li><li>Comes with <strong>1 BM Unverified:</strong> Equipped with <span>Pixel & Page</span> for seamless tracking and management.</li><li>Features <strong>1 high-quality Fanpage:</strong> Pre-optimized for advertising to <span>boost engagement</span>.</li><li>Provides <strong>2 Asia Via accounts:</strong> Reliable for <span>admin roles</span>, ensuring smooth operations.</li><li><strong>Ready to use:</strong> Start your campaigns <span>immediately</span> with minimal setup.</li></ul>`,
    solution:
      "An all-in-one solution for small businesses to set up and run professional Facebook ad campaigns with ease.",
    faq: [
      {
        question: "What's the difference between a BM Verified and BM Unverified?",
        answer:
          "A BM Verified is authenticated with higher trust, ideal for adding Agency accounts, while a BM Unverified is suitable for basic ad setups with Pixel and Page integration. Both are pre-configured for immediate use.",
      },
      {
        question: "How do I set up the BM and Via in this pack?",
        answer:
          "Your pack includes a detailed Setup Guide (see the 'Setup Guide' tab). You can also reach out to our support team via Live Chat or Email for assistance during business hours.",
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
        "The BM Verified in this pack supports a $250 daily spend limit per ad account, perfect for small to medium campaigns.",
    },
    review: {
      rating: 4.7,
      count: 40,
      comments: ["Great for small businesses!", "Easy to set up and use.", "Good support team."],
    },
  },
  {
    id: "basic-pack",
    slug: "basic-pack",
    name: "GoAds Basic",
    description:
      "An affordable entry-level pack for individuals or small businesses starting their Facebook ad journey.",
    price: 90,
    comparePrice: 120,
    category: "basic",
    image: "/packs/basic.png",
    stock: "in-stock",
    badge: "Entry Level",
    purchases: 200,
    products: [
      { productId: "bm-unverified", quantity: 1, role: "Business Manager (Unverified)" },
      { productId: "via-asia", quantity: 1, role: "Asia Via (Admin Account)" },
      { productId: "fanpage", quantity: 1, role: "Optimized Advertising Page" },
    ],
    detail: `<p><strong>Super Basic Pack</strong> is tailored for beginners, providing the essentials to start your Facebook ad campaigns.</p><ul><li>Includes <strong>1 Business Manager (Unverified):</strong> Ready for <span>basic ad management</span>.</li><li>Comes with <strong>1 Asia Via:</strong> A reliable <span>admin account</span> for smooth operations.</li><li>Features <strong>1 high-quality Fanpage:</strong> Pre-optimized to <span>boost engagement</span> and credibility.</li><li><strong>Ready to use:</strong> Launch your first campaign <span>immediately</span> with no complicated setup.</li></ul>`,
    solution:
      "A simple solution for beginners to start running Facebook ads quickly and affordably.",
    faq: [
      {
        question: "Is this pack suitable for complete beginners?",
        answer:
          "Yes! The Super Basic Pack is designed for those new to Facebook advertising, providing the essentials to get started without overwhelming complexity.",
      },
      {
        question: "How do I set up the components in this pack?",
        answer:
          "Your pack includes a step-by-step Setup Guide (see the 'Setup Guide' tab). You can also contact our support team via Live Chat or Email for assistance during business hours.",
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
    review: {
      rating: 4.5,
      count: 30,
      comments: ["Perfect for beginners!", "Affordable and effective.", "Quick setup process."],
    },
  },
  {
    id: "elite-pack",
    slug: "elite-pack",
    name: "GoAds Elite",
    description: "The ultimate pack for large agencies, offering powerful Business Managers",
    price: 790,
    comparePrice: 1000,
    category: "premium",
    image: "/packs/elite.png",
    stock: "in-stock",
    badge: "Premium Choice",
    purchases: 100,
    products: [
      {
        productId: "bm5",
        quantity: 1,
        role: "4 Via Accounts: 2 Admin + 2 Employee (BM5)",
      },
      {
        productId: "bm-verified-250",
        quantity: 1,
        role: "2 Admin + 2 Pages (BM Verified $250 Limit)",
      },
      { productId: "fanpage", quantity: 2, role: "Optimized Advertising Page" },
      { productId: "via-usa-greenline", quantity: 6, role: "USA Via (Including 3 Greenline)" },
    ],
    detail: `<p><strong>Vip Pro Max Pack</strong> is the ultimate choice for large agencies, delivering powerful tools for advanced ad campaigns.</p><ul><li>Includes <strong>1 BM5:</strong> Comes with <span>4 Via accounts (2 Admin + 2 Employee)</span> for maximum control and scalability.</li><li>Features <strong>1 BM Verified $250 Limit:</strong> Equipped with <span>2 Admin + 2 Pages</span> for flexible management.</li><li>Comes with <strong>2 high-quality Fanpages:</strong> Pre-optimized for <span>high engagement</span> and credibility.</li><li>Provides <strong>6 USA Via accounts:</strong> Including <span>3 Greenline Vias</span>, ensuring top-tier trust and stability.</li><li><strong>Ready to use:</strong> Launch your campaigns <span>immediately</span> with seamless integration.</li></ul>`,
    solution:
      "The premium solution for large agencies to run high-volume ad campaigns with top-tier USA accounts and seamless Shopify integration.",
    faq: [
      {
        question: "What makes BM5 different from a regular BM?",
        answer:
          "A BM5 is a high-capacity Business Manager that supports more ad accounts and higher spend limits, ideal for large agencies. It comes with 4 Via accounts (2 Admin + 2 Employee) for advanced management.",
      },
      {
        question: "How do I set up the BM and Via in this pack?",
        answer:
          "Your pack includes a comprehensive Setup Guide (see the 'Setup Guide' tab). You can also contact our support team via Live Chat or Email for personalized assistance during business hours.",
      },
      {
        question: "Can I use this pack for Shopify ad campaigns?",
        answer:
          "Yes! The Vip Pro Max Pack is optimized for Shopify integration, with pre-configured Pages and Vias to help you run effective e-commerce ad campaigns.",
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
        "The BM Verified in this pack supports a $250 daily spend limit per ad account, while the BM5 allows for higher scalability.",
    },
    review: {
      rating: 4.9,
      count: 25,
      comments: [
        "Perfect for large agencies!",
        "High-quality accounts and great support.",
        "Transformed our ad campaigns.",
      ],
    },
  },
]

export function getPackageDetailBySlug(slug: string): Package | undefined {
  return packsData.find((pack) => pack.slug === slug)
}

// Landing page specific helper
export function getPackagesLandingPage(): PackageLandingPage[] {
  const styles = [
    {
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "bg-gradient-to-r from-purple-600 to-pink-600",
      hoverGradient: "from-purple-700 to-pink-700",
      borderColor: "border-purple-200",
    },
    {
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
      hoverGradient: "from-blue-700 to-indigo-700",
      borderColor: "border-blue-200",
    },
    {
      gradient: "from-green-600 to-teal-600",
      bgGradient: "bg-gradient-to-r from-green-600 to-teal-600",
      hoverGradient: "from-green-700 to-teal-700",
      borderColor: "border-green-200",
    },
  ]

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
      ...styles[index],
    }))
}

// Pages pack specific helper
export function getPackagesListPage(): PackageListPage[] {
  return packsData
    .map((pack) => ({
      id: pack.id,
      name: pack.name,
      description: pack.description,
      price: `€${pack.price}`,
      badge: pack.badge,
      image: typeof pack.image === "string" ? pack.image : pack.image,
      url: `/packs/${pack.slug}`,
      products: pack.products,
    }))
    .sort((a, b) => {
      // Extract numeric price values by removing the € symbol and converting to number
      const priceA = parseFloat(a.price.replace("€", ""))
      const priceB = parseFloat(b.price.replace("€", ""))
      return priceA - priceB
    })
}
