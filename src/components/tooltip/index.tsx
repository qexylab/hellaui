import React, {FC} from 'react';
import {ITooltip} from "@src/components/tooltip/Tooltip.types";
import '@src/components/tooltip/Tooltip.css'

export const Tooltip: FC<ITooltip> = ({}) => {
  return (
      <div className='test_class'>
        Tooltip
      </div>
  );
};

