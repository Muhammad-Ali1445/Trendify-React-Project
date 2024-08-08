import React from "react";
import Row from "../common/Row";

const menus = [
  "Jewelry & Accessories",
  "Clothing & Shoes",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainment",
  "Art & Collectibles",
  "Craft Supplies & Tools",
];

const BottomHeader = () => {
  return (
    <div className="h-[60px] bg-[#888f950d] w-full">
      <Row className="items-center h-full justify-between px-[10px]">
        {menus.map((item) => (
          <p className="text-[16px] text-slate-800" key={item}>
            {item}
          </p>
        ))}
      </Row>
    </div>
  );
};

export default BottomHeader;
