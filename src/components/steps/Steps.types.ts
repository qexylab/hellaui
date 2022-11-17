import { HTMLAttributes } from 'react'
import { TooltipPosition } from '@src/components/tooltip/Tooltip.types'

export type StepsOrientation = 'horizontal' | 'vertical'
export type StepsLineClamp = 1 | 2 | 3
export type StepType = 'default' | 'error' | 'warning'

export interface ISteps extends HTMLAttributes<HTMLUListElement> {
  orientation?: StepsOrientation // Steps orientation
  activeStep: number // Active step
  lineClamp?: StepsLineClamp // Number of lines per step, all height steps correspond to the same number of lines
  stepWidth?: number // Step width. If this parameter is not set, then the step width will be adaptive
  hideLastStepLine?: boolean // Disable last step line
}

export interface IStep extends HTMLAttributes<HTMLLIElement> {
  disabled?: boolean // Disable step
  variant?: StepType // Step variant
  active?: boolean // Active step
  completed?: boolean // Completed step
  link?: string // Step link
  index?: number // Step index
  hideStepLine?: boolean // Hide step line
  withTooltip?: boolean // Tag Tooltip
  tooltipPosition?: TooltipPosition // Tag Tooltip
  tooltipBackground?: string // Tag Tooltip
}
