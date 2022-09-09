import { useEffect } from 'react'

export const useSetAnimation = (
    animationName: string = '',
    keyframe: string = '',
) => {
  // If the script is launched using a test, then it will skip this hook
  if (typeof window !== 'undefined') return

  useEffect(() => {
    const styleSheet = document.styleSheets[0]
    styleSheet.insertRule(keyframe, styleSheet.cssRules.length)
  }, [])
}
