import { ChipVariant } from '@src/components/chip/Chip.types'
import { theme_color } from '@src/other/theme'
import { BadgeVariant } from '@src/components/badge/Badge.types'
import { useMemo } from 'react'
import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getChipStyle = (
  selected?: boolean,
  variant?: ChipVariant,
  size?: DefaultSize,
  disabled?: boolean,
  badge?: number
) => {
  let hoverBackgroundColor: string, textSize: number, padding: string

  const badgeVariant: BadgeVariant = useMemo(() => {
    if (selected && !disabled) return 'white'
    if (disabled) {
      if (selected) return 'whiteDisable'
      return 'lightDisable'
    }
    return 'primary'
  }, [variant, selected, disabled])

  switch (variant) {
    case 'outlined':
      hoverBackgroundColor = theme_color.dark_gray
      break
    case 'filled':
      hoverBackgroundColor = theme_color.white_gray
      break
    default:
      hoverBackgroundColor = theme_color.dark_gray
      break
  }

  switch (size) {
    case 'xs':
      textSize = 12
      padding = badge ? '4px 4px 4px 8px' : '4px 8px'
      break
    case 'sm':
      textSize = 14
      padding = badge ? '6px 6px 6px 12px' : '6px 12px'
      break
    case 'md':
      textSize = 16
      padding = badge ? '6px 6px 6px 12px' : '6px 12px'
      break
    case 'lg':
      textSize = 18
      padding = badge ? '6px 6px 6px 12px' : '6px 12px'
      break
    case 'xl':
      textSize = 22
      padding = badge ? '6px 6px 6px 18px' : '6px 18px'
      break
    default:
      textSize = 16
      padding = badge ? '6px 6px 6px 12px' : '6px 12px'
      break
  }

  return {
    badgeVariant,
    hoverBackgroundColor,
    padding,
    textSize
  }
}
