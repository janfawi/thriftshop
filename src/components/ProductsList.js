import React from "react";
import products from "../products";
import productItem from "./productItem";

const ProductsList = () => {
  const productsList = products.map((product) => (
    <productItem product={product} />
  ));
  // <div className="product">
  //   <img className="product-image" alt={product.name} src={product.image} />
  //   <p className="text">{product.name}</p>
  //   <p className="text">{product.price}</p>
  // </div>
  //   ));
  //   return <div className="list"> {productsList} </div>;
};

export default ProductsList;
