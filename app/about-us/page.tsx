import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import SupportingPageLayout from "@/components/supporting-page-layout"
import PageSection from "@/components/page-section"

export default function AboutUsPage() {
  return (
    <SupportingPageLayout
      title="About Us"
      subtitle="Learn more about EasyAdsPack and our mission to help businesses succeed on Facebook"
      breadcrumbs={[{ label: "About Us", href: "/about-us" }]}
    >
      {/* Company Background */}
      <PageSection spacious>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2016, EasyAdsPack emerged from a simple observation: businesses were struggling to navigate
              Facebook's complex advertising ecosystem. Our founders, experienced digital marketers themselves,
              recognized the need for reliable, ready-to-use Facebook business assets.
            </p>
            <p className="text-gray-600 mb-4">
              What began as a small operation helping local businesses has grown into a trusted provider of Facebook
              advertising solutions for clients worldwide. We've been in the game for over 7 years, working with top
              advertisers, eCommerce owners, and agencies.
            </p>
            <p className="text-gray-600">
              Through trial and error, we've mastered the secret formula for navigating Facebook and have the expertise
              to provide you with the most stable accounts and assets available.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/digital-marketing-team.png" alt="EasyAdsPack team" fill className="object-cover" />
          </div>
        </div>
      </PageSection>

      {/* Mission Statement */}
      <PageSection bgColor="facebook-light" spacious>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            "To empower businesses of all sizes with reliable, high-quality Facebook advertising assets that drive
            growth and success in the digital marketplace."
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-facebook">Reliability</h3>
              <p className="text-gray-600">We provide stable, long-lasting Facebook assets you can count on.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-facebook">Expertise</h3>
              <p className="text-gray-600">Our team brings years of specialized knowledge in Facebook advertising.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-facebook">Support</h3>
              <p className="text-gray-600">We're committed to your success with unmatched customer service.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Team Introduction */}
      <PageSection spacious>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The faces behind EasyAdsPack - a dedicated team of digital marketing experts committed to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              bio: "Digital marketing veteran with over 10 years of experience in Facebook advertising.",
              image: "/male-marketing-owner.png",
            },
            {
              name: "Sarah Williams",
              role: "Head of Operations",
              bio: "Ensures smooth delivery and exceptional customer experience for all clients.",
              image: "/female-business-owner-portrait.png",
            },
            {
              name: "Michael Chen",
              role: "Technical Lead",
              bio: "Expert in Facebook's technical infrastructure and advertising platform.",
              image: "/male-freelancer-portrait.png",
            },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-facebook mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
                <div className="flex space-x-4 mt-4 justify-center">
                  <a href="#" className="text-gray-400 hover:text-facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-facebook">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-facebook">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
