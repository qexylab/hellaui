import React, { forwardRef, useRef, useState } from 'react'
import { IDrawer } from '@src/components/drawer/Drawer.types'
import { createPortal } from 'react-dom'
import { NoSsr } from '@src/components/noSsr'
import { CloseIcon } from '@src/icons/closeIcon'
import { theme_color } from '@src/other/theme'
import { getKeyboardFocusableElements } from '@src/other/utils/getKeyboardFocusableElements'
import { getDrawerStyle } from '@src/components/drawer/Drawer.style'

export const Drawer = forwardRef<HTMLDivElement, IDrawer>(
  (
    {
      sizes = 'md',
      rounding = 'md',
      title,
      container,
      onClose,
      anchor,
      isVisible = false,
      backgroundColor,
      textColor,
      closeOnOutsideClick = false,
      displayCloseIcon = true,
      children
    },
    ref
  ) => {
    const [isCloseHover, setIsCloseHover] = useState<boolean>(false)
    const [isCloseClick, setIsCloseClick] = useState<boolean>(false)
    const drawerRef: any = useRef<HTMLDivElement>(null)

    const { drawerWidth, textSize } = getDrawerStyle(sizes)

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
        } /* tab */ else {
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
            <style>{`
.drawer {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.hidden {
  transform: translateX(240px);
  transition: 325ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

        `}</style>
            <div
              tabIndex={-1}
              onClick={onClose}
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
            <div
              tabIndex={-1}
              ref={ref}
              style={{
                top: 0,
                flex: '1 0 auto',
                height: '100%',
                display: 'flex',
                padding: '5px 15px',
                outline: 0,
                zIndex: 1200,
                position: 'fixed',
                overflowY: 'auto',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                boxShadow: isVisible
                  ? '0 8px 10px -5px rgba(0, 0, 0, 0.2),  0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)'
                  : 'none',
                width: isVisible ? drawerWidth : 240,
                flexShrink: 0,
                visibility: isVisible ? 'visible' : 'hidden'
              }}
              className={`drawer ${isVisible ? 'animate' : 'hidden'}`}
            >
              <div
                ref={ref}
                onKeyDown={handleKeydownClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: title ? 'space-between' : 'end',
                  marginBottom: 10,
                  minHeight: 64,
                  borderBottom: '1px solid #ddd'
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
                  >
                    <CloseIcon
                      textSize={textSize + 5}
                      style={{
                        transform: isCloseClick ? 'scale(0.9)' : 'scale(1)',
                        color: isCloseHover
                          ? theme_color.dark_white
                          : theme_color.white,
                        transition: 'all 0.175s ease'
                      }}
                    />
                  </button>
                )}
              </div>
              {children}
            </div>
          </NoSsr>,
          container || document.body
        )
      : null
  }
)

Drawer.displayName = 'Drawer'
