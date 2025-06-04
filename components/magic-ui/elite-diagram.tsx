"use client"

import React, { useRef } from "react"
import { ShieldCheck, UserCog, User, Megaphone, FileText, Crosshair, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "./animated-beam"
import { useMediaQuery } from "@/hooks/use-media-query" // Import useMediaQuery

interface NodeProps {
  IconComponent: LucideIcon
  label: string
  className?: string
  iconClassName?: string
  nodeSize?: string
  iconSize?: string
}

const CircleNode = React.forwardRef<HTMLDivElement, NodeProps & { outerClassName?: string }>(
  (
    {
      IconComponent,
      label,
      className,
      iconClassName,
      nodeSize = "size-16 md:size-14", // Default responsive sizes
      iconSize = "size-8 md:size-7", // Default responsive sizes
      outerClassName,
    },
    ref,
  ) => {
    return (
      <div className={cn("flex flex-col items-center", outerClassName)} title={label}>
        <div
          ref={ref}
          className={cn(
            "z-10 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg",
            nodeSize,
            className,
          )}
          aria-label={label}
        >
          <IconComponent className={cn("text-gray-600", iconSize, iconClassName)} />
        </div>
        <span className="mt-1 block w-20 text-center text-[9px] font-medium leading-tight text-gray-700 md:text-[10px] md:w-24">
          {label}
        </span>
      </div>
    )
  },
)
CircleNode.displayName = "CircleNode"

const JunctionNode = React.forwardRef<HTMLDivElement, { label: string }>(({ label }, ref) => {
  return <div ref={ref} aria-label={label} className="absolute size-1 opacity-0" />
})
JunctionNode.displayName = "JunctionNode"

export default function EliteDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const getResponsiveValue = (mobileValue: string, desktopValue: string) => {
    return isDesktop ? desktopValue : mobileValue
  }

  // Visible Nodes
  const bm5VerifiedRef = useRef<HTMLDivElement>(null)
  const bmVerifiedRightRef = useRef<HTMLDivElement>(null)
  const admin1Ref = useRef<HTMLDivElement>(null)
  const admin2Ref = useRef<HTMLDivElement>(null)
  const admin3Ref = useRef<HTMLDivElement>(null)
  const admin4Ref = useRef<HTMLDivElement>(null)
  const staff1Ref = useRef<HTMLDivElement>(null)
  const staff2Ref = useRef<HTMLDivElement>(null)
  const staff3Ref = useRef<HTMLDivElement>(null)
  const ads1Ref = useRef<HTMLDivElement>(null)
  const ads2Ref = useRef<HTMLDivElement>(null)
  const ads3Ref = useRef<HTMLDivElement>(null)
  const ads4Ref = useRef<HTMLDivElement>(null)
  const page1Ref = useRef<HTMLDivElement>(null) // Left branch page
  const page2Ref = useRef<HTMLDivElement>(null) // Right branch page
  const pixel1Ref = useRef<HTMLDivElement>(null) // Right branch pixel

  // Invisible Bus Bar Tap Points
  const bus1PointAdmin1Staff1Ref = useRef<HTMLDivElement>(null)
  const bus1PointStaff2Ref = useRef<HTMLDivElement>(null)
  const bus1PointAdmin2Staff3Ref = useRef<HTMLDivElement>(null)

  const bus2PointAds1Ref = useRef<HTMLDivElement>(null)
  const bus2PointStaff1Ads2Ref = useRef<HTMLDivElement>(null)
  const bus2PointStaff2Ads3Ref = useRef<HTMLDivElement>(null)
  const bus2PointStaff3Ads4Ref = useRef<HTMLDivElement>(null)
  const bus2PointPage1Ref = useRef<HTMLDivElement>(null)

  const nodePositions = {
    // Visible Nodes
    bm5Verified: { top: "10%", left: getResponsiveValue("25%", "30%") },
    bmVerifiedRight: { top: "10%", left: getResponsiveValue("75%", "70%") },

    admin1: { top: "25%", left: getResponsiveValue("15%", "20%") },
    admin2: { top: "25%", left: getResponsiveValue("35%", "40%") },
    admin3: { top: "25%", left: getResponsiveValue("65%", "60%") },
    admin4: { top: "25%", left: getResponsiveValue("85%", "80%") },

    staff1: { top: "50%", left: getResponsiveValue("10%", "20%") },
    staff2: { top: "50%", left: getResponsiveValue("25%", "30%") },
    staff3: { top: "50%", left: getResponsiveValue("40%", "40%") },

    ads1: { top: "75%", left: getResponsiveValue("5%", "10%") },
    ads2: { top: "75%", left: getResponsiveValue("15%", "20%") },
    ads3: { top: "75%", left: getResponsiveValue("25%", "30%") },
    ads4: { top: "75%", left: getResponsiveValue("35%", "40%") },
    page1: { top: "75%", left: getResponsiveValue("45%", "50%") },

    page2: { top: "50%", left: getResponsiveValue("65%", "60%") },
    pixel1: { top: "50%", left: getResponsiveValue("85%", "80%") },

    // Invisible Bus Bar 1 Points (Admin <-> Staff)
    bus1_admin1_staff1: { top: "37.5%", left: getResponsiveValue("15%", "20%") }, // Connects Admin1 & Staff1
    bus1_staff2: { top: "37.5%", left: getResponsiveValue("25%", "30%") }, // Connects to Staff2
    bus1_admin2_staff3: { top: "37.5%", left: getResponsiveValue("35%", "40%") }, // Connects Admin2 & Staff3

    // Invisible Bus Bar 2 Points (Staff <-> Resources)
    bus2_ads1: { top: "62.5%", left: getResponsiveValue("5%", "10%") }, // Connects to Ads1
    bus2_staff1_ads2: { top: "62.5%", left: getResponsiveValue("15%", "20%") }, // Connects Staff1 & Ads2
    bus2_staff2_ads3: { top: "62.5%", left: getResponsiveValue("25%", "30%") }, // Connects Staff2 & Ads3
    bus2_staff3_ads4: { top: "62.5%", left: getResponsiveValue("35%", "40%") }, // Connects Staff3 & Ads4
    bus2_page1: { top: "62.5%", left: getResponsiveValue("45%", "50%") }, // Connects to Page1
  }

  const visibleNodesData = [
    {
      ref: bm5VerifiedRef,
      key: "bm5Verified",
      Icon: ShieldCheck,
      label: "BM5 Verified",
      options: {
        iconClassName: "text-green-500",
        nodeSize: "size-16 md:size-18", // Specific responsive sizes for BM
        iconSize: "size-8 md:size-9", // Specific responsive sizes for BM
      },
    },
    {
      ref: bmVerifiedRightRef,
      key: "bmVerifiedRight",
      Icon: ShieldCheck,
      label: "BM Verified",
      options: {
        iconClassName: "text-green-500",
        nodeSize: "size-16 md:size-18", // Specific responsive sizes for BM
        iconSize: "size-8 md:size-9", // Specific responsive sizes for BM
      },
    },
    { ref: admin1Ref, key: "admin1", Icon: UserCog, label: "Admin" },
    { ref: admin2Ref, key: "admin2", Icon: UserCog, label: "Admin" },
    { ref: admin3Ref, key: "admin3", Icon: UserCog, label: "Admin" },
    { ref: admin4Ref, key: "admin4", Icon: UserCog, label: "Admin" },
    { ref: staff1Ref, key: "staff1", Icon: User, label: "Staff" },
    { ref: staff2Ref, key: "staff2", Icon: User, label: "Staff" },
    { ref: staff3Ref, key: "staff3", Icon: User, label: "Staff" },
    { ref: ads1Ref, key: "ads1", Icon: Megaphone, label: "Ads Account" },
    { ref: ads2Ref, key: "ads2", Icon: Megaphone, label: "Ads Account" },
    { ref: ads3Ref, key: "ads3", Icon: Megaphone, label: "Ads Account" },
    { ref: ads4Ref, key: "ads4", Icon: Megaphone, label: "Ads Account" },
    { ref: page1Ref, key: "page1", Icon: FileText, label: "Page" },
    { ref: page2Ref, key: "page2", Icon: FileText, label: "Page" },
    { ref: pixel1Ref, key: "pixel1", Icon: Crosshair, label: "Pixel" },
  ]

  const bus1JunctionsData = [
    { ref: bus1PointAdmin1Staff1Ref, key: "bus1_admin1_staff1", label: "Bus 1 Tap for Admin1/Staff1" },
    { ref: bus1PointStaff2Ref, key: "bus1_staff2", label: "Bus 1 Tap for Staff2" },
    { ref: bus1PointAdmin2Staff3Ref, key: "bus1_admin2_staff3", label: "Bus 1 Tap for Admin2/Staff3" },
  ]

  const bus2JunctionsData = [
    { ref: bus2PointAds1Ref, key: "bus2_ads1", label: "Bus 2 Tap for Ads1" },
    { ref: bus2PointStaff1Ads2Ref, key: "bus2_staff1_ads2", label: "Bus 2 Tap for Staff1/Ads2" },
    { ref: bus2PointStaff2Ads3Ref, key: "bus2_staff2_ads3", label: "Bus 2 Tap for Staff2/Ads3" },
    { ref: bus2PointStaff3Ads4Ref, key: "bus2_staff3_ads4", label: "Bus 2 Tap for Staff3/Ads4" },
    { ref: bus2PointPage1Ref, key: "bus2_page1", label: "Bus 2 Tap for Page1" },
  ]

  return (
    <div
      className="relative h-[800px] w-full rounded-lg bg-white px-2 py-4 sm:px-3 md:p-4 md:h-[700px]" // Responsive padding
      ref={containerRef}
    >
      {/* Render Visible Nodes */}
      {visibleNodesData.map((item) => (
        <div
          key={item.key}
          style={{
            position: "absolute",
            // @ts-ignore
            ...nodePositions[item.key],
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircleNode ref={item.ref} IconComponent={item.Icon} label={item.label} {...item.options} />
        </div>
      ))}

      {/* Render Invisible Bus Junction Nodes */}
      {[...bus1JunctionsData, ...bus2JunctionsData].map((item) => (
        <div
          key={item.key}
          style={{
            position: "absolute",
            // @ts-ignore
            ...nodePositions[item.key],
            transform: "translate(-50%, -50%)",
          }}
        >
          <JunctionNode ref={item.ref} label={item.label} />
        </div>
      ))}

      {/* --- Standard Beams (BM to Admin (left), BM to BM, Admin to Page/Pixel (right)) --- */}
      <AnimatedBeam containerRef={containerRef} fromRef={bm5VerifiedRef} toRef={admin1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bm5VerifiedRef} toRef={admin2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bmVerifiedRightRef} toRef={admin3Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bmVerifiedRightRef} toRef={admin4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bm5VerifiedRef} toRef={bmVerifiedRightRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={admin3Ref} toRef={page2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={admin4Ref} toRef={pixel1Ref} />

      {/* --- Bus 1 Beams (Admin <-> Staff) --- */}
      {/* Bus bar itself */}
      <AnimatedBeam containerRef={containerRef} fromRef={bus1PointAdmin1Staff1Ref} toRef={bus1PointAdmin2Staff3Ref} />
      {/* Connections to bus bar */}
      <AnimatedBeam containerRef={containerRef} fromRef={admin1Ref} toRef={bus1PointAdmin1Staff1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={admin2Ref} toRef={bus1PointAdmin2Staff3Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus1PointAdmin1Staff1Ref} toRef={staff1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus1PointStaff2Ref} toRef={staff2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus1PointAdmin2Staff3Ref} toRef={staff3Ref} />

      {/* --- Bus 2 Beams (Staff <-> Resources) --- */}
      {/* Bus bar itself */}
      <AnimatedBeam containerRef={containerRef} fromRef={bus2PointAds1Ref} toRef={bus2PointPage1Ref} />
      {/* Connections to bus bar */}
      <AnimatedBeam containerRef={containerRef} fromRef={staff1Ref} toRef={bus2PointStaff1Ads2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={staff2Ref} toRef={bus2PointStaff2Ads3Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={staff3Ref} toRef={bus2PointStaff3Ads4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2PointAds1Ref} toRef={ads1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2PointStaff1Ads2Ref} toRef={ads2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2PointStaff2Ads3Ref} toRef={ads3Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2PointStaff3Ads4Ref} toRef={ads4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2PointPage1Ref} toRef={page1Ref} />
    </div>
  )
}
