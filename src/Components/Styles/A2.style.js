import styled from "styled-components";

const A2 = styled.a`
  font-family: "Cinzel";
  font-weight: lighter;
  font-size: 4rem;
  margin: 0 0 0 5rem;
  color: #ffffff;
  transition-property: transform;
  transition-duration: 0.5s;
  text-decoration: underline;
  link {
    color: #ffffff;
  }
  &:visited {
    color: #ffffff;
  }
  &:hover {
    transform: skewX(-20deg);
    color: #ffffff;
  }
`;

export default A2;
