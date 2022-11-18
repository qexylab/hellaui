import React, { ForwardedRef, forwardRef, useRef, useState } from 'react'
import { ITag } from './Tag.types'
import { borderRadius } from '@src/other/theme/borderRadius'
import { getTagStyle } from '@src/components/tag/Tag.style'
import { Tooltip } from '@src/components/tooltip'
import { theme_color } from '@src/other/theme'

export const Tag = forwardRef<HTMLDivElement, ITag>(
  (
    {
      variant = 'success',
      sizes = 'md',
      rounding = 'xs',
      afterIcon,
      beforeIcon,
      withTooltip = false,
      tooltipPosition = 'bottom',
      width,
      tooltipBackground,
      children,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { backgroundColor, padding, textSize } = getTagStyle(variant, sizes)
    const elementRef = useRef<HTMLDivElement>(null)
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false)

    return (
      <div
        ref={elementRef}
        style={{
          borderRadius: borderRadius(rounding),
          background: backgroundColor,
          color: theme_color.white,
          padding: padding,
          fontSize: textSize,
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          userSelect: 'none'
        }}
        {...props}
      >
        {beforeIcon && <div style={{ marginRight: 2 }}>{beforeIcon}</div>}
        <div
          ref={ref}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            alignItems: 'center',
            maxWidth: width ? width : 500
          }}
        >
          {children}
        </div>
        {afterIcon && <div style={{ marginLeft: 2 }}>{afterIcon}</div>}
        {withTooltip && (
          <Tooltip
            visible={tooltipVisible && withTooltip}
            targetRef={elementRef}
            tooltipPosition={tooltipPosition}
            onVisibilityChange={setTooltipVisible}
            sizes={sizes}
            background={tooltipBackground ? tooltipBackground : backgroundColor}
            rounding={rounding}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {beforeIcon && <div style={{ marginRight: 2 }}>{beforeIcon}</div>}
              {children}
              {afterIcon && <div style={{ marginLeft: 2 }}>{afterIcon}</div>}
            </div>
          </Tooltip>
        )}
      </div>
    )
  }
)

Tag.displayName = 'Tag'
