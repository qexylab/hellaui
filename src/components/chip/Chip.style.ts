import {useMemo} from "react";
import {BadgeVariant} from "@src/components/badge/Badge.types";
import {ChipVariant} from "@src/components/chip/Chip.types";

export const getChipStyle = (selected?: boolean, variant?: ChipVariant, disabled?: boolean, plain?: boolean) => {

  let backgroundColor: string, hoverBackgroundColor: string, border: string, hoverBorder: string

  const badgeAppearance: BadgeVariant = useMemo(() => {
    if (selected && !disabled) return 'whiteBlue';
    if (disabled) {
      if (selected) return 'whiteDisable';
      return 'lightDisable';
    }
    return 'info';
  }, [variant, selected, disabled]);

  switch (variant) {
    case 'default':
      if (plain) {
        backgroundColor = ''
      } else {
        backgroundColor = ''
      }
      break
  }

  return {
    badgeAppearance,
    backgroundColor,
    hoverBackgroundColor,
    border,
    hoverBorder,
  }
}
