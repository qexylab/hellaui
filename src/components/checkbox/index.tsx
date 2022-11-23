import React, { ForwardedRef, forwardRef, useState } from 'react'
import { ICheckbox } from './Checkbox.types'
import { getCheckboxStyle } from './Checkbox.style'
import { borderRadius } from '@src/other/theme/borderRadius'
import { theme_color } from '@src/other/theme'
import SuccessIcon from '@src/icons/successIcon'
import MinusIcon from '@src/icons/minusIcon'

export const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  (
    {
      sizes = 'md',
      rounding = 'md',
      indeterminate = false,
      error,
      className,
      disabled,
      checked,
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)

    const { width, height } = getCheckboxStyle(sizes)

    return (
      <div
        style={{
          position: 'relative',
          overflow: 'visible',
          width: width,
          height: height
        }}
        className={className}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseUp={() => setIsClick(false)}
        onMouseDown={() => setIsClick(true)}
      >
        <input
          ref={ref}
          type="checkbox"
          style={{
            appearance: 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            borderRadius: borderRadius(rounding),
            margin: 0,
            padding: 0,
            pointerEvents: disabled ? 'none' : 'auto',
            backgroundColor:
              disabled && checked
                ? theme_color.primary_40
                : disabled
                ? theme_color.dark_gray
                : checked
                ? theme_color.primary_80
                : 'transparent',
            border:
              disabled && checked
                ? 'none'
                : disabled
                ? `1px solid ${theme_color.gray}`
                : checked
                ? 'none'
                : `1px solid ${theme_color.white_gray}`
          }}
        />
        <div
          style={{
            pointerEvents: 'none',
            display: 'inline-block',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: borderRadius(rounding),
            outline: 0,
            transition: 'background 0.1s ease-in',
            lineHeight: 'initial',
            backgroundColor: disabled ? theme_color.dark_gray : '',
            border: `1px solid ${error ? theme_color.danger : theme_color.gray}`
          }}
        >
          {indeterminate ? <MinusIcon /> : <SuccessIcon />}
        </div>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
