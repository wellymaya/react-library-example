import { styled } from "styled-components";
import TypographyProps from "./Typography.types";
import "@fontsource/roboto";

export const StyledTypography = styled.p<TypographyProps>`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 1rem 2rem;
  color: black;
  transition: 0.5s;
  font-family: "Roboto";
  line-height: "0.75rem";

  //change styles based on prop values
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`;
