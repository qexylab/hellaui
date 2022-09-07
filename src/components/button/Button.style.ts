import { ButtonSize, ButtonVariant } from '@src/components/button/Button.types'
import { theme_color } from '@src/components/theme'

export const getButtonStyle = (
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean,
  plain?: boolean | undefined,
  bgColor?: string | undefined,
  textColor?: string | undefined
) => {
  let backgroundColor: string = '',
    hoverBackgroundColor: string = '',
    color: string = '',
    hoverColor: string = '',
    border: string = 'none',
    hoverBorder: string = 'none',
    textSize: string = '',
    padding: string = '5px 15px'

  switch (variant) {
    case 'default':
      backgroundColor = bgColor ? bgColor : 'transparent'
      hoverBackgroundColor = plain ? 'transparent' : theme_color.primary_10
      color = textColor ? textColor : theme_color.white
      hoverColor = theme_color.primary
      border = `1px solid ${theme_color.white}`
      hoverBorder = plain
        ? `1px solid ${theme_color.primary}`
        : `1px solid ${theme_color.primary_40}`
      break
    case 'primary':
      backgroundColor = bgColor
        ? bgColor
        : plain
        ? theme_color.primary_10
        : theme_color.primary
      hoverBackgroundColor = plain
        ? theme_color.primary
        : theme_color.dark_primary
      color = textColor
        ? textColor
        : plain
        ? theme_color.primary
        : theme_color.white
      hoverColor = theme_color.white
      border = `1px solid ${theme_color.primary}`
      hoverBorder = plain
        ? `1px solid ${theme_color.primary}`
        : `1px solid ${theme_color.dark_primary}`
      break
    case 'success':
      backgroundColor = bgColor
        ? bgColor
        : plain
        ? theme_color.success_10
        : theme_color.success
      hoverBackgroundColor = plain
        ? theme_color.success
        : theme_color.dark_success
      color = textColor
        ? textColor
        : plain
        ? theme_color.success
        : theme_color.white
      hoverColor = theme_color.white
      border = `1px solid ${theme_color.success}`
      hoverBorder = plain
        ? `1px solid ${theme_color.success}`
        : `1px solid ${theme_color.dark_success}`
      break
    case 'info':
      backgroundColor = bgColor
        ? bgColor
        : plain
        ? theme_color.info_10
        : theme_color.info
      hoverBackgroundColor = plain ? theme_color.info : theme_color.dark_info
      color = textColor
        ? textColor
        : plain
        ? theme_color.info
        : theme_color.white
      hoverColor = theme_color.white
      border = `1px solid ${theme_color.info}`
      hoverBorder = plain
        ? `1px solid ${theme_color.info}`
        : `1px solid ${theme_color.dark_info}`
      break
    case 'warning':
      backgroundColor = bgColor
        ? bgColor
        : plain
        ? theme_color.warning_10
        : theme_color.warning
      hoverBackgroundColor = plain
        ? theme_color.warning
        : theme_color.dark_warning
      color = textColor
        ? textColor
        : plain
        ? theme_color.warning
        : theme_color.white
      hoverColor = theme_color.white
      border = `1px solid ${theme_color.warning}`
      hoverBorder = plain
        ? `1px solid ${theme_color.warning}`
        : `1px solid ${theme_color.dark_warning}`
      break
    case 'danger':
      backgroundColor = bgColor
        ? bgColor
        : plain
        ? theme_color.danger_10
        : theme_color.danger
      hoverBackgroundColor = plain
        ? theme_color.danger
        : theme_color.dark_danger
      color = textColor
        ? textColor
        : plain
        ? theme_color.danger
        : theme_color.white
      hoverColor = theme_color.white
      border = `1px solid ${theme_color.danger}`
      hoverBorder = plain
        ? `1px solid ${theme_color.danger}`
        : `1px solid ${theme_color.dark_danger}`
      break
    default:
      backgroundColor = bgColor ? bgColor : 'transparent'
      hoverBackgroundColor = plain ? 'transparent' : theme_color.primary_10
      color = textColor ? textColor : theme_color.white
      hoverColor = theme_color.primary
      border = `1px solid ${theme_color.white}`
      hoverBorder = plain
        ? `1px solid ${theme_color.primary}`
        : `1px solid ${theme_color.primary_40}`
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
    padding,
    hoverColor,
    textSize,
    border,
    hoverBorder
  }
}
