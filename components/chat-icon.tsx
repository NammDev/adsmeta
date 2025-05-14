import type React from "react"

interface ChatIconProps {
  width?: string | number
  height?: string | number
  className?: string
}

export const ChatIcon: React.FC<ChatIconProps> = ({ width = 32, height = 32, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="currentColor"
      className={className}
      style={{
        minWidth: typeof width === "number" ? `${width}px` : width,
        minHeight: typeof height === "number" ? `${height}px` : height,
      }}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8c-1.848 0-3.542-.633-4.9-1.686l-.356-.253-2.415.45.45-2.414-.253-.356A7.975 7.975 0 014 12c0-4.418 3.582-8 8-8zm-3 6v2h6v-2H9zm0 3v2h6v-2H9z" />
    </svg>
  )
}
