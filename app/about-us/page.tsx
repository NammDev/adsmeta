'use client'

import Image from 'next/image'
import SupportingPageLayout from '@/components/layout/supporting-page-layout'
import { Award, Users, Shield } from 'lucide-react'
import PageSection from '@/components/page-section'
import SectionHeader from '@/components/ui/section-header'
import { TEAM_MEMBERS } from '@/config'
import { useState } from 'react'

export default function AboutUsPage() {
  const [activeQuote, setActiveQuote] = useState<number | null>(null)

  return (
    <SupportingPageLayout
      title='About Us'
      subtitle='Learn more about GoAds and our mission to help businesses succeed on Facebook'
    >
      {/* Company Background - Title Section */}
      <PageSection className='pt-6 md:pt-8 pb-0'>
        <SectionHeader title='Our Story' />
      </PageSection>

      {/* Company Background - Content Section */}
      <PageSection className='pt-0 pb-16'>
        <div className='container px-4 md:px-6'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                GoAds was founded in response to a growing challenge faced by digital marketers. As
                Facebook's advertising environment became increasingly unstable and complex,
                advertisers began struggling with account bans, constant checkpoints, and the stress
                of campaigns being disrupted without warning.
              </p>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                We understand these challenges because we experienced them ourselves. Before GoAds,
                we were advertisers too. We spent countless hours building campaigns, only to lose
                everything in a moment. Through those hard lessons, we realized the market needed
                more than just another account provider. It needed a partner that could offer
                stability, honesty, and long-term value.
              </p>
              <p className='text-gray-600 leading-relaxed'>
                What started as a small operation supporting a few close teams has grown into a
                trusted service for hundreds of clients each month. Our growth has been driven by a
                strong belief in doing things the right way. We focus on quality, consistency, and a
                commitment to helping our clients succeed.
              </p>
              <p className='text-gray-600 leading-relaxed'>
                In a crowded and often uncertain industry, we do not take your trust for granted.
                Every client who chooses GoAds plays a part in our journey. Your support is the
                reason we continue to grow and improve every day. Thank you for choosing GoAds. We
                are here to support you, today and always.
              </p>

              {/* Stats with Gradient */}
              <div className='grid grid-cols-3 gap-4 mt-6'>
                <div className='text-center'>
                  <div className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
                    4+
                  </div>
                  <div className='text-sm text-gray-500'>Years</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent'>
                    3k+
                  </div>
                  <div className='text-sm text-gray-500'>Clients</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent'>
                    99%
                  </div>
                  <div className='text-sm text-gray-500'>Success</div>
                </div>
              </div>
            </div>

            <div className='relative rounded-xl overflow-hidden shadow-xl group'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 group-hover:opacity-75 transition-opacity duration-300'></div>
              <div className='relative h-[400px]'>
                <Image
                  src='about/digital-marketing-team-illustration.png'
                  alt='GoAds team'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                <p className='text-white font-medium'>
                  Our dedicated team of Facebook advertising experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Mission Statement - Title Section */}
      <PageSection className='pt-6 md:pt-8 pb-0'>
        <SectionHeader title='Our Mission' />
      </PageSection>

      {/* Mission Statement - Content Section */}
      <PageSection className='pt-0 pb-16'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='max-w-3xl mx-auto'>
            <div className='bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-10 relative overflow-hidden'>
              <div className='absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-600'></div>
              <p className='text-xl text-gray-700 italic leading-relaxed relative z-10'>
                "To empower businesses of all sizes with reliable, high-quality Facebook advertising
                assets that drive growth and success in the digital marketplace."
              </p>
              <div className='absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-pink-600/10 rounded-tl-full'></div>
            </div>

            <div className='grid md:grid-cols-3 gap-6 mt-8'>
              {[
                {
                  title: 'Reliability',
                  description: 'We provide stable, long-lasting Facebook assets you can count on.',
                  icon: Shield,
                  gradient: 'from-blue-500 to-indigo-600',
                },
                {
                  title: 'Expertise',
                  description:
                    'Our team brings years of specialized knowledge in Facebook advertising.',
                  icon: Award,
                  gradient: 'from-purple-500 to-pink-600',
                },
                {
                  title: 'Support',
                  description: "We're committed to your success with unmatched customer service.",
                  icon: Users,
                  gradient: 'from-pink-500 to-red-600',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group'
                >
                  <div className='flex items-center mb-4'>
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${value.gradient} text-white mr-3`}
                    >
                      <value.icon className='w-5 h-5' />
                    </div>
                    <h3
                      className={`font-bold text-xl bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}
                    >
                      {value.title}
                    </h3>
                  </div>
                  <p className='text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Team Introduction - Title Section */}
      <PageSection className='pt-6 md:pt-8 pb-0'>
        <SectionHeader title='Team Founders' />
      </PageSection>

      {/* Team Introduction - Content Section - REDESIGNED */}
      <PageSection className='pt-0 pb-12'>
        <div className='container px-4 md:px-6 mx-auto'>
          {/* Team Members Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden'
              >
                {/* Gradient Border Top */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.gradient}`}
                ></div>

                {/* Decorative Background Element */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${member.gradient} opacity-5 rounded-bl-full`}
                ></div>

                {/* Header with Avatar and Info */}
                <div className='flex items-start space-x-4 mb-6 relative z-10'>
                  {/* Avatar */}
                  <div className='relative h-20 w-20 rounded-full overflow-hidden border-3 border-white shadow-lg flex-shrink-0'>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${member.gradient} p-0.5 rounded-full`}
                    >
                      <div className='w-full h-full rounded-full overflow-hidden bg-white'>
                        <Image
                          src={member.image || '/placeholder.svg'}
                          alt={member.name}
                          fill
                          className='object-cover'
                        />
                      </div>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className='flex-1'>
                    <h3 className='font-bold text-2xl text-gray-900 mb-2'>{member.name}</h3>
                    <div
                      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${member.gradient} text-white`}
                    >
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className='text-gray-600 leading-relaxed mb-6 relative z-10'>{member.quote}</p>

                {/* Social Links */}
                <div className='flex space-x-3 relative z-10'>
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 p-3 rounded-lg transition-all duration-200 group'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>

                  {/* Telegram */}
                  <a
                    href={member.telegram}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-500 p-3 rounded-lg transition-all duration-200 group'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
