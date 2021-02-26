import React from "react";
import "../css/cartItem.css";

export const CartItem = (props) => {
    return (
        <div className="cartItem-wrap">
        <div>
            <div>{props.title}</div>
            <div>{props.price}</div>
        </div>
        <div>{props.quantity}</div>
        </div>
    )
}