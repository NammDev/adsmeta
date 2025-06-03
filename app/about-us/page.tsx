import Image from "next/image"
import SupportingPageLayout from "@/components/layout/supporting-page-layout"
import { Award, Users, Globe, Shield } from "lucide-react"
import PageSection from "@/components/page-section"
import SectionHeader from "@/components/ui/section-header"
import { TEAM_MEMBERS } from "@/config"

export default function AboutUsPage() {
  return (
    <SupportingPageLayout
      title="About Us"
      subtitle="Learn more about EasyAdsPack and our mission to help businesses succeed on Facebook"
    >
      {/* Company Background - Title Section */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <SectionHeader badge="Our Journey Since 2016" title="Our Story" />
      </PageSection>

      {/* Company Background - Content Section */}
      <PageSection className="pt-0 pb-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-600 mb-4 leading-relaxed">
                GoAds was founded in response to a growing challenge faced by digital marketers. As
                Facebook’s advertising environment became increasingly unstable and complex,
                advertisers began struggling with account bans, constant checkpoints, and the stress
                of campaigns being disrupted without warning.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We understand these challenges because we experienced them ourselves. Before GoAds,
                we were advertisers too. We spent countless hours building campaigns, only to lose
                everything in a moment. Through those hard lessons, we realized the market needed
                more than just another account provider. It needed a partner that could offer
                stability, honesty, and long-term value.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started as a small operation supporting a few close teams has grown into a
                trusted service for hundreds of clients each month. Our growth has been driven by a
                strong belief in doing things the right way. We focus on quality, consistency, and a
                commitment to helping our clients succeed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In a crowded and often uncertain industry, we do not take your trust for granted.
                Every client who chooses GoAds plays a part in our journey. Your support is the
                reason we continue to grow and improve every day. Thank you for choosing GoAds. We
                are here to support you, today and always.
              </p>

              {/* Stats with Gradient */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    7+
                  </div>
                  <div className="text-sm text-gray-500">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                    5k+
                  </div>
                  <div className="text-sm text-gray-500">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
                    99%
                  </div>
                  <div className="text-sm text-gray-500">Success</div>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative h-[400px]">
                <Image
                  src="about/digital-marketing-team-illustration.png"
                  alt="EasyAdsPack team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">
                  Our dedicated team of Facebook advertising experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Mission Statement - Title Section */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <SectionHeader badge="Our Purpose" title="Our Mission" />
      </PageSection>

      {/* Mission Statement - Content Section */}
      <PageSection className="pt-0 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-600"></div>
              <p className="text-xl text-gray-700 italic leading-relaxed relative z-10">
                "To empower businesses of all sizes with reliable, high-quality Facebook advertising
                assets that drive growth and success in the digital marketplace."
              </p>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-pink-600/10 rounded-tl-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Reliability",
                  description: "We provide stable, long-lasting Facebook assets you can count on.",
                  icon: Shield,
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  title: "Expertise",
                  description:
                    "Our team brings years of specialized knowledge in Facebook advertising.",
                  icon: Award,
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  title: "Support",
                  description: "We're committed to your success with unmatched customer service.",
                  icon: Users,
                  gradient: "from-pink-500 to-red-600",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${value.gradient} text-white mr-3`}
                    >
                      <value.icon className="w-5 h-5" />
                    </div>
                    <h3
                      className={`font-bold text-xl bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}
                    >
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Team Introduction - Title Section */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <SectionHeader
          badge="Meet Our Experts"
          title="Team Founders"
          badgeClassName="bg-gradient-to-r from-green-500 to-teal-600"
          borderClassName="from-green-500 to-teal-600"
        />
      </PageSection>

      {/* Team Introduction - Content Section */}
      <PageSection className="pt-0 pb-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {TEAM_MEMBERS.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${member.gradient} text-white mb-2`}
                      >
                        {member.role}
                      </div>
                      <p className="text-gray-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {member.email}
                      </p>
                    </div>
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
