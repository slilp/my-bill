import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: #c4d9f1;
  border: 0px;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;

  &:hover {
    background-color: #d3dfee;
  }
`;

export const Section = styled.div`
  height: 10rem;
`;

interface ImageBoxProps {
  image?: string;
}

export const ImageBox = styled.div<ImageBoxProps>`
  height: 9rem;
  flex: 1;
  border-radius: 15px;
  text-align: center;
  position: relative;
`;

export const Image = styled.img`
  height: 9rem;
  border-radius: 15px;
  cursor: pointer;
`;

export const DeleteImg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: salmon;
  color: white;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ebb2ac;
  }
`;
