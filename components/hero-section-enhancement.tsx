"use client"
import Image from "next/image"

export default function HeroSectionEnhancement() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Single clean illustration - extremely minimal */}

      {/* Just one large rocket illustration */}
      <div className="absolute top-[15%] right-[10%]">
        <Image
          src="/blue-rocket-illustration.png"
          alt="Rocket illustration"
          width={200}
          height={200}
          className="opacity-15"
        />
      </div>
    </div>
  )
}
