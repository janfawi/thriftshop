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

    console.log("Productstore -> createProduct -> this.product", this.product);
  };
  updateProduct = (updatedProduct) => {
    const product = this.products.find(
      (product) => product.id === updatedProduct.id
    );
    // console.log(product);
    // console.log(
    //   "ProductStore -> updateProduct -> updatedProduct",
    //   updatedProduct
    // );

    // product.name = updatedProduct.name;
    // product.price = updatedProduct.price;
    // product.description = updatedProduct.description;
    // product.image = updatedProduct.image;

    for (const value in product) product[value] = updatedProduct[value];
    product.slug = slugify(product.name);
  };
}

const productStore = new ProductStore();
export default productStore;
