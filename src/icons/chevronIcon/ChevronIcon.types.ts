import { SVGAttributes } from 'react'

export interface IChevronIcon extends SVGAttributes<SVGElement> {
  open?: boolean
  position?: 'right' | 'left'
  textSize?: number
}
