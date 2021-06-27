import React, { useState } from "react";
import { Section, ImageBox, Button } from "./style";
import { FcIdea } from "react-icons/fc";
import { GoCheck, GoX } from "react-icons/go";
import { Dropdown } from "react-bootstrap";
import AddImage from "../AddImage";

interface BillImages {
  preview?: string;
}

interface CardEditProps {
  initImages: BillImages[];
  setEditAction: (status: boolean) => void;
}

function CardEdit({ initImages = [], setEditAction }: CardEditProps) {
  return (
    <Section>
      <div className="d-flex align-items-center">
        <h3>
          <FcIdea></FcIdea>
        </h3>
        <div className="ml-2 w-100">
          <input
            type="text"
            className="form-control"
            placeholder="ชื่อรายการ"
          ></input>
          <input
            type="number"
            className="form-control"
            placeholder="ยอดเงิน"
          ></input>
          <br></br>
          <Dropdown>
            <Dropdown.Toggle variant="success">เลือกบริษัท</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>ดีฟาย</Dropdown.Item>
              <Dropdown.Item>พีฟ้าไทย</Dropdown.Item>
              <Dropdown.Item>พีฟ้าอังกฤษ</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex justify-content-end w-50">
          <Button className="text-center mr-0">
            <GoCheck></GoCheck>
          </Button>
          <Button onClick={() => setEditAction(false)}>
            <GoX></GoX>
          </Button>
        </div>
      </div>
      <hr></hr>
      <AddImage initImages={initImages}></AddImage>
    </Section>
  );
}

export default CardEdit;
