import styled from "styled-components";

const A = styled.a`
  color: #ffffff;
  transition-property: transform, font-size;
  transition-duration: 0.5s;
  text-decoration: none;
  link {
    color: #ffffff;
  }
  &:visited {
    color: #ffffff;
  }
  &:hover {
    font-size: 1.5rem;
    transform: skewX(-20deg);
    color: #ffffff;
  }
`;

export default A;
