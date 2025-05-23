import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Opens WhatsApp chat with the specified message
 * @param message - The initial message to send
 * @param phoneNumber - Optional phone number (with country code, no spaces or symbols)
 */
export function openWhatsAppChat(message: string, phoneNumber?: string) {
  // Default phone number if not provided
  const phone = phoneNumber || "12345678901" // Replace with your actual default phone number

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message)

  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`

  // Open in a new tab
  window.open(whatsappUrl, "_blank")
}
