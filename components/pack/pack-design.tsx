"use client"

import AdvancedDiagram from "../magic-ui/advanced-diagram"
import BasicDiagram from "../magic-ui/basic-diagram"
import EliteDiagram from "../magic-ui/elite-diagram"
import PremiumDiagram from "../magic-ui/premium-diaram"

interface PackDesignProps {
  category: string
}

export default function PackDesign({ category }: PackDesignProps) {
  const renderDiagram = () => {
    switch (category.toLowerCase()) {
      case "premium":
        return <PremiumDiagram />
      case "basic":
        return <BasicDiagram />
      case "elite":
        return <EliteDiagram />
      default:
        return <AdvancedDiagram />
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center p-1">
      <div className="w-full max-w-2xl lg:max-w-3xl">{renderDiagram()}</div>
    </div>
  )
}
