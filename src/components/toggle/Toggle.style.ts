import {ToggleSize} from "@src/components/toggle/Toggle.types";

export const getToggleStyle = (size: ToggleSize) => {
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
    toggleHeight,
  }
}
