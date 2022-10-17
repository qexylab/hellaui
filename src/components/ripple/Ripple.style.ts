import { useEffect } from 'react'
import { DefaultSize } from '@src/other/utils/defaultTypes'

export const getRippleStyle = (size: DefaultSize) => {
  let rippleSize

  switch (size) {
    case 'xs':
      rippleSize = 15
      break
    case 'sm':
      rippleSize = 25
      break
    case 'md':
      rippleSize = 35
      break
    case 'lg':
      rippleSize = 45
      break
    case 'xl':
      rippleSize = 60
      break
    default:
      rippleSize = 35
  }
  return {
    rippleSize
  }
}

export const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: Function
) => {
  useEffect(() => {
    let bounce: number | undefined = undefined
    if (rippleCount > 0) {
      clearTimeout(bounce)

      bounce = setTimeout(() => {
        cleanUpFunction()
        clearTimeout(bounce)
      }, duration * 4)
    }

    return () => clearTimeout(bounce)
  }, [rippleCount, duration, cleanUpFunction])
}
