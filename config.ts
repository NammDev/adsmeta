import { Linkedin } from 'lucide-react'
export const CONTACT_INFO = {
  phone: '+84 865 717 497', // Replace with your actual phone number
  telegram: '@goads_official',
  telegramUrl: 'https://t.me/goads_official',
  website: 'https://goads.shop',
  email: 'info@goads.shop',
  linkedin: 'https://www.linkedin.com/company/goads-agency-vn',
  discord: 'https://discord.com/invite/WJ6wdcMEkg',
} as const

// You can add more global configurations here
export const SITE_CONFIG = {
  name: 'GoAds',
  description: 'Expert insights, guides, and tips for Facebook advertising success',
  // Add more site-wide configurations as needed
} as const

export const TEAM_MEMBERS = [
  {
    name: 'Justin Bui',
    role: 'Co-Founder',
    email: 'justinbui@goads.shop',
    image: '/avatar/justin.jpeg',
    telegram: 'https://t.me/justin_goads',
    linkedin: 'https://www.linkedin.com/in/justinbui12/',
    quote:
      'We built GoAds with one mission, to give power back to advertisers who refuse to let setbacks define their growth. We don’t just offer BM and VIA; we offer freedom to scale without fear. When others see risk, we engineer resilience',
    gradient: 'from-blue-500 to-indigo-600',
  },

  {
    name: 'Khanh Nguyen',
    role: 'Co-Founder',
    email: 'nammdev@goads.shop',
    image: '/avatar/nammdev.jpg',
    telegram: 'http://t.me/nammdev97',
    linkedin: 'https://www.linkedin.com/in/khanh-nguyen-230970277/',
    quote:
      "Behind every stable ad account is a system built to withstand chaos, that’s what I focus on. At GoAds, we don’t chase trends; we build tech that outlasts them. My goal is simple: create infrastructure so solid, our clients forget what 'restricted' even feels like.",
    gradient: 'from-green-500 to-teal-600',
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'David Anderson',
    role: 'Digital Marketing Agency Director',
    avatar: '/avatar/alex.png',
    rating: 5,
    testimonial:
      'The Premium Pack has been a game-changer for our agency. The combination of BM Verified accounts with $250 limits and Greenline Vias has allowed us to scale our campaigns with confidence. The quality of the accounts is outstanding!',
    pack: 'Premium Pack (€420) Customer',
    gradient: {
      card: 'from-blue-200 to-indigo-200',
      avatar: 'from-blue-500 to-indigo-500',
      badge: 'from-blue-100 to-indigo-100',
      text: 'text-blue-600',
      badgeText: 'text-blue-700',
    },
  },
  {
    name: 'Emma Thompson',
    role: 'E-commerce Marketing Manager',
    avatar: '/avatar/sarah.png',
    rating: 5,
    testimonial:
      'The Advanced Pack is perfect for my e-commerce business. Having a BM Verified account with $250 limit and the Pixel & Page setup has streamlined my ad campaigns. The Asia Via accounts are reliable, and the setup process was straightforward.',
    pack: 'Advanced Pack (€170) Customer',
    gradient: {
      card: 'from-purple-200 to-pink-200',
      avatar: 'from-purple-500 to-pink-500',
      badge: 'from-purple-100 to-pink-100',
      text: 'text-purple-600',
      badgeText: 'text-purple-700',
    },
  },
  {
    name: 'James Wilson',
    role: 'Performance Marketing Specialist',
    avatar: '/avatar/michael.png',
    rating: 5,
    testimonial:
      'Starting with the Basic Pack was the right choice for me. The unverified BM and Asia Via account provide everything I need to begin my Facebook ad journey. The optimized fanpage has helped me establish a strong presence quickly.',
    pack: 'Basic Pack (€90) Customer',
    gradient: {
      card: 'from-amber-200 to-orange-200',
      avatar: 'from-amber-500 to-orange-500',
      badge: 'from-amber-100 to-orange-100',
      text: 'text-amber-600',
      badgeText: 'text-amber-700',
    },
  },
]
