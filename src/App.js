import "./App.css";
import products from "./products";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
function App() {
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

      {/* <div className="product">
          <img
            className="product-image"
            alt="dress"
            src="https://images.squarespace-cdn.com/content/v1/55a956cee4b031edd6f38cfd/1602883835402-S1WG0YEPRHST3K2OR71D/ke17ZwdGBToddI8pDm48kKZ82y6IW61O1-tvG555eBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UddMBmclQpcYsEzoKAOqLWCO0X-duMfkFXCFya41aZSCDHW8fxBkQCgbkA3n4_rJiA/20201016_003129.jpg?format=1000w"
          />
          <p className="text">dress</p>
          <p className="text">5 KD</p>
        </div>
        <div className="product">
          <img
            className="product-image"
            alt="shoes"
            src="https://i.pinimg.com/originals/a2/57/b3/a257b30ab71dd8fd0ab23c5ec8986fa4.jpg"
          />
          <p className="text">shoes</p>
          <p className="text">3 KD</p> */}
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
