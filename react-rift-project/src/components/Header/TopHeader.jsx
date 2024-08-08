import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contextAPIs";
import SearchIcon from "../../assets/SearchIcon";
import RotatedSquare from "../../assets/RotatedSquare";
import BucketIcon from "../../assets/BucketIcon";
import UserIcon from "../../assets/UserIcon";
import Row from "../common/Row";
import HeaderButton from "./HeaderButton";

const TopHeader = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="w-full px-[5%] h-full">
      <Row className="flex items-center h-full justify-between ">
        <SearchIcon />
        <Row className="items-center">
          <RotatedSquare />
          <h1 className="text-[28px] text-black mx-[10px]">Trendify</h1>
          <RotatedSquare />
        </Row>
        <Row>
          <HeaderButton title="Account" Icon={UserIcon} />
          <HeaderButton
            title={`Cart (${cartItems.length})`}
            Icon={BucketIcon}
            url="/cart"
          />
        </Row>
      </Row>
    </div>
  );
};

export default TopHeader;
