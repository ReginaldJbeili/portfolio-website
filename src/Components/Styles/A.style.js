import styled from "styled-components";

const A = styled.a`
  transition-property: transform, font-size;
  transition-duration: 0.5s;
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
