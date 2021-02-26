import React, { useState } from "react";
import "../css/navCart.css";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export default function Cart(props) {
    const cartItem = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (e) => setIsOpen(!isOpen);

  return (
    <div className="cart-wrap">
      <button className="navCart" onClick={toggle}>
        <div className="navCartIcon">
          <span className="cartCount">{props.selectedItems}</span>
        </div>
      </button>
      <div className={`popup-menu ${isOpen ? "shown" : " "}`}>
        <div>{cartItem.map(item => <CartItem key={item.item.id} title={item.item.title} price={item.item.price} quantity={item.itemQuantity}/>)}</div>
        <button>Pay</button>
      </div>
    </div>
  );
}
