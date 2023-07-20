import { CSSProperties } from "react";

interface TypographyProps {
  /**
   * Typography Style Variation
   */
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  /**
   * Style properties
   */
  sx?: CSSProperties;
  /**
   * FontSize of Typography
   */
  fontSize?: string;

  /**
   * Color
   */
  color?: string;

  /**
   * Children
   */
  children: React.ReactNode;
}

export default TypographyProps;
