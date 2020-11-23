import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ProductCart, UserForm } from "../shared/components";
import { ROUTES, Title, StyledLink, currencyFormat, COLORS } from "shared";
import { getCartSelector, getProductsSelector } from "../redux/selectors";
import {
  deleteProductSuccess,
  editProductSuccess,
  getUserData,
  deleteCart,
} from "../redux/actionCreators";
import { sortByName } from "shared";

function Cart({
  cart,
  deleteProductSuccess,
  products,
  editProductSuccess,
  getUserData,
  deleteCart,
}) {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const total = cart.reduce((acc, product) => {
      let subtotal = product.quantity * product.price;
      acc = acc + subtotal;
      return acc;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    sortByName(cart);
  }, [cart]);

  const handleClick = (id) => () => {
    const product = products.rows.filter((product) => product.id === id);
    deleteProductSuccess(product[0]);
  };

  const handleIncrease = (id) => () => {
    const selectedProduct = cart.find((product) => product.id === id);
    selectedProduct.quantity = selectedProduct.quantity + 1;
    editProductSuccess(selectedProduct);
  };

  const handleDecrease = (id) => () => {
    const selectedProduct = cart.find((product) => product.id === id);

    const quantity = selectedProduct.quantity;
    quantity - 1 > 0
      ? (selectedProduct.quantity = quantity - 1)
      : (selectedProduct.quantity = 0);
    editProductSuccess(selectedProduct);
  };

  const history = useHistory();

  const handleSubmit = (values) => {
    getUserData(values);
    deleteCart();
    history.push(ROUTES.THANKS);
  };

  return (
    <Container>
      <Title>Shopping Cart</Title>
      {cart.length > 0 ? (
        <>
          {cart.map((product) => (
            <ProductCart
              value={product.quantity}
              onClickIncrease={handleIncrease(product.id)}
              onClickDecrease={handleDecrease(product.id)}
              key={product.id}
              title={product.name}
              category={product.Categories.map(
                (category) => `${category.name} `
              )}
              description={product.description}
              onClick={handleClick(product.id)}
              price={currencyFormat(product.price)}
              subtotal={currencyFormat(product.price * product.quantity)}
            />
          ))}
          <TotalContainer>
            <Total>TOTAL </Total>
            <Total>{currencyFormat(total)} </Total>
          </TotalContainer>

          <Title>Ready to Order?</Title>
          <UserForm onSubmit={handleSubmit} />
          <LinkContainer>
            <StyledLink color={COLORS.darkBlue} to={ROUTES.HOME}>
              Back to list
            </StyledLink>
          </LinkContainer>
        </>
      ) : (
        <EmptyMessage>
          Your cart is empty,{" "}
          <StyledLink color={COLORS.darkBlue} to={ROUTES.HOME}>
            go shopping
          </StyledLink>
        </EmptyMessage>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Total = styled.p`
  color: ${COLORS.darkBlue};
  font-weight: 400;
  font-size: 1.4rem;
`;

const LinkContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  width: 100px;
  align-self: center;
  border: solid 1px ${COLORS.darkBlue};
`;

const EmptyMessage = styled.p`
  color: black;
  font-weight: 300;
`;

const mapDispatchToProps = {
  deleteProductSuccess,
  editProductSuccess,
  getUserData,
  deleteCart,
};

const mapStateToProps = (state) => ({
  cart: getCartSelector(state),
  products: getProductsSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
