import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to clean phone number by removing non-numeric characters
function cleanPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, "")
}

// Function to open WhatsApp chat with a given phone number and optional message
export function openWhatsAppChat(phoneNumber: string, message = ""): void {
  console.log("hello")
}
