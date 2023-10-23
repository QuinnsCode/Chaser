// Tooltip.js
import React, { useState, useRef } from 'react'

const Tooltip = ({ text, children, id, leftRightAboveBelow, enabled }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipDirection, setTooltipDirection] = useState(leftRightAboveBelow)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const tooltipRef = useRef()

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  const handleMouseMove = (e) => {
    const { top, bottom, left, right, width, height } =
      tooltipRef.current.getBoundingClientRect()

    if (tooltipDirection == 'left') {
      console.log('left')
      setTooltipPosition({ x: 0 - 5 * width, y: 0 })
    }
    if (tooltipDirection == 'right') {
      setTooltipPosition({ x: 0 + width + 10, y: 0 })
    }
    if (tooltipDirection == 'above') {
      setTooltipPosition({ x: 0, y: top })
    }
    if (tooltipDirection == 'below') {
      setTooltipPosition({ x: 0, y: height })
    }
  }

  return (
    <span
      className="tooltip-container relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={tooltipRef}
    >
      {children}
      {showTooltip && (
        <div
          className="tooltip whitespace-no-wrap absolute z-50 w-36 rounded-2xl border-2 border-solid border-black bg-white px-4 py-2 text-xs text-black focus:ring-8 focus:ring-violet-600"
          style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
        >
          {text}
        </div>
      )}
    </span>
  )
}

export default Tooltip
