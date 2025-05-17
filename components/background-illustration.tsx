"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const BackgroundIllustration: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas to full window size with proper pixel ratio for crisp rendering
    const handleResize = () => {
      const pixelRatio = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight * 2 // Cover the full page with some extra

      // Set display size (css pixels)
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"

      // Set actual size in memory (scaled for pixel ratio)
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio

      // Scale context to match pixel ratio
      ctx.scale(pixelRatio, pixelRatio)

      // Clear and redraw
      ctx.clearRect(0, 0, width, height)
      drawIllustration(ctx, width, height)
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initial sizing

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const drawIllustration = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Facebook brand colors with better opacity control
    const colors = {
      facebookBlue: "rgba(24, 119, 242, 0.7)",
      vibrantPurple: "rgba(110, 72, 170, 0.7)",
      brightCyan: "rgba(0, 194, 203, 0.7)",
      vibrantPink: "rgba(255, 107, 139, 0.7)",
      softOrange: "rgba(255, 153, 102, 0.7)",
      lightBlue: "rgba(97, 218, 251, 0.7)",
    }

    // Draw smoother, larger elements
    drawSmoothGradients(ctx, width, height)
    drawLargerNetworkNodes(ctx, width, height, colors)
    drawSmoothWavyLines(ctx, width, height, colors)
    drawAbstractShapes(ctx, width, height, colors)
  }

  const drawSmoothGradients = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Add smooth gradient backgrounds
    const gradient1 = ctx.createRadialGradient(width * 0.3, height * 0.3, 0, width * 0.3, height * 0.3, width * 0.5)
    gradient1.addColorStop(0, "rgba(24, 119, 242, 0.03)")
    gradient1.addColorStop(1, "rgba(24, 119, 242, 0)")

    ctx.fillStyle = gradient1
    ctx.fillRect(0, 0, width, height)

    const gradient2 = ctx.createRadialGradient(width * 0.7, height * 0.6, 0, width * 0.7, height * 0.6, width * 0.6)
    gradient2.addColorStop(0, "rgba(110, 72, 170, 0.03)")
    gradient2.addColorStop(1, "rgba(110, 72, 170, 0)")

    ctx.fillStyle = gradient2
    ctx.fillRect(0, 0, width, height)
  }

  const drawLargerNetworkNodes = (ctx: CanvasRenderingContext2D, width: number, height: number, colors: any) => {
    // Create fewer, larger network nodes
    const nodeCount = Math.floor((width * height) / 120000) // Reduced density

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = Math.random() * 8 + 4 // Larger radius

      // Choose a random color from our palette
      const colorKeys = Object.keys(colors)
      const color = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]]

      // Draw with anti-aliasing
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = color.replace(/[\d.]+\)$/g, "0.15)") // Lower opacity
      ctx.fill()

      // Add softer glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 3)
      gradient.addColorStop(0, color.replace(/[\d.]+\)$/g, "0.1)"))
      gradient.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(x, y, radius * 3, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }
  }

  const drawSmoothWavyLines = (ctx: CanvasRenderingContext2D, width: number, height: number, colors: any) => {
    // Draw fewer, smoother wavy lines
    const lineCount = 3 // Reduced count

    for (let i = 0; i < lineCount; i++) {
      const y = (height * (i + 0.5)) / (lineCount + 1)
      const amplitude = Math.random() * 40 + 20
      const frequency = Math.random() * 0.005 + 0.002 // Lower frequency for smoother waves

      // Choose a color
      const colorKeys = Object.keys(colors)
      const color = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]]

      ctx.beginPath()
      ctx.moveTo(0, y)

      // Use more points for smoother curves
      for (let x = 0; x < width; x += 2) {
        ctx.lineTo(x, y + Math.sin(x * frequency) * amplitude)
      }

      ctx.strokeStyle = color.replace(/[\d.]+\)$/g, "0.15)") // Lower opacity
      ctx.lineWidth = Math.random() * 3 + 2 // Thicker lines
      ctx.stroke()
    }
  }

  const drawAbstractShapes = (ctx: CanvasRenderingContext2D, width: number, height: number, colors: any) => {
    // Draw fewer, larger abstract shapes
    const shapeCount = Math.floor((width * height) / 300000) // Reduced density

    for (let i = 0; i < shapeCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 60 + 40 // Larger size

      // Choose a color
      const colorKeys = Object.keys(colors)
      const color = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]]

      // Randomly choose a shape type
      const shapeType = Math.floor(Math.random() * 3)

      ctx.fillStyle = color.replace(/[\d.]+\)$/g, "0.1)") // Lower opacity
      ctx.strokeStyle = color.replace(/[\d.]+\)$/g, "0.15)") // Lower opacity
      ctx.lineWidth = 2

      switch (shapeType) {
        case 0: // Circle
          ctx.beginPath()
          ctx.arc(x, y, size / 2, 0, Math.PI * 2)
          ctx.fill()
          break

        case 1: // Rounded square
          ctx.beginPath()
          roundedRect(ctx, x - size / 2, y - size / 2, size, size, size / 5)
          ctx.fill()
          break

        case 2: // Diamond
          ctx.beginPath()
          ctx.moveTo(x, y - size / 2)
          ctx.lineTo(x + size / 2, y)
          ctx.lineTo(x, y + size / 2)
          ctx.lineTo(x - size / 2, y)
          ctx.closePath()
          ctx.fill()
          break
      }
    }
  }

  // Helper function to draw rounded rectangles
  const roundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) => {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{
        mixBlendMode: "soft-light",
        pointerEvents: "none",
      }}
    />
  )
}

export default BackgroundIllustration
