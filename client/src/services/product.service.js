import Axios from "axios";

export function getProducts(limit, offset) {
  return Axios.get("/products", { params: { limit, offset } });
}
