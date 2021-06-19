import styled from "styled-components";
import bgImage from "../../../../style/image/background-light.png";

export const Section = styled.div`
  background-image: url(${bgImage});
  height: 15rem;
  border-radius: 15px;
  padding: 2rem;
  margin: 0.5rem;
  border-left: ${(props) =>
    props.color ? `1.25rem solid ${props.color}` : null};
`;

export const Title = styled.p`
  color: #6e6e79;
  font-size: 1.5rem;
`;

export const Amount = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Icon = styled.div`
  font-size: 2.5rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background-color: #9f9fff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
