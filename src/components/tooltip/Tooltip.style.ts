import {
  TooltipPosition,
  TooltipSize
} from '@src/components/tooltip/Tooltip.types'

export const getTooltipStyle = (
  position: TooltipPosition,
  size: TooltipSize
) => {
  let margin: string,
    flexDirection: string,
    textSize: string,
    padding: string = '4px 8px'

  switch (position) {
    case 'bottom':
      flexDirection = 'column'
      margin = '8px 0 0 0'
      break
    case 'top':
      flexDirection = 'column-reverse'
      margin = '0 0 8px 0'
      break
    case 'left':
      flexDirection = 'row-reverse'
      margin = '0 8px 0 0'
      break
    case 'right':
      flexDirection = 'row'
      margin = '0 0 0 8px'
      break
    default:
      flexDirection = 'column'
      margin = '8px 0 0 0'
  }
  switch (size) {
    case 'xs':
      textSize = '10px'
      padding = '2px 6px'
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
      padding = '6px 12px'
      break
    default:
      textSize = '14px'
  }
  return {
    margin,
    flexDirection,
    padding,
    textSize
  }
}
