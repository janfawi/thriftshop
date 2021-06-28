import React from "react";
import { DetailsWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";
import productStore from "../stores/productStore";
import { observer } from "mobx-react";
const ProductDetail = () => {
  // console.log(props);
  const productSlug = useParams().productSlug;
  const product = productStore.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;
  return (
    <>
      <DetailsWrapper>
        <p>{product.description}</p>
        <p>{product.price} KD</p>
        <p>{product.name}</p>

        <img src={product.image} alt={product.name} />
      </DetailsWrapper>
      <DeleteButton productid={product.id} />
    </>
  );
};

export default observer(ProductDetail);
