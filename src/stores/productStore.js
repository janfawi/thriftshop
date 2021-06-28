import products from "../products";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";

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
  createProduct = (newProduct) => {
    newProduct.id = this.products[this.products.length - 1].id + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);

    console.log("CookieStore -> createCookie -> this.cookies", this.cookies);
  };
}

const productStore = new ProductStore();
export default productStore;
