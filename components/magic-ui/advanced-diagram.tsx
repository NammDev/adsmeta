"use client"

import React, { useRef } from "react"
import {
  ShieldCheck,
  ShieldAlert,
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
  nodeSize?: string // e.g., "size-16", "size-20"
  iconSize?: string // e.g., "size-8", "size-10"
}

const CircleNode = React.forwardRef<
  HTMLDivElement, // Ref will be on the circular div
  NodeProps & { outerClassName?: string }
>(
  (
    {
      IconComponent,
      label,
      className, // className for the circle div
      iconClassName,
      nodeSize = "size-16 md:size-14",
      iconSize = "size-8 md:size-7",
      outerClassName, // className for the wrapper div (circle + label)
    },
    ref
  ) => {
    return (
      <div className={cn("flex flex-col items-center", outerClassName)} title={label}>
        <div
          ref={ref} // Ref is on the circle itself for AnimatedBeam
          className={cn(
            "z-10 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white p-3 shadow-lg",
            nodeSize,
            className
          )}
          aria-label={label}
        >
          <IconComponent className={cn("text-gray-600", iconSize, iconClassName)} />
        </div>
        <span className="mt-1.5 block w-24 text-center text-[10px] font-medium leading-tight text-gray-700 md:text-xs md:w-28">
          {label}
        </span>
      </div>
    )
  }
)
CircleNode.displayName = "CircleNode"

export default function AdvancedDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Refs for nodes
  const bmVerifiedRef = useRef<HTMLDivElement>(null)
  const profile1Ref = useRef<HTMLDivElement>(null)
  const adsAccountRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const pixel1Ref = useRef<HTMLDivElement>(null) // Pixel under Profile 1

  const bmUnverifiedRef = useRef<HTMLDivElement>(null)
  const profile2Ref = useRef<HTMLDivElement>(null)
  const pixel2Ref = useRef<HTMLDivElement>(null) // Pixel under Profile 2

  return (
    <div
      className="relative flex h-[750px] w-full items-center justify-center rounded-lg bg-white p-6 md:h-[650px]" // Adjusted height
      ref={containerRef}
    >
      {/* Node Definitions and Positioning */}

      {/* Layer 1: BM Verified & BM Unverified */}
      <div
        className="absolute"
        style={{ top: "15%", left: "30%", transform: "translate(-50%, -50%)" }}
      >
        <CircleNode
          ref={bmVerifiedRef}
          IconComponent={ShieldCheck}
          label="BM Verified"
          iconClassName="text-green-500"
        />
      </div>
      <div
        className="absolute"
        style={{ top: "15%", left: "70%", transform: "translate(-50%, -50%)" }}
      >
        <CircleNode
          ref={bmUnverifiedRef}
          IconComponent={ShieldAlert}
          label="BM Unverified"
          iconClassName="text-orange-500"
        />
      </div>

      {/* Layer 2: Profile 1 & Profile 2 */}
      <div
        className="absolute"
        style={{ top: "45%", left: "30%", transform: "translate(-50%, -50%)" }}
      >
        <CircleNode ref={profile1Ref} IconComponent={User} label="Profile 1" />
      </div>
      <div
        className="absolute"
        style={{ top: "45%", left: "70%", transform: "translate(-50%, -50%)" }}
      >
        <CircleNode ref={profile2Ref} IconComponent={User} label="Profile 2" />
      </div>

      {/* Layer 3: Children of Profile 1 & Profile 2 */}
      {/* Children of Profile 1 */}
      <div
        className="absolute"
        style={{ top: "75%", left: "15%", transform: "translate(-50%, -50%)" }}
      >
        <CircleNode ref={adsAccountRef} IconComponent={Megaphone} label="Ads account agency" />
      </div>
      <div
        className="absolute"
        style={{ top: "75%", left: "30%", transform: "translate(-50%, -50%)" }}
      >
        <CircleNode ref={pageRef} IconComponent={FileText} label="Page" />
      </div>
      <div
        className="absolute"
        style={{ top: "75%", left: "45%", transform: "translate(-50%, -50%)" }}
      >
        <CircleNode ref={pixel1Ref} IconComponent={Crosshair} label="Pixel (Profile 1)" />
      </div>
      {/* Child of Profile 2 */}
      <div
        className="absolute"
        style={{ top: "75%", left: "70%", transform: "translate(-50%, -50%)" }}
      >
        <CircleNode ref={pixel2Ref} IconComponent={Crosshair} label="Pixel (Profile 2)" />
      </div>

      {/* Animated Beams - Curvature set to 0 for straight lines */}
      {/* BM Verified to Profile 1 */}
      <AnimatedBeam containerRef={containerRef} fromRef={bmVerifiedRef} toRef={profile1Ref} />
      {/* BM Verified to BM Unverified (conceptually a sibling connection, visually direct) */}
      <AnimatedBeam containerRef={containerRef} fromRef={bmVerifiedRef} toRef={bmUnverifiedRef} />

      {/* Profile 1 to its children */}
      <AnimatedBeam containerRef={containerRef} fromRef={profile1Ref} toRef={adsAccountRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={profile1Ref} toRef={pageRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={profile1Ref} toRef={pixel1Ref} />

      {/* BM Unverified to Profile 2 */}
      <AnimatedBeam containerRef={containerRef} fromRef={bmUnverifiedRef} toRef={profile2Ref} />
      {/* Profile 2 to Pixel */}
      <AnimatedBeam containerRef={containerRef} fromRef={profile2Ref} toRef={pixel2Ref} />
    </div>
  )
}
