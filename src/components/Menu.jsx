import React , { useState, useEffect } from 'react';
import Product from './Product'
import '../css/menu.css';
import Nav from './Nav'
import Cart from './Cart'
import { useDispatch } from 'react-redux';
import { fetchProducts } from "../actions/fetchProducts";
import { useSelector } from 'react-redux';



const Menu = () => {
    
    const menuItem  = useSelector(state => state.productsItems.productsItems )
    const dispatch = useDispatch();
    console.log(menuItem)
    
  useEffect( () => {   
    dispatch(fetchProducts())
  }, []);

  
  return (
    <>
        <div className="navigation">
            <Nav />
            <Cart />
        </div>
        <div className="menu">
            <div className="menu-content">
                <h1>Meny</h1>
                {menuItem && menuItem.map((product) => {
                    return <Product product={ product } key={ product.id }  />
                })}
            </div>
        </div>
    </>
  );
  
}

export default Menu;