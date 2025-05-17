export default function AdUniverseSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Stars */}
      <circle cx="30" cy="30" r="1.5" fill="#1877F2" fillOpacity="0.7" />
      <circle cx="50" cy="20" r="1" fill="#1877F2" fillOpacity="0.5" />
      <circle cx="70" cy="40" r="1.5" fill="#1877F2" fillOpacity="0.6" />
      <circle cx="100" cy="25" r="1" fill="#1877F2" fillOpacity="0.7" />
      <circle cx="120" cy="40" r="1.5" fill="#1877F2" fillOpacity="0.5" />
      <circle cx="140" cy="30" r="1" fill="#1877F2" fillOpacity="0.6" />
      <circle cx="20" cy="60" r="1" fill="#1877F2" fillOpacity="0.7" />
      <circle cx="40" cy="80" r="1.5" fill="#1877F2" fillOpacity="0.5" />
      <circle cx="25" cy="100" r="1" fill="#1877F2" fillOpacity="0.6" />
      <circle cx="40" cy="120" r="1.5" fill="#1877F2" fillOpacity="0.7" />
      <circle cx="20" cy="140" r="1" fill="#1877F2" fillOpacity="0.5" />
      <circle cx="130" cy="70" r="1.5" fill="#1877F2" fillOpacity="0.6" />
      <circle cx="140" cy="90" r="1" fill="#1877F2" fillOpacity="0.7" />
      <circle cx="120" cy="110" r="1.5" fill="#1877F2" fillOpacity="0.5" />
      <circle cx="140" cy="130" r="1" fill="#1877F2" fillOpacity="0.6" />
      <circle cx="80" cy="140" r="1.5" fill="#1877F2" fillOpacity="0.7" />
      <circle cx="100" cy="120" r="1" fill="#1877F2" fillOpacity="0.5" />

      {/* Central AD Symbol */}
      <circle cx="80" cy="80" r="30" fill="url(#adGradient)" fillOpacity="0.6" />

      {/* AD Text */}
      <path d="M65 70L75 95H70L68 90H62L60 95H55L65 70ZM65 80L63 85H67L65 80Z" fill="#1877F2" fillOpacity="0.9" />
      <path
        d="M80 70H90C92.2 70 94 70.9 95 72.5C96 74.1 96 76.2 95 78C94.5 79 93.5 79.7 92.5 80C93.8 80.2 94.8 80.9 95.2 82C95.7 83.1 95.7 84.5 95.2 85.8C94.7 87.1 93.7 88.2 92.2 89C90.7 89.8 89 90 87 90H80V70ZM85 78H87C87.5 78 88 77.8 88.2 77.5C88.4 77.2 88.4 76.8 88.2 76.5C88 76.2 87.5 76 87 76H85V78ZM85 84H87.5C88 84 88.5 83.8 88.7 83.5C88.9 83.2 88.9 82.8 88.7 82.5C88.5 82.2 88 82 87.5 82H85V84Z"
        fill="#1877F2"
        fillOpacity="0.9"
      />

      {/* Orbiting Elements */}
      <circle cx="80" cy="30" r="8" fill="#1877F2" fillOpacity="0.7" />
      <text x="76" y="33" fontSize="10" fill="white" fillOpacity="0.9">
        $
      </text>

      <circle cx="120" cy="100" r="6" fill="#1877F2" fillOpacity="0.7" />
      <text x="117" y="103" fontSize="8" fill="white" fillOpacity="0.9">
        %
      </text>

      <circle cx="50" cy="110" r="7" fill="#1877F2" fillOpacity="0.7" />
      <text x="47" y="113" fontSize="9" fill="white" fillOpacity="0.9">
        +
      </text>

      {/* Orbit Paths */}
      <ellipse
        cx="80"
        cy="80"
        rx="50"
        ry="50"
        stroke="#1877F2"
        strokeWidth="0.5"
        strokeOpacity="0.4"
        strokeDasharray="2 2"
        fill="none"
      />

      <ellipse
        cx="80"
        cy="80"
        rx="40"
        ry="30"
        stroke="#1877F2"
        strokeWidth="0.5"
        strokeOpacity="0.4"
        strokeDasharray="2 2"
        fill="none"
        transform="rotate(45 80 80)"
      />

      {/* Gradient Definition */}
      <defs>
        <radialGradient
          id="adGradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(80 80) rotate(90) scale(30)"
        >
          <stop offset="0%" stopColor="#1877F2" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1877F2" stopOpacity="0.1" />
        </radialGradient>
      </defs>
    </svg>
  )
}
