export const addToCart = (item, itemQuantity = 1) => {
  return {
    type: "ADD_TO_CART",
    payload: { item, itemQuantity },
  };
};

export function updateItemQuantity({ id, itemQuantity }) {
  return {
    type: "UPDATE_ITEM_UNITS",
    payload: { id, itemQuantity },
  };
}
