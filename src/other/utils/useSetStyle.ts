import { CSSProperties, useEffect } from 'react'
import {useEnhancedEffect} from "@src/other/utils/useEnhancedEffect";

interface StyleObject extends CSSProperties {
  [key: string]: any
}

export const useSetStyle = (className: string, CSS: StyleObject, customCSS?: string | undefined) => {
  useEnhancedEffect(() => {
    const styleSheet = document.styleSheets[0]
    let style_string: string = ''
    // If the script is launched using a test, then it will skip this hook
    if (typeof styleSheet === 'undefined') return
    for (let style in CSS)
      style_string += `${setPropertyName(style)}: ${
        typeof CSS[style] === 'number' ? CSS[style] + 'px' : CSS[style]
      };`
    styleSheet.insertRule(
      `.${className} {${style_string}}`,
      styleSheet.cssRules.length
    )
    if (customCSS) styleSheet.insertRule(customCSS, styleSheet.cssRules.length)
  })
}

// turn things like 'alignItems' into 'align-items'
const setPropertyName = (name: string): string =>
  name.replace(/([A-Z])/g, res => `-${res.toLowerCase()}`)
