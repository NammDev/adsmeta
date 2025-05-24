"use client"

import SupportingPageLayout from "@/components/layout/supporting-page-layout"
import ProductsSection from "@/components/home/products-section"

export default function ProductsPage() {
  return (
    <SupportingPageLayout
      title="All Products"
      subtitle="Browse our complete collection of Facebook advertising solutions"
      showNewsletter={true}
      breadcrumbs={[{ label: "Products", href: "/products" }]}
    >
      <ProductsSection showHeader={false} showViewAllButton={false} />
    </SupportingPageLayout>
  )
}
