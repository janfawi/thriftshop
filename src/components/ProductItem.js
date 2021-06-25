import React from "react";
// import products from "../products";
import { ProductWrapper } from "../styles";
const ProductItem = (props) => {
  const product = props.product;
  const toggleproduct = () => {
    props.setproduct(product);
    // console.log(product);
  };

  return (
    <ProductWrapper>
      <img alt={product.name} src={product.image} onClick={toggleproduct} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </ProductWrapper>
  );
};
export default ProductItem;
