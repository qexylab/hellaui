import { ChipSize, ChipVariant } from '@src/components/chip/Chip.types'
import { theme_color } from '@src/other/theme'

export const getChipStyle = (
  selected?: boolean,
  variant?: ChipVariant,
  size?: ChipSize,
  disabled?: boolean,
  bgColor?: string | undefined,
  textColor?: string | undefined
) => {
  let backgroundColor: string = '',
    hoverBackgroundColor: string = '',
    color: string = '',
    border: string = 'none',
    textSize: number,
    padding: string = '6px 12px'

  // const badgeAppearance: BadgeVariant = useMemo(() => {
  //   if (selected && !disabled) return 'whiteBlue'
  //   if (disabled) {
  //     if (selected) return 'whiteDisable'
  //     return 'lightDisable'
  //   }
  //   return 'info'
  // }, [variant, selected, disabled])

  const setChipStyle = (
    bg_color: string,
    hover_bg_color: string,
    text_color: string
  ) => {
    backgroundColor = bgColor ? bgColor : bg_color
    hoverBackgroundColor = hover_bg_color
    color = textColor ? textColor : text_color
    if (variant === 'filled')
      border = textColor ? `1px solid ${bgColor}` : `1px solid ${bg_color}`
    else
      border = textColor ? `1px solid ${textColor}` : `1px solid ${text_color}`
  }

  switch (variant) {
    case 'outlined':
      setChipStyle('inherit', theme_color.dark_gray, theme_color.white)
      break
    case 'filled':
      setChipStyle(theme_color.gray, theme_color.white_gray, theme_color.white)
      break
    default:
      setChipStyle('inherit', theme_color.dark_gray, theme_color.purple)
      break
  }

  switch (size) {
    case 'xs':
      textSize = 12
      padding = '4px 8px'
      break
    case 'sm':
      textSize = 14
      break
    case 'md':
      textSize = 16
      break
    case 'lg':
      textSize = 18
      break
    case 'xl':
      textSize = 22
      padding = '6px 18px'
      break
    default:
      textSize = 16
  }

  return {
    backgroundColor,
    hoverBackgroundColor,
    color,
    border,
    padding,
    textSize
  }
}
