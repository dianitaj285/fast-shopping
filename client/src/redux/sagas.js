import { takeEvery, call, put } from "redux-saga/effects";
import * as TYPES from "./types";
import { getProductsFail, getProductsSuccess } from "./actionCreators";
import { getProducts } from "../services/product.service";

export function* watchSagas() {
  yield takeEvery(TYPES.GET_PRODUCTS, getProductsSaga);
}

function* getProductsSaga({ limit, offset }) {
  try {
    const products = yield call(getProducts, limit, offset);
    yield put(getProductsSuccess(products.data));
  } catch (error) {
    yield put(getProductsFail(error));
  }
}
