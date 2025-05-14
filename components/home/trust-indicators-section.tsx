import Image from "next/image"

export default function TrustIndicatorsSection() {
  return (
    <section className="py-6 md:py-12 bg-lightblue">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-medium">
          Trusted by agencies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8">
              <Image
                src={`/placeholder-32px.png?height=32&width=120`}
                alt={`Partner logo ${i}`}
                width={120}
                height={32}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
