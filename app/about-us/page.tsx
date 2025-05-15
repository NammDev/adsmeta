import Image from "next/image"
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            "To empower businesses of all sizes with reliable, high-quality Facebook advertising assets that drive
            growth and success in the digital marketplace."
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-facebook">Reliability</h3>
              <p className="text-gray-600 text-sm">We provide stable, long-lasting Facebook assets you can count on.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-facebook">Expertise</h3>
              <p className="text-gray-600 text-sm">
                Our team brings years of specialized knowledge in Facebook advertising.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-facebook">Support</h3>
              <p className="text-gray-600 text-sm">We're committed to your success with unmatched customer service.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Team Introduction - Fixed for mobile */}
      <PageSection spacious>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Team Members</h2>
            <p className="text-gray-600">The experts behind EasyAdsPack committed to your success.</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <div className="space-y-6">
              {[
                {
                  name: "Alex Johnson",
                  role: "Founder",
                  email: "alex@gmail.com",
                  image: "/male-marketing-owner.png",
                },
                {
                  name: "Sarah Williams",
                  role: "Operations",
                  email: "sarah@gmail.com",
                  image: "/female-business-owner-portrait.png",
                },
                {
                  name: "Michael Chen",
                  role: "Developer",
                  email: "michael@gmail.com",
                  image: "/male-freelancer-portrait.png",
                },
              ].map((member, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base">{member.name}</h3>
                      <p className="text-gray-500 text-sm">{member.email}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-lg border border-gray-200 min-w-[100px] text-center">
                    <span className="font-medium text-facebook whitespace-nowrap">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
