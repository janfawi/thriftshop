import "./App.css";
import products from "./products";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import { GlobalStyle, ButtonColor } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleCurrentTheme = () => {
    // ternary
    // currentTheme === "light"
    //   ? (setCurrentTheme("dark"), setButtonText("light mode"))
    //   : (setCurrentTheme("light"), setButtonText("dark mode"));
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      setButtonText("light mode");
    } else {
      setCurrentTheme("light");
      setButtonText("dark mode");
    }
    // setCurrentTheme(currentTheme === "light" ? "dark":"light")
  };
  const [buttonText, setButtonText] = useState("dark mode");

  // console.log(currentTheme);
  //I will not need to render these parts, I will only use them , but not show them
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
  //two way to acces the object properties
  // console.log(theme.light);
  // console.log(theme["dark"]);
  console.log(theme[currentTheme]);
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ButtonColor onClick={toggleCurrentTheme}>{buttonText}</ButtonColor>
      <Home />
      <ProductsList />
    </ThemeProvider>
  );
}

export default App;
