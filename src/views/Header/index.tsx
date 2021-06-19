import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Logo, Logout } from "./style";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <Container className="p-3 font-kanit">
      <Row>
        <Col>
          <Logo>
            <b>My Bill</b>
          </Logo>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <Logout>
              <FaUserCircle></FaUserCircle>
              <span className="ml-2">Slil Puangpoom</span>
            </Logout>
          </div>
        </Col>
      </Row>
      <br></br>
    </Container>
  );
}

export default Header;
