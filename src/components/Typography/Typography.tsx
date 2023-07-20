import { StyledTypography } from "./Typography.styles";
import TypographyProps from "./Typography.types";

const Typography = ({
  children,
  variant,
  fontSize,
  sx,
  color,
  ...props
}: TypographyProps) => {
  return (
    <StyledTypography
      as={variant}
      variant={variant}
      fontSize={fontSize}
      color={color}
      style={sx}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
