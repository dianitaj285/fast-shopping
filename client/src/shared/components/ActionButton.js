import styled from "styled-components";
import { COLORS } from "../../shared";

export function ActionButton({ text, ...props }) {
  return <Button {...props}>{text}</Button>;
}

const Button = styled.button`
  outline: none;
  background-color: ${COLORS.darkBlue};
  color: white;
  font-weight: 800;
  padding: 5px;
  border-radius: 5px;

  &: disabled {
    background-color: ${COLORS.fontGrey};
  }
`;
