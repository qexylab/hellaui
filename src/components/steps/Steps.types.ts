import {HTMLAttributes} from "react";

export type Orientation = 'horizontal' | 'vertical';

export interface ISteps extends HTMLAttributes<HTMLUListElement> {
  orientation?: Orientation // Steps orientation
  activeStep: number // Active step
  lineClamp?: 1 | 2 | 3 // Number of lines per step, all height steps correspond to the same number of lines
  stepWidth?: number | string // Step width. If this parameter is not set, then the step width will be adaptive
  hideLastStepLine?: boolean // Disable last step line
}