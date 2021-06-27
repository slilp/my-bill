import styled from "styled-components";

export const Section = styled.div`
  /* background-color: #e7ecf1; */
  /* background: rgba(203, 228, 251, 0.8); */
  /* height: 15rem; */
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(180, 176, 176, 0.16),
    0 3px 6px rgba(200, 200, 200, 0.23);
  padding: 1.5rem;
  margin: 1rem;
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

export const EditButton = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: transparent;
`;
