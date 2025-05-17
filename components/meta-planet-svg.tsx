export default function MetaPlanetSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Planet Circle */}
      <circle cx="100" cy="100" r="60" fill="url(#planetGradient)" fillOpacity="0.7" />

      {/* Orbit Ring */}
      <ellipse
        cx="100"
        cy="100"
        rx="80"
        ry="40"
        stroke="#1877F2"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        fill="none"
        transform="rotate(-15 100 100)"
      />

      {/* Meta Logo */}
      <g transform="translate(80, 80) scale(0.4)">
        <path
          d="M89.6 155.3V94.9h20.3l3-23.5H89.6V53.7c0-6.8 1.9-11.5 11.7-11.5h12.5V21.2c-2.2-0.3-9.6-0.9-18.3-0.9-18.1 0-30.5 11-30.5 31.3v17.8H44.6v23.5h20.4v60.4h24.6z"
          fill="#1877F2"
        />
      </g>

      {/* Small Satellites */}
      <circle cx="150" cy="70" r="5" fill="#1877F2" fillOpacity="0.8" />
      <circle cx="60" cy="130" r="3" fill="#1877F2" fillOpacity="0.6" />
      <circle cx="170" cy="120" r="4" fill="#1877F2" fillOpacity="0.7" />

      {/* Gradient Definition */}
      <defs>
        <radialGradient
          id="planetGradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(100 100) rotate(90) scale(60)"
        >
          <stop offset="0%" stopColor="#1877F2" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1877F2" stopOpacity="0.2" />
        </radialGradient>
      </defs>
    </svg>
  )
}
