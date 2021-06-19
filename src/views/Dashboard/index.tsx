import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Card, StatCard, CardAdd, AddButton } from "./components";
import { Logo, Logout } from "./style";
import { FaUserCircle } from "react-icons/fa";

const mocks = [
  {
    title: "ค่าน้ำ",
    images: [
      "https://www.cnn.ph/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/5/15/Meralco-Bill_CNNPH.jpg/jcr:content/Meralco-Bill_CNNPH.jpg",
    ],
    amount: 100,
  },
  {
    title: "ค่าไฟ",
    images: [
      "https://www.cnn.ph/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/5/15/Meralco-Bill_CNNPH.jpg/jcr:content/Meralco-Bill_CNNPH.jpg",
    ],
    amount: 200,
  },
  {
    title: "ค่าโทรศัพท์",
    images: [
      "https://www.cnn.ph/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/5/15/Meralco-Bill_CNNPH.jpg/jcr:content/Meralco-Bill_CNNPH.jpg",
    ],
    amount: 300,
  },
  {
    title: "ค่ารูดบัตรเครดิต",
    images: [
      "https://www.cnn.ph/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/5/15/Meralco-Bill_CNNPH.jpg/jcr:content/Meralco-Bill_CNNPH.jpg",
    ],
    amount: 400,
  },
];

function Dashboard() {
  const [add, setAdd] = useState<boolean>(false);

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
      <h5>
        รายการบิลประจำวันที่ <span className="text-primary">10/06/2021</span>
      </h5>
      <hr></hr>
      <Row className="justify-content-center">
        {mocks.map((data) => (
          <Col md={6} className="p-0">
            <Card
              title={data.title}
              amount={data.amount}
              images={data.images}
            ></Card>
          </Col>
        ))}
        <Col md={6} className="p-0">
          {add ? (
            <CardAdd openAddAction={setAdd}></CardAdd>
          ) : (
            <AddButton openAddAction={setAdd}></AddButton>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
