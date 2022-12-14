import React, { ForwardedRef, forwardRef, useState } from 'react'
import { IDropDown, IDropDownItem } from './Dropdown.types'
import { ChevronIcon } from '@src/icons/chevronIcon'
import { getDropDownStyle } from '@src/components/dropdown/Dropdown.style'
import { borderRadius } from '@src/other/theme/borderRadius'
import { theme_color } from '@src/other/theme'
import { Ripple } from '@src/components/ripple'
import { useOutsideClick } from '@src/other/hooks/useOutsideClick'

export const Dropdown = forwardRef<HTMLDivElement, IDropDown>(
  (
    {
      title,
      sizes = 'md',
      rounding = 'md',
      position = 'bottom-right',
      iconPosition = 'right',
      menuWidth,
      menuMaxHeight,
      backgroundColor = theme_color.dark_gray_2,
      buttonBackgroundColor = theme_color.dark_gray_2,
      hoverButtonBackgroundColor = 'rgba(255, 255, 255, 0.24)',
      buttonTextColor = theme_color.white,
      hoverButtonTextColor = theme_color.white,
      rippleEffect = false,
      rippleEffectColor,
      rippleEffectSize = 'xs',
      children,
      style,
      onClick,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)
    const { textSize, padding, dropdownStyles } = getDropDownStyle(
      sizes,
      position
    )

    const { targetRef, isVisible, setIsVisible } =
      useOutsideClick<HTMLUListElement>(false)

    return (
      <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
        <button
          ref={targetRef}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onMouseUp={() => setIsClick(false)}
          onMouseDown={() => setIsClick(true)}
          style={{
            backgroundColor: isClick
              ? buttonBackgroundColor
              : isHover
              ? hoverButtonBackgroundColor
              : buttonBackgroundColor,
            color: isHover ? hoverButtonTextColor : buttonTextColor,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: borderRadius(rounding),
            fontSize: textSize,
            padding: padding,
            fontWeight: 500,
            transition: 'background .175s ease, color .175s ease',
            ...style
          }}
          onClick={() => {
            setIsVisible(!isVisible)
            return onClick
          }}
          {...props}
        >
          {iconPosition === 'left' && (
            <ChevronIcon
              textSize={textSize}
              open={isVisible}
              position={iconPosition}
            />
          )}
          {typeof title === 'string' ? <span>{title}</span> : <>{title}</>}
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
          style={{
            backgroundColor: backgroundColor,
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
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
            minWidth: 150,
            width: menuWidth ? menuWidth : 'fit-content',
            maxHeight: menuMaxHeight ? menuMaxHeight : 'fit-content',
            ...dropdownStyles
          }}
        >
          {children}
        </ul>
      </div>
    )
  }
)

Dropdown.displayName = 'Dropdown'

export const DropdownItem = forwardRef<HTMLLIElement, IDropDownItem>(
  (
    {
      backgroundColor = theme_color.white_black,
      textColor = theme_color.white,
      rounding = 'md',
      hoverBackgroundColor = 'rgba(255, 255, 255, 0.24)',
      hoverTextColor = theme_color.white,
      rippleEffect = false,
      rippleEffectColor,
      rippleEffectSize = 'xs',
      children,
      style,
      ...props
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
            ? hoverBackgroundColor
            : 'inherit',
          color: isHover ? hoverTextColor : textColor,
          display: 'flex',
          alignItems: 'center',
          userSelect: 'none',
          width: '100%',
          justifyContent: 'space-between',
          outline: 'none',
          whiteSpace: 'pre',
          listStyle: 'none',
          cursor: 'pointer',
          transition: 'background .175s ease, color .175s ease',
          ...style
        }}
        {...props}
      >
        {children}
        {rippleEffect && (
          <Ripple
            color={rippleEffectColor}
            sizes={rippleEffectSize}
            duration={450}
          />
        )}
      </li>
    )
  }
)

DropdownItem.displayName = 'DropdownItem'
