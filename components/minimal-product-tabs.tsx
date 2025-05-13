"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface MinimalProductTabsProps {
  tabs: Tab[]
  defaultTab?: string
}

export default function MinimalProductTabs({ tabs, defaultTab }: MinimalProductTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id)

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "py-4 px-8 text-base font-medium transition-colors",
              activeTab === tab.id ? "text-facebook border-b-2 border-facebook" : "text-gray-500 hover:text-gray-700",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-6">
        {tabs.map((tab) => (
          <div key={tab.id} className={cn(activeTab === tab.id ? "block" : "hidden")}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
