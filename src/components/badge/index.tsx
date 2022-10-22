import React, { FC, PropsWithChildren } from 'react'
import { IBadge } from '@src/components/badge/Badge.types'
import { getBadgeStyle } from '@src/components/badge/Badge.style'
import { borderRadius } from '@src/other/theme/borderRadius'

export const Badge: FC<PropsWithChildren<IBadge>> = ({
  children,
  variant = 'default',
  sizes = 'md',
  rounding,
  style,
    ...props
}) => {
  const { padding, textSize, background, color } = getBadgeStyle(sizes, variant)

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: padding,
        fontSize: textSize,
        borderRadius: borderRadius(rounding),
        background: background,
        color: color,
        userSelect: 'none',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
}

Badge.displayName = 'Badge'
