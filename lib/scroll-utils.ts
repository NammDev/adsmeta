"use client"

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  })
}

// Add a new smooth scroll function
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const isMobile = window.innerWidth < 768 // Check if mobile view
    const offset = isMobile ? 48 : 24 // 30px for mobile, 24px for desktop
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
