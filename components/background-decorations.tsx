import type React from "react"

const BackgroundDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Top left decorative element - blue blob with green curve */}
      <svg
        className="absolute top-0 left-0 w-[30%] max-w-[400px]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0C0 0 100 20 150 80C200 140 180 220 120 260C60 300 0 280 0 280V0Z"
          fill="#E1F0FF"
          fillOpacity="0.6"
        />
        <path
          d="M10 150C10 150 80 120 150 140C220 160 300 200 350 150"
          stroke="#7DD3AE"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Top right decorative element - blue circle */}
      <svg
        className="absolute top-0 right-0 w-[25%] max-w-[300px]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="50" r="150" fill="#E1F0FF" fillOpacity="0.5" />
      </svg>

      {/* Bottom left decorative element - elegant wave */}
      <svg
        className="absolute bottom-0 left-0 w-[25%] max-w-[300px]"
        viewBox="0 0 350 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 200C0 200 50 180 100 160C150 140 200 120 250 140C300 160 350 200 350 200H0Z"
          fill="#E1F0FF"
          fillOpacity="0.7"
        />
        <path
          d="M0 180C0 180 50 160 100 170C150 180 200 190 250 170C300 150 350 180 350 180"
          stroke="#7DD3AE"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Bottom right decorative element - flowing shapes */}
      <svg
        className="absolute bottom-0 right-0 w-[40%] max-w-[500px]"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M500 400C500 400 400 350 350 300C300 250 320 200 380 180C440 160 500 200 500 200V400Z"
          fill="#E1F0FF"
          fillOpacity="0.7"
        />
        <path
          d="M500 300C500 300 400 320 350 280C300 240 250 180 300 120C350 60 450 80 500 100V300Z"
          fill="#D1E5FF"
          fillOpacity="0.5"
        />
        <path
          d="M350 400C350 400 400 350 450 320C500 290 550 250 500 200"
          stroke="#7DD3AE"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Right side decorative element - flowing wave (KEPT AS REQUESTED) */}
      <svg
        className="absolute top-[40%] right-0 w-[15%] max-w-[200px]"
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200 0C200 0 150 50 150 100C150 150 200 200 200 250C200 300 150 350 150 400"
          stroke="#6B8AF9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 8"
        />
        <path
          d="M180 0C180 0 130 50 130 100C130 150 180 200 180 250C180 300 130 350 130 400"
          stroke="#7DD3AE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 8"
        />
      </svg>

      {/* Left side decorative element - REPLACED with larger abstract shape */}
      <svg
        className="absolute top-[40%] left-0 w-[25%] max-w-[300px]"
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 100C0 100 50 50 100 50C150 50 200 100 250 100C300 100 300 150 300 200C300 250 250 300 200 300C150 300 100 250 50 250C0 250 0 200 0 200V100Z"
          fill="#E1F0FF"
          fillOpacity="0.5"
        />
        <path
          d="M50 150C50 150 100 200 150 200C200 200 250 150 300 150"
          stroke="#7DD3AE"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default BackgroundDecorations
