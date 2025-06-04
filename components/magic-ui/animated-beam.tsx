"use client"

import type React from "react"

import { motion } from "framer-motion"
import { type RefObject, useEffect, useId, useState } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedBeamProps {
  className?: string
  containerRef: RefObject<HTMLElement | null>
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  reverse?: boolean
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  delay?: number
  duration?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId()
  const [pathD, setPathD] = useState("")
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  // Determine y-axis animation based on the reverse prop for top-to-bottom or bottom-to-top flow
  const y1Animation = reverse ? ["120%", "-20%"] : ["-20%", "100%"]
  const y2Animation = reverse ? ["100%", "0%"] : ["0%", "120%"]

  const gradientCoordinates = {
    x1: "50%", // Center the gradient line horizontally, making it vertical
    x2: "50%",
    y1: y1Animation,
    y2: y2Animation,
  }

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef?.current || !fromRef?.current || !toRef?.current) {
        return
      }

      try {
        const containerRect = containerRef.current.getBoundingClientRect()
        const rectA = fromRef.current.getBoundingClientRect()
        const rectB = toRef.current.getBoundingClientRect()

        if (
          containerRect.width === 0 ||
          containerRect.height === 0 ||
          rectA.width === 0 ||
          rectB.width === 0
        ) {
          return
        }

        const svgWidth = containerRect.width
        const svgHeight = containerRect.height
        setSvgDimensions({ width: svgWidth, height: svgHeight })

        const nodeACenterX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
        const nodeACenterY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
        const nodeBCenterX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
        const nodeBCenterY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

        const radiusA = rectA.width / 2
        const radiusB = rectB.width / 2

        const dXOriginal = nodeBCenterX - nodeACenterX
        const dYOriginal = nodeBCenterY - nodeACenterY
        const distance = Math.sqrt(dXOriginal * dXOriginal + dYOriginal * dYOriginal)

        if (distance === 0) {
          setPathD("")
          return
        }

        const unitDx = dXOriginal / distance
        const unitDy = dYOriginal / distance

        const adjustedStartX = nodeACenterX + unitDx * radiusA
        const adjustedStartY = nodeACenterY + unitDy * radiusA
        const adjustedEndX = nodeBCenterX - unitDx * radiusB
        const adjustedEndY = nodeBCenterY - unitDy * radiusB

        const dXAdjusted = adjustedEndX - adjustedStartX
        const dYAdjusted = adjustedEndY - adjustedStartY
        const adjustedDistance = Math.sqrt(dXAdjusted * dXAdjusted + dYAdjusted * dYAdjusted)

        if (distance <= radiusA + radiusB + pathWidth || adjustedDistance <= 1) {
          setPathD("")
          return
        }

        const midX = adjustedStartX + dXAdjusted / 2
        const midY = adjustedStartY + dYAdjusted / 2

        const angle = Math.atan2(dYAdjusted, dXAdjusted)
        const perpendicularAngle = angle - Math.PI / 2

        const cX = midX + curvature * Math.cos(perpendicularAngle)
        const cY = midY + curvature * Math.sin(perpendicularAngle)

        const newPathD = `M ${adjustedStartX},${adjustedStartY} Q ${cX},${cY} ${adjustedEndX},${adjustedEndY}`
        setPathD(newPathD)
      } catch (error) {
        // console.warn("Error updating animated beam path:", error);
      }
    }

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updatePath)
    })

    if (containerRef.current) observer.observe(containerRef.current)
    if (fromRef.current) observer.observe(fromRef.current)
    if (toRef.current) observer.observe(toRef.current)

    requestAnimationFrame(updatePath)

    return () => {
      observer.disconnect()
    }
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
    duration,
    pathWidth,
  ])

  if (!pathD || svgDimensions.width === 0 || svgDimensions.height === 0) {
    return null
  }

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity={1}
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="50%" stopColor="#FF00D4"></stop> {/* Fixed vibrant Pink middle color */}
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  )
}
