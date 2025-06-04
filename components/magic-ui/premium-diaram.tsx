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
      nodeSize = "size-16 md:size-14", // Standard size
      iconSize = "size-8 md:size-7", // Standard icon size
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

export default function PremiumDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Visible Nodes
  const bmLeftRef = useRef<HTMLDivElement>(null)
  const bmRightRef = useRef<HTMLDivElement>(null)
  const adminL1Ref = useRef<HTMLDivElement>(null)
  const adminL2Ref = useRef<HTMLDivElement>(null)
  const adminR1Ref = useRef<HTMLDivElement>(null)
  const adminR2Ref = useRef<HTMLDivElement>(null)
  const staffL1Ref = useRef<HTMLDivElement>(null)
  const staffL2Ref = useRef<HTMLDivElement>(null)
  const adsL1Ref = useRef<HTMLDivElement>(null)
  const pageL1Ref = useRef<HTMLDivElement>(null)
  const pageL2Ref = useRef<HTMLDivElement>(null)
  const pixelR1Ref = useRef<HTMLDivElement>(null)

  // Invisible Bus Bar Tap Points
  const bus1AdminStaff20Ref = useRef<HTMLDivElement>(null) // For AdminL1 & StaffL1
  const bus1AdminStaff40Ref = useRef<HTMLDivElement>(null) // For AdminL2 & StaffL2

  const bus2StaffRes15Ref = useRef<HTMLDivElement>(null) // For AdsL1
  const bus2StaffRes20Ref = useRef<HTMLDivElement>(null) // For StaffL1 connection to bus
  const bus2StaffRes30Ref = useRef<HTMLDivElement>(null) // For PageL1
  const bus2StaffRes40Ref = useRef<HTMLDivElement>(null) // For StaffL2 connection to bus
  const bus2StaffRes45Ref = useRef<HTMLDivElement>(null) // For PageL2

  const beamPathColor = "rgb(203 213 225)" // slate-300
  const beamPathOpacity = 0.4
  const beamPathWidth = 1.5
  const beamDuration = 7

  const nodePositions = {
    bmLeft: { top: "10%", left: "30%" },
    bmRight: { top: "10%", left: "70%" },

    adminL1: { top: "25%", left: "20%" },
    adminL2: { top: "25%", left: "40%" },
    adminR1: { top: "25%", left: "60%" },
    adminR2: { top: "25%", left: "80%" },

    // Bus 1 (AdminL -> StaffL) points
    bus1_AS_20: { top: "37.5%", left: "20%" },
    bus1_AS_40: { top: "37.5%", left: "40%" },

    staffL1: { top: "50%", left: "20%" },
    staffL2: { top: "50%", left: "40%" },

    // Bus 2 (StaffL -> ResourcesL) points
    bus2_SR_15: { top: "62.5%", left: "15%" }, // For AdsL1
    bus2_SR_20: { top: "62.5%", left: "20%" }, // For StaffL1 tap
    bus2_SR_30: { top: "62.5%", left: "30%" }, // For PageL1
    bus2_SR_40: { top: "62.5%", left: "40%" }, // For StaffL2 tap
    bus2_SR_45: { top: "62.5%", left: "45%" }, // For PageL2

    adsL1: { top: "75%", left: "15%" },
    pageL1: { top: "75%", left: "30%" },
    pageL2: { top: "75%", left: "45%" },

    pixelR1: { top: "50%", left: "80%" }, // Aligned with StaffL level, under AdminR2
  }

  const nodes = [
    {
      ref: bmLeftRef,
      key: "bmLeft",
      Icon: ShieldCheck,
      label: "BM Verified",
      options: { iconClassName: "text-green-500" },
    },
    {
      ref: bmRightRef,
      key: "bmRight",
      Icon: ShieldCheck,
      label: "BM Verified",
      options: { iconClassName: "text-green-500" },
    },
    { ref: adminL1Ref, key: "adminL1", Icon: UserCog, label: "Admin" },
    { ref: adminL2Ref, key: "adminL2", Icon: UserCog, label: "Admin" },
    { ref: adminR1Ref, key: "adminR1", Icon: UserCog, label: "Admin" },
    { ref: adminR2Ref, key: "adminR2", Icon: UserCog, label: "Admin" },
    { ref: staffL1Ref, key: "staffL1", Icon: User, label: "Staff" },
    { ref: staffL2Ref, key: "staffL2", Icon: User, label: "Staff" },
    { ref: adsL1Ref, key: "adsL1", Icon: Megaphone, label: "Ads account" },
    { ref: pageL1Ref, key: "pageL1", Icon: FileText, label: "Page" },
    { ref: pageL2Ref, key: "pageL2", Icon: FileText, label: "Page" },
    { ref: pixelR1Ref, key: "pixelR1", Icon: Crosshair, label: "Pixel" },
  ]

  const busJunctions = [
    { ref: bus1AdminStaff20Ref, key: "bus1_AS_20", label: "Bus1 Tap 20%" },
    { ref: bus1AdminStaff40Ref, key: "bus1_AS_40", label: "Bus1 Tap 40%" },
    { ref: bus2StaffRes15Ref, key: "bus2_SR_15", label: "Bus2 Tap 15%" },
    { ref: bus2StaffRes20Ref, key: "bus2_SR_20", label: "Bus2 Tap 20%" },
    { ref: bus2StaffRes30Ref, key: "bus2_SR_30", label: "Bus2 Tap 30%" },
    { ref: bus2StaffRes40Ref, key: "bus2_SR_40", label: "Bus2 Tap 40%" },
    { ref: bus2StaffRes45Ref, key: "bus2_SR_45", label: "Bus2 Tap 45%" },
  ]

  return (
    <div
      className="relative h-[700px] w-full rounded-lg bg-white p-4 md:h-[650px]"
      ref={containerRef}
    >
      {/* Render Visible Nodes */}
      {nodes.map((node) => (
        <div
          key={node.key}
          style={{
            position: "absolute",
            ...nodePositions[node.key as keyof typeof nodePositions],
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircleNode
            ref={node.ref}
            IconComponent={node.Icon}
            label={node.label}
            {...node.options}
          />
        </div>
      ))}
      {/* Render Invisible Bus Junction Nodes */}
      {busJunctions.map((junction) => (
        <div
          key={junction.key}
          style={{
            position: "absolute",
            ...nodePositions[junction.key as keyof typeof nodePositions],
            transform: "translate(-50%, -50%)",
          }}
        >
          <JunctionNode ref={junction.ref} label={junction.label} />
        </div>
      ))}

      {/* Beams */}
      {/* Top Level Connections */}
      <AnimatedBeam containerRef={containerRef} fromRef={bmLeftRef} toRef={bmRightRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={bmLeftRef} toRef={adminL1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bmLeftRef} toRef={adminL2Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bmRightRef} toRef={adminR1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bmRightRef} toRef={adminR2Ref} />

      {/* Right Branch: AdminR2 to PixelR1 */}
      <AnimatedBeam containerRef={containerRef} fromRef={adminR2Ref} toRef={pixelR1Ref} />

      {/* Bus 1 (AdminL -> StaffL) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bus1AdminStaff20Ref}
        toRef={bus1AdminStaff40Ref}
      />
      <AnimatedBeam containerRef={containerRef} fromRef={adminL1Ref} toRef={bus1AdminStaff20Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={adminL2Ref} toRef={bus1AdminStaff40Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus1AdminStaff20Ref} toRef={staffL1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus1AdminStaff40Ref} toRef={staffL2Ref} />

      {/* Bus 2 (StaffL -> ResourcesL) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bus2StaffRes15Ref}
        toRef={bus2StaffRes45Ref}
      />
      <AnimatedBeam containerRef={containerRef} fromRef={staffL1Ref} toRef={bus2StaffRes20Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={staffL2Ref} toRef={bus2StaffRes40Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2StaffRes15Ref} toRef={adsL1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2StaffRes30Ref} toRef={pageL1Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={bus2StaffRes45Ref} toRef={pageL2Ref} />
    </div>
  )
}
