import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const ProductsList = products.map((product) => (
    <ProductItem product={product} />
  ));
  // <div className="product">
  //   <img className="product-image" alt={product.name} src={product.image} />
  //   <p className="text">{product.name}</p>
  //   <p className="text">{product.price}</p>
  // </div>
  //   ));
  return <div className="list"> {ProductsList} </div>;
};

export default ProductsList;
