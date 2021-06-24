import React from "react";
// import products from "../products";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div className="product">
      <img className="product-image" alt={product.name} src={product.image} />
      <p className="text">{product.name}</p>
      <p className="text">{product.price} KD</p>
    </div>
  );
};
export default ProductItem;
