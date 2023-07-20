import { styled } from "styled-components";
import ButtonProps from "./Button.types";
import theme from "../../theme/";

const {
  sizes: { components },
  colors,
} = theme;

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 1rem 2rem;
  color: #f6f6f6;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }

  //change styles based on prop values
  background-color: ${({ variant, backgroundColor }) =>
    backgroundColor ? backgroundColor : colors[variant]};

  padding: ${({ size }) => components.buttom[size ?? "medium"]};
`;
