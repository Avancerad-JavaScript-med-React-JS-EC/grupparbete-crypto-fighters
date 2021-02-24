import React , { useState, useEffect } from 'react';
import Product from './Product'



const Menu = () => {

 
  const [products, setProducts] = useState([]);

// UseEffect hook to fetch the content from the source
  useEffect( () => {
    async function fetchProducts(){
    const response = await fetch('http://localhost:5000/api/beans');
    const data = await response.json();
    console.log(data)

    setProducts(data.menu);
  
    }
   
    fetchProducts();
  }, []);

  
  return (
    <div className="App">
    <h1>Meny</h1>
    { products.map((product) => {
        return <Product product={ product } key={ product.id }  />
    })}
    </div>
  );
  
}

export default Menu;