import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getToggleStyle = (size: DefaultSize) => {
  let toggleWidth: number, toggleHeight: number

  switch (size) {
    case 'xs':
      toggleWidth = 16
      toggleHeight = 12
      break
    case 'sm':
      toggleWidth = 20
      toggleHeight = 16
      break
    case 'md':
      toggleWidth = 24
      toggleHeight = 20
      break
    case 'lg':
      toggleWidth = 28
      toggleHeight = 24
      break
    case 'xl':
      toggleWidth = 36
      toggleHeight = 32
      break
    default:
      toggleWidth = 36
      toggleHeight = 20
  }
  return {
    toggleWidth,
    toggleHeight
  }
}
