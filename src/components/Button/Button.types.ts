export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type ButtonRounding = 'xl' | 'lg' | 'md' | 'sm'
export type ButtonType = | 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

export interface MButton {
  type?: ButtonType //Button Type
  size?: ButtonSize // Button Size,
  rounding?: ButtonRounding // Button Rounding
  displayAsDisabled?: boolean // Remaining active for clicking, the button is displayed in a locked state
  loading?: boolean // Loading state
  skeleton?: boolean // Skeleton state,
}
