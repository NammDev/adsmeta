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
  category: 'basic' | 'advanced' | 'premium' | 'elite'
  image: string
  imageDesign?: string
  stock: 'in-stock' | 'low-stock' | 'out-of-stock'
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
    id: 'premium-pack',
    slug: 'premium-pack',
    name: 'GoAds Premium',
    description:
      'The ultimate premium pack for agencies — BM5 verified with unlimited capacity, pixel management, and professional infrastructure!',
    price: 550,
    comparePrice: 715,
    category: 'premium',
    image: '/packs/premium.png',
    stock: 'in-stock',
    badge: 'Best Value',
    purchases: 280,
    products: [
      {
        productId: 'bm5-verified-250',
        quantity: 1,
        role: 'BM5 Verified $250 DSL (Running Campaign) - $330 Value',
      },
      {
        productId: 'bm1-verified-pixel',
        quantity: 1,
        role: 'BM1 Verified (Pixel Bank) - $80 Value',
      },
      {
        productId: 'Profile-premium-aged',
        quantity: 4,
        role: 'Premium Aged Reinstated Profiles (4x) - $200 Value',
      },
      { productId: 'fanpage-aged', quantity: 3, role: 'Aged Reinstated Pages (3x) - $105 Value' },
    ],
    detail: `<p><strong>GoAds Premium Bulletproof Setup</strong> is engineered for professional agencies and enterprises seeking maximum stability, capacity, and control.</p><ul><li>Includes <strong>1 BM5 Verified $250 DSL:</strong> Enterprise-grade Business Manager with <span>unlimited ads account capacity</span> and <span>$250 daily spend limit</span> per account. Perfect for <span>running high-volume campaigns</span> across multiple brands and clients.</li><li>Features <strong>1 BM1 Verified Pixel Bank:</strong> Dedicated Business Manager exclusively for <span>pixel tracking and conversion management</span>. Ensures optimal data collection and <span>zero pixel conflicts</span> across campaigns.</li><li>Comes with <strong>4 Premium Aged Reinstated Profiles:</strong> Highly trusted accounts with <span>proven history</span> for maximum <span>admin and operational roles</span>. Reduces risk and ensures smooth delegation.</li><li>Includes <strong>3 Aged Reinstated Pages:</strong> Established pages with <span>organic credibility</span> and <span>green quality status</span>. Ready for <span>immediate high-performing campaigns</span>.</li><li><strong>Enterprise Ready:</strong> This pack is built for <span>serious scale</span>. Support multiple teams, manage complex hierarchies, and run campaigns without restrictions.</li><li><strong>Maximum Stability:</strong> Each component is carefully vetted for <span>long-term reliability</span> and <span>zero downtime</span>.</li></ul>`,
    faq: [
      {
        question: 'What makes a BM5 different from BM1?',
        answer:
          'A BM5 supports unlimited ads accounts and multiple sub-business managers, making it ideal for large agencies. Our BM5 Verified includes a $250 daily spend limit per ads account and is optimized for running enterprise-scale campaigns.',
      },
      {
        question: 'Why is a separate pixel bank important?',
        answer:
          'A dedicated BM1 Pixel Bank prevents pixel conflicts and ensures clean conversion tracking. This is critical when running multiple campaigns across different accounts, as it maintains data integrity and improves reporting accuracy.',
      },
      {
        question: 'How many campaigns can I run simultaneously?',
        answer:
          'With the BM5 and 4 premium profiles included, you can manage virtually unlimited campaigns across multiple brands and business units. The architecture supports complex organizational hierarchies.',
      },
      {
        question: 'Are these aged profiles better than new ones?',
        answer:
          'Yes, aged profiles have established history with Facebook, resulting in faster approvals, better pixel delivery, and lower restriction risk. Premium aged profiles are the gold standard for serious advertisers.',
      },
      {
        question: 'Can I delegate to team members?',
        answer:
          'Absolutely! The BM5 structure with 4 admin profiles allows you to create multiple levels of access for team members while maintaining security and control over accounts.',
      },
      {
        question: 'What happens if an account gets restricted?',
        answer:
          "All accounts in the Premium Bulletproof Setup come with a 30-day replacement warranty. If any component is restricted within 30 days due to issues not caused by policy violations on your part, we'll replace it free of charge.",
      },
    ],
    budgetInfo: {
      dailyBudget: 250,
      warning:
        'Each ads account under the BM5 supports a $250 daily spend limit. With unlimited ads account capacity, you can scale to millions in monthly spend while maintaining account health.',
    },
    reviews: [
      {
        name: 'Jennifer Martinez',
        role: 'Agency Owner at Scale Marketing Co',
        comment:
          "The Bulletproof Setup changed everything for our agency. Managing 50+ client accounts used to be stressful. Now it's seamless. Zero restrictions in 6 months.",
        achievement: 'Managing $2M+ monthly ad spend across 50+ clients',
      },
      {
        name: 'Rajesh Patel',
        role: 'Head of Advertising at TechStart Ventures',
        comment:
          'The separate pixel bank alone is worth the investment. Our data integrity improved immediately, and conversion tracking is now 100% accurate. The premium profiles are rock solid.',
        achievement: '45% improvement in data accuracy and reporting',
      },
      {
        name: 'Lisa Chen',
        role: 'Performance Marketing Director',
        comment:
          'This is the premium pack agencies have been waiting for. BM5 capacity with aged pages means no limitations. Customer support is exceptional too.',
        achievement: 'Zero account restrictions in 12 months',
      },
    ],
  },
  {
    id: 'advanced-pack',
    slug: 'advanced-pack',
    name: 'GoAds Advanced',
    description:
      'Perfect for growing businesses ready to scale: includes verified BM, premium profiles, and aged pages for professional campaigns!',
    price: 180,
    comparePrice: 250,
    category: 'advanced',
    image: '/packs/advanced.png',
    stock: 'in-stock',
    badge: 'Recommended',
    purchases: 180,
    products: [
      {
        productId: 'bm-verified-250',
        quantity: 1,
        role: 'BM1 Verified (Running Campaign & Create Pixel) - $100 Value',
      },
      {
        productId: 'Profile-premium-aged',
        quantity: 2,
        role: 'Premium Aged Reinstated Profiles - $80 Value',
      },
      { productId: 'fanpage-aged', quantity: 2, role: 'Aged Reinstated Pages - $70 Value' },
    ],
    detail: `<p><strong>GoAds Advanced Setup Pack</strong> is designed for entrepreneurs and growing businesses ready to scale their Facebook advertising campaigns professionally.</p><ul><li>Includes <strong>1 BM1 Verified:</strong> Fully capable of <span>running live campaigns</span> and <span>creating tracking pixels</span> for optimal performance measurement. High trust score ensures faster approvals and stable operations.</li><li>Features <strong>2 Premium Aged Reinstated Profiles:</strong> Established accounts with <span>proven history</span>, ensuring credibility and reduced risk of restrictions. Perfect for <span>admin and backup roles</span>.</li><li>Comes with <strong>2 Aged Reinstated Pages:</strong> Pre-warmed and <span>ready for immediate advertising</span>. These pages have organic history and green quality status for better ad delivery.</li><li><strong>Campaign Ready:</strong> Launch professional campaigns <span>immediately</span> without complex setup. All components are pre-configured and tested.</li><li><strong>Premium Quality:</strong> Each component has been <span>carefully vetted and aged</span> for maximum stability and performance.</li></ul>`,
    faq: [
      {
        question: 'What can I do with a BM1 Verified account?',
        answer:
          "A BM1 Verified account allows you to run live campaigns across multiple ads accounts, create and manage tracking pixels for conversion measurement, and manage Business assets with higher trust. It's ideal for businesses running campaigns professionally.",
      },
      {
        question: 'Why are aged profiles and pages better?',
        answer:
          'Aged accounts have established history on Facebook, making them more trustworthy in the eyes of the algorithm. This results in faster ad approvals, better delivery rates, and lower risk of restrictions or policy issues.',
      },
      {
        question: 'How do I set up this pack?',
        answer:
          "Your pack includes a comprehensive Setup Guide with step-by-step instructions (see the 'Setup Guide' tab). Our support team is also available via Live Chat or Email to assist you during business hours.",
      },
      {
        question: 'Can I run multiple campaigns simultaneously?',
        answer:
          'Yes! With the BM1 Verified and 2 admin profiles included, you can manage and run multiple campaigns simultaneously across different audience segments.',
      },
      {
        question: 'What happens if an account gets restricted?',
        answer:
          "All accounts in the Advanced Setup Pack come with a 30-day replacement warranty. If any component is restricted within 30 days due to issues not caused by policy violations on your part, we'll replace it free of charge.",
      },
      {
        question: 'Can I upgrade to a higher tier pack later?',
        answer:
          'Absolutely! You can upgrade to the Popular Pack or Elite Pack anytime for additional capacity and features. Our support team can help you transition smoothly.',
      },
    ],
    budgetInfo: {
      dailyBudget: 250,
      warning:
        'The BM1 Verified in this pack supports a $250 daily spend limit per ads account, ideal for scaling campaigns while maintaining account health.',
    },
    reviews: [
      {
        name: 'Marcus Rodriguez',
        role: 'E-commerce Business Owner',
        comment:
          'The Advanced Setup pack gave me exactly what I needed to scale. The aged pages had immediate approval and the verified BM is rock solid. Highly recommend!',
        achievement: 'Scaled ad spend from $10K to $50K/month in 60 days',
      },
      {
        name: 'Priya Patel',
        role: 'Digital Marketing Consultant',
        comment:
          'My clients love the quality and stability of these accounts. The aged profiles and pages perform remarkably well. This pack offers incredible value.',
        achievement: '250% average ROAS improvement for clients',
      },
      {
        name: 'David Kim',
        role: 'Agency Director',
        comment:
          "As an agency, we go through accounts fast. This Advanced pack's reliability means less downtime and more client satisfaction. Worth every penny.",
        achievement: 'Zero account restrictions in 90 days',
      },
    ],
  },
  {
    id: 'basic-pack',
    slug: 'basic-pack',
    name: 'GoAds Basic',
    description:
      'An affordable entry-level pack for individuals or small businesses starting their Facebook ads journey.',
    price: 90,
    comparePrice: 120,
    category: 'basic',
    image: '/packs/basic.png',
    stock: 'in-stock',
    badge: 'Entry Level',
    purchases: 200,
    products: [
      { productId: 'bm-unverified', quantity: 1, role: 'Business Manager (Unverified)' },
      { productId: 'Profile-asia', quantity: 1, role: 'Asia Profile (Admin Account)' },
      { productId: 'fanpage', quantity: 1, role: 'Optimized Advertising Page' },
    ],
    detail: `<p><strong>Super Basic Pack</strong> is tailored for beginners, providing the essentials to start your Facebook ads campaigns.</p><ul><li>Includes <strong>1 Business Manager (Unverified):</strong> Ready for <span>basic ads management</span>.</li><li>Comes with <strong>1 Asia Profile:</strong> A reliable <span>admin account</span> for smooth operations.</li><li>Features <strong>1 high-quality Fanpage:</strong> Pre-optimized to <span>boost engagement</span> and credibility.</li><li><strong>Ready to use:</strong> Launch your first campaign <span>immediately</span> with no complicated setup.</li></ul>`,
    faq: [
      {
        question: 'Is this pack suitable for complete beginners?',
        answer:
          'Yes! The Super Basic Pack is designed for those new to Facebook advertising, providing the essentials to get started without overwhelming complexity.',
      },
      {
        question: 'How do I set up the components in this pack?',
        answer:
          "Your pack includes a step-by-step Setup Guide (see the 'Setup Guide' tab). You can also contact our support team Profile Live Chat or Email for assistance during business hours.",
      },
      {
        question: 'Can I upgrade this pack for more features?',
        answer:
          'Absolutely! You can upgrade to the Basic Pack, Popular Pack, or Vip Pro Max Pack for additional features and accounts. Contact our support team for more details.',
      },
      {
        question: 'What happens if an account in the pack gets restricted?',
        answer:
          "All accounts in the Super Basic Pack come with a 30-day replacement warranty. If any account is restricted within 30 days due to issues not caused by policy violations on your part, we'll replace it free of charge.",
      },
    ],
    budgetInfo: {
      dailyBudget: 50,
      warning:
        'The BM in this pack supports a starting $50 daily spend limit, suitable for small campaigns.',
    },
    reviews: [
      {
        name: 'Alex Chen',
        role: 'Marketing Director at TechFlow Agency',
        comment:
          'GoAds Premium completely transformed our Facebook advertising approach. The account stability is incredible - no more worrying about sudden bans disrupting our campaigns.',
        achievement: '300% ROI increase in 2 months',
      },
      {
        name: 'Sarah Johnson',
        role: 'E-commerce Owner at Fashion Forward',
        comment:
          'After losing 3 ad accounts in a month, I was desperate. GoAds saved my business. The verified business managers are rock solid and customer support is outstanding.',
        achievement: 'Scaled from $5K to $50K monthly ad spend',
      },
    ],
  },
  {
    id: 'elite-pack',
    slug: 'elite-pack',
    name: 'GoAds Elite',
    description:
      'The ultimate enterprise-grade pack for massive scale: dual BM5 verified accounts, 6 premium profiles, and 4 aged pages for unlimited campaign capacity!',
    price: 790,
    comparePrice: 1100,
    category: 'elite',
    image: '/packs/elite.png',
    stock: 'in-stock',
    badge: 'Premium Choice',
    purchases: 100,
    products: [
      {
        productId: 'bm5-verified-250-dsl',
        quantity: 1,
        role: 'BM5 Verified $250 DSL (Running Campaign) - $330 Value',
      },
      {
        productId: 'bm5-verified-250-pixel',
        quantity: 1,
        role: 'BM5 Verified $250 DSL (Pixel Bank) - $330 Value',
      },
      {
        productId: 'Profile-premium-aged-elite',
        quantity: 6,
        role: 'Premium Aged Reinstated Profiles (6x) - $300 Value',
      },
      {
        productId: 'fanpage-aged-elite',
        quantity: 4,
        role: 'Aged Reinstated Pages (4x) - $140 Value',
      },
    ],
    detail: `<p><strong>GoAds Elite Bulletproof Setup</strong> is the pinnacle of Facebook advertising infrastructure, engineered for enterprise-level operations and unlimited scale.</p><ul><li>Includes <strong>2 BM5 Verified $250 DSL:</strong> Dual high-capacity Business Managers with <span>unlimited ads account capacity</span> and <span>$250 daily spend limit per account</span>. One dedicated for <span>live campaign management</span>, one for <span>pixel tracking and conversion optimization</span>. Enables <span>extreme scalability and organizational complexity</span>.</li><li>Features <strong>6 Premium Aged Reinstated Profiles:</strong> Maximum admin and operational capacity with <span>proven account history</span>. Supports <span>complex delegation hierarchies</span>, multiple team levels, and <span>white-label operations</span>.</li><li>Comes with <strong>4 Aged Reinstated Pages:</strong> Highly established pages with <span>organic credibility</span> and <span>green quality status</span>. Pre-warmed for <span>immediate high-volume campaigns</span> across multiple brands and verticals.</li><li><strong>Enterprise Scale Ready:</strong> Built for <span>managing $5M+ monthly ad spend</span> across hundreds of campaigns. Support <span>multiple agencies, brands, and business units</span> from a single infrastructure.</li><li><strong>Maximum Redundancy:</strong> Dual BM5 structure ensures <span>zero single points of failure</span>. If one BM needs maintenance, the other continues operations seamlessly.</li><li><strong>Premium Stability:</strong> Each component is <span>extensively aged and verified</span> for <span>maximum uptime and zero restrictions</span>. Enterprise-grade reliability for mission-critical campaigns.</li></ul>`,
    faq: [
      {
        question: 'Why do I need 2 BM5 accounts in this pack?',
        answer:
          'Dual BM5 accounts provide operational redundancy and specialized functionality. One BM5 handles live campaign management across unlimited ads accounts, while the second manages all pixel tracking and conversion data. This separation ensures clean data and eliminates conflicts.',
      },
      {
        question: 'What does $250 DSL mean?',
        answer:
          '$250 DSL (Daily Spend Limit) means each ads account under the BM5 can spend up to $250 per day. With unlimited ads account capacity and dual BM5s, you can scale to $5M+ monthly spend without hitting any limits.',
      },
      {
        question: 'How many campaigns can I manage with this setup?',
        answer:
          'With dual BM5s and 6 premium profiles, you can manage virtually unlimited campaigns across any number of brands, clients, or business units. The architecture supports complex organizational hierarchies with multiple team levels.',
      },
      {
        question: 'Are aged profiles and pages really that much better?',
        answer:
          'Absolutely. Aged accounts have established Facebook history, resulting in instant approvals, better pixel delivery, lower restriction risk, and higher trust score with the algorithm. Premium aged accounts are the gold standard for enterprise operations.',
      },
      {
        question: 'Can I delegate to multiple teams with this pack?',
        answer:
          'Yes! The 6 premium profiles and dual BM5 structure allows you to create complex delegation hierarchies with multiple team levels. You can set up department-level access, regional managers, or white-label operations.',
      },
      {
        question: 'What happens if an account gets restricted?',
        answer:
          "All components in the Elite Bulletproof Setup come with a 30-day replacement warranty. If any account is restricted within 30 days due to issues not caused by policy violations on your part, we'll replace it free of charge.",
      },
    ],
    budgetInfo: {
      dailyBudget: 250,
      warning:
        'Each ads account under either BM5 supports a $250 daily spend limit. With unlimited ads account capacity and dual BM5s, your total monthly spend capacity is effectively unlimited (typical enterprise usage: $2M-$10M+ monthly).',
    },
    reviews: [
      {
        name: 'Michael Thompson',
        role: 'Founder & CEO at Global Marketing Group',
        comment:
          "The Elite Bulletproof Setup is a game-changer for enterprise operations. Managing $5M+ monthly spend across 20+ brands used to require juggling multiple vendors. Now it's all seamless with zero restrictions.",
        achievement:
          'Managing $5M+ monthly ad spend across 20+ brands with zero account restrictions',
      },
      {
        name: 'Samantha Lee',
        role: 'VP of Operations at Digital Excellence Agency',
        comment:
          'The dual BM5 architecture with pixel bank separation changed everything. Our data integrity is perfect, conversion tracking is 100% accurate, and we can scale clients without any concerns. The 6 premium profiles handle complex delegation beautifully.',
        achievement: '60% improvement in operational efficiency, managing 100+ client accounts',
      },
      {
        name: 'Robert Davidson',
        role: 'Chief Revenue Officer at Scale Ventures',
        comment:
          'As someone managing enterprise-level campaigns, this is exactly what I needed. The aged pages and profiles are rock solid. Zero downtime in 12 months, zero account restrictions. Customer support is exceptional. Worth every penny.',
        achievement: 'Zero account restrictions in 365 days, 99.9% uptime',
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
      // Extract numeric price values by removing the $ symbol and converting to number
      const priceA = parseFloat(a.price.toString().replace('$', ''))
      const priceB = parseFloat(b.price.toString().replace('$', ''))
      return priceA - priceB
    })
}
