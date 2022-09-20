import React, { FC, PropsWithChildren, useState } from 'react'
import { IAccordion } from '@src/components/accordion/Accordion.types'
import { theme_color } from '@src/components/theme'
import { getAccordionStyle } from '@src/components/accordion/Accordion.style'
import { Ripple } from '@src/components/ripple'
import { Chevron } from '@src/components/chevron'

export const Accordion: FC<PropsWithChildren<IAccordion>> = ({
  children,
  width = '100%',
  sizes = 'md',
  title = 'Title',
  iconPosition = 'right',
  hideTopLine = false,
  hideBottomLine = false,
  rippleEffect = false,
  rippleEffectColor,
  rippleEffectSize,
  onClick
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isClick, setIsClick] = useState<boolean>(false)

  const { textSize } = getAccordionStyle(sizes)

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
        onMouseUp={() => setIsClick(false)}
        onMouseDown={() => setIsClick(true)}
        style={{
          position: 'relative',
          minHeight: 32,
          width: '100%',
          display: 'flex',
          justifyContent: iconPosition === 'right' ? 'space-between' : 'start',
          alignItems: 'center',
          textAlign: 'left',
          border: 'none',
          transition: 'all .175s',
          backgroundColor: isClick
            ? theme_color.gray
            : isHover
            ? theme_color.dark_gray
            : 'transparent',
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
            sizes={rippleEffectSize}
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
