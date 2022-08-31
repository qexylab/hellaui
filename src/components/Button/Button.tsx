import { FC, PropsWithChildren } from 'react'
import '@/src/components/Button/Button.scss'
import { MButton } from '@/src/components/Button/Button.types'

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
      <button className={`rounded-${rounding} text-${size}`}>
        {children}
      </button>
  )
}
