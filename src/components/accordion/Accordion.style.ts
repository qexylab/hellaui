import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getAccordionStyle = (size: DefaultSize) => {
  let textSize

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
    textSize
  }
}
