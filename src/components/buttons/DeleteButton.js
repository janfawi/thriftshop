import React from "react";
import { DeleteButtonStyled } from "../../styles";
import productStore from "../../stores/productStore";

function DeleteButton(props) {
  const handleDelete = (event) => {
    event.preventDefault();
    productStore.deleteProduct(props.productid);
    // console.log(productStore);
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      Delete Product
    </DeleteButtonStyled>
  );
}

export default DeleteButton;

// another way for writing the funstion ...
// const DeleteButton = (props) => {
//   const handleDelete = () => {
//     productStore.deleteProduct(props.productid);
//     // console.log(productStore);
//   };
//   return (
//     <DeleteButtonStyled onClick={handleDelete}>
//       Delete Product
//     </DeleteButtonStyled>
//   );
