import "./App.css";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import { GlobalStyle, ButtonColor } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import products from "./products";

function App() {
  const [product, setproduct] = useState(null);
  console.log("this is from app", product);
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

  // list vs detail
  const setView = () => {
    // product ? (
    //  return
    //  <ProductDetail product={product} />
    // ) : (
    //   <ProductsList setproduct={setproduct} />
    // );
    if (product)
      return (
        <>
          <ProductDetail product={product} />
          <button onClick={() => setproduct(null)}>Go Back</button>
        </>
      );
    else return <ProductsList setproduct={setproduct} />;
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ButtonColor onClick={toggleCurrentTheme}>{buttonText}</ButtonColor>
      <Home />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
