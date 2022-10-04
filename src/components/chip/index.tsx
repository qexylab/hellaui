import React, {
  forwardRef,
  useCallback,
  useRef,
  useState
} from 'react'
import { IChip } from '@src/components/chip/Chip.types'
import { getChipStyle } from '@src/components/chip/Chip.style'
import { borderRadius } from '@src/components/theme/borderRadius'
import { theme_color } from '@src/components/theme'

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
  ) => {
    const defaultChip = selected !== undefined
    const withCloseIcon = !!onRemove
    // const withBadge = !!badge

    const elementRef = useRef<HTMLDivElement>(null)
    const refItems = useRef<HTMLDivElement>(null)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)
    // const [withTooltip, setTooltip] = useState<boolean>(false);
    // const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

    const {
      // badgeAppearance,
      // backgroundColor,
      hoverBackgroundColor,
      color,
      // border,
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
          backgroundColor:
            isHover || isFocus
              ? hoverBackgroundColor
              : selected && !disabled
              ? theme_color.primary
              : selected && disabled
              ? theme_color.primary_40
              : variant === 'filled'
              ? theme_color.primary_10
              : 'transparent',
          border: `1px solid ${
            disabled && variant !== 'filled'
              ? theme_color.purple
              : variant === 'filled'
              ? 'transparent'
              : theme_color.primary_40
          }`,
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
        <div
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'inline-flex'
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
                marginLeft: withCloseIcon ? 2 : 8
              }}
            >
              {iconAfter}
            </div>
          )}
          {!onRemove && typeof badge !== 'undefined' && <div>999</div>}
          {onRemove && (
            <div
              onClick={() => (disabled ? void 0 : handleClickCloseIcon)}
              style={{
                display: 'inline-block',
                marginLeft: withCloseIcon ? 2 : 8
              }}
            >
              Сомнительная иконка, надо бы найти получше
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
          {/*Можно сделать еще тултип*/}
          {/*<Tooltip*/}
          {/*    targetRef={elementRef}*/}
          {/*    visible={tooltipVisible && withTooltip}*/}
          {/*    onVisibilityChange={setTooltipVisible}>*/}
          {/*  {children}*/}
          {/*</Tooltip>*/}
        </div>
      </div>
    )
  }
)

Chip.displayName = 'Chip'
