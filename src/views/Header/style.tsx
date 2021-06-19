import styled from "styled-components";

export const Logo = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  background: linear-gradient(to right, #30cfd0 0%, #8d37f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

export const Logout = styled.button`
  font-size: 1.15rem;
  padding: 1rem;
  color: white;
  border-radius: 15px;
  background-color: #7002f6;
  border: transparent;

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    padding: 0.5rem;
  }

  &:hover {
    background-color: #8427f5;
  }
`;
