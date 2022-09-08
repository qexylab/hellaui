import React, { useState, useLayoutEffect, FC } from 'react'
import { IRipple, newRipple } from '@src/components/ripple/Ripple.types'

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: Function
) => {
  useLayoutEffect(() => {
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

export const Ripple: FC<IRipple> = ({ duration = 850, color = '#fff' }) => {
  const [rippleArray, setRippleArray] = useState([])

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([])
  })

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height
    const x = event.pageX - rippleContainer.x - size / 2
    const y = event.pageY - rippleContainer.y - size / 2
    const newRipple: newRipple = {
      x,
      y,
      size
    }

    // @ts-ignore
    setRippleArray([...rippleArray, newRipple])
  }

  return (
    <>
      <style>{`
        @keyframes ripple2 {
          to {
            opacity: 0;
            transform: scale(2);
          }
        }
      `}</style>
      <div
        color={color}
        onMouseDown={addRipple}
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
                  top: ripple.y,
                  left: ripple.x,
                  width: ripple.size,
                  height: ripple.size,
                  transform: 'scale(0)',
                  borderRadius: '100%',
                  position: 'absolute',
                  opacity: '0.75',
                  backgroundColor: color,
                  animationName: 'ripple2',
                  animationDuration: duration + 'ms'
                }}
              />
            )
          })}
      </div>
    </>
  )
}
