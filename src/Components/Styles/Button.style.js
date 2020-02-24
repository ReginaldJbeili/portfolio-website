import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 1.5rem;
  transition-property: color, background-color, border-radius;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 12px;
  }
`;

export default Button;
