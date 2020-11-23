import { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Pagination } from "antd";
import { ProductCard } from "../shared/components";
import { currencyFormat } from "../shared/utils";
import { mediaTablet, mediaScreen, Title } from "../shared/styled";
import {
  getProductsAction,
  addProductsSuccess,
  editProductSuccess,
} from "../redux/actionCreators";
import { getProductsSelector, getCartSelector } from "../redux/selectors";

const LIMIT = 20;

function Home({
  getProductsAction,
  products,
  cart,
  addProductsSuccess,
  editProductSuccess,
}) {
  const [offset, setOffset] = useState(0);
  const [shopProducts, setShopProducts] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getProductsAction(LIMIT, offset);
  }, [getProductsAction, offset]);

  useEffect(() => {
    setShopProducts(products.rows);
    setTotal(products.total);
  }, [products, setShopProducts]);

  const handleClick = (id) => () => {
    const i = cart.findIndex((product) => product.id === id);
    if (i === -1) {
      const product = products.rows.filter((product) => {
        return product.id === id;
      });
      const newProduct = { ...product[0], quantity: 1 };
      addProductsSuccess(newProduct);
    } else {
      cart[i].quantity = cart[i].quantity + 1;
      editProductSuccess(cart[i]);
    }
  };

  const handlePaginationChange = (page) => {
    setOffset(LIMIT * (page - 1));
  };

  return (
    <Container>
      <Title>Pick the products you want to buy</Title>
      <ProductsContainer>
        {shopProducts &&
          shopProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              category={product.Categories.map(
                (category) => `${category.name} `
              )}
              description={product.description}
              onClick={handleClick(product.id)}
              price={currencyFormat(product.price)}
            />
          ))}
      </ProductsContainer>
      {total > LIMIT && (
        <PaginationContainer>
          <Pagination
            defaultCurrent={1}
            total={total}
            defaultPageSize={LIMIT}
            onChange={handlePaginationChange}
          />
        </PaginationContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${mediaTablet`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  `};
  ${mediaScreen`
  grid-template-columns: 1fr 1fr 1fr;
  `}
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const mapDispatchToProps = {
  getProductsAction,
  addProductsSuccess,
  editProductSuccess,
};

const mapStateToProps = (state) => ({
  products: getProductsSelector(state),
  cart: getCartSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
