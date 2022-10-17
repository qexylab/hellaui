import React, { ForwardedRef, forwardRef } from 'react'
import { IModal } from '@src/components/modal/Modal.types'
import { createPortal } from 'react-dom'
import { theme_color } from '@src/other/theme'
import { borderRadius } from '@src/other/theme/borderRadius'
import { CloseIcon } from '@src/icons/closeIcon'
import { getModalStyle } from '@src/components/modal/Modal.style'

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
      title
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const outsideRef = React.useRef<HTMLDivElement>(null)

    const { modalWidth, textSize } = getModalStyle(sizes)

    return createPortal(
      <div
        ref={outsideRef}
        onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
          closeOnOutsideClick &&
            event.target === outsideRef.current &&
            onClose?.()
        }}
        style={{
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
          outline: 'none'
        }}
      >
        <div
          ref={ref}
          role="dialog"
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
              : theme_color.white_gray,
            borderRadius: borderRadius(rounding),
            outline: 'none',
            fontSize: textSize
          }}
        >
          <div
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
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.stopPropagation()
                  onClose?.()
                }}
              >
                <CloseIcon textSize={textSize + 5} />
              </button>
            )}
          </div>
          {children}
        </div>
      </div>,
      container || document.body
    )
  }
)

Modal.displayName = 'Modal'
