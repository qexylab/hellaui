import React, { FC, PropsWithChildren, useState } from 'react'
import { IAccordion } from '@src/components/accordion/Accordion.types'
import { theme_color } from '@src/components/theme'
import { getAccordionStyle } from '@src/components/accordion/Accordion.style'
import { Ripple } from '@src/components/ripple'

export const Accordion: FC<PropsWithChildren<IAccordion>> = ({
  children,
  width = '100%',
  size = 'md',
  title = 'Title',
  iconPosition = 'right',
  hideTopLine = false,
  hideBottomLine = false,
  rippleEffect = false,
  rippleEffectColor,
  rippleEffectSize,
  onClick,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)

  const { textSize } = getAccordionStyle(size)

  return (
    <div
      onClick={onClick}
      style={{
        borderBottom: hideBottomLine
          ? 'none'
          : `1px solid ${theme_color.white_gray}`,
        borderTop: hideTopLine ? 'none' : `1px solid ${theme_color.white_gray}`,
        width: width,
        fontSize: textSize,
        background: 'transparent'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          position: 'relative',
          minHeight: 32,
          width: '100%',
          display: 'flex',
          justifyContent: iconPosition === 'right' ? 'space-between' : '',
          alignItems: 'center',
          textAlign: 'left',
          border: 'none',
          transition: 'all .175s',
          backgroundColor: isHover ? theme_color.gray : 'transparent',
          margin: 0,
          padding: 10,
          cursor: 'pointer',
          overflow: 'hidden',
          color: theme_color.white
        }}
      >
        {iconPosition === 'left' && (
          <Chevron textSize={textSize} open={isOpen} position={iconPosition} />
        )}
        <span>{title}</span>
        {iconPosition === 'right' && (
          <Chevron textSize={textSize} open={isOpen} position={iconPosition} />
        )}
        {rippleEffect && (
          <Ripple
            color={rippleEffectColor}
            duration={850}
            size={rippleEffectSize}
          />
        )}
      </button>
      <div
        style={{
          overflow: 'hidden',
          display: 'flex',
          transition: isOpen
            ? 'max-height .3s cubic-bezier(1, 0, 1, 0)'
            : 'max-height .3s cubic-bezier(0, 1, 0, 1)',
          height: 'auto',
          padding: '0 10px',
          maxHeight: isOpen ? 9999 : 0
        }}
      >
        {children}
      </div>
    </div>
  )
}

const Chevron: FC<{
  open: boolean
  position: 'right' | 'left'
  textSize: number
}> = ({ open, position, textSize }) => {
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
