import React, { ForwardedRef, forwardRef, useState } from 'react'
import { IRadioButton } from '@src/components/radioButton/RadioButton.types'
import { theme_color } from '@src/components/theme'
import { getRadioButtonStyle } from '@src/components/radioButton/RadioButton.style'
import { useSetStyle } from '@src/components/utils/useSetStyle'

export const RadioButton = forwardRef<HTMLInputElement, IRadioButton>(
  (
    {
      children,
      size = 'md',
      checked,
      error = false,
      disabled,
      tooltipText,
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { minWidth, height, paddingLeft } = getRadioButtonStyle(size)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)

    useSetStyle('hl-radio:not(:checked):disabled', {
      backgroundColor: theme_color.white_gray
    })
    useSetStyle('hl-radio:checked:disabled', {
      border: `1px solid ${theme_color.dark_primary}`
    })
    useSetStyle('hl-radio:checked:not(disabled)', {
      border: `1px solid ${theme_color.primary}`
    })
    useSetStyle('hl-radio:focus-visible', {
      outlineOffset: '2px',
      outline: `${theme_color.primary_40} solid 2px`
    })
    useSetStyle(
      'hl-radio:not(:disabled):hover::after, hl-radio:not(:disabled):focus::after',
      {
        outlineOffset: '2px',
        outline: `${theme_color.primary_40} solid 2px`,
        content: '',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        width: 'calc(100% + 16px)',
        height: 'calc(100% + 16px)',
        backgroundColor: `${theme_color.gray}`
      }
    )
    useSetStyle(
      'hl-radio:not(:disabled):hover, hl-radio:not(:disabled):focus',
      { border: `1px solid ${theme_color.primary}` }
    )

    return (
      <label
        style={{
          margin: 0,
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: paddingLeft,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          cursor: disabled ? 'default' : 'pointer',
          color: disabled ? theme_color.gray : theme_color.danger
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: '2px',
            display: 'inline-block',
            minWidth: minWidth,
            height: height
          }}
        >
          <input
            ref={ref}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            type="radio"
            className="hl-radio"
            style={{
              appearance: 'none',
              width: '100%',
              height: '100%',
              position: 'absolute',
              margin: 0,
              padding: 0,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
              borderRadius: '50%',
              pointerEvents: disabled ? 'none' : 'auto'
            }}
          />
          <span
            style={{
              display: 'inline-block',
              position: 'absolute',
              margin: 0,
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              content: '',
              pointerEvents: 'none',
              backgroundColor: theme_color.gray,
              width: '20px',
              height: '20px',
              border: `1px solid ${
                disabled
                  ? theme_color.white_gray
                  : error
                  ? theme_color.danger
                  : theme_color.dark_danger
              }`,
              borderRadius: '50%',
              transition: 'all 0.25s ease-in-out'
            }}
          />
        </div>
        {children}
        {tooltipText && (
          <div
            style={{
              marginTop: 10,
              color: disabled ? theme_color.dark_gray : theme_color.white_gray
            }}
          >
            {tooltipText}
          </div>
        )}
      </label>
    )
  }
)
