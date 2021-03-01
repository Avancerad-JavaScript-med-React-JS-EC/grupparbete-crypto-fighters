import React, { useState} from "react";
import "../css/navCart.css";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../actions/addToCart";
import { setOrder } from "../actions/setOrder";
import { useHistory } from "react-router-dom";

export default function Cart({ selectedItems, totalCost }) {
  const cartItems = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (e) => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const history = useHistory();

  const takeOrderClick = () => {
    dispatch(setOrder(cartItems));
    history.push("/status")
  }
 

  return (
    <div className="cart-wrap">
      <button className="navCart" onClick={toggle}>
        <div className="navCartIcon">
          <span className="cartCount">{selectedItems}</span>
        </div>
      </button>
      <div className={`popup-menu ${isOpen ? "shown" : " "}`}>
      <div onClick={() => setIsOpen(false)}>X</div>
        <div>
          {cartItems.items.map((item) => (
            <CartItem
              key={item.item.id}
              item={item.item}
              quantity={item.itemQuantity}
            />
          ))}
        </div>
        <div>{totalCost}</div>
        <button onClick={takeOrderClick}>Pay</button>
        <button onClick={() => dispatch(clearCart())}>Empty the cart</button>
      </div>
    </div>
  );
}
