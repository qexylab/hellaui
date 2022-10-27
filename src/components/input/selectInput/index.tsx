import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { IInputSelect } from './SelectInput.types'
import { getInputSelectStyle } from '@src/components/input/selectInput/SelectInput.style'
import { theme_color } from '@src/other/theme'
import { borderRadius } from '@src/other/theme/borderRadius'
import { Spinner } from '@src/components/spinner'
import { ChevronIcon } from '@src/icons/chevronIcon'

export const SelectInput = forwardRef<HTMLSelectElement, IInputSelect>(
  (
    {
      value,
      isLoading,
      className,
      style,
      status,
      icon,
      portalTargetRef,
      disabled,
      readOnly,
      placeholder,
      defaultValue,
      sizes = 'md',
      rounding = 'md',
      mode = 'select',
      multiple = false,
      showCheckbox = true,
      displayClearIcon = false,
      onClearIconClick,
      onInputChange,
      inputValue,
      defaultInputValue,
      onFocus: onFocusFromProps,
      onBlur: onBlurFromProps,
      children,
      skeleton = false,
      ...props
    },
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)
    // const selectRef = useRef<HTMLSelectElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    // const dropDownRef = useRef<HTMLDivElement>(null)

    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [isSearchPanelOpen, setIsSearchPanelOpen] = useState<boolean>(false)
    const [HoverValue, setHoverValue] = useState<string>('')
    const [internalSearchValue, setSearchValue] = useState<string>('')
    const [localValue, setLocalValue] = useState<string | string[]>(
      value ?? defaultValue
    )

    const selectIsUncontrolled = value === undefined
    const searchValue =
      inputValue === undefined ? internalSearchValue : inputValue
    const isEmptyValue = multiple ? !localValue?.length : !localValue
    const isEmpty = isEmptyValue && !!placeholder && !searchValue

    const { padding } = getInputSelectStyle(sizes, multiple)

    const onFocus = (event: React.FocusEvent<HTMLDivElement>) => {
      setIsFocused(true)
      onFocusFromProps?.(event)
    }

    const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
      // если фокус переходит не на инпут, содержащийся внутри компонента
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setIsFocused(false)
        onBlurFromProps?.(event)
        onCloseSelect()
      }
    }

    const onCloseSelect = useCallback(() => {
      setIsSearchPanelOpen(false)
      setHoverValue(
        Array.isArray(localValue) ? localValue[0] : localValue || ''
      )
    }, [localValue])

    const handleSearchPanelToggle = () => {
      setIsSearchPanelOpen(prev => !prev)
    }

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (selectIsUncontrolled)
        setLocalValue(
          multiple
            ? Array.from(event.target.selectedOptions).map(
                option => option.value
              )
            : event.target.value
        )
      props.onChange?.(event)
    }

    useEffect(() => {
      if (!selectIsUncontrolled) setLocalValue(value)
    }, [value, selectIsUncontrolled])

    return (
      <div
        ref={containerRef}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseDown={event => event.preventDefault()}
        onClick={handleSearchPanelToggle}
        className={className}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: multiple ? 'flex-start' : 'center',
          cursor: 'pointer',
          padding: padding,
          background: disabled
            ? theme_color.white_gray
            : theme_color.white_gray_2,
          border: disabled
            ? `1px solid ${theme_color.white_gray_2}`
            : status === 'success'
            ? `1px solid ${theme_color.success}`
            : status === 'error'
            ? `1px solid ${theme_color.danger}`
            : `1px solid ${theme_color.purple}`,
          borderRadius: borderRadius(rounding),
          ...style
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 0,
            height: 0,
            opacity: 0,
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          {/*Provider with global select option state*/}
          {children}
          {/*Provider*/}
        </div>
        <select
          onChange={onChange}
          onClick={event => event.preventDefault()}
          ref={ref}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            border: 'none',
            pointerEvents: 'none'
          }}
          {...props}
        >
          <option value="" />
          {/*{optionArray.map((option) => (*/}
          {/*    <option key={option.value} value={option.value}>*/}
          {/*      {option.value}*/}
          {/*    </option>*/}
          {/*))}*/}
        </select>
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
            minWidth: 0,
            background: 'none',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 'inherit'
          }}
        />
        <div
          onMouseDown={event => event.preventDefault()}
          style={{
            flex: '1 1 auto',
            display: 'flex',
            overflow: 'hidden',
            gap: 4,
            flexWrap: multiple ? 'wrap' : 'unset',
            alignItems: 'center',
            color: disabled ? theme_color.white_gray : theme_color.white,
            marginLeft: multiple && !isEmpty ? 35 + 4 : 0,
            paddingLeft: multiple && !isEmpty ? 35 + 4 : 0
          }}
        >
          {(placeholder && isEmpty) ||
            (mode !== 'select' && (
              <input
                placeholder={isEmpty ? placeholder : ''}
                ref={inputRef}
                value={searchValue}
                // onChange={onLocalInputChange}
                tabIndex={-1}
                style={{
                  outline: 'none',
                  appearance: 'none',
                  flex: '1 1 auto',
                  width: 1,
                  border: 'none',
                  background: 'transparent',
                  textOverflow: 'ellipsis',
                  padding: 0,
                  color: theme_color.white,
                  height: 15
                }}
              />
            ))}
        </div>
        {/*{isSearchPanelOpen && !skeleton &&*/}
        {/*    <DropDown  title='Test'>*/}

        {/*    </DropDown>*/}
        {/*}*/}
        <div
          style={{
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            padding: '2px 0'
          }}
        >
          {isLoading && <Spinner sizes={sizes} />}
          {/*{displayClearIcon && !readOnly && (*/}
          {/*    <AnyIcon onClick={handleOnClear} aria-hidden />*/}
          {/*)}*/}
          {icon}
          {!readOnly && (
            // <OpenStatusButton
            //     $isOpen={isSearchPanelOpen}
            //     data-disabled={disabled ? true : undefined}
            //     onClick={handleSearchPanelToggle}
            //     aria-hidden
            // />
            <ChevronIcon
              onClick={() => setIsSearchPanelOpen(prev => !prev)}
              open={isSearchPanelOpen}
              position="right"
              aria-hidden
            />
          )}
        </div>
      </div>
    )
  }
)

SelectInput.displayName = 'SelectInput'
