import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getTabStyle = (size: DefaultSize) => {
  let textSize: number, height: number, padding: string, offset: number

  switch (size) {
    case 'xs':
      textSize = 12
      height = 24
      offset = -24
      padding = '0 4px'
      break
    case 'sm':
      textSize = 14
      height = 32
      offset = -32
      padding = '0 8px'
      break
    case 'md':
      textSize = 16
      height = 40
      offset = -40
      padding = '0 12px'
      break
    case 'lg':
      textSize = 18
      height = 48
      offset = -48
      padding = '0 16px'
      break
    case 'xl':
      textSize = 22
      height = 64
      offset = -64
      padding = '0 24px'
      break
    default:
      textSize = 16
      height = 40
      offset = -40
      padding = '0 12px'
      break
  }

  return {
    textSize,
    height,
    padding,
    offset
  }
}
