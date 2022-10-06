import { BadgeSize, BadgeVariant } from '@src/components/badge/Badge.types'
import { theme_color } from '@src/other/theme'

export const getBadgeStyle = (size: BadgeSize, variant: BadgeVariant) => {
  let background: string = theme_color.gray,
    color: string = theme_color.dark_gray,
    textSize: number,
    padding: string = '2px 6px'

  switch (variant) {
    case 'default':
      background = theme_color.gray
      color = theme_color.white
      break
    case 'info':
      background = theme_color.primary_40
      color = theme_color.white
      break
    case 'warning':
      background = theme_color.warning_10
      color = theme_color.white
      break
    case 'success':
      background = theme_color.success_10
      color = theme_color.white
      break
    case 'error':
      background = theme_color.danger_10
      color = theme_color.white
      break
    case 'gray':
      background = theme_color.gray
      color = theme_color.white
      break
    case 'dark':
      background = theme_color.dark_gray
      color = theme_color.white_gray
      break
    case 'white':
      background = theme_color.white
      break
    case 'whiteInactive':
      color = theme_color.dark_gray
      break
    case 'whiteDisable':
      background = theme_color.white
      color = theme_color.gray
      break
    case 'light':
      background = theme_color.white_gray
      break
    case 'lightInactive':
      color = theme_color.dark_gray
      break
    case 'lightDisable':
      background = theme_color.white_gray
      color = theme_color.gray
      break
    default:
      background = theme_color.gray
      color = theme_color.white
      break
  }

  switch (size) {
    case 'xs':
      textSize = 10
      padding = '1px 3px'
      break
    case 'sm':
      textSize = 12
      break
    case 'md':
      textSize = 14
      break
    case 'lg':
      textSize = 16
      break
    case 'xl':
      textSize = 20
      padding = '3px 8px'
      break
    default:
      textSize = 16
  }

  return {
    textSize,
    background,
    padding,
    color
  }
}
