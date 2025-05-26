import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add the missing openWhatsAppChat function
export function openWhatsAppChat() {
  // Replace with your actual WhatsApp number and message
  const phoneNumber = "1234567890" // Replace with your actual WhatsApp number
  const message = "Hello! I'm interested in your products."

  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Open in a new tab
  window.open(whatsappUrl, "_blank")
}
