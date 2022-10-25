import React, {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  useState
} from 'react'
import { IDropDown } from './DropDown.types'
import { ChevronIcon } from '@src/icons/chevronIcon'
import { getDropDownStyle } from '@src/components/dropdown/DropDown.style'
import { borderRadius } from '@src/other/theme/borderRadius'

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
      children,
        style
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { textSize, padding, dropdownStyles } = getDropDownStyle(sizes, position)

    return (
      <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: "pointer",
            fontSize: textSize,
            padding: padding
          }}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {iconPosition === 'left' && (
            <ChevronIcon
              textSize={textSize}
              open={isOpen}
              position={iconPosition}
            />
          )}
          <span>{title}</span>
          {iconPosition === 'right' && (
            <ChevronIcon
              textSize={textSize}
              open={isOpen}
              position={iconPosition}
            />
          )}
        </div>
        <ul
          style={{
            top: 25,
            left: 'auto',
            right: 0,
            backgroundColor: 'white',
            borderRadius: borderRadius(sizes),
            overflow: 'hidden',
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? 'visible' : 'hidden',
            position: 'absolute',
            zIndex: isOpen ? 10 : -1,
            fontSize: textSize,
            padding: padding,
            transition: 'all 300ms cubic-bezier(0.325, 0.090, 0.000, 1.280)',
            transformOrigin: '100% 0',
            transform: isOpen
              ? 'translateX(0) scale(1)'
              : 'translateX(0) scale(0.9)',
            border: '1px solid red',
            boxShadow: '0 0 20px 0 rgba(178, 194, 212, .3)',
            minWidth: 150,
            width: menuWidth ? menuWidth : 'fit-content',
            maxHeight: menuMaxHeight ? menuMaxHeight : 'fit-content',
            // ...dropdownStyles,
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

export const DropDownItem = forwardRef<
  HTMLLIElement,
  PropsWithChildren<HTMLAttributes<HTMLLIElement>>
>(({ children, style }, ref: ForwardedRef<HTMLLIElement>) => {
  return (
    <li
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
        flexFlow: 'wrap',
        position: 'relative',
        justifyContent: 'space-between',
        outline: 'none',
        whiteSpace: 'pre',
        listStyle: 'none',
        ...style
      }}
    >
      {children}
    </li>
  )
})

DropDownItem.displayName = 'DropDownItem'
