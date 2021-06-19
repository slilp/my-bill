import { Section, ImageBox, Button } from "./style";
import { FcIdea } from "react-icons/fc";
import { Row, Col } from "react-bootstrap";
import { GoCheck, GoX } from "react-icons/go";
import AddImage from "../AddImage";

function CardEdit(props: any) {
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
        </div>

        <div className="d-flex justify-content-end w-50">
          <Button className="text-center mr-0">
            <GoCheck></GoCheck>
          </Button>
          <Button onClick={() => props.setEditAction(false)}>
            <GoX></GoX>
          </Button>
        </div>
      </div>
      <hr></hr>
      <Row>
        <Col xl={6} className="p-1">
          <AddImage></AddImage>
        </Col>
      </Row>
    </Section>
  );
}

export default CardEdit;
