import React, { useState, useEffect } from "react";
import { Section, ImageBox, EditButton, Image } from "./style";
import { FcIdea } from "react-icons/fc";
import { Row, Col, Card } from "react-bootstrap";
import { GoKebabVertical } from "react-icons/go";
import CardEdit from "../CardEdit";
import Zoom from "react-medium-image-zoom";

interface CardProps {
  title?: string;
  amount?: number;
  images: BillImages[];
}
interface BillImages {
  preview?: string;
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
                <ImageBox>
                  <Zoom>
                    <Image src={value.preview} />
                  </Zoom>
                </ImageBox>
              </Col>
            ))}
          </Row>
        </Section>
      ) : (
        <CardEdit setEditAction={setEdit} initImages={images}></CardEdit>
      )}
    </>
  );
}

export default BillCard;
