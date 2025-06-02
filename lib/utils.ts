import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { CONTACT_INFO } from "@/config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function processContent(content: string) {
  if (!content) return ""

  // First, process headings to add IDs
  let processed = content.replace(/<h([2-3])>(.*?)<\/h[2-3]>/g, (match, level, text) => {
    const id = text.toLowerCase().replace(/[^\w]+/g, "-")
    return `<h${level} id="${id}">${text}</h${level}>`
  })

  // Then, ensure all HTML tags are properly closed and formatted
  processed = processed
    .replace(/<p>(.*?)<\/p>/g, (match, content) => {
      return `<p>${content.trim()}</p>`
    })
    .replace(/<strong>(.*?)<\/strong>/g, (match, content) => {
      return `<strong>${content.trim()}</strong>`
    })
    .replace(/<em>(.*?)<\/em>/g, (match, content) => {
      return `<em>${content.trim()}</em>`
    })

  return processed
}

// Contact utility functions
export function openWhatsApp(message?: string) {
  const defaultPhone = CONTACT_INFO.phone.replace(/\D/g, "") // Remove non-digits
  const defaultMessage = "Hello! I'm interested in your products."

  const phone = defaultPhone
  const msg = message || defaultMessage
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`

  window.open(url, "_blank")
}

export function openTelegram(message?: string) {
  const defaultUsername = CONTACT_INFO.telegram.replace("@", "") // Remove @ symbol
  const defaultMessage = "Hello! I'm interested in your products."

  const telegramUsername = defaultUsername
  const msg = message || defaultMessage
  const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(msg)}`

  window.open(url, "_blank")
}

export function openEmail(email?: string, subject?: string, body?: string) {
  const defaultEmail = CONTACT_INFO.email
  const defaultSubject = "Inquiry about your products"
  const defaultBody = "Hello! I'm interested in learning more about your products."

  const emailAddress = email || defaultEmail
  const emailSubject = subject || defaultSubject
  const emailBody = body || defaultBody

  window.open(
    `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
      emailBody
    )}`,
    "_blank"
  )
}
