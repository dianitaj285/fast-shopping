import styled from "styled-components";

export function Card({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 5px 6px #00000017;
  opacity: 1;
  display: inline-block;
`;
