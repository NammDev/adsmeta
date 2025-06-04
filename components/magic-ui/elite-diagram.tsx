"use client"

import React, { useRef } from "react"
import {
  ShieldCheck,
  UserCog,
  User,
  Megaphone,
  FileText,
  Crosshair,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "./animated-beam"

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
      nodeSize = "size-16 md:size-14",
      iconSize = "size-8 md:size-7",
      outerClassName,
    },
    ref
  ) => {
    return (
      <div className={cn("flex flex-col items-center", outerClassName)} title={label}>
        <div
          ref={ref}
          className={cn(
            "z-10 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg",
            nodeSize,
            className
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
  }
)
CircleNode.displayName = "CircleNode"

const JunctionNode = React.forwardRef<HTMLDivElement, { label: string }>(({ label }, ref) => {
  return <div ref={ref} aria-label={label} className="absolute size-1 opacity-0" />
})
JunctionNode.displayName = "JunctionNode"

export default function EliteDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)

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

  // Invisible Bus Bar Tap Points - Renamed for new positions
  // Bus 1 (Admin <-> Staff) - Centered around new left branch positions
  const bus1Point20Ref = useRef<HTMLDivElement>(null) // Corresponds to 20% left
  const bus1Point30Ref = useRef<HTMLDivElement>(null) // Corresponds to 30% left
  const bus1Point40Ref = useRef<HTMLDivElement>(null) // Corresponds to 40% left

  // Bus 2 (Staff <-> Resources) - Centered around new left branch positions
  const bus2Point10Ref = useRef<HTMLDivElement>(null) // Corresponds to 10% left
  const bus2Point20Ref = useRef<HTMLDivElement>(null) // Corresponds to 20% left
  const bus2Point30Ref = useRef<HTMLDivElement>(null) // Corresponds to 30% left
  const bus2Point40Ref = useRef<HTMLDivElement>(null) // Corresponds to 40% left
  const bus2Point50Ref = useRef<HTMLDivElement>(null) // Corresponds to 50% left

  const beamPathColor = "rgb(203 213 225)"
  const beamPathOpacity = 0.6
  const beamPathWidth = 1.5
  const beamDuration = 7

  const nodePositions = {
    // Visible Nodes - Adjusted for closer BMs and right branch alignment
    bm5Verified: { top: "10%", left: "30%" }, // Shifted right
    bmVerifiedRight: { top: "10%", left: "70%" }, // Shifted left

    admin1: { top: "25%", left: "20%" }, // Shifted right
    admin2: { top: "25%", left: "40%" }, // Shifted right
    admin3: { top: "25%", left: "60%" }, // Shifted left
    admin4: { top: "25%", left: "80%" }, // Shifted left

    staff1: { top: "50%", left: "20%" }, // Shifted right
    staff2: { top: "50%", left: "30%" }, // Shifted right
    staff3: { top: "50%", left: "40%" }, // Shifted right

    ads1: { top: "75%", left: "10%" }, // Shifted right
    ads2: { top: "75%", left: "20%" }, // Shifted right
    ads3: { top: "75%", left: "30%" }, // Shifted right
    ads4: { top: "75%", left: "40%" }, // Shifted right
    page1: { top: "75%", left: "50%" }, // Shifted right (Left branch page)

    page2: { top: "50%", left: "60%" }, // Right branch page: aligned with admin3.left and staff.top
    pixel1: { top: "50%", left: "80%" }, // Right branch pixel: aligned with admin4.left and staff.top

    // Invisible Bus Bar 1 Points (Admin <-> Staff)
    bus1_20: { top: "37.5%", left: "20%" },
    bus1_30: { top: "37.5%", left: "30%" },
    bus1_40: { top: "37.5%", left: "40%" },

    // Invisible Bus Bar 2 Points (Staff <-> Resources)
    bus2_10: { top: "62.5%", left: "10%" },
    bus2_20: { top: "62.5%", left: "20%" },
    bus2_30: { top: "62.5%", left: "30%" },
    bus2_40: { top: "62.5%", left: "40%" },
    bus2_50: { top: "62.5%", left: "50%" },
  }

  const visibleNodesData = [
    {
      ref: bm5VerifiedRef,
      key: "bm5Verified",
      Icon: ShieldCheck,
      label: "BM5 Verified",
      options: {
        iconClassName: "text-green-500",
        nodeSize: "size-16 md:size-18",
        iconSize: "size-8 md:size-9",
      },
    },
    {
      ref: bmVerifiedRightRef,
      key: "bmVerifiedRight",
      Icon: ShieldCheck,
      label: "BM Verified",
      options: {
        iconClassName: "text-green-500",
        nodeSize: "size-16 md:size-18",
        iconSize: "size-8 md:size-9",
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
    { ref: bus1Point20Ref, key: "bus1_20", label: "Bus 1 Tap 20%" },
    { ref: bus1Point30Ref, key: "bus1_30", label: "Bus 1 Tap 30%" },
    { ref: bus1Point40Ref, key: "bus1_40", label: "Bus 1 Tap 40%" },
  ]

  const bus2JunctionsData = [
    { ref: bus2Point10Ref, key: "bus2_10", label: "Bus 2 Tap 10%" },
    { ref: bus2Point20Ref, key: "bus2_20", label: "Bus 2 Tap 20%" },
    { ref: bus2Point30Ref, key: "bus2_30", label: "Bus 2 Tap 30%" },
    { ref: bus2Point40Ref, key: "bus2_40", label: "Bus 2 Tap 40%" },
    { ref: bus2Point50Ref, key: "bus2_50", label: "Bus 2 Tap 50%" },
  ]

  return (
    <div
      className="relative h-[800px] w-full rounded-lg bg-white p-4 md:h-[700px]"
      ref={containerRef}
    >
      {/* Render Visible Nodes */}
      {visibleNodesData.map((item) => (
        <div
          key={item.key}
          style={{
            position: "absolute",
            ...nodePositions[item.key as keyof typeof nodePositions],
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircleNode
            ref={item.ref}
            IconComponent={item.Icon}
            label={item.label}
            {...item.options}
          />
        </div>
      ))}

      {/* Render Invisible Bus Junction Nodes */}
      {[...bus1JunctionsData, ...bus2JunctionsData].map((item) => (
        <div
          key={item.key}
          style={{
            position: "absolute",
            ...nodePositions[item.key as keyof typeof nodePositions],
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
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bm5VerifiedRef}
        toRef={bmVerifiedRightRef}
      />
      {/* Right branch Admin to Page/Pixel - now vertical */}
      <AnimatedBeam containerRef={containerRef} fromRef={admin3Ref} toRef={page2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={admin4Ref} toRef={pixel1Ref} />

      {/* --- Bus 1 Beams (Admin <-> Staff) --- */}
      <AnimatedBeam containerRef={containerRef} fromRef={bus1Point20Ref} toRef={bus1Point40Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={admin1Ref} toRef={bus1Point20Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={admin2Ref} toRef={bus1Point40Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus1Point20Ref} toRef={staff1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus1Point30Ref} toRef={staff2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus1Point40Ref} toRef={staff3Ref} />

      {/* --- Bus 2 Beams (Staff <-> Resources) --- */}
      <AnimatedBeam containerRef={containerRef} fromRef={bus2Point10Ref} toRef={bus2Point50Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={staff1Ref} toRef={bus2Point20Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={staff2Ref} toRef={bus2Point30Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={staff3Ref} toRef={bus2Point40Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2Point10Ref} toRef={ads1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2Point20Ref} toRef={ads2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2Point30Ref} toRef={ads3Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2Point40Ref} toRef={ads4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2Point50Ref} toRef={page1Ref} />
    </div>
  )
}
