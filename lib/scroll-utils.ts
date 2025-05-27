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
    const offsetPosition = elementPosition + window.pageYOffset - 24 // 20px offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
