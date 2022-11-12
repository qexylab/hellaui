import React, { forwardRef, useRef, useState } from 'react'
import { IDrawer } from './Drawer.types'
import { createPortal } from 'react-dom'
import { NoSsr } from '@src/components/noSsr'
import { CloseIcon } from '@src/icons/closeIcon'
import { theme_color } from '@src/other/theme'
import { getKeyboardFocusableElements } from '@src/other/utils/getKeyboardFocusableElements'
import { getDrawerStyle } from '@src/components/drawer/Drawer.style'
import { useEnhancedEffect } from '@src/other/hooks/useEnhancedEffect'

export const Drawer = forwardRef<HTMLDivElement, IDrawer>(
  (
    {
      sizes = 'md',
      width,
      height,
      rounding = 'md',
      title= '',
      container,
      position = 'right',
      onClose,
      isVisible = false,
      backgroundColor,
      textColor,
      closeOnOutsideClick = false,
      displayCloseIcon = true,
      disableOutsideBackground = false,
      children,
      ...props
    },
    ref
  ) => {
    const [isCloseHover, setIsCloseHover] = useState<boolean>(false)
    const [isCloseClick, setIsCloseClick] = useState<boolean>(false)
    const drawerRef: any = useRef<HTMLDivElement>(null)
    const outsideRef = useRef<HTMLDivElement>(null)

    const { textSize, positionStyles } = getDrawerStyle(
      sizes,
      position,
      isVisible,
      rounding,
      width,
      height
    )

    useEnhancedEffect(() => {
      if (isVisible && !disableOutsideBackground)
        document.body.style.overflow = 'hidden'
      else document.body.style.overflow = 'visible'
    }, [isVisible, disableOutsideBackground])

    const handleKeydownClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
      event.stopPropagation()
      if (event.key === 'Tab') {
        // focus trap
        const focusableEls: any = getKeyboardFocusableElements(
          drawerRef.current
        )
        if (event.shiftKey) {
          /* shift + tab */
          if (
            document.activeElement === focusableEls[0] ||
            document.activeElement === drawerRef.current
          ) {
            focusableEls[focusableEls.length - 1].focus()
            event.preventDefault()
          }
        } else {
          /* tab */
          if (
            document.activeElement === focusableEls[focusableEls.length - 1]
          ) {
            focusableEls[0].focus()
            event.preventDefault()
          }
        }
      }
    }

    return typeof window !== 'undefined'
      ? createPortal(
          <NoSsr>
            {!disableOutsideBackground && (
              <div
                ref={outsideRef}
                onKeyDown={handleKeydownClick}
                tabIndex={-1}
                onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
                  closeOnOutsideClick &&
                    event.target === outsideRef.current &&
                    onClose?.()
                }}
                aria-hidden={true}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: isVisible ? 1 : 0,
                  zIndex: isVisible ? 0 : -1,
                  visibility: isVisible ? 'visible' : 'hidden',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  transition: isVisible
                    ? 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1)'
                    : '225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
                }}
              />
            )}
            <div
              tabIndex={-1}
              onKeyDown={handleKeydownClick}
              ref={drawerRef}
              style={{
                flex: '1 0 auto',
                display: 'flex',
                padding: '5px 15px',
                outline: 0,
                zIndex: 1200,
                position: 'fixed',
                fontSize: textSize + 2,
                overflowY: 'auto',
                color: textColor ? textColor : theme_color.white,
                flexDirection: 'column',
                backgroundColor: backgroundColor
                  ? backgroundColor
                  : theme_color.dark_gray,
                boxShadow: isVisible
                  ? '0 8px 10px -5px rgba(0, 0, 0, 0.2),  0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)'
                  : 'none',
                flexShrink: 0,
                visibility: isVisible ? 'visible' : 'hidden',
                transition: isVisible
                  ? 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
                  : '325ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                ...positionStyles
              }}
              {...props}
            >
              <div
                ref={ref}
                onKeyDown={handleKeydownClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: title ? 'space-between' : 'end',
                  minHeight: 54
                }}
              >
                {title && title}
                {displayCloseIcon && (
                  <button
                    onMouseEnter={() => setIsCloseHover(true)}
                    onMouseLeave={() => setIsCloseHover(false)}
                    onMouseDown={() => setIsCloseClick(true)}
                    onMouseUp={() => setIsCloseClick(false)}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                      event.stopPropagation()
                      onClose?.()
                    }}
                    style={{
                      color: isCloseHover
                        ? theme_color.dark_white
                        : textColor
                        ? textColor
                        : theme_color.white
                    }}
                  >
                    <CloseIcon
                      textSize={textSize + 5}
                      style={{
                        transform: isCloseClick ? 'scale(0.9)' : 'scale(1)',
                        transition: 'all 0.175s ease'
                      }}
                    />
                  </button>
                )}
              </div>
              <div
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: textColor ? textColor : theme_color.white,
                  marginBottom: 10
                }}
              />

              {children}
            </div>
          </NoSsr>,
          container || document.body
        )
      : null
  }
)

Drawer.displayName = 'Drawer'
