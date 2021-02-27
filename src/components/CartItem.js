import React from "react";
import "../css/cartItem.css";

export const CartItem = ({ item, quantity }) => {
    console.log(item)
    return (
        <div className="cartItem-wrap">
        <div>
            <div>{item.title}</div>
            <div>{item.price}</div>
        </div>
        <div>{quantity}</div>
        </div>
    )
}