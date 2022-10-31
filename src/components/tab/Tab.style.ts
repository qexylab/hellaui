import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getTabStyle = (size: DefaultSize) => {
  let textSize, height

  switch (size) {
    case 'xs':
      textSize = 12
      height = 24
      break
    case 'sm':
      textSize = 14
      height = 32
      break
    case 'md':
      textSize = 16
      height = 40
      break
    case 'lg':
      textSize = 18
      height = 48
      break
    case 'xl':
      textSize = 22
      height = 64
      break
    default:
      textSize = 16
      height = 40
      break
  }

  return {
    textSize,
    height
  }
}
