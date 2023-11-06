import { productos } from "../components/Cards/mock.js";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_DETAIL = "ADD_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getProducts = () => {
  const products = productos;
  return function (dispatch) {
    dispatch({ type: GET_PRODUCTS, payload: products });
  };
};

export const addDetail = (id) => {
  const product = productos.filter((producto) => producto.id === id);
  return function (dispatch) {
    dispatch({ type: ADD_DETAIL, payload: product[0] });
  };
};

export const cleanDetail = () => {
  return function (dispatch) {
    dispatch({ type: CLEAN_DETAIL });
  };
};
