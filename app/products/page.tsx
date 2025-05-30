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
    </SupportingPageLayout>
  )
}
