import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openWhatsAppChat(phoneNumber: string, message?: string) {
  // Remove any non-digit characters from phone number
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "")

  // Encode the message for URL if provided
  const encodedMessage = message ? encodeURIComponent(message) : ""

  // Construct WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}${encodedMessage ? `?text=${encodedMessage}` : ""}`

  // Open in new tab/window
  if (typeof window !== "undefined") {
    window.open(whatsappUrl, "_blank")
  }
}
