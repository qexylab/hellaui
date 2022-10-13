import { useSetAnimation } from '@src/other/utils/useSetAnimation'
import { theme_color } from '@src/other/theme'
import React, { FC } from 'react'
import { ISkeleton } from '@src/components/skeleton/Skeleton.types'
import { borderRadius } from '@src/other/theme/borderRadius'

const SkeletonAnimation = (animationName: string): void => {
  const keyframe = `@keyframes ${animationName} { 
  0% {
    background-color: ${theme_color.gray};
    border-color: ${theme_color.gray};
  }
  50% {
    background-color: ${theme_color.white_gray};
    border-color: ${theme_color.white_gray};
  }
  100% {
    background-color: ${theme_color.gray};
    border-color: ${theme_color.gray};
  }}`
  useSetAnimation(keyframe)
}

export const Skeleton: FC<ISkeleton> = ({
  width = '20px',
  height = '50px',
  rounding = 'md'
}) => {
  const animationName = 'skeleton_animation'
  return (
    <>
      <style>{`
      @keyframes ${animationName} { 
  0% {
    background-color: ${theme_color.gray};
    border-color: ${theme_color.gray};
  }
  50% {
    background-color: ${theme_color.white_gray};
    border-color: ${theme_color.white_gray};
  }
  100% {
    background-color: ${theme_color.gray};
    border-color: ${theme_color.gray};
  }}
      `}</style>
      <div
          style={{
            width: width,
            height: height,
            animation: `${animationName} 2s ease infinite`,
            borderRadius: borderRadius(rounding),
            boxShadow: '0 0 1px rgba(0, 0, 0, 0.4)'
          }}
      />
    </>
  )
}
