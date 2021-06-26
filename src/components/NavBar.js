import React from "react";
import { Link } from "react-router-dom";

// Styling
// import { ThemeButton } from "../styles";
import LightLogo from "../t2.png";
import darkLogo from "../t1.png";
import { GlobalStyle, ButtonColor, Logo } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Logo to="/">
        <img
          src={props.currentTheme === "light" ? LightLogo : darkLogo}
          width="50vw"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <ButtonColor onClick={props.toggleCurrentTheme}>
            {props.buttonText}
          </ButtonColor>
          <Link to="/products" style={{ margin: 10, float: "right" }}>
            Products
          </Link>
        </div>
      </div>
    </nav>
  );

  //   return (
  //     <div>
  // <Logo to="/">
  //   <img
  //     src={props.currentTheme === "light" ? LightLogo : darkLogo}
  //     width="50vw"
  //   />
  // </Logo>

  // <Link to="/products" style={{ margin: 10, float: "right" }}>
  //   Products
  // </Link>
  // <ButtonColor onClick={props.toggleCurrentTheme}>
  //   {props.buttonText}
  // </ButtonColor>
  //     </div>
  //   );
};

export default NavBar;
