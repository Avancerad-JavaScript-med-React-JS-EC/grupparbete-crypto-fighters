import React from "react";
import "../css/cartItem.css";
import { useDispatch } from "react-redux";
import {
  addItem,
  decrementQuantity,
  deleteItem,
  updatePrice,
} from "../actions/addToCart";

export const CartItem = ({ item, quantity }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(addItem(item));
    dispatch(updatePrice());
  };

  const decrement = (id) => {
    if (quantity > 1) {
      dispatch(decrementQuantity(item));
    } else {
      dispatch(deleteItem(id));
    }
    dispatch(updatePrice());
  };

  return (
    <div className="cartItem-wrap">
      <div>
        <div>{item.title}</div>
        <div>{item.price}</div>
      </div>
      <div>
        <button className="btn subtract" onClick={() => decrement(item.id)}>
          -
        </button>
        <div>{quantity}</div>
        <button className="btn add" onClick={() => increment()}>
          +
        </button>
      </div>
    </div>
  );
};
