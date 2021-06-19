import React from "react";
import { Section, Title, Amount, Icon } from "./style";
import { ImCreditCard } from "react-icons/im";

interface CardProps {
  color?: string;
  title?: string;
  amount?: number;
}

function StatCard({ color, title = "No title", amount = 0 }: CardProps) {
  return (
    <Section color={color}>
      <div className="d-flex">
        <div className="flex-fill">
          <Title>{title}</Title>
          <Amount>{amount} บาท</Amount>
        </div>
        <div className="flex-fill d-flex justify-content-end">
          <Icon>
            <ImCreditCard></ImCreditCard>
          </Icon>
        </div>
      </div>
    </Section>
  );
}

export default StatCard;
