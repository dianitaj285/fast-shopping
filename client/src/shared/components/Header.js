import { connect } from "react-redux";
import styled from "styled-components";
import { HorizontalImage, StyledLink, COLORS } from "../styled";
import { ROUTES } from "../routes";
import { cart as cartImage, logo } from "../../assets";
import { getCartSelector } from "redux/selectors";

function Header({ cart }) {
  return (
    <Container>
      <StyledLink to={ROUTES.HOME}>
        <LogoContainer>
          <Logo>
            <HorizontalImage src={logo} alt="logo" />
          </Logo>
          <MainTile>FastShopping</MainTile>
        </LogoContainer>
      </StyledLink>
      <StyledLink to={ROUTES.CART}>
        <Image>
          <HorizontalImage src={cartImage} alt="cart" />
          {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
        </Image>
      </StyledLink>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  box-shadow: 0px 5px 6px #00000017;
  opacity: 1;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

const MainTile = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 40px;
  margin-right: 10px;
`;
const Image = styled.div`
  width: 50px;
  position: relative;
`;

const CartCount = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${COLORS.darkBlue};
  color: white;
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const mapDispatchToProps = {};
const mapStatetoProps = (state) => ({
  cart: getCartSelector(state),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
