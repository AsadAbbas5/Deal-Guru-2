import LikeProduct from "../../LikeProduct/LikeProduct";
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
    case ProductAction.LIKE_PRODUCT:
      return {
        ...state,
        product: state.product.map((item) =>
          item._id === action.product._id ? action.product : item
        ),
      };
    case ProductAction.DISlIKE_PRODUCT:
      return {
        ...state,
        product: state.product.map((item) =>
          item._id === action.product._id ? action.product : item
        ),
      };
    case ProductAction.HEART_PRODUCT:
      return {
        ...state,
        product: state.product.map((heart) =>
        heart._id === action.product._id ? action.product : heart
        ),
      };
    default:
      return state;
  }
};
export default ProductReducer;
