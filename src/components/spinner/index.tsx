import { ISpinner } from './Spinner.types'
import React from 'react'
import { forwardRef } from 'react'
import { getSpinnerStyle } from '@src/components/spinner/Spinner.style'
import { useSetAnimation } from '@src/other/utils/useSetAnimation'

export const Spinner = forwardRef<SVGSVGElement, ISpinner>(
  ({ sizes = 'md', ...props }, ref) => {
    const { height, width } = getSpinnerStyle(sizes)

    const animationName = 'spin'
    const keyframe = `@keyframes ${animationName} { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`

    useSetAnimation(keyframe)

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 66 66"
        style={{
          height: height,
          width: width,
          animation: `${animationName} 2s linear infinite`,
          marginRight: '5px'
        }}
        {...props}
      >
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke="currentColor"
          strokeWidth="10"
          style={{ opacity: '0.33' }}
        />
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke="currentColor"
          strokeDasharray="40, 134"
          strokeDashoffset="325"
          strokeLinecap="round"
          strokeWidth="10"
          style={{ opacity: '0.70' }}
        />
      </svg>
    )
  }
)

Spinner.displayName = 'Spinner'
