import React, { useState } from "react";
import { Section, Item } from "./style";

interface Company {
  id: number;
  name: string;
  isActive: boolean;
}

const companies = [
  {
    id: 1,
    name: "ทั้งหมด",
    isActive: true,
  },
  {
    id: 2,
    name: "พีฟ้าไทย",
    isActive: false,
  },
  {
    id: 3,
    name: "ไอน่า",
    isActive: false,
  },
  {
    id: 4,
    name: "ดีฟาย",
    isActive: false,
  },
  {
    id: 5,
    name: "SCG",
    isActive: false,
  },
  {
    id: 6,
    name: "ช้าง",
    isActive: false,
  },
];

function BillCompany({ selectedCompany }: any) {
  const [company, setCompany] = useState<Company[]>(companies);

  const changeSelected = (id: number) => {
    const newItem = company.map((value) =>
      value.id === id
        ? {
            ...value,
            isActive: true,
          }
        : {
            ...value,
            isActive: false,
          }
    );
    setCompany(newItem);
    selectedCompany(id);
  };

  return (
    <div>
      <Section>
        {company.map((item) => (
          <Item
            key={item.id}
            isActive={item.isActive}
            onClick={() => changeSelected(item.id)}
          >
            {item.name}
          </Item>
        ))}
      </Section>
    </div>
  );
}

export default BillCompany;
