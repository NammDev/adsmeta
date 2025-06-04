"use client"

import React, { useRef } from "react"
import { ShieldAlert, UserCog, FileText, type LucideIcon } from "lucide-react"
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

export default function BasicDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Refs for nodes
  const bmUnverifiedRef = useRef<HTMLDivElement>(null)
  const adminRef = useRef<HTMLDivElement>(null)
  const fanpageRef = useRef<HTMLDivElement>(null)

  const nodePositions = {
    bmUnverified: { top: "20%", left: "50%" },
    admin: { top: "50%", left: "50%" },
    fanpage: { top: "80%", left: "50%" },
  }

  const nodes = [
    {
      ref: bmUnverifiedRef,
      key: "bmUnverified",
      Icon: ShieldAlert,
      label: "BM Unverified",
      options: {
        iconClassName: "text-orange-500",
        nodeSize: "size-18 md:size-16",
        iconSize: "size-9 md:size-8",
      },
    },
    {
      ref: adminRef,
      key: "admin",
      Icon: UserCog,
      label: "Admin",
      options: { nodeSize: "size-18 md:size-16", iconSize: "size-9 md:size-8" },
    },
    {
      ref: fanpageRef,
      key: "fanpage",
      Icon: FileText, // Using FileText for "Fanpage" similar to "Page"
      label: "Fanpage",
      options: { nodeSize: "size-18 md:size-16", iconSize: "size-9 md:size-8" },
    },
  ]

  return (
    <div
      className="relative flex h-[450px] w-full items-center justify-center rounded-lg bg-white p-4 md:h-[400px]"
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

      {/* Animated Beams - Straight lines */}
      <AnimatedBeam containerRef={containerRef} fromRef={bmUnverifiedRef} toRef={adminRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={adminRef} toRef={fanpageRef} />
    </div>
  )
}
