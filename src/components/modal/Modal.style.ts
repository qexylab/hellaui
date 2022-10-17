import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getModalStyle = (size: DefaultSize) => {
  let textSize, modalWidth
  switch (size) {
    case 'xs':
      textSize = 12
      modalWidth = 384
      break
    case 'sm':
      textSize = 14
      modalWidth = 420
      break
    case 'md':
      textSize = 16
      modalWidth = 488
      break
    case 'lg':
      textSize = 18
      modalWidth = 592
      break
    case 'xl':
      textSize = 22
      modalWidth = 800
      break
    default:
      textSize = 16
  }
  return {
    textSize,
    modalWidth
  }
}
