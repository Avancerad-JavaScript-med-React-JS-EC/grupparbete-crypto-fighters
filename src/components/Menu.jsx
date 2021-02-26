import React, { useEffect } from "react";
import Product from "./Product";
import "../css/menu.css";
import Nav from "./Nav";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../actions/fetchProducts";
import { useSelector } from "react-redux";
import { addToCart } from "../actions/addToCart";

const Menu = () => {
  const menuItem = useSelector((state) => state.productsItems.productsItems);
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleSelectProduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="navigation">
        <Nav />
        <Cart
          selectedItems={quantity}
        />
      </div>
      <div className="menu">
        <div className="menu-content">
          <h1>Meny</h1>
          {menuItem &&
            menuItem.map((product) => {
              return (
                <Product
                  product={product}
                  key={product.id}
                  addToCartClick={() => handleSelectProduct(product)}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Menu;
