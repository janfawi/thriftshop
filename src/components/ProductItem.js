import React from "react";
// import products from "../products";
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        productid={product.id}
        deleteProduct={props.deleteProduct}
      />
    </ProductWrapper>
  );
};
export default ProductItem;
