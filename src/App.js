import "./App.css";
import products from "./products";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  //I will not need to render these parts, I will only use them , but not show them
  const theme = {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductsList />
    </ThemeProvider>
  );
}

export default App;
