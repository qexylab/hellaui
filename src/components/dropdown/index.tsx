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
      iconPosition = 'right',
      menuWidth,
      menuMaxHeight,
      children
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { textSize, padding } = getDropDownStyle(sizes)

    return (
      <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
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
            top: 50,
            left: 50,
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
            transformOrigin: '50% 0',
            transform: isOpen
              ? 'translateX(-50%) scale(1)'
              : 'translateX(-50%) scale(0.9)',
            border: '1px solid red',
            boxShadow: '0 0 20px 0 rgba(178, 194, 212, .3)',
            minWidth: 200,
            width: menuWidth ? menuWidth : 'fit-content',
            maxHeight: menuMaxHeight ? menuMaxHeight : 'fit-content'
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
>(({ children }, ref: ForwardedRef<HTMLLIElement>) => {
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
        listStyle: 'none'
      }}
    >
      {children}
    </li>
  )
})

DropDownItem.displayName = 'DropDownItem'
