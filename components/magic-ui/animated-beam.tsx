"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

interface AnimatedBeamProps {
  width: number
  height: number
  pathWidth: number
  animationDuration: number
  baseColor?: string
  accentColor?: string
}

const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  width,
  height,
  pathWidth,
  animationDuration,
  baseColor = "rgb(107 114 128)", // Default to a darker gray
  accentColor = "rgb(255 255 255)",
}) => {
  const controls = useAnimation()
  const beamRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const animateBeam = async () => {
      await controls.start({
        x: [0, width],
        transition: {
          duration: animationDuration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        },
      })
    }

    animateBeam()

    return () => {
      controls.stop()
    }
  }, [controls, animationDuration, width])

  return (
    <svg
      ref={beamRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base Path */}
      <motion.path
        d={`M0 ${height / 2} L${width} ${height / 2}`}
        stroke={baseColor}
        strokeWidth={pathWidth}
        strokeLinecap="round"
        strokeOpacity="0.8" // Increased opacity for better visibility
        style={{ x: 0 }}
      />

      {/* Accent Path */}
      <motion.path
        d={`M0 ${height / 2} L${width} ${height / 2}`}
        stroke={accentColor}
        strokeWidth={pathWidth * 0.8} // Increased stroke width for better visibility
        strokeLinecap="round"
        style={{ x: controls }}
      />
    </svg>
  )
}

export default AnimatedBeam
