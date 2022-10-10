import React, {FC} from 'react';
import {IWarnIcon} from "@src/icons/warnIcon/WarnIcon.types";

export const WarnIconTriangle: FC<IWarnIcon> = ({textSize = 14, style}) => {
  return (
      <svg
          style={{
            width: textSize,
            height: textSize,
            ...style,
          }}
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
  );
};

export const WarnIconCircle: FC<IWarnIcon> = ({textSize = 14, style}) => {
  return (
      <svg style={{
        width: textSize,
        height: textSize,
        ...style,
      }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>

  );
};