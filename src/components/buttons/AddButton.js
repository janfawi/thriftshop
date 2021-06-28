import React, { useState } from "react";
import { BiDuplicateStyled } from "../../styles";
import ProductModal from "../modals/ProductModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <BiDuplicateStyled size="2em" onClick={openModal} />
      <ProductModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
