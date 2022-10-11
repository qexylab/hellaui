import React, {
  Children,
  cloneElement,
  createContext,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
  useRef,
  useState
} from 'react'
import { IStep, ISteps } from '@src/components/steps/Steps.types'
import { theme_color } from '@src/other/theme'
import { WarnIconTriangle } from '@src/icons/warnIcon'
import { CheckIconOutline, CheckIconSolid } from '@src/icons/checkIcon'
import { Tooltip } from '@src/components/tooltip'

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

  const steps = Children.toArray(children).map((step, index) => {
    if (!isValidElement(step)) return null
    return cloneElement(step, {
      index,
      role: 'listitem',
      hideStepLine:
        index === Children.toArray(children).length - 1 && hideLastStepLine,
      ...step.props
    })
  })

  const stepsAmount = steps.length

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

  return (
    <StepsContext.Provider value={contextValue}>
      <ul
        role="link"
        ref={elementRef}
        style={{
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
  index = -1,
  hideStepLine,
  withTooltip = false,
  tooltipPosition = 'bottom',
  tooltipBackground,
  children,
  onClick
}) => {
  const { activeStep, orientation, stepWidth, stepsAmount, lineClamp } =
      useContext(StepsContext),
    stepRef = useRef<HTMLLIElement>(null),
    wrapperRef = useRef<HTMLDivElement>(null),
    contentRef = useRef<HTMLDivElement>(null),
    [tooltipVisible, setTooltipVisible] = useState<boolean>(false),
    _active: boolean = active !== undefined ? active : activeStep === index,
    _completed: boolean = !!completed && !disabled,
    _disabled: boolean = (!_completed && !_active) || !disabled,
    icon: ReactNode =
      error || warning ? (
        <WarnIconTriangle />
      ) : _completed ? (
        <CheckIconSolid
          style={{
            color:
              activeStep === index
                ? theme_color.primary_80
                : theme_color.primary
          }}
        />
      ) : (
        <CheckIconOutline
          style={{
            color:
              activeStep === index
                ? theme_color.primary
                : theme_color.white_gray
          }}
        />
      )
  return (
    <>
      <li
        ref={stepRef}
        onClick={() => {
          if (!_disabled) onClick?.({ index, _active, _completed, _disabled })
        }}
        style={{
          width: stepWidth
            ? `${stepWidth}px`
            : orientation === 'horizontal'
            ? `${100 / stepsAmount}%`
            : '100%',
          textAlign: 'left',
          textDecoration: 'none'
        }}
      >
        <span
          style={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: '100%',
            flexShrink: 0,
            flexDirection: orientation === 'vertical' ? 'row' : 'column'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'row',
              width: orientation === 'vertical' ? '20px' : '100%',
              margin: orientation === 'vertical' ? '0 8px 0 0' : '0 0 8px 0'
            }}
          >
            {icon}
            {!hideStepLine && (
              <div
                style={{
                  height: orientation === 'vertical' ? '100%' : '2px',
                  width: orientation === 'vertical' ? '2px' : '100%',
                  backgroundColor: completed
                    ? theme_color.primary
                    : error
                    ? theme_color.danger
                    : warning
                    ? theme_color.warning
                    : disabled
                    ? theme_color.primary_10
                    : theme_color.gray,
                  borderRadius: '1px',
                  marginRight: 3
                }}
              />
            )}
          </div>
          <div
            ref={wrapperRef}
            style={{
              display: 'flex',
              width: '100%',
              cursor: withTooltip ? 'pointer' : 'default',
              margin: orientation && '0 0 20px 0'
            }}
          >
            <div
              ref={contentRef}
              style={{
                lineClamp: lineClamp,
                overflow: 'hidden',
                color: disabled ? theme_color.gray : theme_color.white,
                marginRight: 12
              }}
            >
              {children}
            </div>
          </div>
        </span>
      </li>
      <Tooltip
        targetRef={wrapperRef}
        visible={tooltipVisible && withTooltip}
        tooltipPosition={tooltipPosition}
        onVisibilityChange={setTooltipVisible}
        background={tooltipBackground}
      >
        {children}
      </Tooltip>
    </>
  )
}

Step.displayName = 'Step'
