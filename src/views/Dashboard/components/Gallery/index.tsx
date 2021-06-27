import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../Card";
import CardAdd from "../CardAdd";
import BillType from "../BillType";
import { AddButton, SectionAdd } from "./style";
import { GoPlus } from "react-icons/go";

const mocks = [
  {
    title: "ค่าน้ำ",
    images: [
      {
        preview:
          "https://www.cnn.ph/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/5/15/Meralco-Bill_CNNPH.jpg/jcr:content/Meralco-Bill_CNNPH.jpg",
      },
      {
        preview:
          "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/09/08/Pictures/_58bb5f1a-f1d5-11ea-8bce-519453830254.jpg",
      },
      {
        preview:
          "https://radltd.com/files/statement-explaination_RedBoxVersion_jpegsmall-watermark.jpg",
      },
      {
        preview:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qmo5K3BXEcO-E8RURaVDmnnmPcaEZd2g&usqp=CAU",
      },
    ],
    amount: 100,
    company: 1,
  },
  {
    title: "ค่าไฟ",
    images: [
      {
        preview:
          "https://www.cnn.ph/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/5/15/Meralco-Bill_CNNPH.jpg/jcr:content/Meralco-Bill_CNNPH.jpg",
      },
      {
        preview:
          "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/09/08/Pictures/_58bb5f1a-f1d5-11ea-8bce-519453830254.jpg",
      },
      {
        preview:
          "https://radltd.com/files/statement-explaination_RedBoxVersion_jpegsmall-watermark.jpg",
      },
      {
        preview:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qmo5K3BXEcO-E8RURaVDmnnmPcaEZd2g&usqp=CAU",
      },
    ],
    amount: 200,
    company: 1,
  },
  {
    title: "ค่าโทรศัพท์",
    images: [
      {
        preview:
          "https://www.cnn.ph/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/5/15/Meralco-Bill_CNNPH.jpg/jcr:content/Meralco-Bill_CNNPH.jpg",
      },
      {
        preview:
          "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/09/08/Pictures/_58bb5f1a-f1d5-11ea-8bce-519453830254.jpg",
      },
      {
        preview:
          "https://radltd.com/files/statement-explaination_RedBoxVersion_jpegsmall-watermark.jpg",
      },
      {
        preview:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qmo5K3BXEcO-E8RURaVDmnnmPcaEZd2g&usqp=CAU",
      },
    ],
    amount: 300,
    company: 2,
  },
  {
    title: "ค่ารูดบัตรเครดิต",
    images: [
      {
        preview:
          "https://www.cnn.ph/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2020/5/15/Meralco-Bill_CNNPH.jpg/jcr:content/Meralco-Bill_CNNPH.jpg",
      },
      {
        preview:
          "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/09/08/Pictures/_58bb5f1a-f1d5-11ea-8bce-519453830254.jpg",
      },
      {
        preview:
          "https://radltd.com/files/statement-explaination_RedBoxVersion_jpegsmall-watermark.jpg",
      },
      {
        preview:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qmo5K3BXEcO-E8RURaVDmnnmPcaEZd2g&usqp=CAU",
      },
    ],
    amount: 400,
    company: 3,
  },
];

interface GalleryProps {
  selectedDate?: Date;
}

function Gallery({ selectedDate = new Date() }: GalleryProps) {
  const [add, setAdd] = useState<boolean>(false);
  const [company, setCompany] = useState<number>(1);

  useEffect(() => {}, [company]);

  return (
    <div>
      <Row>
        <Col>
          <h5>
            วันที่
            <span className="text-primary pl-2">
              {selectedDate.toLocaleDateString()}
            </span>
          </h5>
        </Col>
        <Col>
          <h5 className="text-right">
            รวม <span className="text-warning">1000</span>
          </h5>
        </Col>
      </Row>
      <hr></hr>
      <BillType selectedCompany={setCompany}></BillType>
      <Row className="justify-content-center">
        {mocks.filter((item) => item.company === company).length !== 0 ? (
          mocks
            .filter((item) => item.company === company)
            .map((data) => (
              <Col md={6} className="p-0">
                <Card
                  title={data.title}
                  amount={data.amount}
                  images={data.images}
                ></Card>
              </Col>
            ))
        ) : (
          <Col md={6} className="text-center">
            <br></br>
            <p>ไม่พบรายการ</p>
            <br></br>
          </Col>
        )}
      </Row>
      <Row className="d-flex justify-content-center p-0">
        <Col md={6} className="p-0">
          {add ? (
            <CardAdd openAddAction={setAdd}></CardAdd>
          ) : (
            <SectionAdd className="d-flex justify-content-center align-items-center">
              <AddButton onClick={() => setAdd(true)}>
                <h1 className="text-center">
                  <GoPlus></GoPlus>
                </h1>
              </AddButton>
            </SectionAdd>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Gallery;
