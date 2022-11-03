import React, { ForwardedRef, forwardRef, useState } from 'react'
import { IButton } from './Button.types'
import { getButtonStyle } from '@src/components/button/Button.style'
import { borderRadius } from '@src/other/theme/borderRadius'
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
      beforeIcon,
      afterIcon,
      backgroundColor,
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
      onClick,
      ...props
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)

    const {
      _backgroundColor,
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
      backgroundColor ? backgroundColor : undefined,
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
            onClick={loading ? () => {} : onClick}
            disabled={disabled}
            aria-disabled={disabled}
            type={type}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onMouseUp={() => setIsClick(false)}
            onMouseDown={() => setIsClick(true)}
            style={{
              backgroundColor:
                disabled || loading
                  ? _backgroundColor
                  : isClick
                  ? _backgroundColor
                  : isHover
                  ? hoverBackgroundColor
                  : _backgroundColor,
              border:
                disabled || loading
                  ? border
                  : isClick
                  ? border
                  : isHover
                  ? hoverBorder
                  : border,
              color:
                disabled || loading
                  ? color
                  : isClick
                  ? color
                  : isHover
                  ? hoverColor
                  : color,
              fontSize: textSize,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
              alignItems: 'center',
              padding: padding,
              display: 'flex',
              borderRadius: borderRadius(rounding),
              verticalAlign: 'middle',
              transition: 'all .175s ease',
              outline: 'none',
              appearance: 'none',
              cursor: disabled ? 'not-allowed' : loading ? 'auto' : 'pointer',
              opacity: disabled || loading ? '0.7' : '1'
            }}
            {...props}
          >
            {beforeIcon && !loading ? (
              <div style={{ marginRight: '5px' }}>{beforeIcon}</div>
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
            {afterIcon && !loading ? (
              <div style={{ marginLeft: '5px' }}>{afterIcon}</div>
            ) : null}
          </button>
        )}
      </>
    )
  }
)

Button.displayName = 'Button'
