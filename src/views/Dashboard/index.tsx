import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { StatCard, Gallery } from "./components";

function Dashboard() {
  return (
    <Container className="p-3 font-kanit">
      <Row>
        <Col md={6}>
          <StatCard title={"รายจ่ายบิลรวม"} amount={500.0}></StatCard>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <Form.Group>
              <Form.Label>วันที่ทำรายการ</Form.Label>
              <Form.Control size="lg" type="date" placeholder="Large text" />
            </Form.Group>
          </div>
        </Col>
      </Row>
      <br></br>

      <Gallery selectedDate={new Date(2021, 6, 15)}></Gallery>
      <Gallery selectedDate={new Date(2020, 6, 20)}></Gallery>
      <Gallery selectedDate={new Date(2021, 6, 21)}></Gallery>
    </Container>
  );
}

export default Dashboard;
