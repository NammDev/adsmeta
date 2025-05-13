import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
    <section className="bg-lightblue py-12 border-t border-lightblue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get updates and special offers</h3>
              <p className="text-gray-600">
                Don't want to miss any of our updates? Join our email list. You'll receive all of the most recent
                advertising updates, discounts, and other awesome news straight to your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto flex-1">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email address..."
                  className="rounded-r-none border-r-0 focus:ring-facebook"
                />
                <Button className="rounded-l-none bg-facebook hover:bg-facebook-dark">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
