import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useRef,
  useState
} from 'react'
import { IChip } from '@src/components/chip/Chip.types'
import { getChipStyle } from '@src/components/chip/Chip.style'
import { borderRadius } from '@src/components/theme/borderRadius'

export const Chip = forwardRef<HTMLDivElement, IChip>(
  (
    {
      sizes = 'md',
      disabled,
      variant = 'outlined',
      selected,
      textColor,
      bgColor,
      onRemove,
      children,
      iconBefore,
      iconAfter,
      badge,
      rounding = 'md'
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const defaultChip = selected !== undefined
    const withCloseIcon = !!onRemove
    const withBadge = !!badge

    const elementRef = useRef<HTMLDivElement>(null)
    const refItems = useRef<HTMLDivElement>(null)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)

    const {
      // badgeAppearance,
      backgroundColor,
      hoverBackgroundColor,
      color,
      border,
      padding,
      textSize
    } = getChipStyle(selected, variant, sizes, disabled, bgColor, textColor)

    const handleClickCloseIcon = useCallback(
      (e: MouseEvent) => {
        e.stopPropagation()
        if (!disabled) onRemove?.()
      },
      [onRemove]
    )

    return (
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        ref={elementRef}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          position: 'relative',
          maxWidth: '190px',
          userSelect: 'none',
          pointerEvents: disabled ? 'none' : 'auto',
          cursor: defaultChip && !disabled ? 'pointer' : 'default',
          backgroundColor: disabled
            ? backgroundColor
            : isHover || isFocus
            ? hoverBackgroundColor
            : backgroundColor,
          border: border,
          color: color,
          padding: padding,
          fontSize: textSize,
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
          borderRadius: borderRadius(rounding),
          transition: 'all 0.175s ease',
          outline: 'none',
          appearance: 'none'
        }}
      >
        {children}
      </div>
    )
  }
)

Chip.displayName = 'Chip'
