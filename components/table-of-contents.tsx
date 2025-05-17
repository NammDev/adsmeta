"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  headings: { id: string; text: string; level: number }[]
  title?: string
}

export function TableOfContents({ headings, title = "Table of Contents" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  return (
    <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={cn(
                "transition-all",
                heading.level === 2 ? "ml-0" : "ml-4",
                activeId === heading.id ? "text-facebook font-medium" : "text-gray-600 hover:text-facebook",
              )}
            >
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm py-1 pl-${(heading.level - 2) * 4} transition-colors ${
                  activeId === heading.id
                    ? "text-blue-600 font-medium bg-gradient-to-r from-blue-50 to-purple-50 rounded pl-${(heading.level - 2) * 4 + 2} -ml-2"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(`#${heading.id}`)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
