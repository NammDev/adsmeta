import type React from "react"

interface MessengerIconProps {
  width?: string | number
  height?: string | number
  className?: string
}

export const MessengerIcon: React.FC<MessengerIconProps> = ({ width = 32, height = 32, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C6.486 2 2 6.262 2 11.5c0 2.545 1.088 4.988 3 6.772v4.228l4.08-2.039c.96.28 1.94.456 2.92.539h.077C17.6 21 22 16.738 22 11.5 22 6.262 17.514 2 12 2zm0 2c4.411 0 8 3.365 8 7.5S16.411 19 12 19h-.063a8.07 8.07 0 01-2.665-.462l-.246-.082-1.714.857-.312.156V17.35l-.292-.26C5.137 15.772 4 13.717 4 11.5 4 7.365 7.589 4 12 4z" />
      <path d="M6 9h8v1.5H6zm0 2.5h12V13H6z" />
    </svg>
  )
}
