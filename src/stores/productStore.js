import products from "../products";
import { makeAutoObservable } from "mobx";
import { product } from "prelude-ls";

class ProductStore {
  products = products;
  constructor() {
    makeAutoObservable(this);
  }
  deleteProduct = (id) => {
    const updadtedProducts = this.products.filter(
      (product) => product.id !== id
    );
    this.products = updadtedProducts;
  };
}

const productStore = new ProductStore();
export default productStore;
