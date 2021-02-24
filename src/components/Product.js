import React from "react";

const Product = ({ product }) => {

  return (
    // Clickable Div for choosing desired product 
    <div className="product-grid">
      <h3 className="title g-left"> {product.title} </h3>
      <div className="g-center">
        <h3 className="desc"> {product.desc} </h3>
      </div>
      <h4 className="price g-right">{product.price} sek</h4>
    </div>
  );
};

export default Product;