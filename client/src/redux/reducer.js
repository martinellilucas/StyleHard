import { GET_PRODUCTS, ADD_DETAIL, CLEAN_DETAIL } from "./actions";

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
    default:
      return { ...state };
  }
};

export default reducer;
