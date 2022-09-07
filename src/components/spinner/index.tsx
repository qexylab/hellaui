import { ISpinner } from './Spinner.types'
import { forwardRef } from 'react'
import { getSpinnerStyle } from '@src/components/spinner/Spinner.style'

export const Spinner = forwardRef<SVGSVGElement, ISpinner>(
  ({ size = 'md', ...props }, ref) => {
    const { height, width } = getSpinnerStyle(size)

    return (
      <>
        <style>{`
              @keyframes spin {
                   0% { transform: rotate(0deg); }
                   100% { transform: rotate(360deg); }
              }
            `}</style>
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 66 66"
          style={{
            height: height,
            width: width,
            animation: 'spin 2s linear infinite',
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
      </>
    )
  }
)

Spinner.displayName = 'Spinner'
