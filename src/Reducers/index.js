import { combineReducers } from "redux";
import loginReducer from "./loginReducers";
import productReducers from "./productReducers";
import addToCartReducers from "./addToCartReducer";

export default combineReducers({
  login: loginReducer,
  products: productReducers,
  cartItems: addToCartReducers,
});
