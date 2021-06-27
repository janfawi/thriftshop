import React from "react";
import { DetailsWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";

const ProductDetail = (props) => {
  // console.log(props);
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );
  // const product = props.product[0];

  if (!product) return <Redirect to="/products" />;
  return (
    <>
      <DetailsWrapper>
        <p>{product.description}</p>
        <p>{product.price} KD</p>
        <p>{product.name}</p>

        <img src={product.image} alt={product.name} />
      </DetailsWrapper>
      <DeleteButton
        productid={product.id}
        deleteProduct={props.deleteProduct}
      />
    </>
  );
};

export default ProductDetail;

// const ProductDetail = (props) => {
//"" these is deconstructing the product"""
//   const product = props.product;
//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} />
//       <p>{product.description}</p>
//       <p>{product.price} KD</p>
//       <h2>Hi I'm details component</h2>
//     </div>
//   );
// };
