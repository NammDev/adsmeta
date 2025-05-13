import SupportingPageLayout from "@/components/supporting-page-layout"
import PageSection from "@/components/page-section"

export default function FAQPage() {
  return (
    <SupportingPageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to the most common questions about our products and services"
      breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
    >
      {/* FAQ Categories */}
      <PageSection>
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { name: "Products", icon: "📦", count: 8 },
            { name: "Ordering", icon: "🛒", count: 6 },
            { name: "Delivery", icon: "🚚", count: 5 },
            { name: "Support", icon: "🤝", count: 7 },
          ].map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} questions</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Product FAQs */}
      <PageSection bgColor="facebook-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Product Questions</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y">
            {[
              {
                question: "What is a Facebook Business Manager?",
                answer:
                  "A Facebook Business Manager is a tool that helps businesses manage their Facebook Pages, ad accounts, and the people who work on them - all in one place. It's designed for businesses that need to give different people access to their Pages and ad accounts without sharing login information.",
              },
              {
                question: "What's included in the BM1 $250 Limit package?",
                answer:
                  "The BM1 $250 Limit package includes a verified Facebook Business Manager account with a $250 ad spend limit, 1 ad account, and basic business verification. It's perfect for beginners or small businesses just starting with Facebook advertising.",
              },
              {
                question: "What's the difference between the Starter Pack and Pro Pack?",
                answer:
                  "The Starter Pack is designed for beginners with a lower ad spend limit and fewer features, while the Pro Pack offers higher spending limits, multiple ad accounts, and advanced verification status, making it suitable for established businesses with larger advertising budgets.",
              },
              {
                question: "Are these accounts safe to use?",
                answer:
                  "Yes, all our accounts are properly created and verified according to Facebook's policies. However, we recommend following Facebook's advertising policies when running ads to maintain account health.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6">
                <h3 className="font-medium text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Ordering FAQs */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Ordering & Payment</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y">
            {[
              {
                question: "How do I place an order?",
                answer:
                  "Simply browse our products, select the one you need, and click the 'Buy Now' button. Follow the checkout process to complete your purchase.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept major credit cards, PayPal, and cryptocurrency payments including Bitcoin, Ethereum, and USDT.",
              },
              {
                question: "Is my payment information secure?",
                answer:
                  "Yes, we use industry-standard encryption and secure payment processors to ensure your payment information is protected.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6">
                <h3 className="font-medium text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
