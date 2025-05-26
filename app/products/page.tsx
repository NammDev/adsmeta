"use client"

import SupportingPageLayout from "@/components/layout/supporting-page-layout"
import ProductsSection from "@/components/home/products-section"
import PageSection from "@/components/page-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Settings, Users, Zap, TrendingUp, Shield } from "lucide-react"

export default function ProductsPage() {
  return (
    <SupportingPageLayout
      title="All Products"
      subtitle="Browse our complete collection of Facebook advertising solutions"
      showNewsletter={true}
      breadcrumbs={[{ label: "Products", href: "/products" }]}
    >
      {/* Content Section */}
      <PageSection className="pt-0 pb-12">
        <ProductsSection isProductsPage={true} />
      </PageSection>

      {/* Custom Solutions Section */}
      <PageSection className="py-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Custom Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Built for every business</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Empower your advertising strategy with tailored Facebook solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
              Get started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Schedule a demo →
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-left">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-gray-900 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Agencies</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Scale your client campaigns with bulk Business Manager setups and priority support for agency growth.
            </p>
          </div>

          <div className="text-left">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-gray-900 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Custom Business Manager configurations with dedicated account management and enterprise-level security.
            </p>
          </div>

          <div className="text-left">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-gray-900 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Startups</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Accelerate your growth with cost-effective advertising solutions and streamlined account setup.
            </p>
          </div>

          <div className="text-left">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-6 w-6 text-gray-900 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">E-commerce</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Optimize your product campaigns with specialized Business Manager setups for online stores.
            </p>
          </div>

          <div className="text-left">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-gray-900 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Consultants</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Professional-grade tools and priority support to deliver exceptional results for your clients.
            </p>
          </div>

          <div className="text-left">
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-gray-900 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Custom needs</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Tailored solutions for unique requirements with personalized setup and ongoing consultation.
            </p>
          </div>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
