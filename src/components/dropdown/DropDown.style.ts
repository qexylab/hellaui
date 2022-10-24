import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getDropDownStyle = (size: DefaultSize) => {
  let textSize: number,
    padding: string = '4px'

  switch (size) {
    case 'xs':
      textSize = 12
      padding = '2px'
      break
    case 'sm':
      textSize = 14
      padding = '4px'
      break
    case 'md':
      textSize = 16
      break
    case 'lg':
      textSize = 18
      padding = '6px'
      break
    case 'xl':
      textSize = 22
      padding = '10px'
      break
    default:
      textSize = 16
      padding = '4px 10px'
  }
  return {
    textSize,
    padding
  }
}
