const initialData = {
  value: 0,
  // run: "hiii",
};
const CartItem = (state = initialData.value, action) => {
  switch (action.type) {
    case "Increment_1":
      return state + action.payload;
    case "Increment_2":
      return state + action.payload;
    case "Increment_3":
      return state + action.payload;
    case "Increment_4":
      return state + action.payload;
    case "Increment_6":
      return state + action.payload;
    case "Increment_wide":
      return state + action.payload;
    case "Increment_noball":
      return state + action.payload;
    case "Increment_legbye":
      return state + action.payload;
    default:
      return state;
  }
};
export default CartItem;
export const Wicket = (state = initialData.value, action) => {
  switch (action.type) {
    case "Increment_out":
      return state + action.payload;
    default:
      return state;
  }
};
