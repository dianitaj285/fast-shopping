import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Card, ActionButton } from "shared/components";
import { HorizontalImage, ROUTES } from "shared";
import { ok } from "assets";
import { getUserDataSelector } from "../redux/selectors";

function Thanks({ userData }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderNum = Math.random() * (500000 - 200000) + 200000;
    setOrder(orderNum.toFixed(0));
  }, [setOrder]);

  const history = useHistory();
  const handleClick = () => {
    history.push(ROUTES.HOME);
  };

  return (
    <MainContainer>
      <Title>Thanks for your purchase</Title>
      <Card>
        <Container>
          <Image>
            <HorizontalImage src={ok} alt="ok" />
          </Image>
          {userData && (
            <Text>
              {userData.name[0].toUpperCase() + userData.name.substring(1)}, we
              have created your order #{order}. Your itmes will be soon at your
              door ({userData.address}).
            </Text>
          )}
        </Container>
      </Card>
      <ButtonContainer>
        <ActionButton onClick={handleClick} text="Start again" />
      </ButtonContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 1.5rem;
  padding: 10px;
  color: black;
`;

const Image = styled.div`
  width: 100px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-weight: 400;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  userData: getUserDataSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);
