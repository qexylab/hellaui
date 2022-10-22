import React, { FC, PropsWithChildren, useRef, useState } from 'react'
import { ITag } from '@src/components/tag/Tag.types'
import { borderRadius } from '@src/other/theme/borderRadius'
import { getTagStyle } from '@src/components/tag/Tag.style'
import { Tooltip } from '@src/components/tooltip'
import { theme_color } from '@src/other/theme'

export const Tag: FC<PropsWithChildren<ITag>> = ({
  variant = 'success',
  sizes = 'md',
  rounding = 'xs',
  iconAfter,
  iconBefore,
  withTooltip = false,
  tooltipPosition = 'bottom',
  width,
  tooltipBackground,
  children,
    ...props
}) => {
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
      {iconBefore && <div style={{ marginRight: 2 }}>{iconBefore}</div>}
      <div
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
      {iconAfter && <div style={{ marginLeft: 2 }}>{iconAfter}</div>}
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
          {iconBefore && <div style={{ marginRight: 2 }}>{iconBefore}</div>}
          {children}
          {iconAfter && <div style={{ marginLeft: 2 }}>{iconAfter}</div>}
        </div>
      </Tooltip>
    </div>
  )
}

Tag.displayName = 'Tag'
