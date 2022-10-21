import { HTMLAttributes } from 'react'

export interface IGrid extends HTMLAttributes<HTMLDivElement> {
  columns?: number // The number of columns. Default - 14
  columnSpacing?: number | string // Defines the horizontal space between the type `children` components
  container?: boolean // You should be wrapping children with a container.
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse' // Grid direction
  xl?: number | boolean | 'auto' // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (14 by default).
  lg?: number | boolean | 'auto' // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (14 by default).
  md?: number | boolean | 'auto' // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (14 by default).
  sm?: number | boolean | 'auto' // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (14 by default).
  xs?: number | boolean | 'auto' // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (14 by default).
  rowSpacing?: string | number // Defines the vertical space between the type children components
  gap?: number // Grid gap
}
