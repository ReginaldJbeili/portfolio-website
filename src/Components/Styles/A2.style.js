import styled from "styled-components";

const A2 = styled.a`
  font-family: "Cinzel";
  font-weight: lighter;
  font-size: 4rem;
  margin: 0 0 0 5rem;
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
