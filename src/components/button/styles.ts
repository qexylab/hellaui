import {ButtonSize, ButtonVariant} from "@src/components/button/Button.types";


export const getButtonClass = ({
  variant,
  size,
  disabled
}) => {

  // Должен возвращать бг + бордер колор + колор
  const variants = {
    default: "#hex_color",
    primary: "",
    success: "",
    info: "",
    warning: "",
    danger: "",
  };

  // Должен возвращать фонт-сайз, паддинг
  const sizes = {
    xs: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
  };

  return { bgColor, textColor, textSize, padding };
}