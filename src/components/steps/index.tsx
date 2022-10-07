import React, {createContext, FC, PropsWithChildren, useMemo, useRef} from 'react';
import {ISteps} from "@src/components/steps/Steps.types";

export const Steps: FC<PropsWithChildren<ISteps>> = ({
    orientation = 'horizontal',
    activeStep = -1,
    lineClamp= 3,
    stepWidth,
    hideLastStepLine = false,
    children,
                                                     }) => {

  const elementRef = useRef<HTMLUListElement>(null)
  // const stepsAmount = steps.length
  const stepsAmount = 15

  const StepsContext = createContext<{
    orientation: 'horizontal' | 'vertical';
    activeStep: number;
    lineClamp: 1 | 2 | 3;
    stepsAmount: number;
    stepWidth?: number | string;
    mobile?: boolean;
  }>({orientation: 'horizontal', activeStep: -1, lineClamp: 3, stepsAmount: 0})

  const contextValue = useMemo(
      () => ({
        activeStep,
        orientation,
        lineClamp,
        stepsAmount,
        stepWidth,
      }),
      [activeStep, orientation, lineClamp, stepWidth, stepsAmount],
  );
  return (
      <StepsContext.Provider value={contextValue}>
        <ul ref={elementRef} style={{
          position: "relative",
          display: "flex",
          scrollBehavior: "smooth",
          flexDirection: orientation === 'horizontal' ? "row" : 'column',
          overflowX: orientation === 'horizontal' ? 'scroll' : 'auto'
        }}>
          {children}
        </ul>
      </StepsContext.Provider>
  );
};