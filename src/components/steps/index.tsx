import React, {
  Children,
  cloneElement,
  createContext,
  FC,
  isValidElement,
  PropsWithChildren, ReactNode, useContext,
  useMemo,
  useRef, useState
} from 'react'
import { IStep, ISteps } from '@src/components/steps/Steps.types'
import {CloseIcon} from "@src/icons/closeIcon";
import {theme_color} from "@src/other/theme";
import {WarnIconTriangle} from "@src/icons/warnIcon";
import {CheckIcon} from "@src/icons/checkIcon";
import {Tooltip} from "@src/components/tooltip";

const StepsContext = createContext<{
  orientation: 'horizontal' | 'vertical'
  activeStep: number
  lineClamp: 1 | 2 | 3
  stepsAmount: number
  stepWidth?: number
}>({ orientation: 'horizontal', activeStep: -1, lineClamp: 3, stepsAmount: 0 })

// Steps

export const Steps: FC<PropsWithChildren<ISteps>> = ({
  orientation = 'horizontal',
  activeStep = -1,
  lineClamp = 3,
  stepWidth,
  hideLastStepLine = false,
  children
}) => {
  const elementRef = useRef<HTMLUListElement>(null)
  // const stepsAmount = steps.length
  const stepsAmount = 15

  const contextValue = useMemo(
    () => ({
      activeStep,
      orientation,
      lineClamp,
      stepsAmount,
      stepWidth
    }),
    [activeStep, orientation, lineClamp, stepWidth, stepsAmount]
  )

  const steps = Children.toArray(children).map((step, index) => {
    if (!isValidElement(step)) return null
    return activeStep === index
      ? cloneElement(step, {
          index,
          role: 'listitem',
          hideStepLine:
            index === Children.toArray(children).length - 1 && hideLastStepLine,
          ...step.props
        })
      : cloneElement(step, {
          index,
          role: 'listitem',
          hideStepLine:
            index === Children.toArray(children).length - 1 && hideLastStepLine,
          ...step.props
        })
  })
  return (
    <StepsContext.Provider value={contextValue}>
      <ul
        role="link"
        ref={elementRef}
        style={{
          position: 'relative',
          display: 'flex',
          scrollBehavior: 'smooth',
          flexDirection: orientation === 'horizontal' ? 'row' : 'column',
          overflowX: orientation === 'horizontal' ? 'scroll' : 'auto'
        }}
      >
        {steps}
      </ul>
    </StepsContext.Provider>
  )
}

Steps.displayName = 'Steps'

// Step

export const Step: FC<PropsWithChildren<IStep>> = ({
    disabled,
    active,
    warning,
    error,
    completed,
    link,
    index = -1,
    hideStepLine,
                                                     withTooltip = false,
                                                     tooltipPosition = 'bottom',
    tooltipBackground,
    children,
    onClick,
                         }) => {

  const { activeStep, orientation, stepWidth, stepsAmount, lineClamp } = useContext(StepsContext),
  stepRef = useRef<HTMLLIElement>(null),
      wrapperRef = useRef<HTMLDivElement>(null),
      contentRef = useRef<HTMLDivElement>(null),
      [overflow, setOverflow] = useState<boolean>(false),
  [tooltipVisible, setTooltipVisible] = useState<boolean>(false),
  clickable: boolean = !disabled && (!!onClick && !!link) && !!completed,
  _active: boolean = active !== undefined ? active : activeStep === index,
  _completed: boolean = !!completed && !disabled,
  _disabled: boolean = (!_completed && !_active) || !disabled,
  icon: ReactNode = error || warning ? <WarnIconTriangle/> : _completed ? <CheckIcon/> : <CloseIcon/>

  const handleClick = () => {
    if (!_disabled) onClick?.({index, _active, _completed, _disabled})
  }

  const nonClickableProps = { clickable: false },
  linkProps = { clickable: true, as: 'a', href: link },
  buttonProps = { clickable: true, as: 'button', type: 'button', disabled },
  addProps = !clickable ? nonClickableProps : link ? linkProps : buttonProps

  return (
      <>
        <li
            ref={stepRef}
            onClick={handleClick}
            style={{
              display: "flex",
              position: "relative",
              width: stepWidth ? `${stepWidth}px` : orientation === "horizontal" ? `${100 / stepsAmount}%` : '100%',
              background: "none",
              padding: 0,
              margin: 0,
              textAlign: "left",
              border: "none",
              textDecoration: "none",
            }}
            {...addProps}
        >
        <span style={{
          display: "flex",
          position: "relative",
          width: '100%',
          height: '100%',
          flexShrink: 0,
          flexDirection: orientation === "vertical" ? 'row' : "column",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "stretch",
            flexDirection: 'row',
            width: orientation === "vertical" ? '20px' : '100%',
            margin: orientation === "vertical" ? '0 8px 0 0' : '0 0 8px 0'
          }}>
            {icon}
            {!hideStepLine &&
            <div style={{
              height: orientation === "vertical" ? '100%' : '2px',
              width: orientation === "vertical" ? '2px' : '100%',
              backgroundColor: completed ? theme_color.primary_80 : error ? theme_color.danger_80 : warning ? theme_color.warning_80 : disabled ? theme_color.primary_10 : theme_color.gray,
              borderRadius: '1px',
            }}/>
            }
          </div>
          <div ref={wrapperRef} style={{
            display: "flex",
            width: '100%',
            cursor: withTooltip ? 'pointer' : 'default',
            margin: orientation && '0 0 20px 0'
          }}>
            <div ref={contentRef} style={{
              display: "flex",
              lineClamp: lineClamp,
              overflow: "hidden",
              color: disabled ? theme_color.gray : theme_color.white,
              margin: '0 12px 0 0'
            }}>
              {children}
            </div>
          </div>
        </span>
        </li>
        <Tooltip
            targetRef={wrapperRef}
            visible={tooltipVisible && overflow}
            onVisibilityChange={setTooltipVisible}>
          {children}
        </Tooltip>
      </>
  )
}

Step.displayName = 'Step'
