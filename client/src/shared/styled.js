import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

//variables
export const MEDIA_SIZES = {
  phone: "",
  tablet: "min-width: 768px",
  landscape: "min-width: 1024px",
  screen: "min-width: 1200px",
};

export const COLORS = {
  backgroundGrey: "#f1f1f1",
  darkBlue: "#151E3F",
  lightBlue: "#068d9d",
  fontGrey: "#9B9B9B",
};

//media queries
export const mediaTablet = (...styles) => css`
  @media (${MEDIA_SIZES.tablet}) {
    ${css(...styles)}
  }
`;

export const mediaLandscape = (...styles) => css`
  @media (${MEDIA_SIZES.landscape}) {
    ${css(...styles)}
  }
`;

export const mediaScreen = (...styles) => css`
  @media (${MEDIA_SIZES.screen}) {
    ${css(...styles)}
  }
`;

//componentes comunes

export const Body = styled.p`
  font-size: 1rem;
`;

export const MainContainer = styled.div`
  width: 100%;
  margin-bottom: 60px;
  padding: 10px;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  padding: 40px;
  color: ${COLORS.titleGrey};

  ${mediaLandscape`
    align-self: start;
  `}
`;

export const Title = styled.p`
  font-size: 1.5rem;
  padding: 10px;
  color: black;
`;

export const Subtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 200;
  font-family:Montserrat-Ligth
  color: ${COLORS.fontBlue};

  ${mediaTablet`
  font-size: 1.5rem;
  `}
`;

export const HorizontalImage = styled.img`
  width: 100%;
  height: auto;
`;

export const VerticalImage = styled.img`
  width: auto;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : `${COLORS.backgroundGrey}`)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
`;
