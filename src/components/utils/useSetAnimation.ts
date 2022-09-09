import { useEffect } from 'react'

export const useSetAnimation = (
    animationName: string = '',
    keyframe: string = '',
) => {

  useEffect(() => {
    const styleSheet = document.styleSheets[0]
    // If the script is launched using a test, then it will skip this hook
    if (typeof styleSheet === 'undefined') return
    styleSheet.insertRule(keyframe, styleSheet.cssRules.length)
  }, [])
}
