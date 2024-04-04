import { ProductAction } from "../action/ProductAction";

const initState = {
  product: [],
};
const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case ProductAction.ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.product],
      };
    case ProductAction.PRODUCT_LOADED:
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
};
export default ProductReducer;
