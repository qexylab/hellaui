import React, {
  ForwardedRef,
  forwardRef,
  useState
} from 'react'
import { IDropDown, IDropDownItem } from './DropDown.types'
import { ChevronIcon } from '@src/icons/chevronIcon'
import { getDropDownStyle } from '@src/components/dropdown/DropDown.style'
import { borderRadius } from '@src/other/theme/borderRadius'
import { theme_color } from '@src/other/theme'
import { Ripple } from '@src/components/ripple'
import { useOutsideClick } from '@src/other/hooks/useOutsideClick'

export const DropDown = forwardRef<HTMLDivElement, IDropDown>(
  (
    {
      title,
      sizes = 'md',
      rounding = 'md',
      position = 'bottom-right',
      iconPosition = 'right',
      menuWidth,
      menuMaxHeight,
      backgroundColor = theme_color.gray,
      textColor = theme_color.white,
      buttonBackgroundColor = theme_color.gray,
      buttonTextColor = theme_color.white,
      rippleEffect = false,
      rippleEffectColor,
      rippleEffectSize = 'xs',
      children,
      style
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)
    const { textSize, padding, dropdownStyles } = getDropDownStyle(
      sizes,
      position
    )

    const { targetRef, isVisible, setIsVisible } = useOutsideClick(false)

    return (
      <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onMouseUp={() => setIsClick(false)}
          onMouseDown={() => setIsClick(true)}
          style={{
            backgroundColor: isClick
              ? buttonBackgroundColor
              : isHover
              ? theme_color.dark_gray
              : buttonBackgroundColor,
            color: buttonTextColor,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: borderRadius(rounding),
            fontSize: textSize,
            padding: padding,
            transition: 'background .175s ease'
          }}
          onClick={() => {
            setIsVisible(!isVisible)
          }}
        >
          {iconPosition === 'left' && (
            <ChevronIcon
              textSize={textSize}
              open={isVisible}
              position={iconPosition}
            />
          )}
          <span>{title}</span>
          {iconPosition === 'right' && (
            <ChevronIcon
              textSize={textSize}
              open={isVisible}
              position={iconPosition}
            />
          )}
          {rippleEffect && (
            <Ripple
              color={rippleEffectColor}
              sizes={rippleEffectSize}
              duration={450}
            />
          )}
        </button>
        <ul
          ref={targetRef}
          style={{
            backgroundColor: buttonBackgroundColor,
            color: textColor,
            borderRadius: borderRadius(rounding),
            overflow: 'hidden',
            marginLeft: 0 /* margin left IE, Opera */,
            paddingLeft: 0 /* margin left in Firefox, Safari, Chrome */,
            opacity: isVisible ? 1 : 0,
            visibility: isVisible ? 'visible' : 'hidden',
            position: 'absolute',
            zIndex: isVisible ? 10 : -1,
            fontSize: textSize,
            transition: 'all .175s cubic-bezier(0.325, 0.090, 0.000, 1.280)',
            transform: isVisible
              ? 'translateX(0) scale(1)'
              : 'translateX(0) scale(0.9)',
            boxShadow: '0 0 20px 0 rgba(178, 194, 212, .3)',
            minWidth: 150,
            width: menuWidth ? menuWidth : 'fit-content',
            maxHeight: menuMaxHeight ? menuMaxHeight : 'fit-content',
            ...dropdownStyles,
            ...style
          }}
        >
          {children}
        </ul>
      </div>
    )
  }
)

DropDown.displayName = 'DropDownMenu'

export const DropDownItem = forwardRef<HTMLLIElement, IDropDownItem>(
  (
    {
      backgroundColor = 'inherit',
      textColor = theme_color.white,
      rounding = 'md',
      children,
      style
    },
    ref: ForwardedRef<HTMLLIElement>
  ) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)

    return (
      <li
        ref={ref}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseUp={() => setIsClick(false)}
        onMouseDown={() => setIsClick(true)}
        style={{
          backgroundColor: isClick
            ? backgroundColor
            : isHover
            ? theme_color.dark_gray
            : backgroundColor,
          color: textColor,
          display: 'flex',
          alignItems: 'center',
          userSelect: 'none',
          width: '100%',
          padding: '6px 12px',
          justifyContent: 'space-between',
          outline: 'none',
          whiteSpace: 'pre',
          listStyle: 'none',
          cursor: 'pointer',
          transition: 'background .175s ease',
          ...style
        }}
      >
        {children}
      </li>
    )
  }
)

DropDownItem.displayName = 'DropDownItem'
