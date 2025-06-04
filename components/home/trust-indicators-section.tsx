"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const companies = [
  { name: "NL Agency 1", logo: "/logos/nl-agency-1.svg" },
  { name: "NL Agency 2", logo: "/logos/nl-agency-2.svg" },
  { name: "NL Agency 3", logo: "/logos/nl-agency-3.svg" },
  { name: "NL Agency 4", logo: "/logos/nl-agency-4.svg" },
  { name: "NL Agency 5", logo: "/logos/nl-agency-5.svg" },
  { name: "NL Agency 6", logo: "/logos/nl-agency-6.svg" },
  { name: "NL Agency 8", logo: "/logos/nl-agency-8.svg" },
]

export default function TrustIndicatorsSection() {
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies]
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationDuration, setAnimationDuration] = useState(0)

  useEffect(() => {
    let retryTimeoutId: NodeJS.Timeout | null = null

    const calculateAndSetDuration = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth

        if (containerWidth > 0) {
          const numOriginalCompanies = companies.length
          const calculationFactor = containerWidth * numOriginalCompanies
          const speed = 100
          const newDuration = calculationFactor / speed

          if (newDuration > 0 && Number.isFinite(newDuration)) {
            setAnimationDuration(newDuration)
            if (retryTimeoutId) {
              clearTimeout(retryTimeoutId)
              retryTimeoutId = null
            }
            return true
          }
        }
        return false
      }
      return false // Added to ensure all paths return a boolean
    }

    if (!calculateAndSetDuration()) {
      retryTimeoutId = setTimeout(() => {
        calculateAndSetDuration()
      }, 100)
    }

    const handleResize = () => {
      if (retryTimeoutId) {
        clearTimeout(retryTimeoutId)
        retryTimeoutId = null
      }
      calculateAndSetDuration()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (retryTimeoutId) {
        clearTimeout(retryTimeoutId)
      }
    }
  }, [companies.length])

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-500 font-medium">Trusted by marketing agencies worldwide</p>
          </div>

          <div className="w-full">
            <div className="relative overflow-hidden">
              <div
                ref={containerRef}
                className="relative overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <div
                  className="flex items-center"
                  style={{
                    animation: `marquee ${animationDuration}s linear infinite`,
                    width: "fit-content",
                  }}
                >
                  {duplicatedCompanies.map((company, index) => (
                    <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-2 sm:mx-4 md:mx-8">
                      <div className="relative h-8 w-full max-w-[100px] sm:max-w-[120px]">
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={`${company.name} logo`}
                          width={120}
                          height={32}
                          className="h-full w-auto object-contain opacity-40 hover:opacity-60 transition-opacity duration-300 filter grayscale"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Left Title, Right Logos */}
        <div className="hidden md:flex items-center gap-20">
          {/* Left Side - Clean Title */}
          <div className="w-1/4">
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Trusted by marketing agencies around the world
            </p>
          </div>

          {/* Right Side - Logo Flow */}
          <div className="w-3/4">
            <div className="relative overflow-hidden">
              <div
                ref={containerRef}
                className="relative overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <div
                  className="flex items-center"
                  style={{
                    animation: `marquee ${animationDuration}s linear infinite`,
                    width: "fit-content",
                  }}
                >
                  {duplicatedCompanies.map((company, index) => (
                    <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-12">
                      <div className="relative h-10 w-full max-w-[140px]">
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={`${company.name} logo`}
                          width={140}
                          height={40}
                          className="h-full w-auto object-contain opacity-40 hover:opacity-60 transition-opacity duration-300 filter grayscale"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
    </section>
  )
}
