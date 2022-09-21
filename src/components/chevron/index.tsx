import React, { FC } from 'react'
import { IChevron } from '@src/components/chevron/Chevron.types'

export const Chevron: FC<IChevron> = ({ open, position, textSize }) => {
  return (
    <svg
      style={{
        width: textSize,
        height: textSize,
        marginRight: position === 'left' ? '8px' : '0',
        transition: 'all .3s',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}
