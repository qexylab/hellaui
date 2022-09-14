import {CSSProperties, useEffect} from 'react'

export const useSetStyle = (
    className: string,
    css: CSSProperties,
    customCss?: string
): void => {
  useEffect(() => {

    const styleSheet = document.styleSheets[0]
    // If the script is launched using a test, then it will skip this hook
    if (typeof styleSheet === 'undefined') return

    for (let style in css) {
      style = setPropertyName(style)
      console.log(style)
    }
  })
  // styleSheet.insertRule(keyframe, styleSheet.cssRules.length)
}

// turn things like 'alignItems' into 'align-items'
const setPropertyName = (name: string): string =>
  name.replace(/([A-Z])/g, res => `-${res.toLowerCase()}`)
