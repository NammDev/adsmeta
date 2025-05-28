export const CONTACT_INFO = {
  phone: "+84 865046497", // Replace with your actual phone number
  telegram: "@goads_official",
  telegramUrl: "https://t.me/goads_official",
  website: "https://goads.shop",
  email: "goads@gmail.com",
} as const

// You can add more global configurations here
export const SITE_CONFIG = {
  name: "GoAds",
  description: "Expert insights, guides, and tips for Facebook advertising success",
  // Add more site-wide configurations as needed
} as const

export const TEAM_MEMBERS = [
  {
    name: "John Smith",
    email: "john.smith@goads.shop",
    avatar: "/team/john-smith.jpg",
    position: "Founder & CEO",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@goads.shop",
    avatar: "/team/sarah-johnson.jpg",
    position: "Head of Marketing",
  },
  {
    name: "Michael Chen",
    email: "michael.c@goads.shop",
    avatar: "/team/michael-chen.jpg",
    position: "Lead Developer",
  },
] as const
