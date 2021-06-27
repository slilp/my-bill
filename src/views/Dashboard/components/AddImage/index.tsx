import React, { useState, useRef } from "react";
import { GoPlus, GoX } from "react-icons/go";
import { Button, Section, ImageBox, Image, DeleteImg } from "./style";
import { Row, Col } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";

interface BillImages {
  preview?: string;
  // raw?: string;
}

interface AddImageProps {
  initImages?: BillImages[];
}

function AddImage({ initImages = [] }: AddImageProps) {
  const [images, setImages] = useState<BillImages[]>(initImages);
  const uploadImgRef = useRef<any>(null);

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      setImages([
        ...images,
        {
          preview: URL.createObjectURL(e.target.files[0]),
          // raw: e.target.files[0],
        },
      ]);
    }
  };

  const handleDelete = (index: number) => {
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  };

  return (
    <Row>
      {images.length === 0
        ? null
        : images.map((image, index) => (
            <Col xl={6} className="p-1">
              <Section className="d-flex justify-content-center align-items-center">
                <ImageBox>
                  <Zoom>
                    <Image src={image.preview} />
                  </Zoom>
                  <DeleteImg onClick={() => handleDelete(index)}>
                    <GoX></GoX>
                  </DeleteImg>
                </ImageBox>
                {/* <ImageBox image={image.preview} /> */}
              </Section>
            </Col>
          ))}
      {images.length < 4 && (
        <Col xl={6} className="p-1">
          <Section className="d-flex justify-content-center align-items-center">
            <Button onClick={() => uploadImgRef.current.click()}>
              <h1 className="text-center">
                <GoPlus></GoPlus>
              </h1>
            </Button>
            <input
              type="file"
              ref={uploadImgRef}
              style={{ display: "none" }}
              onChange={handleChange}
            />
          </Section>
        </Col>
      )}
    </Row>
  );
}

export default AddImage;
