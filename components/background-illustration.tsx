"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const BackgroundIllustration: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3 // Make it 3x the height to cover the full page
      drawIllustration(ctx, canvas.width, canvas.height)
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

    // Facebook brand colors and complementary colors
    const colors = {
      facebookBlue: "#1877F2",
      vibrantPurple: "#6E48AA",
      brightCyan: "#00C2CB",
      vibrantPink: "#FF6B8B",
      softOrange: "#FF9966",
      lightBlue: "#61DAFB",
    }

    // Draw background shapes
    drawNetworkNodes(ctx, width, height, colors)
    drawWavyLines(ctx, width, height, colors)
    drawFloatingIcons(ctx, width, height, colors)
    drawConnectingLines(ctx, width, height, colors)
  }

  const drawNetworkNodes = (ctx: CanvasRenderingContext2D, width: number, height: number, colors: any) => {
    // Create network nodes
    const nodeCount = Math.floor((width * height) / 40000) // Adjust density based on screen size

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = Math.random() * 5 + 2

      // Choose a random color from our palette
      const colorKeys = Object.keys(colors)
      const color = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]]

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = color + "40" // Add transparency
      ctx.fill()

      // Add glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 3)
      gradient.addColorStop(0, color + "30")
      gradient.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(x, y, radius * 3, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }
  }

  const drawWavyLines = (ctx: CanvasRenderingContext2D, width: number, height: number, colors: any) => {
    // Draw wavy lines across the background
    const lineCount = 5

    for (let i = 0; i < lineCount; i++) {
      const y = (height * (i + 0.5)) / (lineCount + 1)
      const amplitude = Math.random() * 50 + 25
      const frequency = Math.random() * 0.01 + 0.005

      // Choose a color
      const colorKeys = Object.keys(colors)
      const color = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]]

      ctx.beginPath()
      ctx.moveTo(0, y)

      for (let x = 0; x < width; x += 5) {
        ctx.lineTo(x, y + Math.sin(x * frequency) * amplitude)
      }

      ctx.strokeStyle = color + "30" // Add transparency
      ctx.lineWidth = Math.random() * 2 + 1
      ctx.stroke()
    }
  }

  const drawFloatingIcons = (ctx: CanvasRenderingContext2D, width: number, height: number, colors: any) => {
    // Draw abstract shapes that suggest social media icons
    const iconCount = Math.floor((width * height) / 100000)

    for (let i = 0; i < iconCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 30 + 20

      // Choose a color
      const colorKeys = Object.keys(colors)
      const color = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]]

      // Randomly choose an icon type
      const iconType = Math.floor(Math.random() * 4)

      ctx.fillStyle = color + "30" // Add transparency
      ctx.strokeStyle = color + "50"
      ctx.lineWidth = 2

      switch (iconType) {
        case 0: // Circle (like profile picture)
          ctx.beginPath()
          ctx.arc(x, y, size / 2, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
          break

        case 1: // Rounded square (like app icon)
          ctx.beginPath()
          roundedRect(ctx, x - size / 2, y - size / 2, size, size, size / 5)
          ctx.fill()
          ctx.stroke()
          break

        case 2: // Like icon (simplified)
          ctx.beginPath()
          ctx.moveTo(x, y - size / 2)
          ctx.lineTo(x + size / 2, y)
          ctx.lineTo(x, y + size / 2)
          ctx.lineTo(x - size / 2, y)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
          break

        case 3: // Message bubble (simplified)
          ctx.beginPath()
          roundedRect(ctx, x - size / 2, y - size / 2, size, size * 0.8, size / 5)
          ctx.fill()
          ctx.stroke()

          // Add the little triangle at bottom for message bubble
          ctx.beginPath()
          ctx.moveTo(x - size / 4, y + size / 3)
          ctx.lineTo(x, y + size / 2)
          ctx.lineTo(x, y + size / 3)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
          break
      }
    }
  }

  const drawConnectingLines = (ctx: CanvasRenderingContext2D, width: number, height: number, colors: any) => {
    // Draw connecting lines between random points
    const pointCount = Math.floor((width * height) / 80000)
    const points: { x: number; y: number }[] = []

    // Generate random points
    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
      })
    }

    // Connect nearby points
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x
        const dy = points[i].y - points[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          // Only connect points within this distance
          // Opacity based on distance
          const opacity = (1 - distance / 200) * 0.2

          // Choose a color
          const colorKeys = Object.keys(colors)
          const color = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]]

          ctx.beginPath()
          ctx.moveTo(points[i].x, points[i].y)
          ctx.lineTo(points[j].x, points[j].y)
          ctx.strokeStyle =
            color +
            Math.floor(opacity * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.lineWidth = Math.random() * 1.5 + 0.5
          ctx.stroke()
        }
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
      className="absolute inset-0 w-full h-full opacity-40"
      style={{
        mixBlendMode: "soft-light",
        pointerEvents: "none",
      }}
    />
  )
}

export default BackgroundIllustration
