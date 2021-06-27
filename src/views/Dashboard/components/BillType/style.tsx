import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

export const Section = styled(Row)`
  text-align: center;
  border-radius: 30px;
  border: 0.5px solid #b3ecd4;
`;

interface SelectedItemProps {
  isActive: boolean;
}

export const Item = styled(Col)<SelectedItemProps>`
  border-radius: 30px;
  background-color: ${(props) => (props.isActive ? "#b3ecd4" : null)};
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #d6ebe2;
  }
`;
