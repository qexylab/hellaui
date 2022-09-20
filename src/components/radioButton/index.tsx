import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react'
import { IRadioButton } from './RadioButton.types'
import { getRadioButtonStyle } from '@src/components/radioButton/RadioButton.style'

export const RadioButton = forwardRef<HTMLInputElement, IRadioButton>(
  (
    {
      children,
      inputId = '',
      sizes = 'md',
      checked = false,
      error = false,
      disabled = false,
      tooltipText,
      required = false,
      inputRef = null,
      value,
      name,
      onChange,
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { minWidth, height, paddingLeft } = getRadioButtonStyle(sizes)
    // const [isHover, setIsHover] = useState<boolean>(false)
    // const [isFocus, setIsFocus] = useState<boolean>(false)

    const [focusedState, setFocusedState] = useState<boolean>(false)
    const _inputRef = useRef<HTMLInputElement>(inputRef)

    const onClick = (e: any) => {
      if (!disabled && onChange) {
        const _checked = checked
        const radioClicked = e.target instanceof HTMLDivElement
        const inputClicked = e.target === _inputRef.current
        const isInputToggled = inputClicked && e.target.checked !== _checked
        const isRadioToggled = radioClicked && !e.target.checked

        if (isInputToggled || isRadioToggled) {
          const _value = !_checked
          onChange({
            originalEvent: e,
            value: value,
            checked: _value,
            stopPropagation: () => {},
            preventDefault: () => {},
            // @ts-ignore
            target: {
              type: 'radio',
              // name: name,
              value: value,
              checked: _value
            }
          })
        }
      }
    }
    useEffect(() => {
      if (_inputRef.current) _inputRef.current.checked = checked
    }, [checked])
    return (
      <>
        <style>{`

.hl-radiobutton-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hl-radiobutton-icon {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0) scale(.1);
  border-radius: 50%;
  visibility: hidden;
}

.hl-radiobutton-box.hl-highlight .hl-radiobutton-icon {
  transform: translateZ(0) scale(1.0, 1.0);
  visibility: visible;
}

.hl-radiobutton {
  width: 20px;
  height: 20px;
}
.hl-radiobutton .hl-radiobutton-box {
  border: 2px solid #757575;
  background: #ffffff;
  width: 20px;
  height: 20px;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 50%;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
}
.hl-radiobutton .hl-radiobutton-box:not(.hl-disabled):not(.hl-highlight):hover {
  border-color: rgba(0, 0, 0, 0.87);
}
.hl-radiobutton .hl-radiobutton-box:not(.hl-disabled).hl-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: none;
  border-color: #3F51B5;
}
.hl-radiobutton .hl-radiobutton-box .hl-radiobutton-icon {
  width: 10px;
  height: 10px;
  transition-duration: 0.2s;
  background-color: #3F51B5;
}
.hl-radiobutton .hl-radiobutton-box.hl-highlight {
  border-color: #3F51B5;
  background: #ffffff;
}
.hl-radiobutton .hl-radiobutton-box.hl-highlight:not(.hl-disabled):hover {
  border-color: #3F51B5;
  background: #ffffff;
  color: #3F51B5;
}
.hl-radiobutton.hl-invalid > .hl-radiobutton-box {
  border-color: #B00020;
}
.hl-radiobutton:focus {
  outline: 0 none;
}

.hl-input-filled .hl-radiobutton .hl-radiobutton-box {
  background-color: #f5f5f5;
}
.hl-input-filled .hl-radiobutton .hl-radiobutton-box:not(.hl-disabled):hover {
  background-color: #ececec;
}
.hl-input-filled .hl-radiobutton .hl-radiobutton-box.hl-highlight {
  background: #ffffff;
}
.hl-input-filled .hl-radiobutton .hl-radiobutton-box.hl-highlight:not(.hl-disabled):hover {
  background: #ffffff;
}

.hl-radiobutton:not(.hl-radiobutton-disabled):hover {
  box-shadow: 0 0 1px 10px rgba(0, 0, 0, 0.04);
}
.hl-radiobutton:not(.hl-radiobutton-disabled).hl-radiobutton-focused {
  box-shadow: 0 0 1px 10px rgba(0, 0, 0, 0.12);
}
.hl-radiobutton.hl-radiobutton-checked:not(.hl-radiobutton-disabled):hover {
  box-shadow: 0 0 1px 10px rgba(63, 81, 181, 0.04);
}
.hl-radiobutton.hl-radiobutton-checked:not(.hl-radiobutton-disabled).hl-radiobutton-focused {
  box-shadow: 0 0 1px 10px rgba(63, 81, 181, 0.12);
}

.hl-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.hl-hidden-accessible input,
.hl-hidden-accessible select {
  transform: scale(0);
}

.hl-radiobutton-box.hl-highlight .hl-radiobutton-icon {
  transform: translateZ(0) scale(1.0, 1.0);
  visibility: visible;
}

        `}</style>
        <div
          ref={ref}
          onClick={onClick}
          style={{
            display: 'inline-flex',
            cursor: 'pointer',
            userSelect: 'none',
            verticalAlign: 'center',
            marginRight: 10
          }}
          className={`hl-radiobutton ${checked && 'hl-radiobutton-checked'}
         ${disabled && 'hl-radiobutton-disabled'} ${
            focusedState && 'hl-radiobutton-focused'
          }`}
        >
          <div className="hl-hidden-accessible">
            <input
              ref={_inputRef}
              id={inputId}
              type="radio"
              name={name}
              defaultChecked={checked}
              onFocus={() => setFocusedState(true)}
              onBlur={() => setFocusedState(false)}
              onKeyDown={event => {
                if (event.code === 'Space') onClick(event)
              }}
              disabled={disabled}
              required={required}
              tabIndex={props.tabIndex}
            />
          </div>
          <div
            className={`hl-radiobutton-box ${checked && 'hl-highlight'} ${
              disabled && 'hl-disabled'
            } ${focusedState && 'hl-focus'}`}
          >
            <div className="hl-radiobutton-icon" />
          </div>
        </div>
      </>
    )
  }
)
