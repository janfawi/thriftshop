import React, { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import ProductModal from "../modals/ProductModal";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleUpdate = () => {
    openModal();
  };
  return (
    <>
      <UpdateButtonStyled onClick={handleUpdate}>Update</UpdateButtonStyled>
      <ProductModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldProduct={props.products}
      />
      ;
    </>
  );
};

export default UpdateButton;
