import { StyledButton } from "./Button.styles";
import ButtonProps from "./Button.types";

const Button = ({
  variant = "primary",
  size = "medium",
  sx,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      className={variant}
      style={sx}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
