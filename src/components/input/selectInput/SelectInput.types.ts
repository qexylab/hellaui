import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  RefObject
} from 'react'
import { DefaultRounding, DefaultSize } from '@src/other/utils/defaultTypes'

export interface IInputSelect
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'onFocus' | 'onBlur'> {
  value: string | string[] // Select value
  defaultValue?: string | string[] // default value for uncontrolled select
  sizes?: DefaultSize // Select size
  rounding?: DefaultRounding // Select rounding
  multiple?: boolean // Add select to multiple selection
  mode?: 'select' | 'searchSelect' // Select mode
  isLoading?: boolean // Select loading state
  showCheckbox?: boolean // Default if multiple = true, checkbox if asserted. This flag allows you to remove it
  displayClearIcon?: boolean // Display clear icon
  onClearIconClick?: () => void // Allows you to define what happens when you click on the cleanup icon. By default, the selected values will be cleared
  portalTargetRef?: RefObject<HTMLElement> // Container reference for proper dropdown positioning
  icon?: ReactNode // Icons to display in the right corner of the field
  status?: 'error' | 'success' // Field Status
  inputValue?: string // The value entered by the user to search
  defaultInputValue?: string // The original value in the search string without translating the string to the controlled component
  skeleton?: boolean // Skeleton state
  onInputChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
}
