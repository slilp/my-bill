import React from "react";
import { GoPlus } from "react-icons/go";
import { Button, Section } from "./style";
function AddImage() {
  return (
    <Section className="d-flex justify-content-center align-items-center">
      <Button>
        <h1 className="text-center">
          <GoPlus></GoPlus>
        </h1>
      </Button>
    </Section>
  );
}

export default AddImage;
