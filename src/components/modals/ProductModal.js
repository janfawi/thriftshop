import { PropTypes } from "mobx-react";
import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import productStore from "../../stores/productStore";

const ProductModal = (props) => {
  const [product, setproduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });
  const handleChange = (event) => {
    setproduct({ ...product, [event.target.name]: event.target.value });
    // console.log(event);
    // console.log(product);
  };

  //   console.log(product);
  const handleSubmit = (event) => {
    event.preventDefault();

    productStore.createProduct(product);
    props.closeModal();
    console.log(product);
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Product Modal"
      >
        <h3>New Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label>Price</label>
              <input
                name="price"
                type="number"
                min="1"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              name="description"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              name="image"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <CreateButtonStyled className="btn float-right">
            Create
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default ProductModal;
