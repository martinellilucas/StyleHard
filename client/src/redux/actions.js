import { productos } from "../components/Cards/mock.js";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_DETAIL = "ADD_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const SEARCH = "SEARCH";

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

export const order = (judgment) => {
  return { type: ORDER, payload: judgment };
};

export const filter = (judgment) => {
  return { type: FILTER, payload: judgment };
};

export const searchProduct = (search) => {
  if (search) {
    const filtrados = productos.filter((producto) =>
      producto.marca.toUpperCase().startsWith(search.toUpperCase())
    );
    return function (dispatch) {
      dispatch({ type: SEARCH, payload: filtrados });
    };
  } else
    return function (dispatch) {
      dispatch({ type: GET_PRODUCTS, payload: productos });
    };
};
