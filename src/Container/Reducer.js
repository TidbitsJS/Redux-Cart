import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./Action";

import cartItems from "../Data/Items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const reducer = (state = initialStore, action) => {
  return state;
};

export default reducer;
