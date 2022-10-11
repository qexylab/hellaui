import React, { FC } from 'react'
import { ICloseIcon } from '@src/icons/closeIcon/CloseIcon.types'

export const CloseIcon: FC<ICloseIcon> = ({ textSize = 30, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{
        height: textSize + 3,
        width: textSize + 3,
        ...style
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}
