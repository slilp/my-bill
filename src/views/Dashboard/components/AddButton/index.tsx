import React from "react";
import { GoPlus } from "react-icons/go";
import { Button, Section } from "./style";

function AddButton(props: any) {
  return (
    <Section className="d-flex justify-content-center align-items-center">
      <Button onClick={() => props.openAddAction(true)}>
        <h1 className="text-center">
          <GoPlus></GoPlus>
        </h1>
      </Button>
    </Section>
  );
}

export default AddButton;
