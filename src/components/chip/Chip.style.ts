import { ChipSize, ChipVariant } from '@src/components/chip/Chip.types'
import { theme_color } from '@src/components/theme'

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
    textSize: string = '14px',
    padding: string = '2px 5px'

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
      textSize = '10px'
      padding = '4px 10px'
      break
    case 'sm':
      textSize = '12px'
      break
    case 'md':
      textSize = '14px'
      break
    case 'lg':
      textSize = '16px'
      break
    case 'xl':
      textSize = '20px'
      padding = '6px 18px'
      break
    default:
      textSize = '14px'
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
