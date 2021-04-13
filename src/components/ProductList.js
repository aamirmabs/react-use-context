import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
