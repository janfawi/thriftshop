// styled component
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${
  "" /* i didnt need to pass theme.currentTheme.maincolor,,,, as its already passing it here (((its already passing it as object))) */
}

body {
  
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
`;

export const Title = styled.h1`
  text-align: center;
`;
export const Description = styled.h4`
  text-align: center;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const ProductWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const ButtonColor = styled.button`
  background: purple;
  color: white;
`;
