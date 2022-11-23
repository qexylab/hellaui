import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getCheckboxStyle = (size: DefaultSize) => {
  let width, height
  switch (size) {
    case 'xs':
      width = 12
      height = 12
      break
    case 'sm':
      width = 16
      height = 16
      break
    case 'md':
      width = 20
      height = 20
      break
    case 'lg':
      width = 24
      height = 24
      break
    case 'xl':
      width = 32
      height = 32
      break
    default:
      width = 20
      height = 20
  }
  return {
    width,
    height
  }
}
