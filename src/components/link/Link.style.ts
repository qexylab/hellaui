import { LinkSize, LinkVariant } from '@src/components/link/Link.types'
import { theme_color } from '@src/other/theme'

export const getLinkStyle = (variant?: LinkVariant, size?: LinkSize) => {
  let color: string, hoverColor: string, textSize: number

  switch (variant) {
    case 'default':
      color = theme_color.primary_80
      hoverColor = theme_color.primary
      break
    case 'success':
      color = theme_color.success_80
      hoverColor = theme_color.success
      break
    case 'info':
      color = theme_color.info_80
      hoverColor = theme_color.info
      break
    case 'warning':
      color = theme_color.warning_80
      hoverColor = theme_color.warning
      break
    case 'danger':
      color = theme_color.danger_80
      hoverColor = theme_color.danger
      break
    default:
      color = theme_color.primary_80
      hoverColor = theme_color.primary
      break
  }

  switch (size) {
    case 'xs':
      textSize = 12
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
      break
    default:
      textSize = 16
  }

  return {
    color,
    hoverColor,
    textSize
  }
}
