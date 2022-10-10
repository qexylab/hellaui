import { HTMLAttributes } from 'react'
import {TooltipPosition} from "@src/components/tooltip/Tooltip.types";

export type Orientation = 'horizontal' | 'vertical'

export interface ISteps extends HTMLAttributes<HTMLUListElement> {
  orientation?: Orientation // Steps orientation
  activeStep: number // Active step
  lineClamp?: 1 | 2 | 3 // Number of lines per step, all height steps correspond to the same number of lines
  stepWidth?: number // Step width. If this parameter is not set, then the step width will be adaptive
  hideLastStepLine?: boolean // Disable last step line
}


export interface IStep extends Omit<HTMLAttributes<HTMLLIElement | HTMLButtonElement | HTMLAnchorElement>, 'onClick'> {
  disabled?: boolean // Disable step
  error?: boolean // Error step
  warning?: boolean // Warning step
  active?: boolean // Active step
  completed?: boolean // Completed step
  link?: string // Step link
  index?: number // Step index
  hideStepLine?: boolean // Hide step line
  withTooltip?: boolean // Tag Tooltip
  tooltipPosition?: TooltipPosition // Tag Tooltip
  tooltipBackground?: string // Tag Tooltip
  onClick?: (step: { _disabled: boolean; index: number | undefined; _active: boolean; _completed: boolean }) => void // OnClick func
}
