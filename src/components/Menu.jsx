import React , {useState, useEffect } from 'react';
import Product from './Product'
import '../css/menu.css';
import Nav from './Nav'
import Cart from './Cart'
import { useDispatch } from 'react-redux';
import { fetchProducts } from "../actions/fetchProducts";
import { useSelector } from 'react-redux';
import { addToCart} from '../actions/addToCart'



const Menu = (props) => {
    
    const menuItem  = useSelector(state => state.productsItems.productsItems )
    const dispatch = useDispatch();
    console.log(menuItem)
    const [cartBasket, setCartBasket] = useState(0);
    
  useEffect( () => {   
    dispatch(fetchProducts())
  }, []);

  const handleSelectProduct = (product) => {
    dispatch(addToCart(product));
    setCartBasket(cartBasket + 1);
  }

  return (
    <>
        <div className="navigation">
            <Nav />
            <Cart selectedItems={cartBasket}/>
        </div>
        <div className="menu">
            <div className="menu-content">
                <h1>Meny</h1>
                {menuItem && menuItem.map((product) => {
                    return <Product product={ product } key={ product.id } addToCartClick={() => handleSelectProduct(product)}/>
                })}
            </div>
        </div>
    </>
  );
  
}

export default Menu;