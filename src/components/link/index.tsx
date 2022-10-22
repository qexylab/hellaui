import React, {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  useState
} from 'react'
import { ILink } from '@src/components/link/Link.types'
import { getLinkStyle } from '@src/components/link/Link.style'
import { theme_color } from '@src/other/theme'

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<ILink>>(
  (
    { children, variant = 'default', disabled, sizes = 'md', href, ...props },
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)

    const { color, hoverColor, textSize } = getLinkStyle(variant, sizes)

    return (
      <a
        href={href}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseUp={() => setIsClick(false)}
        onMouseDown={() => setIsClick(true)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        ref={ref}
        style={{
          cursor: disabled ? 'default' : 'pointer',
          color: disabled
            ? theme_color.dark_gray
            : isClick
            ? color
            : isHover || isFocus
            ? hoverColor
            : color,
          display: 'flex',
          fontSize: textSize,
          pointerEvents: disabled ? 'none' : 'auto',
          alignItems: 'center',
          width: 'fit-content',
          textDecoration: 'none',
          position: 'relative',
          transition: 'all 0.175s ease'
        }}
        {...props}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'
