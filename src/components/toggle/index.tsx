import React, { ForwardedRef, forwardRef } from 'react'
import { IToggle } from '@src/components/toggle/Toggle.types'
import { theme_color } from '@src/other/theme'
import { NoSsr } from '@src/components/noSsr'
import { borderRadius } from '@src/other/theme/borderRadius'

export const Toggle = forwardRef<HTMLInputElement, IToggle>(
  (
    {
      checked,
      labelPosition = 'right',
      disabled = false,
      // sizes = 'md',
      rounding = 'md',
      onChange,
      onClick,
      children,
      helpText
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    // const { toggleWidth, toggleHeight } = getToggleStyle(sizes)
    const toggleWidth = 24,
      toggleHeight = 20

    return (
      <NoSsr>
        <style>{`
          .hl-toggle-slider:before {
            position: absolute;
            content: '';
            height: ${toggleHeight}px;
            width: ${toggleWidth}px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            border-radius: ${borderRadius(rounding)}px;
            transition: .4s;
          }
          
          input:checked + .hl-toggle-slider:before { transform: translateX(${toggleWidth}px); }
        `}</style>
        <label
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: labelPosition === 'right' ? 'row' : 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: toggleWidth * 2 + 8,
            // width: "fit-content",
            height: toggleHeight + 8,
            cursor: disabled ? 'default' : 'pointer',
            userSelect: 'none'
          }}
        >
          <input
            onClick={onClick}
            ref={ref}
            type="checkbox"
            onChange={onChange}
            style={{
              position: 'absolute',
              opacity: 0,
              width: 0,
              height: 0
            }}
          />
          <span
            className="hl-toggle-slider"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: checked
                ? theme_color.primary
                : theme_color.white_gray,
              boxShadow: checked
                ? '0 0 5px rgba(0, 0, 0, 0.4)'
                : 'rgba(100, 100, 111, 0.2) 0 7 29 0',
              borderRadius: borderRadius(rounding) + 4,
              transition: '.4s'
            }}
          />
          {/*{children &&*/}
          {/*<div style={{display: "flex", flexDirection: "column", margin: labelPosition === 'right' ? '0 0 0 8px' : '0 8px 0 0', color: disabled ? theme_color.gray : theme_color.white}}>*/}
          {/*  {children}*/}
          {/*  {helpText &&*/}
          {/*  <div style={{ marginTop: 4, color: disabled ? theme_color.gray : theme_color.white_gray }}>*/}
          {/*    {helpText}*/}
          {/*  </div>*/}
          {/*  }*/}
          {/*</div>*/}
          {/*}*/}
        </label>
      </NoSsr>
    )
  }
)

Toggle.displayName = 'Toggle'
