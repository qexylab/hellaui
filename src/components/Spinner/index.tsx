import { ISpinner } from './Spinner.types'
import { FC } from 'react'

export const Spinner: FC<ISpinner> = ({
  size = 'md',
  inverse = false,
  ...props
}) => {
  return <div>spinner</div>
}

Spinner.displayName = 'Index'
