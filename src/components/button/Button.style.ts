import { ButtonVariant } from '@src/components/button/Button.types'
import { theme_color } from '@src/other/theme'
import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getButtonStyle = (
  variant: ButtonVariant,
  size: DefaultSize,
  disabled: boolean,
  plain?: boolean | undefined,
  bgColor?: string | undefined,
  textColor?: string | undefined
) => {
  let _backgroundColor: string = '',
    hoverBackgroundColor: string = '',
    color: string = '',
    hoverColor: string = '',
    border: string = 'none',
    hoverBorder: string = 'none',
    textSize: number,
    padding: string = '5px 15px'

  const setButtonStyle = (
    main_color: string,
    dark_main_color: string,
    plain_bg_color: string
  ) => {
    _backgroundColor = bgColor ? bgColor : plain ? plain_bg_color : main_color
    hoverBackgroundColor = plain ? main_color : dark_main_color
    color = textColor ? textColor : plain ? main_color : theme_color.white
    hoverColor = theme_color.white
    border = `1px solid ${main_color}`
    hoverBorder = plain
      ? `1px solid ${main_color}`
      : `1px solid ${dark_main_color}`
  }

  const setDefaultButtonStyle = (
    main_color: string,
    plain_hover_bg_color: string,
    hover_border_color: string
  ) => {
    _backgroundColor = bgColor ? bgColor : 'transparent'
    hoverBackgroundColor = plain ? 'transparent' : plain_hover_bg_color
    color = textColor ? textColor : theme_color.white
    hoverColor = main_color
    border = `1px solid ${theme_color.white}`
    hoverBorder = plain
      ? `1px solid ${main_color}`
      : `1px solid ${hover_border_color}`
  }

  switch (variant) {
    case 'default':
      setDefaultButtonStyle(
        theme_color.primary,
        theme_color.primary_10,
        theme_color.primary_40
      )
      break
    case 'primary':
      setButtonStyle(
        theme_color.primary,
        theme_color.dark_primary,
        theme_color.primary_10
      )
      break
    case 'success':
      setButtonStyle(
        theme_color.success,
        theme_color.dark_success,
        theme_color.success_10
      )
      break
    case 'info':
      setButtonStyle(
        theme_color.info,
        theme_color.dark_info,
        theme_color.info_10
      )
      break
    case 'warning':
      setButtonStyle(
        theme_color.warning,
        theme_color.dark_warning,
        theme_color.warning_10
      )
      break
    case 'danger':
      setButtonStyle(
        theme_color.danger,
        theme_color.dark_danger,
        theme_color.danger_10
      )
      break
    default:
      setDefaultButtonStyle(
        theme_color.primary,
        theme_color.primary_10,
        theme_color.primary_40
      )
      break
  }

  switch (size) {
    case 'xs':
      textSize = 12
      padding = '4px 10px'
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
    _backgroundColor,
    hoverBackgroundColor,
    color,
    padding,
    hoverColor,
    textSize,
    border,
    hoverBorder
  }
}
