import React, { ForwardedRef, forwardRef, useState } from 'react'
import { IButton } from './Button.types'
import { getButtonStyle } from '@src/components/button/Button.style'
import { borderRadius } from '@src/components/theme/borderRadius'
import { Spinner } from '@src/components/spinner'
// import { spinner } from "@src/components/spinner";

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
    const [isHover, setIsHover] = useState(false)
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
        onFocus={() => {}}
        style={{
          backgroundColor: isHover ? hoverBackgroundColor : backgroundColor,
          border: isHover ? hoverBorder : border,
          color: isHover ? hoverColor : color,
          fontSize: textSize,
          alignItems: 'center',
          padding: padding,
          display: 'flex',
          borderRadius: borderRadius(rounding),
          verticalAlign: 'middle',
          transition: 'all 0.175s ease',
          outline: 'none',
          appearance: 'none',
          cursor: disabled || loading ? 'not-allowed' : '',
          opacity: disabled || loading ? '0.7' : '1'
        }}
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        type={type}
        {...props}
      >
        {leftIcon && !loading ? leftIcon : null}
        {loading && <Spinner size={size} />}
        {loading ? loadingText || <span>{children}</span> : children}
        {rightIcon && !loading ? rightIcon : null}
      </button>
    )
  }
)

Button.displayName = 'Button'
