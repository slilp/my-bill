import styled from "styled-components";

export const Section = styled.div`
  background: rgba(203, 228, 251, 0.8);
  /* height: 15rem; */
  border-radius: 15px;
  padding: 1.5rem;
  margin: 1rem;
`;

export const Image = styled.img`
  height: 4rem;
`;

interface ImageBoxProps {
  image?: string;
}

export const ImageBox = styled.div<ImageBoxProps>`
  height: 9rem;
  flex: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props: any) =>
    props.image
      ? `url(${props.image})`
      : `url("https://pics.freeicons.io/uploads/icons/png/13649455491558095980-512.png")`};

  cursor: pointer;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: transparent;
  font-size: 1.5rem;
  &:hover {
    color: gray;
  }
`;
