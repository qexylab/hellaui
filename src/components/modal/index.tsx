import React, { ForwardedRef, forwardRef, useRef, useState } from 'react'
import { IModal } from '@src/components/modal/Modal.types'
import { createPortal } from 'react-dom'
import { theme_color } from '@src/other/theme'
import { borderRadius } from '@src/other/theme/borderRadius'
import { CloseIcon } from '@src/icons/closeIcon'
import { getModalStyle } from '@src/components/modal/Modal.style'
import { NoSsr } from '@src/components/noSsr'
import { useEnhancedEffect } from '@src/other/hooks/useEnhancedEffect'
import { getKeyboardFocusableElements } from '@src/other/utils/getKeyboardFocusableElements'

export const Modal = forwardRef<HTMLDivElement, IModal>(
  (
    {
      sizes = 'md',
      rounding = 'md',
      onClose,
      displayCloseIcon = true,
      container,
      backgroundColor,
      textColor,
      closeOnOutsideClick = false,
      children,
      title,
      isVisible = false
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const outsideRef = useRef<HTMLDivElement>(null)
    const modalRef: any = useRef<HTMLDivElement>(null)
    const [isCloseHover, setIsCloseHover] = useState<boolean>(false)
    const [isCloseClick, setIsCloseClick] = useState<boolean>(false)

    const { modalWidth, textSize } = getModalStyle(sizes)

    useEnhancedEffect(() => {
      if (isVisible) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = 'visible'
    }, [isVisible])

    const handleKeydownClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
      event.stopPropagation()
      if (event.key === 'Tab') {
        // focus trap
        const focusableEls: any = getKeyboardFocusableElements(modalRef.current)
        if (event.shiftKey) {
          /* shift + tab */
          if (
            document.activeElement === focusableEls[0] ||
            document.activeElement === modalRef.current
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
            <div
              ref={outsideRef}
              tabIndex={-1}
              onKeyDown={handleKeydownClick}
              onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
                closeOnOutsideClick &&
                  event.target === outsideRef.current &&
                  onClose?.()
              }}
              style={{
                visibility: isVisible ? 'visible' : 'hidden',
                height: '100vh',
                width: '100vw',
                backgroundColor: theme_color.opacity_black,
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20,
                outline: 'none',
                opacity: isVisible ? 1 : 0,
                transition: 'all .175s ease'
              }}
            >
              <div
                tabIndex={-1}
                ref={modalRef}
                role="dialog"
                onKeyDown={handleKeydownClick}
                style={{
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  padding: '20px 24px 24px 24px',
                  width: modalWidth,
                  maxHeight: '90vh',
                  boxShadow:
                    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
                  color: textColor ? textColor : theme_color.white,
                  backgroundColor: backgroundColor
                    ? backgroundColor
                    : theme_color.dark_gray,
                  borderRadius: borderRadius(rounding),
                  outline: 'none',
                  fontSize: textSize
                }}
              >
                <div
                  ref={ref}
                  onKeyDown={handleKeydownClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: title ? 'space-between' : 'end',
                    marginBottom: 10
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
            </div>
          </NoSsr>,
          container || document.body
        )
      : null
  }
)

Modal.displayName = 'Modal'
