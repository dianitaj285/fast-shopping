import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import {
  latoBlack,
  latoBold,
  latoLight,
  latoRegular,
  latoThin,
} from "../fonts";
import { COLORS } from "./styled";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'lato';
    src: url(${latoThin}) format('truetype');
    font-weight: 100;
  }

  @font-face {
    font-family: 'lato';
    src: url(${latoLight}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'lato';
    src: url(${latoRegular}) format('truetype');
    font-weight: 400;
  }
  
  @font-face {
    font-family: 'lato';
    src: url(${latoBold}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'lato';
    src: url(${latoBlack}) format('truetype');
    font-weight: 900;
  }


  * {
    font-family: 'lato';
    box-sizing: border-box;
    color:${COLORS.fontGrey};

  }
  
  html,
  body,
  #root {
    font-family: 'lato';
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
    font-weight:200;
    background-color: ${COLORS.backgroundGrey};
    
  }
  
  @media (min-width: 768px) {
    html {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    html {
      font-size: 20px;
    }
  }  
  
`;
