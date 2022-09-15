import { CSSProperties, useEffect } from 'react'

interface StyleObject extends CSSProperties {
  [key: string]: any,
}

export const useSetStyle = (
    className: string,
    css: StyleObject,
    customCss?: string
) => {
  useEffect(() => {
    // If the script is launched using a test, then it will skip this hook
    const styleSheet = document.styleSheets[0]
    if (typeof styleSheet === 'undefined') return

    let styleObject: {[key: string]: string | number} = {}

    for (let style in css) styleObject[setPropertyName(style)] = css[style]

    console.log(`.${className}: ${JSON.stringify(styleObject)}`)
    console.log(`.${className}: ${styleObject}`)
    styleSheet.insertRule(`.${className} {color: #132143}`, styleSheet.cssRules.length)

  })

}

// turn things like 'alignItems' into 'align-items'
const setPropertyName = (name: string): string =>
  name.replace(/([A-Z])/g, res => `-${res.toLowerCase()}`)
