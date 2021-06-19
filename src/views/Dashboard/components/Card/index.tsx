import React, { useState } from "react";
import { Section, ImageBox, EditButton } from "./style";
import { FcIdea } from "react-icons/fc";
import { Row, Col, Card } from "react-bootstrap";
import { GoKebabVertical } from "react-icons/go";
import CardEdit from "../CardEdit";

interface CardProps {
  title?: string;
  amount?: number;
  images?: string[];
}

function BillCard({ title = "No title", amount = 0, images = [] }: CardProps) {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      {!edit ? (
        <Section>
          <div className="d-flex align-items-center text-break">
            <h3>
              <FcIdea></FcIdea>
            </h3>
            <div className="pl-3 w-100">
              <span className="text-primary ">
                <h5 className="m-0">{title}</h5>
              </span>
              <span className="text-danger">
                <h5 className="m-0">- {amount} บาท</h5>
              </span>
            </div>

            <div className="d-flex justify-content-end w-75">
              <EditButton className="text-center" onClick={() => setEdit(true)}>
                <GoKebabVertical></GoKebabVertical>
              </EditButton>
            </div>
          </div>
          <hr></hr>
          <Row>
            {images.map((value: any) => (
              <Col xl={6} className="p-1">
                <ImageBox image={value}></ImageBox>
              </Col>
            ))}
          </Row>
        </Section>
      ) : (
        <CardEdit setEditAction={setEdit}></CardEdit>
      )}
    </>
  );
}

export default BillCard;
