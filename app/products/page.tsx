"use client"

import SupportingPageLayout from "@/components/layout/supporting-page-layout"
import ProductsSection from "@/components/home/products-section"
import PageSection from "@/components/page-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Settings, Users, Zap } from "lucide-react"

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
      <PageSection className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4">
            Custom Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need Something Tailored?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? We create custom Facebook advertising solutions tailored to your
            specific business needs and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom BM Setup</h3>
              <p className="text-sm text-gray-600">Tailored Business Manager configurations for your agency</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bulk Orders</h3>
              <p className="text-sm text-gray-600">Special pricing for large quantity purchases</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-sm text-gray-600">Dedicated support for enterprise clients</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">Expert advice on your advertising strategy</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Contact our team to discuss your custom requirements. We'll create a solution that perfectly fits your
                business needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  Get Custom Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
