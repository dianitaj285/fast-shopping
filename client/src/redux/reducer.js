import * as TYPES from "./types";
const initialState = {
  products: [],
  productsError: null,
  cart: [],
  cartError: null,
  userData: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case TYPES.GET_PRODUCTS_FAIL:
      return { ...state, productsError: action.error };
    case TYPES.ADD_PRODUCTS_SUCCESS:
      return { ...state, cart: [...state.cart, action.payload] };
    case TYPES.GET_CART_SUCCESS:
      return { ...state, cart: action.payload };
    case TYPES.DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case TYPES.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        cart: [
          ...state.cart.filter((product) => product.id !== action.payload.id),
          action.payload,
        ],
      };
    case TYPES.GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case TYPES.DELETE_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
}
