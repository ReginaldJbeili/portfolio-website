import styled from "styled-components";

const A2 = styled.a`
  font-family: "Montserrat";
  font-weight: lighter;
  color: black;
  transition-property: transform;
  transition-duration: 0.5s;
  text-decoration: underline;
  link {
    color: black;
  }
  &:visited {
    color: black;
  }
  &:hover {
    transform: skewX(-20deg);
  }
`;

export default A2;
