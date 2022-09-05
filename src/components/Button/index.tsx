import React, { forwardRef } from 'react'
import { IButton } from './Button.types'
import './Button.module.scss'
// import { Spinner } from "@src/components/Spinner";

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
    // const spinnerSize = size === 'sm' ? 'sm' : 'md'
    return (
      <button
        className="test test-class border border-blue-600"
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        type={type}
        data-active={active ? 'true' : undefined}
        data-color={color ? color : undefined}
        {...props}
      >
        {leftIcon && !loading ? leftIcon : null}
        {/*{loading && <Spinner size={spinnerSize} />}*/}
        {loading ? loadingText || <span>{children}</span> : children}
        {rightIcon && !loading ? rightIcon : null}
      </button>
    )
  }
)

Button.displayName = 'Button'
