import styled from "styled-components";
import { mediaTablet, VerticalImage, mediaLandscape } from "../styled";
import { trash } from "assets";
import { ActionButton } from "./ActionButton";

export function ProductCart({
  title,
  category,
  description,
  onClick,
  price,
  onChange,
  value,
  onClickIncrease,
  onClickDecrease,
  subtotal,
}) {
  return (
    <Container>
      <Title>{title[0].toUpperCase() + title.substring(1)}</Title>
      <Category>Category: {category}</Category>
      <Description>{description}</Description>
      <Price>{price}</Price>
      <QuantityContainer>
        <QuantityButton onClick={onClickDecrease} text="-" />
        <Input readOnly value={value} />
        <QuantityButton onClick={onClickIncrease} text="+" />
        <Button onClick={onClick}>
          <Image>
            <VerticalImage src={trash} alt="trash" />
          </Image>
        </Button>
      </QuantityContainer>
      <Price>{subtotal}</Price>
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
  flex-direction:row;
  width: 700px;
  justify-content:space-between
  `};

  ${mediaLandscape`
  width: 900px;
  `}
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 5px;

  ${mediaTablet`
  margin-right:15px;`}
`;

const Category = styled.p`
  font-weight: 300;

  ${mediaTablet`
  display:flex;
  margin-right:10px;
  align-items:center;`}
`;

const Description = styled.p`
  font-weight: 400;
  margin-bottom: 20px;

  ${mediaTablet`
  margin-bottom: 0px;
  display:flex;
  margin-right:10px;
  align-items:center;`}
`;

const Price = styled.p`
  font-weight: 400;
  min-width: 60px;

  ${mediaTablet`
  display:flex;
  margin-right:10px;
  align-items:center;`}
`;

const Button = styled.button`
  outline: none;
  background-color: white;

  ${mediaTablet`
  display:flex;
  margin-right:5px;
  align-items:center;`}
`;

const QuantityContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;

  ${mediaTablet`
  margin: 0px;
  display:flex;
  margin-right:5px;
  align-items:center;
  `}
`;

const Image = styled.div`
  height: 20px;
`;

const Input = styled.input`
  width: 50px;
  margin-right: 5px;
  outline: none;
`;

const QuantityButton = styled(ActionButton)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
