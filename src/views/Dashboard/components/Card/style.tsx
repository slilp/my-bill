import styled from "styled-components";

export const Section = styled.div`
  /* background-color: #e7ecf1; */
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
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props: any) =>
    props.image
      ? `url(${props.image})`
      : `url("https://ayjoe.engrave.site/img/default.jpg")`};
  cursor: pointer;
`;

export const EditButton = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: transparent;
`;
