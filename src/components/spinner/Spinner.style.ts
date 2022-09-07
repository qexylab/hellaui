import {SpinnerSize} from "@src/components/spinner/Spinner.types";


export const getSpinnerStyle = (size: SpinnerSize) => {

  let
      height: string = '',
      width: string = ''

  switch (size) {
    case "xs":
      height = '10px'
      width = '10px'
      break
    case "sm":
      height = '12px'
      width = '12px'
      break
    case "md":
      height = '14px'
      width = '14px'
      break
    case "lg":
      height = '16px'
      width = '16px'
      break
    case "xl":
      height = '20px'
      width = '20px'
      break
  }
  return {
    height,
    width,
  }
}