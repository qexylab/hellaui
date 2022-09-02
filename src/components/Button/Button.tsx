import React, { FC, PropsWithChildren } from 'react'
import './Button.scss'
import { ButtonInterface } from './Button.types'

export const Button: FC<PropsWithChildren<ButtonInterface>> = ({
  type = 'default',
  size = 'md',
  rounding = 'md',
  displayAsDisabled = false,
  loading = false,
  skeleton = true,
  children,
}) => {
  return (
      <button className='test-class bg-red-500'>
        {children}
      </button>
  )
}