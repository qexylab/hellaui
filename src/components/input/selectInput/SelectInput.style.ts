import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getInputSelectStyle = (size: DefaultSize, multiple: boolean) => {
  let padding = '8px 16px',
    textSize

  switch (size) {
    case 'xs':
      textSize = 12
      padding = multiple ? '4px 12px' : '6px 12px'
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
      padding = '16px 16px'
      break
    default:
      textSize = 16
  }

  return {
    padding,
    textSize
  }
}
