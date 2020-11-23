import styled from "styled-components";
import { mediaTablet } from "../styled";
import { ActionButton } from "./ActionButton";

export function ProductCard({
  title,
  category,
  description,
  onClick,
  price,
  width,
}) {
  return (
    <Container width={width}>
      <Title>{title[0].toUpperCase() + title.substring(1)}</Title>
      <Category>Category: {category}</Category>
      <Description>
        {description[0].toUpperCase() + description.substring(1)}
      </Description>
      <BottomContainer>
        <ActionButton text="Add to cart" onClick={onClick} />
        <Price>{price}</Price>
      </BottomContainer>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 5px 6px #00000017;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  ${mediaTablet`
  width: ${(props) => (props.width ? props.width : "300px")};
  `}
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 5px;
`;
const Category = styled.p`
  font-weight: 300;
`;

const Description = styled.p`
  font-weight: 400;
  margin-bottom: 20px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.p`
  font-weight: 400;
`;
