import { HTMLAttributes } from 'react'

export type SpinnerSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface ISpinner extends HTMLAttributes<SVGSVGElement> {
  size?: SpinnerSize // Spinner size
}
