import React from "react";
import { DeleteButtonStyled } from "../../styles";

function DeleteButton(props) {
  const handleDelete = () => {
    props.deleteProduct(props.productid);
    props.setproduct(null);
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      Delete Product
    </DeleteButtonStyled>
  );
}

export default DeleteButton;
