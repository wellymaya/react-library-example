import { CSSProperties } from "react";

interface ButtonProps {
  /**
   * Button Style Variation
   */
  variant: "primary" | "secondary";
  /**
   * Style properties
   */
  sx?: CSSProperties;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  children: React.ReactNode;

  /**
   * Background Color
   */
  backgroundColor?: string;

  /**
   * Handle Click function
   */
  onClick?: () => void;
}

export default ButtonProps;
