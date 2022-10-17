import React, { useState, FC } from 'react'
import { IRipple, newRipple } from '@src/components/ripple/Ripple.types'
import {
  getRippleStyle,
  useDebouncedRippleCleanUp
} from '@src/components/ripple/Ripple.style'
import { useSetAnimation } from '@src/other/hooks/useSetAnimation'
import { theme_color } from '@src/other/theme'

export const Ripple: FC<IRipple> = ({
  duration = 850,
  color = theme_color.white_gray,
  sizes = 'md'
}) => {
  const [rippleArray, setRippleArray] = useState<newRipple[]>([])

  const animationName = 'ripple'
  const keyframe = `@keyframes ${animationName} { to { opacity: 0; transform: scale(2); }}`

  useSetAnimation(keyframe)
  const { rippleSize } = getRippleStyle(sizes)

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([])
  })

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY, currentTarget } = event

    const rect = currentTarget.getBoundingClientRect()
    const left = pageX - (rect.left + window.scrollX)
    const top = pageY - (rect.top + window.scrollY)
    const newRipple: newRipple = { left, top }

    setRippleArray([...rippleArray, newRipple])
  }

  return (
    <div
      color={color}
      onClick={addRipple}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple: newRipple, index) => {
          return (
            <span
              key={'span' + index}
              style={{
                left: ripple.left - rippleSize / 2,
                top: ripple.top - rippleSize / 2,
                width: rippleSize,
                height: rippleSize,
                transform: 'scale(0)',
                borderRadius: '50%',
                position: 'absolute',
                opacity: 0.75,
                backgroundColor: color,
                animationName: animationName,
                animationDuration: duration + 'ms',
                pointerEvents: 'none'
              }}
            />
          )
        })}
    </div>
  )
}
