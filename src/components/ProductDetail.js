import React from "react";
import { DetailsWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = (props) => {
  console.log(props);
  return (
    <>
      <DetailsWrapper>
        <p>{props.product.description}</p>
        <p>{props.product.price} KD</p>
        <p>{props.product.name}</p>

        <img src={props.product.image} alt={props.product.name} />
      </DetailsWrapper>
      <DeleteButton
        setproduct={props.setproduct}
        productid={props.product.id}
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
