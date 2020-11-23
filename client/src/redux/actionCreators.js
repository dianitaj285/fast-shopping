import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_SUCCESS,
  GET_CART_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  GET_USER_DATA,
  DELETE_CART,
} from "./types";

export const getProductsAction = (limit, offset) => ({
  type: GET_PRODUCTS,
  limit,
  offset,
});

export function getProductsSuccess(payload) {
  return { type: GET_PRODUCTS_SUCCESS, payload };
}

export function getProductsFail(error) {
  return { type: GET_PRODUCTS_FAIL, error };
}

export function addProductsSuccess(payload) {
  return { type: ADD_PRODUCTS_SUCCESS, payload };
}

export function getCartSuccess(payload) {
  return { type: GET_CART_SUCCESS, payload };
}

export function deleteProductSuccess(payload) {
  return { type: DELETE_PRODUCTS_SUCCESS, payload };
}

export function editProductSuccess(payload) {
  return { type: EDIT_PRODUCT_SUCCESS, payload };
}

export function getUserData(payload) {
  return { type: GET_USER_DATA, payload };
}

export function deleteCart(payload) {
  return { type: DELETE_CART, payload };
}
