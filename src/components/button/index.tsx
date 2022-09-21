import React, { ForwardedRef, forwardRef, useState } from 'react'
import { IButton } from './Button.types'
import { getButtonStyle } from '@src/components/button/Button.style'
import { borderRadius } from '@src/components/theme/borderRadius'
import { Spinner } from '@src/components/spinner'
import { Ripple } from '@src/components/ripple'
import { Skeleton } from '@src/components/skeleton'

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      variant = 'default',
      type = 'button',
      sizes = 'md',
      rounding = 'md',
      disabled = false,
      active = true,
      leftIcon,
      rightIcon,
      bgColor,
      textColor,
      loading = false,
      loadingText = '',
      skeleton = false,
      skeletonWidth = '50px',
      skeletonHeight = '20px',
      plain,
      children,
      rippleEffect = false,
      rippleEffectColor,
      rippleEffectSize = 'xs',
      ...props
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)

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
      sizes,
      disabled,
      plain ? plain : undefined,
      bgColor ? bgColor : undefined,
      textColor ? textColor : undefined
    )

    return (
      <>
        {skeleton ? (
          <Skeleton
            rounding={rounding}
            width={skeletonWidth}
            height={skeletonHeight}
          />
        ) : (
          <button
            ref={ref}
            disabled={disabled}
            aria-disabled={disabled}
            type={type}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onMouseUp={() => setIsClick(false)}
            onMouseDown={() => setIsClick(true)}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            style={{
              backgroundColor:
                disabled || loading
                  ? backgroundColor
                  : isClick
                  ? backgroundColor
                  : isHover || isFocus
                  ? hoverBackgroundColor
                  : backgroundColor,
              border:
                disabled || loading
                  ? border
                  : isClick
                  ? border
                  : isHover || isFocus
                  ? hoverBorder
                  : border,
              color: isClick ? color : isHover || isFocus ? hoverColor : color,
              fontSize: textSize,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
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
            {...props}
          >
            {leftIcon && !loading ? (
              <div style={{ marginRight: '5px' }}>{leftIcon}</div>
            ) : null}
            {loading && <Spinner sizes={sizes} />}
            {loading ? loadingText || <span>{children}</span> : children}
            {rippleEffect && (
              <Ripple
                color={rippleEffectColor}
                sizes={rippleEffectSize}
                duration={450}
              />
            )}
            {rightIcon && !loading ? (
              <div style={{ marginLeft: '5px' }}>{rightIcon}</div>
            ) : null}
          </button>
        )}
      </>
    )
  }
)

Button.displayName = 'Button'
