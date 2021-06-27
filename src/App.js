import "./App.css";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import { GlobalStyle, ButtonColor, Logo } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import products from "./products";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import LightLogo from "./t2.png";
import darkLogo from "./t1.png";
import NavBar from "./components/NavBar";
function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      setButtonText("light mode");
    } else {
      setCurrentTheme("light");
      setButtonText("dark mode");
    }
  };
  const [buttonText, setButtonText] = useState("dark mode");

  const theme = {
    light: {
      mainColor: "#242424", // main font color
      backgroundColor: "#fefafb", // main background color
      pink: "#ff85a2",
    },
    dark: {
      mainColor: "#fefafb", // main font color
      backgroundColor: "#242424", // main background color
      pink: "#ff85a2",
    },
  };
  // 08 product delete
  const [_products, setProducts] = useState(products);

  const deleteProduct = (id) => {
    const updatedlist = _products.filter((product) => product.id !== id);
    setProducts(updatedlist);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar
        currentTheme={currentTheme}
        toggleCurrentTheme={toggleCurrentTheme}
        buttonText={buttonText}
      />

      <Switch>
        <Route path="/products/:productSlug">
          <ProductDetail products={_products} deleteProduct={deleteProduct} />
        </Route>
        <Route path="/products">
          <ProductsList deleteProduct={deleteProduct} products={_products} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      {/* {setView()} */}
    </ThemeProvider>
  );
}

export default App;
