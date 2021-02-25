import React, {useState, useEffect, useRef} from 'react';
import '../css/navCart.css';
import { useSelector } from 'react-redux';

export default function Cart(props){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = (e) => setIsOpen(!isOpen);
    


    return (
        <div className="cart-wrap">
            <button className="navCart" onClick={toggle}><div className="navCartIcon"><span className="cartCount">{props.selectedItems}</span></div>
            </button>
            <div className={`popup-menu ${isOpen ? 'shown' : ' '}`} ><div>menu</div><button>Pay</button></div>
        </div>
    )
}