import {
  GET_PRODUCTS,
  ADD_DETAIL,
  CLEAN_DETAIL,
  ORDER,
  FILTER,
  SEARCH,
} from "./actions";

const initialState = {
  products: [],
  allProducts: [],
  productDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.payload],
        products: [...action.payload],
      };
    case ADD_DETAIL:
      const { id, imagen, tipo, marca, descripcion, stock, precio } =
        action.payload;
      return {
        ...state,
        productDetail: { id, imagen, tipo, marca, descripcion, stock, precio },
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        productDetail: {},
      };
    case ORDER:
      if (action.payload === "ascendente") {
        return {
          ...state,
          products: [...state.products.sort((a, b) => a.precio - b.precio)],
        };
      }
      if (action.payload === "descendente") {
        return {
          ...state,
          products: [...state.products.sort((a, b) => b.precio - a.precio)],
        };
      }
      return { ...state };
    case FILTER:
      if (action.payload === "all") {
        return { ...state, products: [...state.allProducts] };
      }
      return {
        ...state,
        products: [
          ...state.allProducts.filter(
            (product) => product.tipo === action.payload
          ),
        ],
      };
    case SEARCH:
      return {
        ...state,
        allProducts: [...state.products],
        products: [...action.payload],
      };
    default:
      return { ...state };
  }
};

export default reducer;
