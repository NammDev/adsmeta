import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Send } from "lucide-react"
import SupportingPageLayout from "@/components/supporting-page-layout"
import PageSection from "@/components/page-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <SupportingPageLayout
      title="Contact Us"
      subtitle="We're here to help with any questions you might have"
      breadcrumbs={[{ label: "Contact", href: "/contact" }]}
    >
      {/* Prominent Messaging Channels */}
      <PageSection>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20 mb-4">Fast Response</Badge>
            <h2 className="text-2xl font-bold mb-2">Connect With Us Instantly</h2>
            <p className="text-gray-600">Get the fastest support through our messaging channels</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-6 flex items-center">
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">WhatsApp Support</h3>
                  <p className="text-gray-600 mb-4">+84 123 456 789</p>
                  <div className="flex space-x-3">
                    <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                      <Link href="https://wa.me/84123456789" className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Chat Now
                      </Link>
                    </Button>
                    <Button variant="outline">Save Contact</Button>
                  </div>
                </div>
              </div>
              <div className="bg-[#25D366]/5 p-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Available 24/7 for urgent inquiries
                </p>
              </div>
            </div>

            {/* Telegram Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-6 flex items-center">
                <div className="w-16 h-16 bg-[#0088cc]/10 rounded-full flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0088cc">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Telegram Channel</h3>
                  <p className="text-gray-600 mb-4">@EasyAdsPack</p>
                  <div className="flex space-x-3">
                    <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white">
                      <Link href="https://t.me/EasyAdsPack" className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Join Channel
                      </Link>
                    </Button>
                    <Button variant="outline">Direct Message</Button>
                  </div>
                </div>
              </div>
              <div className="bg-[#0088cc]/5 p-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Fast responses and product updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Contact Information Section */}
      <PageSection bgColor="facebook-light" spacious>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
          <p className="text-gray-600 mb-8">
            While WhatsApp and Telegram offer the fastest response times, you can also reach us through these channels:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-facebook/10 p-3 rounded-full text-facebook">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email Us</h3>
                  <p className="text-gray-600">support@easyadspack.com</p>
                  <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-facebook/10 p-3 rounded-full text-facebook">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 9am-6pm EST</p>
                  <p className="text-gray-500 text-sm mt-1">We're closed on weekends and holidays</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Scan to Connect Instantly</h3>
              <p className="text-gray-600 mb-4">Scan these QR codes with your phone to connect with us directly</p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm inline-block">
                    <Image
                      src="/placeholder.svg?key=1cbyk"
                      alt="WhatsApp QR Code"
                      width={120}
                      height={120}
                      className="rounded"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">WhatsApp</p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm inline-block">
                    <Image
                      src="/placeholder.svg?key=qpwpi"
                      alt="Telegram QR Code"
                      width={120}
                      height={120}
                      className="rounded"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Telegram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* FAQ Section */}
      <PageSection>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find quick answers to common questions</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 divide-y">
          {[
            {
              question: "How quickly will I receive my order?",
              answer:
                "Most orders are delivered instantly after payment confirmation. You'll receive access to your purchased items via email.",
            },
            {
              question: "Do you offer refunds?",
              answer: "Yes, we offer a 100% replacement guarantee if an account doesn't work at login.",
            },
            {
              question: "How can I get help with my purchase?",
              answer:
                "Our support team is available via WhatsApp and Telegram for immediate assistance. We also respond to emails within 24 hours.",
            },
          ].map((faq, index) => (
            <div key={index} className="p-6">
              <h3 className="font-medium text-lg text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/faq" className="text-facebook hover:underline">
            View all FAQs
          </Link>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
