"use client"

import type React from "react"
import { type RefObject, useEffect, useId, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

export interface AnimatedBeamProps {
  className?: string
  containerRef: RefObject<HTMLElement | null>
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
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
  pathColor = "#9ca3af", // Default gray color (gray-400)
  pathWidth = 2,
  pathOpacity = 0.5, // Slightly increased opacity for better visibility
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId()
  const [pathD, setPathD] = useState("")
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  // Throttle function to limit how often a function can be called
  const throttle = useCallback((func: Function, limit: number) => {
    let inThrottle: boolean
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }, [])

  // Memoized path calculation function
  const updatePath = useCallback(() => {
    if (!containerRef?.current || !fromRef?.current || !toRef?.current) {
      return
    }

    try {
      const containerRect = containerRef.current.getBoundingClientRect()
      const rectA = fromRef.current.getBoundingClientRect()
      const rectB = toRef.current.getBoundingClientRect()

      if (containerRect.width === 0 || containerRect.height === 0 || rectA.width === 0 || rectB.width === 0) {
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
      // Silent error handling
    }
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset, pathWidth])

  useEffect(() => {
    // Throttled update function to limit execution frequency
    const throttledUpdate = throttle(() => {
      requestAnimationFrame(updatePath)
    }, 100) // Throttle to once every 100ms

    const observer = new ResizeObserver(throttledUpdate)

    // Observe the container and nodes
    if (containerRef.current) observer.observe(containerRef.current)
    if (fromRef.current) observer.observe(fromRef.current)
    if (toRef.current) observer.observe(toRef.current)

    // Initial update
    throttledUpdate()

    return () => {
      observer.disconnect()
    }
  }, [containerRef, fromRef, toRef, updatePath, throttle])

  if (!pathD || svgDimensions.width === 0 || svgDimensions.height === 0) {
    return null
  }

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Single gray path with specified opacity */}
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity} strokeLinecap="round" />
    </svg>
  )
}
