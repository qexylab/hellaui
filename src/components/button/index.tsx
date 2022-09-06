import React, { forwardRef } from 'react'
import { IButton } from './Button.types'
import { getButtonClass } from "@src/components/button/styles";
import {borderRadiusType, smallBorderRadius} from "@src/components/theme/borderRadius";
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
      color,
      loading = false,
      loadingText = '',
      skeleton = true,
      children,
      ...props
    },
    ref
  ) => {

    const { bgColor, textColor, textSize, padding } = getButtonClass({variant, size, disabled})

    return (
      <button
        style={{
          backgroundColor: bgColor,
          border: 'none',
          color: textColor,
          fontSize: textSize,
          padding: padding,
          position: 'relative',
          display: 'inline-block',
          borderRadius: skeleton ? '0px' : smallBorderRadius(borderRadiusType.md),
          appearance: 'none',
          verticalAlign: 'middle',
          pointerEvents: loading || disabled || skeleton ? 'none' : "all",
        }}
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        type={type}
        {...props}
      >
        {leftIcon && !loading ? leftIcon : null}
        {/*{loading && <spinner size={spinnerSize} />}*/}
        {loading ? loadingText || <span>{children}</span> : children}
        {rightIcon && !loading ? rightIcon : null}
      </button>
    )
  }
)

Button.displayName = 'Button'
