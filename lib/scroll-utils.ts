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
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}
