import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function NewsletterSection() {
  return (
    <section className="bg-lightblue py-12 border-t border-lightblue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Newsletter Subscription */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get updates and special offers</h3>
              <p className="text-gray-600 mb-4">
                Don't want to miss any of our updates? Join our email list. You'll receive all of the most recent
                advertising updates, discounts, and other awesome news straight to your inbox.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email address..."
                  className="rounded-r-none border-r-0 focus:ring-facebook"
                />
                <Button className="rounded-l-none bg-facebook hover:bg-facebook-dark">Subscribe</Button>
              </div>
            </div>

            {/* Contact Options */}
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact us directly</h3>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <Link
                    href="https://wa.me/84123456789"
                    className="text-gray-800 font-medium group-hover:text-[#25D366] transition-colors"
                  >
                    WhatsApp Support
                  </Link>
                  <p className="text-sm text-gray-600">Available 24/7 for urgent inquiries</p>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0088cc">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div>
                  <Link
                    href="https://t.me/EasyAdsPack"
                    className="text-gray-800 font-medium group-hover:text-[#0088cc] transition-colors"
                  >
                    Telegram Channel
                  </Link>
                  <p className="text-sm text-gray-600">Join our channel for updates and offers</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-facebook/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-facebook"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <Link
                    href="mailto:support@easyadspack.com"
                    className="text-gray-800 font-medium group-hover:text-facebook transition-colors"
                  >
                    Email Support
                  </Link>
                  <p className="text-sm text-gray-600">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
