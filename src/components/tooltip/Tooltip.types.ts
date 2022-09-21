import {HTMLAttributes} from "react";

export interface ITooltip extends HTMLAttributes<HTMLDivElement> {
  visible: boolean // Visible state
}