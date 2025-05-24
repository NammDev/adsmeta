import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openWhatsAppChat(phoneNumber: string, message?: string) {
  const encodedMessage = message ? encodeURIComponent(message) : ""
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ""}`
  window.open(whatsappUrl, "_blank")
}
