import React, { ForwardedRef, forwardRef, useState } from 'react'
import { IButton } from './Button.types'
import { getButtonStyle } from '@src/components/button/Button.style'
import { borderRadius } from '@src/components/theme/borderRadius'
import { Spinner } from '@src/components/spinner'

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      variant = 'default',
      type = 'button',
      size = 'md',
      rounding = 'md',
      disabled = false,
      active = true,
      leftIcon,
      rightIcon,
      bgColor,
      textColor,
      loading = false,
      loadingText = '',
      skeleton = true,
      plain,
      children,
      ...props
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {

    const [isHover, setIsHover] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)

    const {
      backgroundColor,
      hoverBackgroundColor,
      color,
      padding,
      hoverColor,
      textSize,
      border,
      hoverBorder
    } = getButtonStyle(
      variant,
      size,
      disabled,
      plain ? plain : undefined,
      bgColor ? bgColor : undefined,
      textColor ? textColor : undefined
    )

    return (
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        style={{
          backgroundColor: isHover || isFocus ? hoverBackgroundColor : backgroundColor,
          border: isHover || isFocus ? hoverBorder : border,
          color: isHover || isFocus ? hoverColor : color,
          fontSize: textSize,
          alignItems: 'center',
          padding: padding,
          display: 'flex',
          borderRadius: borderRadius(rounding),
          verticalAlign: 'middle',
          transition: 'all 0.175s ease',
          outline: 'none',
          appearance: 'none',
          cursor: disabled || loading ? 'not-allowed' : 'pointer',
          opacity: disabled || loading ? '0.7' : '1'
        }}
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        type={type}
        {...props}
      >
        {leftIcon && !loading ? (
          <div style={{ marginRight: '5px' }}>{leftIcon}</div>
        ) : null}
        {loading && <Spinner size={size} />}
        {loading ? loadingText || <span>{children}</span> : children}
        {rightIcon && !loading ? (
          <div style={{ marginLeft: '5px' }}>{rightIcon}</div>
        ) : null}
      </button>
    )
  }
)

Button.displayName = 'Button'
