import React, { FC, PropsWithChildren } from 'react'
import './Button.scss'
import { MButton } from './Button.types'

export const Button: FC<PropsWithChildren<MButton>> = ({
  type = 'default',
  size = 'md',
  rounding = 'md',
  displayAsDisabled = false,
  loading = false,
  skeleton = true,
  children,
}) => {
  return (
      <button className='test'>
        {children}
      </button>
  )
}