import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Contact utility functions
export function openWhatsApp(phoneNumber?: string, message?: string) {
  const defaultPhone = "1234567890" // Replace with your actual phone number
  const defaultMessage = "Hello! I'm interested in your products."

  const phone = phoneNumber || defaultPhone
  const msg = message || defaultMessage
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`

  window.open(url, "_blank")
}

export function openTelegram(username?: string) {
  const defaultUsername = "yourusername" // Replace with your actual Telegram username
  const telegramUsername = username || defaultUsername

  window.open(`https://t.me/${telegramUsername}`, "_blank")
}

export function openEmail(email?: string, subject?: string, body?: string) {
  const defaultEmail = "your-email@gmail.com" // Replace with your actual email
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
