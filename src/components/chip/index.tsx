import React, {ForwardedRef, forwardRef, useCallback, useRef, useState} from 'react'
import { IChip } from '@src/components/chip/Chip.types'
import { TiDeleteOutline } from 'react-icons/ti'
import {getChipStyle} from "@src/components/chip/Chip.style"

export const Chip = forwardRef<HTMLDivElement, IChip>(
  (
    {
      sizes = 'md',
      disabled,
      variant = 'default',
      selected,
        plain = false,
      onRemove,
      children,
      iconBefore,
      iconAfter,
      badge
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const defaultChip = selected !== undefined
    const withCloseIcon = !!onRemove
    const withBadge = !!badge

    const elementRef = useRef<HTMLDivElement>(null)
    const refItems = useRef<HTMLDivElement>(null)

    const { badgeAppearance, backgroundColor, hoverBackgroundColor, border, hoverBorder  } = getChipStyle(selected, variant, disabled, plain)

    const handleClickCloseIcon = useCallback(
        (e: MouseEvent) => {
          e.stopPropagation()
          if (!disabled) onRemove?.()
        },
        [onRemove],
    )

    return (
        <div ref={elementRef} style={{
          display: "inline-flex",
          alignItems: "center",
          position: "relative",
          maxWidth: '190px',
          userSelect: "none",
          pointerEvents: disabled ? 'none' : 'auto',
          cursor: defaultChip && !disabled ? 'pointer' : 'default',
          backgroundColor: backgroundColor,
          border : border,
        }}>
          chip
        </div>
    )
  }
)

Chip.displayName = 'Chip'
