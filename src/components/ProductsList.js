import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";
import { useState } from "react";
//import styled component
import { ListWrapper } from "../styles";
import Searchbar from "./Searchbar";
const ProductsList = (props) => {
  const [input, setinput] = useState("");
  console.log(input);

  const ProductsListFilter = products.filter(
    (product) =>
      product.name.includes(input.toLowerCase()) ||
      product.price.includes(input)
  );

  const ProductRenderMap = ProductsListFilter.map((product) => (
    <ProductItem
      setproduct={props.setproduct}
      product={product}
      key={product.id}
    />
  ));

  return (
    <div>
      <Searchbar setinput={setinput} />
      <ListWrapper> {ProductRenderMap} </ListWrapper>;
    </div>
  );
};

export default ProductsList;
