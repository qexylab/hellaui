import { HTMLAttributes } from 'react'

type SpinnerSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface ISpinner extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize // SpinnerSize
  inverse?: boolean
}
