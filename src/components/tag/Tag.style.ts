import { TagSize, TagVariant } from '@src/components/tag/Tag.types'
import { theme_color } from '@src/other/theme'

export const getTagStyle = (variant: TagVariant, size: TagSize) => {
  let backgroundColor: string,
    textSize: number,
    padding: string = '2px 4px'

  switch (variant) {
    case 'primary':
      backgroundColor = theme_color.primary
      break
    case 'success':
      backgroundColor = theme_color.success
      break
    case 'warning':
      backgroundColor = theme_color.warning
      break
    case 'cyan':
      backgroundColor = theme_color.cyan
      break
    case 'pink':
      backgroundColor = theme_color.pink
      break
    case 'indigo':
      backgroundColor = theme_color.indigo
      break
    case 'teal':
      backgroundColor = theme_color.teal
      break
    case 'gray':
      backgroundColor = theme_color.gray
      break
    case 'purple':
      backgroundColor = theme_color.cyan
      break
    case 'danger':
      backgroundColor = theme_color.danger
      break
    default:
      backgroundColor = theme_color.primary
      break
  }
  switch (size) {
    case 'xs':
      textSize = 10
      padding = '1px 2px'
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
      padding = '2px 6px'
      break
    default:
      textSize = 14
  }
  return {
    backgroundColor,
    padding,
    textSize
  }
}
