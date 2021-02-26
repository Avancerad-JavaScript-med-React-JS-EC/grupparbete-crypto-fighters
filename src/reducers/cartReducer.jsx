let initialState = {
  items: [],
  quantity: 0,
};
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const isAlreadyAdded = state.items.find(
        (product) => product.item.id === action.payload.item.id
      );
      if (!isAlreadyAdded) action.payload.itemQuantity = 1;
      return {
        ...state,
        items: !isAlreadyAdded
          ? [action.payload, ...state.items]
          : state.items.map((item) =>
              item.item.id === action.payload.item.id
                ? { ...item, itemQuantity: ++item.itemQuantity }
                : item
            ),
        quantity: state.quantity + 1,
      };

    default:
      return state;
  }
}
