import { combineReducers } from "redux";
import authReducer from "./authReducer";
import ProductReducer from "./ProductReducer";

const allReducer = {
  auth: authReducer,
  product: ProductReducer,
};

const rootReducer = combineReducers(allReducer);

export default rootReducer;
