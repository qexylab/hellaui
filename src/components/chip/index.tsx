import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useRef,
  useState
} from 'react'
import { IChip } from '@src/components/chip/Chip.types'
import { getChipStyle } from '@src/components/chip/Chip.style'
import { borderRadius } from '@src/other/theme/borderRadius'
import { theme_color } from '@src/other/theme'
import { CloseIcon } from '@src/icons/closeIcon'
import { Tooltip } from '@src/components/tooltip'
import { Badge } from '@src/components/badge'

export const Chip = forwardRef<HTMLDivElement, IChip>(
  (
    {
      sizes = 'md',
      disabled,
      variant = 'outlined',
      selected,
      textColor,
      borderColor,
      bgColor,
      onRemove,
      children,
      iconBefore,
      iconAfter,
      badge,
      withTooltip = false,
      rounding = 'md',
      tooltipPosition = 'bottom',
      onClick
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const defaultChip = selected !== undefined

    const elementRef = useRef<HTMLDivElement>(null)
    const refItems = useRef<HTMLDivElement>(null)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false)

    const { badgeVariant, hoverBackgroundColor, padding, textSize } =
      getChipStyle(selected, variant, sizes, disabled, badge)

    const handleClickCloseIcon = useCallback(
      (e: any) => {
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
        onClick={onClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          position: 'relative',
          maxWidth: '250px',
          userSelect: 'none',
          pointerEvents: disabled ? 'none' : 'auto',
          cursor: defaultChip && !disabled ? 'pointer' : 'default',
          backgroundColor:
            selected && !disabled
              ? theme_color.dark_primary
              : selected && disabled
              ? theme_color.white_gray
              : isHover || isFocus
              ? hoverBackgroundColor
              : bgColor
              ? bgColor
              : variant === 'filled'
              ? theme_color.gray
              : 'transparent',

          border: `1px solid ${
            disabled && variant !== 'filled'
              ? theme_color.white_gray
              : variant === 'filled'
              ? 'transparent'
              : borderColor
              ? borderColor
              : theme_color.dark_primary
          }`,
          color: disabled
            ? theme_color.white_gray
            : textColor
            ? textColor
            : selected
            ? theme_color.white
            : variant === 'filled'
            ? theme_color.white
            : theme_color.white,
          padding: padding,
          fontSize: textSize,
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
          borderRadius: borderRadius(rounding),
          transition: 'all 0.175s ease',
          outline: 'none',
          appearance: 'none'
        }}
      >
        <div
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center'
          }}
        >
          {iconBefore && (
            <div style={{ display: 'inline-block', marginRight: 8 }}>
              {iconBefore}
            </div>
          )}
          <div
            ref={refItems}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'inline-block'
            }}
          >
            {children}
          </div>
          {!onRemove && iconAfter && (
            <div
              style={{
                display: 'inline-block',
                marginLeft: 8
              }}
            >
              {iconAfter}
            </div>
          )}
          {!onRemove && typeof badge !== 'undefined' && (
            <Badge
              style={{ marginLeft: 8 }}
              rounding={rounding}
              sizes={sizes}
              variant={badgeVariant}
            >
              {badge}
            </Badge>
          )}
          {onRemove && (
            <div
              onClick={disabled ? void 0 : handleClickCloseIcon}
              style={{
                display: 'inline-block',
                marginLeft: 8,
                cursor: 'pointer'
              }}
            >
              <CloseIcon textSize={textSize} />
            </div>
          )}
          <Tooltip
            targetRef={elementRef}
            visible={tooltipVisible && withTooltip}
            tooltipPosition={tooltipPosition}
            sizes={sizes}
            onVisibilityChange={setTooltipVisible}
          >
            {children}
          </Tooltip>
        </div>
      </div>
    )
  }
)

Chip.displayName = 'Chip'
