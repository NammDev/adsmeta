"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const companies = [
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Raycast", logo: "/logos/raycast.svg" },
  { name: "Agency Partner", logo: "/agency-partner-logo.svg" },
]

export default function TrustIndicatorsSection() {
  const [duplicatedCompanies, setDuplicatedCompanies] = useState(companies)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Duplicate the companies array to ensure smooth infinite scrolling
    setDuplicatedCompanies([...companies, ...companies, ...companies])
  }, [])

  return (
    <section className="py-8 pb-0 md:py-16 md:pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left side text */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm uppercase tracking-wider font-bold mb-2">
              Trusted by leading marketing agencies worldwide
            </h3>
            <p className="text-gray-600 text-sm max-w-sm mx-auto md:mx-0">
              Join{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                thousands of marketing professionals
              </span>{" "}
              who trust our Facebook Ads solutions
            </p>
          </div>

          {/* Right side scrolling logos */}
          <div className="w-full md:w-2/3 relative overflow-hidden">
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 8%, rgb(0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <div ref={containerRef} className="flex items-center animate-marquee">
                {duplicatedCompanies.map((company, index) => (
                  <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-6 md:mx-8">
                    <div className="relative h-12 w-full max-w-[120px] bg-white/60 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-gray-100/50 hover:bg-white/80 transition-all duration-300">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={120}
                        height={40}
                        className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
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
            transform: translateX(-33.33%);
          }
        }
        
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
