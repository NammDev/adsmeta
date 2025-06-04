"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { FAQ } from "@/data/packs"

interface PackFAQProps {
  faq: FAQ[]
}

export default function PackFAQ({ faq }: PackFAQProps) {
  if (!faq || faq.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-gray-500">No FAQ items available.</p>
      </div>
    )
  }

  return (
    <div className="w-full px-4">
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-b border-gray-200 last:border-b-0">
            <AccordionTrigger className="text-left hover:no-underline text-gray-900 font-normal text-sm md:text-base py-4 px-0 [&[data-state=open]>svg]:rotate-180">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pb-6 pt-0 px-0 text-sm md:text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
