import { useEnhancedEffect } from '@src/other/utils/useEnhancedEffect'

export const useSetAnimation = (keyframe: string = '') => {
  useEnhancedEffect(() => {
    const styleSheet = document.styleSheets[0]
    // If the script is launched using a test, then it will skip this hook
    if (typeof styleSheet === 'undefined') return
    styleSheet.insertRule(keyframe, styleSheet.cssRules.length)
  }, [])
}
