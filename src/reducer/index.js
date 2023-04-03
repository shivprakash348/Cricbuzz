import CartItem, { Wicket } from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  CartItem: CartItem,
  Wicket: Wicket,
});
export default rootReducer;
