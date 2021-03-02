import React, { useState, useRef} from "react";
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
  const dispatch = useDispatch();
  const history = useHistory();
  const overlayNode = useRef();

  const toggle = (e) => {
    setIsOpen(!isOpen);
    overlayNode.current.offsetParent.classList.toggle('overlay')
  };
  

  const takeOrderClick = () => {
    dispatch(setOrder(cartItems));
    history.push("/status")
  }
 

  return (
    <div ref={overlayNode} className="cart-wrap">
    {console.log(overlayNode)}
      <button className="navCart" onClick={toggle}>
        <div className="navCartIcon">
          <span className="cartCount">{selectedItems}</span>
        </div>
      </button>
      <div className={`popup-menu ${isOpen ? "shown" : " "}`}>
      <div onClick={() => {
        setIsOpen(false)
        overlayNode.current.offsetParent.classList.remove('overlay')
        }}>X</div>
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
