import React, { FC, PropsWithChildren, useState } from 'react'
import { IAccordion } from '@src/components/accordion/Accordion.types'
import { theme_color } from '@src/components/theme'

export const Accordion: FC<PropsWithChildren<IAccordion>> = ({
  children,
  size = 'md',
  title = 'Title',
  iconPosition = 'right',
  hideTopLine = false,
  hideBottomLine = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      style={{
        position: 'relative',
        borderBottom: `1px solid ${theme_color.white}`
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {iconPosition === 'left' && (
          <svg
            style={{
              width: 24,
              height: 24,
              marginRight: 8,
              transition: 'all .3s',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
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
        )}
        <span>{title}</span>
        {iconPosition === 'right' && (
          <svg
            style={{
              width: 24,
              height: 24,
              marginLeft: 8,
              transition: 'all .3s',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
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
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}
