import React from "react";
import ProductItem from "./ProductItem";
import { useState } from "react";
//import styled component
import { ListWrapper, BiDuplicateStyled } from "../styles";
import Searchbar from "./Searchbar";
import productStore from "../stores/productStore";
import { observer } from "mobx-react";
import { BiDuplicate } from "react-icons/bi";
import ProductModal from "./modals/ProductModal";
import AddButton from "./buttons/AddButton";

const ProductsList = () => {
  console.log("hello world");
  const [input, setinput] = useState("");

  console.log(input);
  const products = productStore.products;
  console.log(products);
  const ProductsListFilter = products.filter(
    (product) =>
      product.name.includes(input.toLowerCase()) ||
      product.price.includes(input)
  );

  const ProductRenderMap = ProductsListFilter.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <div>
      <Searchbar setinput={setinput} />
      <AddButton />
      <ListWrapper> {ProductRenderMap} </ListWrapper>;
    </div>
  );
};

export default observer(ProductsList);
